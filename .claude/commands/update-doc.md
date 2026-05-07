# Update an Existing Documentation Article

Update content in an existing doc while strictly preserving its tone, voice, structure, and formatting.

## Usage
```
/project:update-doc {slug}
```

**Example:**
```
/project:update-doc configure-mailgun-with-fluentsmtp
```

Then describe what you want changed.

## What This Does

Given `$ARGUMENTS` as `{slug}`:

1. **Find the file** — locate `docs/{category}/{slug}.md` across all category folders.

2. **Read the full doc** before making any changes. Identify:
   - The intro pattern used ("Learn how to..." or "To [action]...")
   - The sequential connectors in use (First/Now/Then/Finally)
   - How UI elements are bolded in that specific doc
   - Any existing note/blockquote style
   - The header naming convention used

3. **Make only the requested changes** — do not rewrite, restructure, or "improve" sentences that are not part of the update request.

4. **Write new content that matches the existing voice exactly:**
   - New steps must use the same connectors already in the doc (First/Now/Then/Finally)
   - New UI element references must follow the same bold pattern: `**Button Name** button`
   - New section headers must match the capitalization and verb style of existing headers
   - New notes must use the same blockquote format: `> **Remember**, ...`

5. **If adding new images:**
   - Follow the image path convention: `/images/{category}/{slug}/filename.webp`
   - Ensure alt text is descriptive and matches the style of existing image alt texts in the doc
   - Run `/project:sync-images {slug}` if there are external URLs to download

6. **Report a clear diff summary** — tell the user exactly what was changed, added, or removed.

---

## Strict Rules

- **Never** change the writing style of content that isn't being updated
- **Never** introduce formatting patterns not already present in the doc (e.g. don't add numbered lists if the doc uses paragraph steps)
- **Never** change the intro paragraph unless explicitly asked
- **Never** reorder sections unless explicitly asked
- Any new sentence must sound like it was written by the same author as the surrounding content
- If the requested update conflicts with the Writing Style Guide in `CLAUDE.md`, follow the style guide and note the conflict to the user

---

## When Updating a Doc That Has Outdated Screenshots

If the user mentions screenshots are outdated or need replacing:
1. Identify which images need replacing by their current path
2. Download new images and convert to WebP using the same process as `/project:sync-images`
3. Replace the image path in the markdown — keep the same filename pattern if possible
4. Update the alt text only if the new screenshot shows meaningfully different UI
