# Changelog

Stay updated with the latest improvements, new features, bug fixes, and performance enhancements in FluentSMTP.

## FluentSMTP v2.2.95

_Released on December 28, 2025_

::: code-group

```markdown [✨ Newly Added]
• Adds Multiple Notification Channels for Email Failure Notification
• Adds Pushover Notification Support
• Adds toSend Email Sending Provider
• Adds Option to disable API Keys Encryption
```

```markdown [🐞 Bug fixes]
• Fixes PHP 8.4 Compatibility Issues
```

:::

## FluentSMTP v2.2.92

_Released on August 27, 2025_

::: code-group

```markdown [✨ Newly Added]
• Adds PHP 8.4 support for FluentMail\App\Services\Mailer\Manager
• Adds new Amazon SES region: ap-northeast-3 (Asia Pacific – Osaka)
```

```markdown [🐞 Bug fixes]
• Fixes attachment handling issue with Elastic Email
• Fixes import statement issue for SMTP2GO
• Fixes Logger Resend Email to respect Content-Type for HTML emails
• Fixes redundant navigation error in Logs screen when refreshing
• Fixes Content-Type header to always be logged for accurate email resends
• Fixes general bugs and minor issues
```

```markdown [🚀 Improvements]
• Improves error handling in BaseHandler
• Improves fallback email handling to return true on success
• Improves overall performance
• Improves styling across the dashboard
```

:::

## FluentSMTP v2.2.90

_Released on February 7, 2025_

::: code-group

```markdown [✨ Newly Added]
• Adds SMTP2GO Provider
• Adds name attribute to attachment files
```

```markdown [🐞 Bug fixes]
• Fixes Email Failed Notification issue with Slack
```

```markdown [🚀 Improvements]
• Improves Translations
• Improves styling across the dashboard
• Security: Updates Google SDK Library to the latest version and updates JS DomPurify Library
```

:::

## FluentSMTP v2.2.83

_Released on November 22, 2024_

::: code-group

```markdown [🐞 Bug fixes]
• Fixes unserialize parameter issue
```

:::

## FluentSMTP v2.2.82

_Released on November 22, 2024_

::: code-group

```markdown [🐞 Bug fixes]
• Security: Fixes data un-serialization issue
• Fixes Sparkpost recipient issue
```

:::

## FluentSMTP v2.2.81

_Released on October 20, 2024_

::: code-group

```markdown [✨ Newly Added]
• Adds custom header support for Postmark
```

```markdown [🐞 Bug fixes]
• Security: Fixes nonce verification for Slack request (props to Patchstack)
• Fixes WooCommerce emailing issue when text mode is enabled
• Fixes translation issues
```

:::

## FluentSMTP v2.2.80

_Released on July 2, 2024_

::: code-group

```markdown [✨ Newly Added]
• Adds Plain Text Support: Convert HTML emails to plain text and send as multi-part email
```

```markdown [🚀 Improvements]
• Improves translations
• Improves internal code base
```

:::

## FluentSMTP v2.2.73

_Released on April 25, 2024_

::: code-group

```markdown [✨ Newly Added]
• Adds Day-of-the-time email sending chart
```

```markdown [🚀 Improvements]
• Improves compatibility with PHP 8.X
```

:::

## FluentSMTP v2.2.72

_Released on March 16, 2024_

::: code-group

```markdown [🐞 Bug fixes]
• Fixes Slack notification issue
```

```markdown [🚀 Improvements]
• Improves compatibility with PHP 8.4
```

:::

## FluentSMTP v2.2.71

_Released on January 1, 2024_

::: code-group

```markdown [🐞 Bug fixes]
• Hot Fix: Fixes the issue with input fields
```

:::

## FluentSMTP v2.2.7

_Released on January 1, 2024_

::: code-group

```markdown [✨ Newly Added]
• Adds real-time email failure notification via Telegram, Slack, and Discord
• Adds option to add additional email addresses for Amazon SES
```

```markdown [🚀 Improvements]
• Improves overall UI
```

:::

## FluentSMTP v2.2.6

_Released on October 1, 2023_

::: code-group

```markdown [✨ Newly Added]
• Adds encryption for all SMTP connection keys
```

```markdown [🐞 Bug fixes]
• Fixes UI conflict with other plugins
```

```markdown [🚀 Improvements]
• Improves migration of SendInBlue API to Brevo API
• Improves plugin conflict detection with auto-fix
```

:::

## FluentSMTP v2.2.5

_Released on July 6, 2023_

::: code-group

```markdown [🐞 Bug fixes]
• Security: Email subject is now sanitized and escaped on preview
• Fixes http_build_query issue for the latest PHP version
```

```markdown [🚀 Improvements]
• Shows Server Response by default in logs
• Improves UI and UX for email preview
```

:::

## FluentSMTP v2.2.4

_Released on February 4, 2023_

::: code-group

