#!/usr/bin/env node
/**
 * Structural integrity checker for the FluentSMTP VitePress docs.
 *
 * Verifies the invariants that this site's URL scheme depends on: unique slugs,
 * sidebar/filesystem agreement, resolvable internal links, and WebP images with
 * alt text that actually exist on disk.
 *
 * Usage:
 *   node .claude/skills/validate-docs/scripts/validate.mjs [--json] [--quiet]
 *
 * Exits 1 when there are errors, 0 otherwise. Warnings never fail the run.
 */

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs'
import { join, relative, dirname, basename, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url))
const ROOT = join(SCRIPT_DIR, '..', '..', '..', '..')
const DOCS = join(ROOT, 'docs')
const PUBLIC = join(DOCS, 'public')
const CONFIG = join(ROOT, '.vitepress', 'config.js')

const asJson = process.argv.includes('--json')
const quiet = process.argv.includes('--quiet')

const errors = []
const warnings = []
const err = (check, file, line, detail) => errors.push({ check, file, line, detail })
const warn = (check, file, line, detail) => warnings.push({ check, file, line, detail })
const rel = (p) => relative(ROOT, p)

// --- gather the filesystem ---------------------------------------------------

const walk = (dir, out = []) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else out.push(full)
  }
  return out
}

if (!existsSync(DOCS)) {
  console.error(`docs/ not found at ${DOCS} — run this from the repo, not a copy.`)
  process.exit(1)
}

const categories = readdirSync(DOCS, { withFileTypes: true })
  .filter((e) => e.isDirectory() && e.name !== 'public')
  .map((e) => e.name)

// Pages that live directly in docs/ keep their own slug and are reached via nav.
const rootPages = readdirSync(DOCS, { withFileTypes: true })
  .filter((e) => e.isFile() && e.name.endsWith('.md'))
  .map((e) => basename(e.name, '.md'))

/** @type {{path:string, category:string, slug:string, body:string}[]} */
const docs = []
for (const category of categories) {
  const dir = join(DOCS, category)
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.md')) continue
    const path = join(dir, file)
    docs.push({ path, category, slug: basename(file, '.md'), body: readFileSync(path, 'utf8') })
  }
}

const imageFiles = existsSync(PUBLIC)
  ? walk(PUBLIC).filter((p) => /\.(webp|png|jpe?g|gif|svg)$/i.test(p))
  : []

// --- parse the config as text ------------------------------------------------

const configText = existsSync(CONFIG) ? readFileSync(CONFIG, 'utf8') : ''
if (!configText) err('config', rel(CONFIG), 0, 'config.js not found — every sidebar check below is unreliable')

