<p align="center">
  <img src="docs/public/images/brand/fluentSMTP_primary_logo.webp" alt="FluentSMTP" width="280">
</p>

<h1 align="center">FluentSMTP User Documentation</h1>

<p align="center">
  The source for <a href="https://fluentsmtp.com/docs/">fluentsmtp.com/docs</a> — user documentation for the
  <strong>FluentSMTP</strong> WordPress plugin by <a href="https://wpmanageninja.com">WPManageNinja</a>.
  <br>
  Built with <a href="https://vitepress.dev">VitePress</a> 1.x.
</p>

---

## Quick Start

```bash
git clone <repo-url>
cd fluentsmtp-user-docs
npm install
npm run dev          # http://localhost:5173
```

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Static build into `.vitepress/dist/` |
| `npm run preview` | Serve the built output locally |
| `node .claude/skills/validate-docs/scripts/validate.mjs` | Structural check — run before committing |

Image work additionally needs `cwebp`:

```bash
brew install webp
```

## What's In Here

24 articles across six categories, plus a homepage, changelog, and support page.

| Category | Covers |
|---|---|
| **Getting Started** | Installation, dashboard tour, global settings, provider overview |
| **Delivery Connections** | Gmail, Outlook / Office 365, Amazon SES, Brevo, Mailgun, SendGrid, SparkPost, Postmark, Elastic Email, Netcore, SMTP2GO, and generic host SMTP |
| **Obtain SMTP Credentials** | Pulling credentials from hosting control panels (cPanel) |
| **Alerts** | Email summaries and failure notifications via Slack, Telegram, Discord |
| **Advanced Functionalities** | Multiple connections and automatic routing |
| **Miscellaneous** | Email logs |

## Repository Layout

```
.vitepress/
  config.js              # sidebar, nav, URL rewrites, branding
  theme/                 # default theme + a per-page feedback widget
docs/                    # srcDir — all content
  index.md               # homepage
  changelog.md
  support.md
  {category}/{slug}.md   # articles
  public/images/         # all screenshots, WebP only
.claude/skills/          # authoring skills for Claude Code
CLAUDE.md                # conventions + writing style guide
```

## How URLs Work

Category folders are **stripped from the public URL** by `rewrites` in `.vitepress/config.js`, and `cleanUrls: true` drops `.html`:

```
docs/delivery-connections/configure-mailgun-with-fluentsmtp.md
        ↓
https://fluentsmtp.com/docs/configure-mailgun-with-fluentsmtp
```

Three things follow from this, and they cause most mistakes:

- **Slugs must be globally unique.** Two files with the same name in different categories collide on the same URL.
- **Internal links use the bare slug** — `[text](/install-and-activate-fluentsmtp)`, not the folder path.
- **Renaming a file changes its public URL** and breaks inbound links. Rename with the `/rename-doc` skill, which fixes the sidebar, image folder, and links together.

Each category needs its own rewrite line in `config.js`. The sidebar is maintained by hand — nothing is auto-generated, so a new doc is invisible in navigation until it is added there.

## Adding a Doc

Manually:

1. Create `docs/{category}/{slug}.md`
2. Add a sidebar entry in `.vitepress/config.js` under the matching section
3. Put screenshots in `docs/public/images/{category}/{slug}/` as WebP
4. Run the validator

With [Claude Code](https://claude.com/claude-code), the repo ships skills that do this and keep the invariants intact:

| Skill | Purpose |
|---|---|
| `/add-doc {slug} {category}` | Scaffold an article and register it in the sidebar |
| `/add-category {slug} {Name}` | New section: folder, rewrite rule, sidebar block |
| `/update-doc {slug}` | Edit a doc without disturbing its established voice |
| `/rename-doc {old} {new}` | Re-slug or move, fixing links, images, and sidebar |
| `/sync-images [{slug}]` | Download remote images, convert to WebP, remap links |
| `/validate-docs` | Check links, images, sidebar, slugs, and rewrites |
| `/style-check [{slug}]` | Audit prose against the writing style guide |

## Conventions

**Images** — WebP only, stored at `docs/public/images/{category}/{slug}/` and referenced as `/images/{category}/{slug}/file.webp` (the `public/` segment is dropped; it is the web root). External image URLs are never linked. Alt text is required on every image.

**Writing** — Docs follow a specific house voice: imperative and action-first, sequential connectors (**First,** → **Now,** → **Then,** → **Finally,**), bolded UI element names, Title Case headers, and blockquote notes rather than alarm-word warnings. The full guide, with the intro-paragraph patterns and the Prerequisites block every setup guide carries, is in [`CLAUDE.md`](CLAUDE.md).

**Validation** — `validate.mjs` checks structure: duplicate slugs, docs missing from the sidebar, dead nav links, broken internal links, missing or non-WebP images, empty alt text, missing rewrite rules, and orphaned assets. It exits non-zero on errors.

```bash
node .claude/skills/validate-docs/scripts/validate.mjs           # full report
node .claude/skills/validate-docs/scripts/validate.mjs --quiet   # errors only
node .claude/skills/validate-docs/scripts/validate.mjs --json    # machine-readable
```

## Feedback Widget

Every doc page renders a thumbs-up/down and comment widget below the content, implemented in `.vitepress/theme/components/Feedback.vue`. Responses POST to a Google Apps Script endpoint and are tagged with `PRODUCT_NAME`, which distinguishes this repo from its sibling WPManageNinja doc sites. Change that constant if you reuse the component elsewhere.

## Building & Deploying

```bash
npm run build     # → .vitepress/dist/
npm run preview
```

`.vitepress/dist/` is the deployable artifact. There is no CI pipeline in this repository — builds and deploys are handled externally.

> **Note:** the live site is served under `/docs/`, but `config.js` sets no `base`. If assets 404 after deploying to a subpath, check how the host serves the build before adding one — an incorrect `base` breaks every asset path.

## License

Documentation content © WPManageNinja. See the [FluentSMTP plugin](https://wordpress.org/plugins/fluent-smtp/) for plugin licensing.
