# Connection Health Check

Learn how to monitor your email sending connections with FluentSMTP's daily Connection Health Check by following the steps below –

## What the Health Check Does

FluentSMTP checks every active connection once a day and flags anything that stops working — for example, an expired token or credentials a provider has rejected. Each connection is validated the same way it was when you first saved it, so a check catches the same problems a fresh setup would. If a connection fails, you'll see an alert on the FluentSMTP dashboard, and if you have an alert channel configured, a failure notification too — so you can fix the issue before it affects real email delivery.

> **Note:** The daily check only re-notifies you the first time a connection starts failing. If it stays broken day after day, you won't get a repeat notification for it — but the dashboard alert stays visible until you fix it.

## Viewing Dashboard Alerts

First, go to **FluentSMTP** from **Settings** of **WordPress Dashboard** in the left sidebar. This opens the **Dashboard** tab.

Now, if a connection has failed its most recent health check, you'll see a **Connection needs attention** alert naming the sender email and provider, with the failure reason underneath.

![FluentSMTP Dashboard Connection Health Alert](/images/alerts/connection-health-check/01-dashboard-health-alert.webp)

To fix it, go to that connection's settings and correct the credential or setting the alert points to, then save. The next daily check clears the alert once the connection passes again.

## Failure Notifications

When a connection newly starts failing, FluentSMTP sends a failure notification through whichever alert channels you have activated — **Telegram**, **Slack**, **Discord**, or **Pushover**. If you haven't activated any of these, only the dashboard alert appears; no plain email is sent for connection health specifically.

> **Remember**, you can configure these channels using the [Email Sending Error Notification](/email-sending-error-notification-slack) settings for Slack, [Telegram](/email-sending-error-notification-telegram), and [Discord](/email-sending-error-notification-discord).

## Related

- [Email Summary](/email-summary) — a weekly digest of your sending stats, separate from the daily health check
- [WP-CLI Commands](/wp-cli-commands) — run a connection health check manually with `wp fluent-smtp health`