const rewriteKeys = [...configText.matchAll(/['"]([\w-]+)\/:slug['"]\s*:/g)].map((m) => m[1])

// Only look at the sidebar array for "is this doc in the nav" — `nav:` links to
// root pages and external sites and would produce false positives.
const sidebarStart = configText.indexOf('sidebar:')
const sidebarText = sidebarStart === -1 ? '' : configText.slice(sidebarStart)
const sidebarLinks = [...sidebarText.matchAll(/link:\s*['"](\/[^'"]*)['"]/g)].map((m) => m[1])
const navText = sidebarStart === -1 ? configText : configText.slice(0, sidebarStart)
const navLinks = [...navText.matchAll(/link:\s*['"](\/[^'"]*)['"]/g)].map((m) => m[1])

// --- slug map ----------------------------------------------------------------

const slugToDocs = new Map()
for (const d of docs) {
  if (!slugToDocs.has(d.slug)) slugToDocs.set(d.slug, [])
  slugToDocs.get(d.slug).push(d)
}

for (const [slug, hits] of slugToDocs) {
  if (hits.length > 1) {
    err('duplicate-slug', rel(hits[0].path), 0,
      `slug "${slug}" is defined in ${hits.length} categories (${hits.map((h) => h.category).join(', ')}) — only one can win at /${slug}`)
  }
}

const knownSlugs = new Set([...slugToDocs.keys(), ...rootPages])

// --- categories vs rewrites --------------------------------------------------

for (const category of categories) {
  if (!rewriteKeys.includes(category)) {
    err('missing-rewrite', rel(CONFIG), 0,
      `docs/${category}/ has no '${category}/:slug' rewrite — its pages will serve at /${category}/{slug} instead of /{slug}`)
  }
}
for (const key of rewriteKeys) {
  if (!categories.includes(key)) {
    err('stale-rewrite', rel(CONFIG), 0, `rewrite '${key}/:slug' has no matching docs/${key}/ folder`)
  }
}

// --- sidebar vs filesystem ---------------------------------------------------

const sidebarSlugs = new Set(sidebarLinks.map((l) => l.replace(/^\//, '')))

for (const d of docs) {
  if (!sidebarSlugs.has(d.slug)) {
    err('not-in-sidebar', rel(d.path), 0,
      `no sidebar entry links to /${d.slug} — the page builds but is invisible in navigation`)
  }
}

for (const link of [...sidebarLinks, ...navLinks]) {
  if (link === '/' || link.startsWith('http')) continue
  const slug = link.replace(/^\//, '').replace(/\/$/, '')
  if (!knownSlugs.has(slug)) {
    err('dead-nav-link', rel(CONFIG), 0, `sidebar/nav links to /${slug} but no such doc exists`)
  }
}

// --- per-document checks -----------------------------------------------------

const referencedImages = new Set()

const lineOf = (body, index) => body.slice(0, index).split('\n').length

for (const d of docs.concat(
  rootPages.map((slug) => ({
    path: join(DOCS, `${slug}.md`),
    category: null,
    slug,
    body: readFileSync(join(DOCS, `${slug}.md`), 'utf8'),
  }))
)) {
  const { body, path } = d

  // Frontmatter and raw HTML can reference assets outside markdown image syntax
  // (index.md's hero banner, for one). Count those as referenced so the orphan
  // sweep below does not flag them, but leave them out of the alt/WebP checks.
  for (const m of body.matchAll(/['"(\s](\/images\/[^'")\s]+)/g)) {
    referencedImages.add(join(PUBLIC, m[1].replace(/^\//, '')))
  }

  // one H1 per file (index.md is frontmatter-only home layout, so exempt it)
  if (d.slug !== 'index') {
    const h1s = [...body.matchAll(/^#\s+\S/gm)]
    if (h1s.length === 0) {
      err('missing-h1', rel(path), 0, 'no `# H1` title')
    } else if (h1s.length > 1) {
      err('multiple-h1', rel(path), lineOf(body, h1s[1].index), `${h1s.length} H1 headings — there must be exactly one`)
    }
  }

  // images
  const images = [...body.matchAll(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)]
  for (const m of images) {
    const [, alt, src] = m
    const line = lineOf(body, m.index)

    if (!alt.trim()) {
      err('empty-alt', rel(path), line, `image has no alt text: ${src}`)
    }

    if (/^https?:/i.test(src)) {
      err('remote-image', rel(path), line, `external image URL — run /sync-images to localize it: ${src}`)
      continue
    }
    if (!src.startsWith('/')) {
      err('relative-image', rel(path), line, `image path must be absolute from public/: ${src}`)
      continue
    }
    if (extname(src).toLowerCase() !== '.webp') {
      err('not-webp', rel(path), line, `images must be WebP: ${src}`)
    }

    const onDisk = join(PUBLIC, decodeURIComponent(src.replace(/^\//, '')))
    if (!existsSync(onDisk)) {
      err('missing-image', rel(path), line, `no file at docs/public${src}`)
    } else {
      referencedImages.add(onDisk)
    }

    // images belonging to a category doc should live in that doc's own folder
    if (d.category) {
      const expected = `/images/${d.category}/${d.slug}/`
      if (src.startsWith('/images/') && !src.startsWith(expected) && !src.startsWith('/images/brand/')) {
        warn('image-path-convention', rel(path), line, `expected ${expected}… but got ${src}`)
      }
    }
  }

  if (d.category && images.length === 0) {
    warn('no-images', rel(path), 0, 'doc has no screenshots')
  }

  // internal links — [text](/slug) but not images
  const links = [...body.matchAll(/(?<!!)\[([^\]]*)\]\((\/[^)\s]*)(?:\s+"[^"]*")?\)/g)]
  for (const m of links) {
    const [, , href] = m
    const line = lineOf(body, m.index)
    if (href.startsWith('/images/')) continue
    const slug = href.split('#')[0].replace(/^\//, '').replace(/\/$/, '')
    if (!slug) continue // link to "/"
    if (!knownSlugs.has(slug)) {
      err('broken-internal-link', rel(path), line, `links to /${slug} but no doc has that slug`)
    }
  }
}

// --- orphaned assets ---------------------------------------------------------

// config.js references brand assets (logo, favicon, hero) by path.
const configImageRefs = [...configText.matchAll(/['"](\/images\/[^'"]+)['"]/g)].map((m) =>
  join(PUBLIC, m[1].replace(/^\//, ''))
)
configImageRefs.forEach((p) => referencedImages.add(p))

for (const img of imageFiles) {
  if (!referencedImages.has(img)) {
    warn('orphan-image', rel(img), 0, 'not referenced by any doc or by config.js')
  }
}

const docSlugSet = new Set(docs.map((d) => `${d.category}/${d.slug}`))
if (existsSync(join(PUBLIC, 'images'))) {
  for (const category of readdirSync(join(PUBLIC, 'images'))) {
    const catDir = join(PUBLIC, 'images', category)
    if (category === 'brand' || !statSync(catDir).isDirectory()) continue
    for (const folder of readdirSync(catDir)) {
      if (!statSync(join(catDir, folder)).isDirectory()) continue
      if (!docSlugSet.has(`${category}/${folder}`)) {
        warn('orphan-image-folder', rel(join(catDir, folder)), 0, 'no doc with this category/slug')
      }
    }
  }
}

// --- report ------------------------------------------------------------------

if (asJson) {
  console.log(JSON.stringify({ errors, warnings, counts: { docs: docs.length, images: imageFiles.length } }, null, 2))
  process.exit(errors.length ? 1 : 0)
}

const render = (list, label) => {
  const byCheck = new Map()
  for (const f of list) {
    if (!byCheck.has(f.check)) byCheck.set(f.check, [])
    byCheck.get(f.check).push(f)
  }
  for (const [check, items] of byCheck) {
    console.log(`\n  ${label} ${check} (${items.length})`)
    for (const i of items) {
      console.log(`    ${i.file}${i.line ? `:${i.line}` : ''} — ${i.detail}`)
    }
  }
}

console.log(`\nFluentSMTP docs — ${docs.length} docs in ${categories.length} categories, ${imageFiles.length} images`)

if (errors.length) render(errors, 'ERROR')
if (warnings.length && !quiet) render(warnings, 'warn ')

console.log('')
if (errors.length) {
  console.log(`${errors.length} error(s), ${warnings.length} warning(s)`)
  process.exit(1)
}
console.log(`No errors. ${warnings.length} warning(s)${quiet || !warnings.length ? '' : ' above'}.`)
