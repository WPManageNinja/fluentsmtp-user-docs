# FluentSMTP Documentation — Claude Guide

## Project

VitePress 1.x static documentation site for the **FluentSMTP** WordPress plugin by WPManageNinja.
Live site: `https://fluentsmtp.com/docs/{slug}`

This is a **content repository**. Almost every task is writing or editing markdown under `docs/` and keeping `.vitepress/config.js` in sync. There is no application code beyond a small theme override.

## Setup & Commands

```bash
npm install       # required — node_modules is not committed and starts empty
npm run dev       # local dev server at http://localhost:5173
npm run build     # build to .vitepress/dist/
npm run preview   # serve the built output

node .claude/skills/validate-docs/scripts/validate.mjs   # structural check — run before committing
```

`cwebp` is needed for image work: `brew install webp`.

## Structure

```
.vitepress/
  config.js            # sidebar, nav, rewrites, branding — the single source of navigation truth
  theme/
    index.js           # extends the default theme, registers <Feedback>
    Layout.vue         # injects <Feedback> into the #doc-footer-before slot
    custom.css         # brand overrides
    components/
      Feedback.vue     # thumbs up/down + comment widget, POSTs to a Google Apps Script
docs/                  # srcDir — all markdown content lives here
  index.md             # homepage (VitePress `layout: home`)
  changelog.md         # reached from nav, not the sidebar
  support.md           # reached from nav, not the sidebar
  getting-started/
  delivery-connections/
  obtain-smtp-credentials/
  advanced-functionalities/
  alerts/
  miscellaneous/
  public/
    images/
      brand/           # logos, favicon, hero banner (WebP)
      {category}/
        {doc-slug}/    # images for that specific doc
.claude/skills/        # project skills (see table below)
```

## URL Structure — The Core Invariant

Category folders are **stripped from URLs** by `rewrites` in `config.js`:

```js
'delivery-connections/:slug': ':slug',
```

So `docs/delivery-connections/configure-mailgun-with-fluentsmtp.md` serves at `/configure-mailgun-with-fluentsmtp`.
`cleanUrls: true` removes `.html`, so no path ever ends in `.html`.

Three consequences that drive most of the rules in this file:

1. **Slugs are globally unique.** Two files with the same stem in different categories collide at the same URL. Check `ls docs/*/{slug}.md` before creating anything.
2. **Internal links use the bare slug** — `[text](/install-and-activate-fluentsmtp)`, never `/getting-started/install-and-activate-fluentsmtp`.
3. **Moving a file between categories does not change its URL,** but renaming it does — and breaks every inbound link. Use `/rename-doc` rather than doing it by hand.

Each category needs its own rewrite line; the wildcard is per-folder, not global. `index.md`, `changelog.md`, and `support.md` sit directly in `docs/` and need no rewrite.

## The Sidebar Is Manual

`.vitepress/config.js` mirrors the folder structure by hand. Nothing is generated. A doc with no sidebar entry still builds and is still reachable by URL — it is just invisible in navigation, which is why `/validate-docs` checks for it explicitly.

Sidebar `text` values are shortened for width: the file `setup-brevo-mailer-with-fluentsmtp.md` is listed as "Setup Brevo Mailer", not the full title.

## Project Skills

Use these rather than doing the steps by hand — they encode the config/filesystem/link invariants that are easy to half-apply.

| Skill | Use for |
|---|---|
| `/add-doc {slug} {category}` | New article — file, template, sidebar entry, image folder |
| `/add-category {slug} {Display Name}` | New section — folder, rewrite rule, sidebar block |
| `/update-doc {slug}` | Editing an existing doc without disturbing its voice |
| `/rename-doc {old} {new}` | Re-slugging or moving — file, images, sidebar, inbound links |
| `/sync-images [{slug}]` | Download remote images, convert to WebP, remap links |
| `/validate-docs` | Structural check: links, images, sidebar, slugs, rewrites |
| `/style-check [{slug}]` | Prose audit against the Writing Style Guide below |

## Adding a New Doc

1. Create `docs/{category}/{slug}.md`
2. Add a sidebar entry in `.vitepress/config.js` under the matching section
3. No new rewrite needed — the existing category wildcard covers it
4. Create `docs/public/images/{category}/{slug}/` and add images per the conventions below
5. Run the validator

Use `/add-doc {slug} {category}` to do all of this.

## Adding a New Category

1. Create folder `docs/{new-category}/`
2. Add a rewrite in `config.js`: `'{new-category}/:slug': ':slug'`
3. Add a sidebar section block in `config.js`
4. Add a row to the Category Selection Guide below

Use `/add-category {slug} {Display Name}`.

## Image Conventions

- **Format:** WebP only. Convert PNG/JPG with `cwebp -lossless` (PNG) or `cwebp -q 90` (JPEG).
- **Location:** `docs/public/images/{category}/{doc-slug}/filename.webp`
- **Reference in markdown:** `![Descriptive Alt Text](/images/{category}/{doc-slug}/filename.webp)`
  Note the path drops `public/` — that folder is the web root.
- **Never** link external image URLs — always download and store locally.
- Alt text is required on every image; derive from the filename if not provided.
- Many existing filenames carry their WordPress-export shape (`1.-Fluent-SMTP-dshboard-scaled.webp`, typo and all). Leave them alone — renaming churns the diff for no reader benefit.