```markdown [✨ Newly Added]
• Adds FLUENTMAIL_SIMULATE_EMAILS constant to simulate emails programmatically
```

```markdown [🐞 Bug fixes]
• Fixes Outlook API connection issues
• Fixes inline documentation links
```

```markdown [🚀 Improvements]
• Email preview is now sanitized
• Improves overall UX
```

:::

## FluentSMTP v2.2.2

_Released on November 11, 2022_

::: code-group

```markdown [🐞 Bug fixes]
• Fixes vendor conflict for Google/Gmail connection
```

```markdown [🚀 Improvements]
• Improves UI on connection wizard
```

:::

## FluentSMTP v2.2.1

_Released on November 8, 2022_

::: code-group

```markdown [✨ Newly Added]
• Adds contributors to the plugin's about page
```

```markdown [🐞 Bug fixes]
• Fixes encoding issues for Outlook API connection
• Fixes ElasticEmail attachment issues
• Fixes digest email esc_* issues
```

```markdown [🚀 Improvements]
• Refactors Google API integration
• Improves overall UI and UX
```

:::

## FluentSMTP v2.2.0

_Released on August 21, 2022_

::: code-group

```markdown [✨ Newly Added]
• Adds Elastic Mail API
```

```markdown [🚀 Improvements]
• Improves PHP 8.0 and 8.1 compatibility
• Improves overall UI
```

:::

## FluentSMTP v2.1.2

_Released on July 5, 2022_

::: code-group

```markdown [🚀 Improvements]
• Upgrades the Google/Gmail API
• Improves overall UI
```

:::

## FluentSMTP v2.1.1

_Released on March 12, 2022_

::: code-group

```markdown [🐞 Bug fixes]
• Fixes auto-delete of old email logs
```

```markdown [🚀 Improvements]
• Improves the Email Logging screen
• Improves the UI and Settings
```

:::

## FluentSMTP v2.1.0

_Released on October 24, 2021_

::: code-group

```markdown [✨ Newly Added]
• Adds the ability to remove "from email" and "from name" via filter hook
```

```markdown [🐞 Bug fixes]
• Fixes cron issues
• Fixes PHP 8.0 compatibility issue
```

```markdown [🚀 Improvements]
• Improves multiple-connection UX
```

:::

## FluentSMTP v2.0.2

_Released on September 21, 2021_

::: code-group

```markdown [🐞 Bug fixes]
• Fixes scheduled database cleanup
```

```markdown [🚀 Improvements]
• Improves wp_mail loading and email sending
• Improves Pepipost driver
• Improves SendGrid driver
• Improves SendinBlue driver
```

:::

## FluentSMTP v2.0.1

_Released on July 28, 2021_

::: code-group

```markdown [✨ Newly Added]
• Adds Postmark API connection
```

```markdown [🐞 Bug fixes]
• Fixes dashboard stat number
• Fixes sanitization issue
```

:::

## FluentSMTP v2.0.0

_Released on July 27, 2021_

::: code-group

```markdown [✨ Newly Added]
• Adds Outlook / Office 365 API connection
• Adds Fallback Connection feature
• Adds one-click migration from WP Mail SMTP plugin
• Adds one-click migration from WP Easy SMTP plugin
• Adds the ability to disable force From Email for supported connections
• Adds nonce and sanitization for connection inputs
```

```markdown [🚀 Improvements]
• Improves Amazon SES connection
• Improves overall UI
```

:::

## FluentSMTP v1.2.0

_Released on May 26, 2021_

::: code-group

```markdown [✨ Newly Added]
• Adds Gmail and Google Workspace API connection
• Adds built-in docs
• Adds bulk send emails from logs
• Adds Email Simulator
```

```markdown [🐞 Bug fixes]
• Fixes PHP 8 compatibility issue
• Fixes Amazon API issue
```

```markdown [🚀 Improvements]
• Improves overall UI
```

:::

## FluentSMTP v1.1.1

_Released on April 26, 2021_

::: code-group

```markdown [🐞 Bug fixes]
• Fixes database warning issue
```

:::

## FluentSMTP v1.1.0

_Released on April 25, 2021_

::: code-group

```markdown [🐞 Bug fixes]
• Fixes error handling issues
```

```markdown [🚀 Improvements]
• Optimizes database queries
• Optimizes Amazon SES connection
• Improves overall UI
• Improves VueJS loading
```

:::

## FluentSMTP v1.0.1

_Released on January 24, 2021_

::: code-group

```markdown [🐞 Bug fixes]
• Fixes UTF-8 issues
• Fixes SendinBlue wp-config constant issue
• Fixes fallback "from name" issue
• Fixes search for email logs
```

:::

## FluentSMTP v1.0.0

_Released on January 18, 2021_

🎉 Initial Release

```markdown
• Hello World! The first release of FluentSMTP is here.
• 349 git commits so far.
• Three months in the making.
• Let's make email sending easier!
```
