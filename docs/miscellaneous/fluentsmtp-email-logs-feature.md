# FluentSMTP Email Logs Feature

**Email Logs** records every message FluentSMTP has sent or attempted to send. It's a top-bar destination of its own in FluentSMTP, not buried under Settings. Learn how to read, filter, and resend from your Email Logs by following the guide below –

## Turn On Logging

Before anything shows up here, **Log Emails** must be turned on under **Settings**. If it's off, the Email Logs screen tells you so and offers a **Turn On** button.

## Email Logs

Go to **Email Logs** in the top bar to see every message FluentSMTP has recorded.

![Email Logs List with All, Sent, Failed, Date Filter, Search, and Resend](/images/miscellaneous/fluentsmtp-email-logs-feature/email-logs-1.webp)

### What You Can Do

- **All / Sent / Failed**: Switch between tabs. **Failed** is what you want after a support ticket about missing mail.
- **Date range**: Pick a **Start date** and **End date**, then click **Filter**.
- **Search logs**: Search by subject, recipient, and similar fields.
- **Refresh**: Click the refresh icon to see real-time reports.
- **Open a message**: Click a **Subject**, or the view icon, to see its body, headers, attachments, and server response.
- **Resend**: Click **Resend** on a row, or select rows and bulk resend. This is the usual fix for failed mail, but you can also resend something that already went out successfully.
- **Delete**: Delete selected rows, or use the bulk delete option.

> [!Note]
> Simulated messages are marked **Simulated**. They never left the site. See **Email Simulation** in Settings.

## Reading a Failure

Open the log. The red **Why it failed** line and the **Server Response** block below it are the provider's own words, not something FluentSMTP wrote itself.

![Failed Log with Why It Failed and the Amazon SES Not-Verified Message](/images/miscellaneous/fluentsmtp-email-logs-feature/reading-a-failor-2.webp)

"Email address is not verified" on **Amazon SES** means the account is still in the sandbox, or the **From** address hasn't been verified in that region. A `401` from **Mailgun** means a bad API key. Use that exact text to diagnose the problem, not a guess.

Resend only after you've fixed the cause: verify the domain, fix the key, or leave sandbox mode. Resending with the same broken configuration just writes another failed row.

## Log Retention

Logs older than the **Delete Logs** setting under **Settings** are gone for good. If you need a longer history, raise that number before the window closes.

That's all about the Email Logs feature in FluentSMTP.
