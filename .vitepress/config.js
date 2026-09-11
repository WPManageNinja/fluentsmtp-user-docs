import { defineConfig } from 'vitepress'
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { zoomablePlugin } from './theme/plugin-zoomable.js'

// Canonical origin for this site — reused by the canonical links and the absolute
// og:/twitter: URLs below. Changing the host should only ever mean editing this line.
const SITE_URL = 'https://docs.fluentsmtp.com'

/**
 * Per-page link-preview cards.
 *
 * `scripts/generate-featured-images.mjs` renders a branded 1200x630 PNG carrying each
 * page's own title into `docs/public/images/featured/`, served at `/images/featured/`.
 *
 * NAMING RULE — kept in sync with that script's cardNameFor(): the card is the page's
 * served path (i.e. `pageData.relativePath`, which VitePress has already passed through
 * any `rewrites`) minus `.md`, with every `/` replaced by `--`, plus `.png`. The home
 * page's `index.md` uses `index.png`.
 *
 * Anything without a generated card falls back to `default.png`, which the generator
 * also emits — so a shared link is never left with no preview at all. The URL must be
 * absolute: relative paths are ignored by Slack/X/LinkedIn/Facebook scrapers.
 */
const FEATURED_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs', 'public', 'images', 'featured')

function featuredImageFor(relativePath) {
  const name = `${relativePath.replace(/\.md$/, '').replace(/\//g, '--')}.png`
  const file = existsSync(join(FEATURED_DIR, name)) ? name : 'default.png'
  return `${SITE_URL}/images/featured/${encodeURIComponent(file)}`
}

export default defineConfig({
  srcDir: 'docs',
  title: 'FluentSMTP',
  description: 'The Ultimate SMTP Plugin for WordPress - Complete Documentation',
  cleanUrls: true,
  rewrites: {
    'getting-started/:slug': ':slug',
    'delivery-connections/:slug': ':slug',
    'obtain-smtp-credentials/:slug': ':slug',
    'advanced-functionalities/:slug': ':slug',
    'alerts/:slug': ':slug',
    'miscellaneous/:slug': ':slug',
  },
  markdown: {
    config: (md) => {
      md.use(zoomablePlugin)
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/webp', href: '/images/brand/fluentSMTP_primary_icon.webp' }],

    // Open Graph / Twitter values that never vary per page. Every generated card is
    // 1200x630, so the dimensions live here; the image URL itself is per page and
    // is set in transformPageData() below.
    ['meta', { property: 'og:site_name', content: 'FluentSMTP' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  // Per-page SEO tags: canonical URL plus the Open Graph / Twitter values that differ
  // per page, including the page's own featured image (see featuredImageFor above).
  transformPageData(pageData, { siteConfig }) {
    // `relativePath` is the path AFTER `rewrites`, so it matches the public URL.
    const path = pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    const url = path ? `${SITE_URL}/${path}` : `${SITE_URL}/`
    const title = pageData.frontmatter.title || pageData.title || siteConfig.site.title
    const description =
      pageData.frontmatter.description || pageData.description || siteConfig.site.description
    const image = featuredImageFor(pageData.relativePath)

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { property: 'og:image:alt', content: title }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: image }]
    )
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search docs',
                buttonAriaLabel: 'Search documentation'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Reset search',
                backButtonTitle: 'Close search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        }
      }
    },
    logo: {
      light: '/images/brand/fluentSMTP_primary_logo.webp',
      dark: '/images/brand/fluentSMTP_secondary_logo.webp',
      alt: 'FluentSMTP'
    },
    siteTitle: false,
    footer: {
      copyright: 'Copyright © 2026 FluentSMTP'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Website', link: 'https://fluentsmtp.com' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Support', link: '/support' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction to FluentSMTP Dashboard', link: '/introduction-to-fluentsmtp-dashboard' },
          { text: 'Install and Activate FluentSMTP', link: '/install-and-activate-fluentsmtp' },
          { text: 'FluentSMTP Settings', link: '/fluentsmtp-settings' },
          { text: 'Choose an Email Service', link: '/configurable-email-delivery-providers' },
        ]
      },
      {
        text: 'Delivery Connections',
        collapsed: false,
        items: [
          { text: 'Connect Gmail or Google Workspace', link: '/connect-gmail-or-google-workspace-with-fluentsmtp' },
          { text: 'Outlook/Office365 (Azure)', link: '/outlook-or-office365-with-fluentsmtp' },
          { text: 'Outlook/Office365 (Entra)', link: '/configure-fluentsmtp-with-microsoft-outlookoffice-email' },
          { text: 'Amazon or AWS SES', link: '/amazon-or-aws-ses-with-fluentsmtp' },
          { text: 'Setup Brevo Mailer', link: '/setup-brevo-mailer-with-fluentsmtp' },
          { text: 'Configure Mailgun', link: '/configure-mailgun-with-fluentsmtp' },
          { text: 'Setup SendGrid Driver', link: '/setup-the-sendgrid-driver-with-fluentsmtp' },
          { text: 'Configure SparkPost', link: '/configure-sparkpost-with-fluentsmtp' },
          { text: 'Configure Postmark', link: '/configure-postmark-in-fluentsmtp' },
          { text: 'Configure Elastic Email', link: '/configure-elastic-email-with-fluentsmtp' },
          { text: 'Set Up Netcore Mailer', link: '/set-up-the-netcore-mailer-in-fluentsmtp' },
          { text: 'Configure SMTP2GO', link: '/configure-smtp2go-in-fluentsmtp-to-send-emails' },
          { text: 'Any Hosting Email Service', link: '/any-hosting-email-service-with-fluentsmtp' },
          { text: 'Connect Cloudflare', link: '/connect-cloudflare-with-fluentsmtp' },
          { text: 'Connect toSend', link: '/connect-tosend-with-fluentsmtp' },
        ]
      },
      {
        text: 'Obtain SMTP Credentials',
        collapsed: false,
        items: [
          { text: 'cPanel SMTP Credentials', link: '/cpanel-smtp-credentials' },
        ]
      },
      {
        text: 'Alerts',
        collapsed: false,
        items: [
          { text: 'Connection Health Check', link: '/connection-health-check' },
          { text: 'Email Summary', link: '/email-summary' },
          { text: 'Email Sending Error Notification - Slack', link: '/email-sending-error-notification-slack' },
          { text: 'Email Sending Error Notification - Telegram', link: '/email-sending-error-notification-telegram' },
          { text: 'Email Sending Error Notification - Discord', link: '/email-sending-error-notification-discord' },
        ]
      },
      {
        text: 'Advanced Functionalities',
        collapsed: false,
        items: [
          { text: 'Multiple SMTP Connections & Auto Routing', link: '/multiple-smtp-connections-auto-routing' },
          { text: 'WP-CLI Commands', link: '/wp-cli-commands' },
          { text: 'Filters & Hooks', link: '/fluentsmtp-filters-and-hooks' },
        ]
      },
      {
        text: 'Miscellaneous',
        collapsed: false,
        items: [
          { text: 'FluentSMTP Email Logs Feature', link: '/fluentsmtp-email-logs-feature' },
        ]
      }
    ]
  }
})
