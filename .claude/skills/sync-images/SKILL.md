---
name: sync-images
description: Download external image URLs in FluentSMTP docs, convert them to WebP, store them under docs/public/images/{category}/{slug}/, and rewrite the markdown links to local paths. Use when a doc contains remote image URLs, when screenshots need localizing, or when converting PNG/JPG assets to WebP.
---

# Sync Images — Download, Convert to WebP, Remap Links

This site never links to a remote image. Every screenshot is downloaded, converted to WebP, and served from `docs/public/`.

## Arguments

- `{slug}` — process one doc
- *(none)* — process every doc under `docs/`, excluding `index.md`

## Prerequisites

`cwebp` must be installed:

```bash
which cwebp || brew install webp
```

## Steps

**Find the targets.** With a slug, resolve `docs/*/{slug}.md`. Without one, walk every `.md` under `docs/` except `index.md`.

For each `![alt](https://…)` in the file:

1. **Derive paths** — `category` is the parent folder name, `slug` is the file stem, destination is `docs/public/images/{category}/{slug}/`. Create it with `mkdir -p`.

2. **Download** with a browser User-Agent:
   ```bash
   curl -fL -A "Mozilla/5.0" -o "{dest}/{filename}" "{url}"
   ```
   Percent-encode non-ASCII characters in the URL path first. `-f` makes curl fail loudly on a 404 instead of writing an HTML error page as if it were an image.

3. **Convert to WebP:**
   - PNG → `cwebp -lossless {src} -o {dest}.webp`
   - JPG / JPEG → `cwebp -q 90 {src} -o {dest}.webp`
   - Already `.webp` → keep as-is
   - Delete the original only after the conversion succeeds

4. **Rewrite the markdown link** to `![alt](/images/{category}/{slug}/{filename}.webp)`.

5. **Fill in empty alt text** by deriving it from the filename: strip a leading `N.-` / `N.` number, replace `-` and `_` with spaces, Title Case the result, no trailing period. Prefer the visible button or tab name if you can tell what the screenshot shows.

6. **Verify** with `node .claude/skills/validate-docs/scripts/validate.mjs`, which confirms every referenced image exists on disk, is WebP, and has alt text.

## Rules

- Never leave a broken image link. If a download fails, keep the original URL in place and report the failure — a link to a live remote image beats a 404 local path
- Paths already starting with `/` are local; skip them entirely
- Keep the existing filename where possible; several docs carry WordPress-export names (`1.-Fluent-SMTP-dshboard-scaled.webp`, typo included) and renaming them churns the diff for no benefit
- Report a summary: downloaded, converted, skipped, failed