Use `/sync-images {slug}` to download, convert, and remap automatically.

## Custom Theme

The theme extends VitePress's default with exactly one addition: `Layout.vue` renders `<Feedback />` in the `#doc-footer-before` slot on every doc page.

`components/Feedback.vue` posts votes and comments to a Google Apps Script endpoint using `mode: 'no-cors'`, tagged with `PRODUCT_NAME = 'FluentSMTP-user-docs'`. The same component is used across the sibling WPManageNinja doc repos, distinguished only by that constant — **if you copy this component elsewhere, change `PRODUCT_NAME`** or the feedback lands under the wrong product.

Both the endpoint URL and the product name are hardcoded. Treat them as configuration, not as something to refactor without asking.

## Markdown Standards

- `# H1` — page title (exactly one per file)
- `## H2` — major sections
- **Bold** for UI element names and button labels
- Numbered lists for step-by-step instructions
- Internal links use the clean URL slug: `[text](/slug)`
- No HTML tags in markdown unless absolutely necessary

---

## Writing Style Guide

Every doc — new or updated — must match this voice. This is derived directly from the existing docs.

### Voice & Tone

- Instructional, action-first, friendly-professional. Never robotic or overly formal.
- Use imperative for actions: "Click", "Go to", "Paste", "Navigate to" — never "Please click" or "You should click"
- Use "you" naturally in conditionals and context sentences; use imperative (no subject) for direct action steps
- Never write "the user" — always "you"
- Beginner-friendly: assume the reader is non-technical; explain what will happen after each action

### Intro Paragraph Pattern

Every doc opens with exactly one intro paragraph using one of these patterns:

- `"Learn how to [action] by following the steps with the screenshots below –"`
- `"To [action], follow the steps below –"`
- `"[One sentence of context]. [Now/Once you have X], you can [action] by following the steps below –"`

The en dash `–` at the end of the intro is intentional — it signals the steps begin.

### Step Writing Pattern

- Open steps with sequential connectors: **First,** → **Now,** → **Then,** → **Finally,**
- Bold every UI element on first mention in each step: `**Button Name** button`, `**Tab Name** tab`, `**Field Name** field`, `**Menu Name**`
- After an action, explain the consequence: "This will take you to...", "You will see...", "Here, you will find..."
- Chain compound actions in one sentence: "click **X**, select **Y**, and press the **Z** button"
- Place a screenshot image directly after the step it illustrates

### Section Headers

- Title Case always — capitalize every major word
- Use `&` not "and" in headers (e.g. `## Install & Activate FluentSMTP`)
- Verb-first or noun-first, never questions: "Get Private API Key from Mailgun", "Configure Mailgun", "Connect FluentSMTP with Gmail"

### Notes & Warnings

Use blockquote format — educational, never alarmist:

```markdown
> **Remember**, {important note text}.

> **Note:** {additional context}.
```

Never use "WARNING" or "CAUTION" — the tone stays helpful throughout.

### Prerequisites Section

Every connection/setup guide must include this section immediately after the intro:

```markdown
## Prerequisites

- FluentSMTP installed and activated ([installation guide](/install-and-activate-fluentsmtp))
- An active {Provider} account
```

### Alt Text for Images

- Required on every image — no empty `![]()` links
- Describe the UI shown: "API Security Tab in Mailgun Dashboard", "CREATE CREDENTIALS button in Google Cloud Console"
- No period at the end
- Title-case preferred; match the label/button name visible in the screenshot

---

## Category Selection Guide

When adding a new doc, place it in the category that best fits its topic:

| Category | Use for |
|---|---|
| `getting-started` | Installation, dashboard overview, global settings, onboarding concepts |
| `delivery-connections` | Connecting a specific email provider (Gmail, Mailgun, SES, SendGrid, etc.) |
| `obtain-smtp-credentials` | Getting credentials or access keys from hosting/server control panels |
| `advanced-functionalities` | Power-user features: multiple connections, routing rules, automation |
| `alerts` | Notification integrations: Slack, Discord, Telegram, email failure summaries |
| `miscellaneous` | Standalone features not fitting other categories (email logs, exports, etc.) |

If unsure, ask: "Is this about *connecting a provider*?" → `delivery-connections`. "Is this a *feature of FluentSMTP itself*?" → `getting-started` or `miscellaneous`.

---

## Gotchas

- **`node_modules` starts empty.** Run `npm install` before `npm run dev`.
- **Never edit `.vitepress/dist/` or `.vitepress/cache/`** — both are gitignored build output.
- **Content lives in `docs/`, not the repo root.** `srcDir: 'docs'` means a markdown file at the repo root is invisible to the build.
- **`docs/public/` is the web root.** An image at `docs/public/images/x.webp` is referenced as `/images/x.webp`.
- **No `base` is set in `config.js`** even though the live site is served under `/docs/`. If assets 404 after a deploy to a subpath, that is the first thing to check — but confirm how the host serves the build before changing it, since a wrong `base` breaks every asset.
- **There is no CI.** No `.github/` workflows exist; validation and builds are local and manual.
- **Don't invent UI details.** Provider dashboards change constantly. If you cannot verify a button name, field label, or URL, leave a marked placeholder and say which ones need filling — a confident wrong label is worse than an obvious blank.

## Key Config File

`.vitepress/config.js` — update the sidebar and rewrites here when adding docs or categories. Read it before editing to avoid duplicate entries.
