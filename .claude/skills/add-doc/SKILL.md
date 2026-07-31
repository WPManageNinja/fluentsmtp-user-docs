---
name: add-doc
description: Scaffold a new FluentSMTP documentation article — creates docs/{category}/{slug}.md from the house template and registers it in the .vitepress/config.js sidebar. Use when the user asks to add, create, write, or scaffold a new doc, page, article, or guide for this VitePress site.
---

# Add a New Documentation Article

Create a new doc page and wire it into the sidebar.

## Arguments

`{slug} {category}` — e.g. `configure-sendpulse-with-fluentsmtp delivery-connections`

- `slug` — lowercase, hyphen-separated, no spaces, no `.md`
- `category` — one of `getting-started`, `delivery-connections`, `obtain-smtp-credentials`, `advanced-functionalities`, `alerts`, `miscellaneous`

If the category is missing, pick the best fit using the **Category Selection Guide** in `CLAUDE.md`. If it is still genuinely ambiguous, ask the user rather than guessing.

## Steps

1. **Check for collisions.** Run `ls docs/*/{slug}.md` — slugs must be globally unique because category folders are stripped from URLs. If the slug already exists, stop and tell the user; suggest `/update-doc {slug}` instead.

2. **Create** `docs/{category}/{slug}.md` using the template below, following the Writing Style Guide in `CLAUDE.md` for every sentence.

3. **Register in the sidebar.** Read `.vitepress/config.js` first, then add an entry under the matching section:
   ```js
   { text: '{Human Readable Title}', link: '/{slug}' },
   ```
   - `text` — Title Case, derived from the slug, trimmed for sidebar width (existing entries drop the trailing "with FluentSMTP")
   - `link` — always `/{slug}`, never `/{category}/{slug}`
   - Append to the end of the section unless the user asks for a specific position

4. **Do NOT add a rewrite rule** — the existing `'{category}/:slug': ':slug'` wildcard already covers every file in that folder. A new rewrite is only needed for a brand-new *category* (see `/add-category`).

5. **Create the image folder** `docs/public/images/{category}/{slug}/` so the placeholder paths resolve once screenshots land.

6. **Verify** with `node .claude/skills/validate-docs/scripts/validate.mjs` — it will report the placeholder images as missing, which is expected until screenshots are added.

7. **Report** the file path, the sidebar section it was added to, and remind the user to run `/sync-images {slug}` if the source content has external image URLs.

## Template

```markdown
# {Human Title — Title Case, action-oriented}

Learn how to {action verb phrase} by following the steps with the screenshots below –

## Prerequisites

- FluentSMTP installed and activated ([installation guide](/install-and-activate-fluentsmtp))
- An active {Provider} account

## {Action Verb} {Provider/Topic}

First, go to your **FluentSMTP** dashboard and click the **Settings** tab. Here, you will find the connection configuration options.

![FluentSMTP Dashboard Settings Tab](/images/{category}/{slug}/01-fluentsmtp-dashboard.webp)

Now, click the **Add Another Connection** button to open the connection provider list.

![Add Another Connection Button](/images/{category}/{slug}/02-add-connection.webp)

Then, select **{Provider Name}** from the list of available connection providers.

> **Remember**, you will need your **{Provider}** API key to complete this step. You can get this from your {Provider} account dashboard.

## Get {Credentials} from {Provider}

First, log into your [{Provider} account dashboard]({provider-url}).

Now, navigate to the **{Section}** page and click the **{Button}** button.

![{Provider} {Section} Page](/images/{category}/{slug}/03-provider-section.webp)

Then, copy the **{Credential Name}** and keep it safe for the next step.

## Configure {Provider} in FluentSMTP

First, go back to your FluentSMTP connection settings and paste the **{Credential Name}** into the **{Field Name}** field.

Now, fill in any additional required fields and click the **Save Connection Settings** button.

![{Provider} Connection Settings in FluentSMTP](/images/{category}/{slug}/04-connection-settings.webp)

Finally, you will see the connection confirmation. Your {Provider} is now connected to FluentSMTP and ready to send emails.
```

The **Prerequisites** section is required for every connection/setup guide. Omit it only for conceptual or overview pages.

## Rules

- Every image path is `/images/{category}/{slug}/filename.webp` — WebP only, alt text always present
- Internal links use the clean slug (`/install-and-activate-fluentsmtp`), never a path with the category folder
- One `# H1` per file, matching the page's real title
- Never invent UI labels, field names, or provider URLs. If the real values are unknown, leave the `{placeholder}` in and tell the user exactly which placeholders need filling — a plausible-sounding wrong button name is worse than an obvious blank
