import { defineConfig } from 'vitepress'

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
  head: [
    ['link', { rel: 'icon', type: 'image/webp', href: '/images/brand/fluentSMTP_primary_icon.webp' }]
  ],
  themeConfig: {
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
          { text: 'Configurable Email Delivery Providers', link: '/configurable-email-delivery-providers' },
        ]
      },
      {
        text: 'Delivery Connections',
        collapsed: false,
        items: [
          { text: 'Connect Gmail or Google Workspace', link: '/connect-gmail-or-google-workspace-with-fluentsmtp' },
          { text: 'Outlook or Office365', link: '/outlook-or-office365-with-fluentsmtp' },
          { text: 'Configure FluentSMTP with Microsoft Outlook/Office Email', link: '/configure-fluentsmtp-with-microsoft-outlookoffice-email' },
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
