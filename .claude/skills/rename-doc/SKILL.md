---
name: rename-doc
description: Rename a FluentSMTP doc slug or move it to a different category, updating the file, the sidebar entry, the image folder, the image references, and every inbound internal link. Use when the user asks to rename, move, or re-slug a documentation page.
---

# Rename or Move a Doc

Because category folders are stripped from URLs, a slug is the public URL. Renaming one by hand reliably breaks something — usually an inbound internal link or the image folder. Do all five steps or none.

## Arguments

`{old-slug} {new-slug}` — optionally `{old-slug} {new-slug} {new-category}` to move it at the same time.

## Steps

1. **Locate and confirm.** `ls docs/*/{old-slug}.md`. Verify `{new-slug}` is not already taken anywhere: `ls docs/*/{new-slug}.md`.

2. **Move the file:**
   ```bash
   git mv docs/{old-category}/{old-slug}.md docs/{new-category}/{new-slug}.md
   ```

3. **Move the image folder:**
   ```bash
   git mv docs/public/images/{old-category}/{old-slug} docs/public/images/{new-category}/{new-slug}
   ```
   Create the parent category folder first if the doc is moving categories.

4. **Rewrite the image paths inside the doc** — every `/images/{old-category}/{old-slug}/…` becomes `/images/{new-category}/{new-slug}/…`.

5. **Update inbound links across the whole site:**
   ```bash
   grep -rn "](/{old-slug})" docs/ .vitepress/
   ```
   Fix every hit, including `docs/index.md` (the hero and feature cards link to slugs) and `docs/support.md`.

6. **Update the sidebar** in `.vitepress/config.js` — change the `link` to `/{new-slug}`, and move the entry to the new category's section if the category changed. Update `text` too if the title changed.

7. **Validate:** `node .claude/skills/validate-docs/scripts/validate.mjs` — this is the check that catches a missed inbound link.

## Report

Tell the user the old and new public URLs explicitly, and flag that **the old URL will 404**. The live site is `https://fluentsmtp.com/docs/{slug}`; if the old URL was published, a redirect needs to be configured at the hosting layer — VitePress `rewrites` will not do it. That is outside this repo, so it needs to be handed off, not silently skipped.
