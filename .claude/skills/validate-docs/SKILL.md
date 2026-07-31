---
name: validate-docs
description: Run structural integrity checks on the FluentSMTP VitePress docs — broken internal links, missing or non-WebP images, missing alt text, docs absent from the sidebar, dead sidebar links, duplicate slugs, missing rewrite rules, and orphaned image files. Use before committing doc changes, after adding or renaming a doc, or when the user asks to check, verify, or find broken links in the docs.
---

# Validate Docs — Structural Integrity Check

Catches the failure modes that this site's URL scheme makes easy to hit: a doc that exists but never appears in the sidebar, a sidebar link to a file that was renamed, an image path that points at nothing, a duplicate slug that silently shadows another page.

## Run It

```bash
node .claude/skills/validate-docs/scripts/validate.mjs
```

Optional flags:

```bash
node .claude/skills/validate-docs/scripts/validate.mjs --json     # machine-readable output
node .claude/skills/validate-docs/scripts/validate.mjs --quiet    # errors only, suppress warnings
```

Exits `1` if there are errors, `0` otherwise. Warnings alone do not fail the run.

## What It Checks

**Errors** (must be fixed before committing)

| Check | Why it matters |
|---|---|
| Duplicate slug across categories | Slugs are the public URL — a duplicate makes one page unreachable |
| Doc file with no sidebar entry | The page builds and is reachable by URL but invisible in navigation |
| Sidebar link with no matching file | Dead nav link, 404 for the reader |
| Internal link to an unknown slug | Broken cross-reference |
| Referenced image missing on disk | Broken image in the rendered page |
| Referenced image not `.webp` | Violates the WebP-only rule |
| Image with empty alt text | Accessibility requirement, non-negotiable per `CLAUDE.md` |
| Category folder with no rewrite rule | Page serves at `/{category}/{slug}` instead of `/{slug}` |
| Rewrite rule for a folder that does not exist | Stale config |
| More than one `# H1` in a file | Breaks the page title and the outline |

**Warnings** (worth knowing, not blocking)

- Orphaned image files that no doc, and not `config.js`, references
- Docs with no images at all
- Image folders whose name does not match any doc slug

## Interpreting the Output

Findings are grouped by check, each line as `path:line — detail`. Fix errors top-down; a duplicate slug or a missing rewrite usually explains several downstream findings at once.

The validator reads `.vitepress/config.js` as **text**, not as a module — it regex-matches `link:` values and rewrite keys. If someone restructures the config to build the sidebar programmatically, these checks go quiet rather than failing loudly. Re-read the script before trusting a clean run after a config refactor.

## What It Does Not Check

Prose, tone, and voice. That is `/style-check`. A clean validator run says the site is structurally sound, not that it is well written.
