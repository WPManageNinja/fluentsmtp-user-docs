import { defineConfig } from 'vitepress'
import { zoomablePlugin } from './theme/plugin-zoomable.js'

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
    ['link', { rel: 'icon', type: 'image/webp', href: '/images/brand/fluentSMTP_primary_icon.webp' }]
  ],
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
          { text: 'Dashboard Overview', link: '/introduction-to-fluentsmtp-dashboard' },
          { text: 'Install & Activate', link: '/install-and-activate-fluentsmtp' },
          { text: 'Settings', link: '/fluentsmtp-settings' },
          { text: 'Choose Email Service', link: '/configurable-email-delivery-providers' },
        ]
      },
      {
        text: 'Delivery Connections',
        collapsed: false,
        items: [
          { text: 'Gmail & Google Workspace', link: '/connect-gmail-or-google-workspace-with-fluentsmtp' },
          { text: 'Outlook (Azure)', link: '/outlook-or-office365-with-fluentsmtp' },
          { text: 'Outlook (Entra)', link: '/configure-fluentsmtp-with-microsoft-outlookoffice-email' },
          { text: 'Amazon SES', link: '/amazon-or-aws-ses-with-fluentsmtp' },
          { text: 'Brevo', link: '/setup-brevo-mailer-with-fluentsmtp' },
          { text: 'Mailgun', link: '/configure-mailgun-with-fluentsmtp' },
          { text: 'SendGrid', link: '/setup-the-sendgrid-driver-with-fluentsmtp' },
          { text: 'SparkPost', link: '/configure-sparkpost-with-fluentsmtp' },
          { text: 'Postmark', link: '/configure-postmark-in-fluentsmtp' },
          { text: 'Elastic Email', link: '/configure-elastic-email-with-fluentsmtp' },
          { text: 'Netcore', link: '/set-up-the-netcore-mailer-in-fluentsmtp' },
          { text: 'SMTP2GO', link: '/configure-smtp2go-in-fluentsmtp-to-send-emails' },
          { text: 'Any Hosting Email', link: '/any-hosting-email-service-with-fluentsmtp' },
          { text: 'Cloudflare', link: '/connect-cloudflare-with-fluentsmtp' },
          { text: 'toSend', link: '/connect-tosend-with-fluentsmtp' },
        ]
      },
      {
        text: 'Obtain SMTP Credentials',
        collapsed: false,
        items: [
          { text: 'cPanel Credentials', link: '/cpanel-smtp-credentials' },
        ]
      },
      {
        text: 'Alerts',
        collapsed: false,
        items: [
          { text: 'Health Check', link: '/connection-health-check' },
          { text: 'Email Summary', link: '/email-summary' },
          { text: 'Slack', link: '/email-sending-error-notification-slack' },
          { text: 'Telegram', link: '/email-sending-error-notification-telegram' },
          { text: 'Discord', link: '/email-sending-error-notification-discord' },
          { text: 'Pushover', link: '/email-sending-error-notification-pushover' },
        ]
      },
      {
        text: 'Advanced Functionalities',
        collapsed: false,
        items: [
          { text: 'Multiple Connections & Routing', link: '/multiple-smtp-connections-auto-routing' },
          { text: 'WP-CLI Commands', link: '/wp-cli-commands' },
          { text: 'Filters & Hooks', link: '/fluentsmtp-filters-and-hooks' },
        ]
      },
      {
        text: 'Miscellaneous',
        collapsed: false,
        items: [
          { text: 'Email Logs', link: '/fluentsmtp-email-logs-feature' },
        ]
      }
    ]
  }
})
