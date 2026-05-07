# FluentSMTP Documentation — Claude Guide

## Project
VitePress 1.x static documentation site for the **FluentSMTP** WordPress plugin by WPManageNinja.
Live site: `https://fluentsmtp.com/docs/{slug}`

## Commands
```bash
npm run dev       # local dev server at http://localhost:5173
npm run build     # build to .vitepress/dist/
npm run preview   # preview built output
```

## Structure
```
.vitepress/config.js   # sidebar, nav, rewrites, branding
docs/                  # srcDir — all markdown content lives here
  getting-started/
  delivery-connections/
  obtain-smtp-credentials/
  advanced-functionalities/
  alerts/
  miscellaneous/
  public/
    images/
      brand/           # logos, favicon (WebP)
      {category}/
        {doc-slug}/    # images for that specific doc
    index.md           # homepage (VitePress home layout)
```

## URL Structure
Category folders are **hidden from URLs** via `rewrites` in `config.js`.
File `docs/delivery-connections/configure-mailgun-with-fluentsmtp.md` → URL `/configure-mailgun-with-fluentsmtp`

`cleanUrls: true` removes `.html` — no trailing `.html` anywhere.

## Adding a New Doc
1. Create `docs/{category}/{slug}.md`
2. Add sidebar entry in `.vitepress/config.js` under the matching section
3. No new rewrite needed — the existing category wildcard covers it
4. Add images following the image conventions below

Use `/project:add-doc {slug} {category}` to scaffold this automatically.

## Adding a New Category
1. Create folder `docs/{new-category}/`
2. Add rewrite in `config.js`: `'{new-category}/:slug': ':slug'`
3. Add sidebar section block in `config.js`

Use `/project:add-category {slug} {Display Name}` to scaffold this automatically.

## Image Conventions
- **Format:** WebP only. Convert PNG/JPG with `cwebp -lossless` (PNG) or `cwebp -q 90` (JPEG).
- **Location:** `docs/public/images/{category}/{doc-slug}/filename.webp`
- **Reference in markdown:** `![Descriptive Alt Text](/images/{category}/{doc-slug}/filename.webp)`
- **Never** link external image URLs — always download and store locally.
- Alt text is required on every image; derive from filename if not provided.

Use `/project:sync-images {slug}` to download, convert, and remap images for a doc automatically.

## Markdown Standards
- `# H1` — page title (one per file)
- `## H2` — major sections
- **Bold** for UI element names and button labels
- Numbered lists for step-by-step instructions
- Internal links use the clean URL slug: `[text](/slug)`
- No HTML tags in markdown unless absolutely necessary

## Writing Style Guide

Every doc — new or updated — must match this voice. This is derived directly from the existing 24 docs.

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

The em dash `–` at the end of the intro is intentional — it signals the steps begin.

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

## Key Config File
`.vitepress/config.js` — update sidebar and rewrites here when adding docs or categories.
