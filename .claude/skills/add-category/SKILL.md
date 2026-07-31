---
name: add-category
description: Add a new top-level documentation category to the FluentSMTP VitePress site — creates the docs folder, the URL rewrite rule, and the sidebar section. Use when the user asks to add a new category, section, or group to the docs sidebar.
---

# Add a New Documentation Category

Adding a category touches three things that must stay in sync: the folder, the rewrite rule, and the sidebar section. Missing the rewrite is the classic failure — the docs build fine but serve at `/{category}/{slug}` instead of `/{slug}`.

## Arguments

`{slug} {Display Name}` — e.g. `troubleshooting Troubleshooting`

## Steps

1. **Read `.vitepress/config.js` first** to confirm the category does not already exist in `rewrites` or `sidebar`.

2. **Create the folder:**
   ```bash
   mkdir -p docs/{slug} docs/public/images/{slug}
   ```

3. **Add the rewrite rule** inside the `rewrites` object:
   ```js
   '{slug}/:slug': ':slug',
   ```
   This is what strips the category folder from the public URL. It is required — the wildcard is per-category, not global.

4. **Add the sidebar section** to the `sidebar` array:
   ```js
   {
     text: '{Display Name}',
     collapsed: false,
     items: []
   },
   ```
   Append at the end unless the user specifies a position. Keep `collapsed: false` to match the other sections.

5. **Document the category** — add a row to the **Category Selection Guide** table in `CLAUDE.md` describing what belongs in it. Without this, future doc placement decisions have nothing to go on.

6. **Verify** with `node .claude/skills/validate-docs/scripts/validate.mjs` — it cross-checks folders against rewrites and will flag a mismatch.

7. **Report** what was created and remind the user to run `/add-doc {slug} {category}` to populate the empty section. A sidebar section with an empty `items: []` array renders as a bare heading, so it should not be committed empty for long.

## Rules

- Slug: lowercase, hyphen-separated
- The `text` in the sidebar is the human-facing label; the folder slug never appears in a URL
- Never remove or reorder existing rewrite rules while adding a new one
