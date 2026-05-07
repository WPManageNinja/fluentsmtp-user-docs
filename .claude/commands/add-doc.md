# Add a New Documentation Article

Add a new doc page to the FluentSMTP VitePress documentation project.

## Usage
```
/project:add-doc {slug} {category}
```

**Example:**
```
/project:add-doc configure-sendpulse-with-fluentsmtp delivery-connections
```

## What This Does

Given `$ARGUMENTS` as `{slug} {category}`:

1. **Parse arguments** — split into `slug` (first word) and `category` (second word).
   - If category is missing, determine the best fit using the **Category Selection Guide** in `CLAUDE.md`. If still unclear, ask the user.
   - Valid categories: `getting-started`, `delivery-connections`, `obtain-smtp-credentials`, `advanced-functionalities`, `alerts`, `miscellaneous`

2. **Create the markdown file** at `docs/{category}/{slug}.md` using the tone-accurate template below.

3. **Add sidebar entry** in `.vitepress/config.js` under the correct section.
   - `text`: human-readable title derived from slug (remove hyphens, Title Case)
   - `link`: `/{slug}`
   - Read `config.js` first to avoid duplicates

4. **Confirm** to the user: file created at path, sidebar updated, remind to run `/project:sync-images {slug}` if the doc has external image URLs.

---

## Template

Write the new doc using this exact structure and tone. Follow the Writing Style Guide in `CLAUDE.md` strictly — the generated content must be indistinguishable from the existing docs in voice and format.

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

---

## Rules
- Slug: lowercase, hyphen-separated, no spaces
- Category: must exactly match one of the 6 existing folder names
- Do NOT add a new rewrite rule — the existing `'{category}/:slug': ':slug'` wildcard already covers it
- All placeholder images use `/images/{category}/{slug}/` path — run `/project:sync-images` to populate them
- Follow the Writing Style Guide in `CLAUDE.md` for every sentence written
