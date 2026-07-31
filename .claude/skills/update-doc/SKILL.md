---
name: update-doc
description: Edit an existing FluentSMTP doc while preserving its exact voice, structure, and formatting. Use when the user asks to update, revise, fix, correct, expand, or refresh an existing documentation page or its screenshots.
---

# Update an Existing Documentation Article

The goal is a surgical edit. A reader should not be able to tell which paragraph is new.

## Arguments

`{slug}` — e.g. `configure-mailgun-with-fluentsmtp`. The user then describes what they want changed.

## Steps

1. **Locate the file:** `ls docs/*/{slug}.md`.

2. **Read the whole file before editing.** Note, specifically:
   - Which intro pattern it uses (`Learn how to …` / `To …, follow the steps below –`)
   - Which sequential connectors appear, and in what order (**First,** → **Now,** → **Then,** → **Finally,**)
   - How UI elements are bolded *in this file* — some docs write `**Settings** tab`, others just `**Settings**`
   - The blockquote style in use (`> **Remember**,` vs `> **Note:**`)
   - Whether steps are paragraphs or numbered lists
   - The alt-text style (Title Case? matches the button label?)

3. **Change only what was asked.** Do not rewrite, reorder, retitle, or "improve" untouched sentences. Do not fix pre-existing typos in the surrounding text unless the user asked for a cleanup pass — flag them separately instead.

4. **Match the voice for anything new:**
   - Reuse the connectors already present in the file
   - Follow the same bolding pattern for UI elements
   - New headers match the existing capitalization and verb style (Title Case, `&` not "and")
   - New notes use the file's existing blockquote form

5. **If images change:**
   - Store at `/images/{category}/{slug}/filename.webp`, WebP only
   - Give descriptive alt text with no trailing period
   - Use `/sync-images {slug}` for external URLs
   - Update alt text only if the new screenshot shows meaningfully different UI

6. **Validate:** `node .claude/skills/validate-docs/scripts/validate.mjs`

7. **Report a precise diff summary** — what changed, what was added, what was removed. If a doc's title changed meaningfully, note that the sidebar `text` in `.vitepress/config.js` may need updating too.

## Renaming

If the update changes the *slug*, do not do it by hand — use `/rename-doc {old-slug} {new-slug}`, which also fixes the sidebar, the image folder, and every inbound internal link.

## Strict Rules

- **Never** change the writing style of content that is not part of the update
- **Never** introduce a formatting pattern the doc does not already use
- **Never** touch the intro paragraph or section order unless explicitly asked
- If the requested change conflicts with the Writing Style Guide in `CLAUDE.md`, follow the guide and tell the user about the conflict
- If the update requires a fact you cannot verify (a renamed provider UI, a new field name), say so instead of inventing it
