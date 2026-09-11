# FluentSMTP Settings

The **FluentSMTP Settings** page lets you manage your email connections and configure settings that control how FluentSMTP handles outgoing emails on your WordPress site.

From this page, you can manage your active email connections, choose default and fallback connections, control email logging, enable email simulation, and configure other general settings. You can also manage sender addresses and connection-specific options from the individual connection settings.

This guide explains each available setting and shows you how to configure FluentSMTP.

## Open Settings

Click **Settings** in the FluentSMTP top bar. The page has two columns: **Active Email Connections** on the left, and **General Settings** on the right.

Save **General Settings** with the **Save Settings** button. Connection changes are saved on the Add/Edit Connection screen with the **Save Connection Settings** button.

![Active Email Connections and General Settings on the FluentSMTP Settings Page](/images/getting-started/fluentsmtp-settings/General-Settings-tab-on-the-right-hand-side-scaled.webp)



## General Settings

These settings apply to the whole site, not to one provider.

### Log Emails

**Log Emails** is on by default. FluentSMTP stores every outgoing message so you can search it, open it, and resend it. Turn this off only if you have a reason — without logs, you cannot see why a send failed.

If FluentCRM is active, an **Exclude FluentCRM Emails** switch appears under **Log Emails**. FluentCRM already logs its own campaigns, so turning this exclusion on keeps those messages out of the FluentSMTP log and keeps the table smaller.

### Delete Logs

**Delete Logs** controls how long a logged email stays before FluentSMTP deletes it. Options run from 7 days to 2 years. Shorter is kinder to the database — resend or export any failed mail you still need to debug before that window closes.

### Email Simulation

**Email Simulation** stops delivery. Messages are still written to the log, marked as simulated. Use this on staging, or whenever you need to see what would have been sent without touching real inboxes.

> [!Note]
> If `FLUENTMAIL_SIMULATE_EMAILS` is defined in PHP, the **Email Simulation** switch does nothing — the constant wins.

### Plain Text Alternative

**Plain Text Alternative (beta)** adds a `text/plain` part next to the HTML version of the email. Some clients still cannot show HTML. Leave this off unless you know you need it.

## Connection Rows

Each row under **Active Email Connections** is one connection, and shows:

- The provider logo and the **From** address
- A short note (region, "routes its own From address", and similar)
- A **Default** badge if this is the connection everything else falls through to
- A **Fallback** badge if this is the backup used when **Default** fails
- A **+N senders** mark on Amazon SES and toSend connections, for any extra senders — click it to manage them
- An **Edit** (pencil) icon that opens the connection form
- An **Actions** (three dots) menu with **Set as Default**, **Set as Fallback**, **View**, and **Delete**

![Actions Menu on a Connection Row with Set as Default, Set as Fallback, View and Delete](/images/getting-started/fluentsmtp-settings/Three-more-settings-under-Action-column-of-a-specific-email-service-provider-scaled.webp)

You cannot set the same connection as both **Default** and **Fallback**, and you cannot set a **Fallback** until you have more than one connection.

**View** opens the connection details, the **From** address, sender name, and whether the token is still valid. **Delete** removes the connection; mail that used its **From** address will then go through **Default**, or fail if nothing is left.

## Default, Fallback & Extra From Addresses

Mail sent from a connection's own **From** address always goes through that connection. Everything else goes through **Default**. If **Default** fails, FluentSMTP tries **Fallback**.

That same routing rule appears under the connections list once you have more than one connection. For the full walkthrough, see [Multiple SMTP Connections & Auto Routing](/multiple-smtp-connections-auto-routing).

Amazon SES and toSend connections can send as more than one **From** address on the same connection. Click **+N senders** (or **Manage additional sender addresses**) on the row to add one, the address has to be on a domain that provider has already verified.

## Force From Email & Force Sender Name

These settings live on each connection form, under **Sender Settings**, not on **General Settings**. Gmail, Outlook, and Cloudflare do not show **Force From Email**, since those connections send as the mailbox you authenticate.

- **Force From Email** (recommended): any mail that is not already routed to another connection is sent from this address, whatever **From** the sending plugin set.
- **Force Sender Name**: the **From Name** on this connection is used, whatever name the sending plugin set.
- **Set the return-path to match the From Email**: bounce notices go back to this address, when the provider honors **Return-Path**.

## Where Secrets Are Stored

Leave **Store in Database** selected — that is the default. Paste the key (or password) on the form, and FluentSMTP encrypts it with your WordPress SALT keys before saving it. Most sites should stop there.

The same form also lets you change that:

- **Store in Database**, encryption on (default). The field help text confirms the value is encrypted with your WordPress SALT keys before it is saved.
- **Store in Database**, with **Disable Encryption** ticked. The secret is stored as readable text. The checkbox is labeled **not recommended** — use it only if a security plugin rotates SALT keys and the encrypted value keeps breaking.
- **Store in wp-config.php**. The key fields disappear, and the form shows the `define()` lines for that provider. Paste them into `wp-config.php` above `That's all, stop editing!`. Use this when you do not want the secret in the database at all.

> **Remember**, none of these extra steps are required. Pick **Store in Database**, leave encryption on, paste the key, and save.

If you do choose **Store in wp-config.php**, the form on your site is the source of truth for the constant names — they look like this:

| Connection | Constants |
|---|---|
| Other SMTP | `FLUENTMAIL_SMTP_USERNAME`, `FLUENTMAIL_SMTP_PASSWORD` |
| toSend | `FLUENTMAIL_TOSEND_API_KEY` |
| Amazon SES | `FLUENTMAIL_AWS_ACCESS_KEY_ID`, `FLUENTMAIL_AWS_SECRET_ACCESS_KEY` |
| Mailgun | `FLUENTMAIL_MAILGUN_API_KEY`, `FLUENTMAIL_MAILGUN_DOMAIN` |
| SendGrid | `FLUENTMAIL_SENDGRID_API_KEY` |
| Brevo (Sendinblue) | `FLUENTMAIL_SENDINBLUE_API_KEY` |
| SparkPost | `FLUENTMAIL_SPARKPOST_API_KEY` |
| Netcore (Pepipost) | `FLUENTMAIL_PEPIPOST_API_KEY` |
| Postmark | `FLUENTMAIL_POSTMARK_API_KEY` |
| Elastic Email | `FLUENTMAIL_ELASTICMAIL_API_KEY` |
| SMTP2GO | `FLUENTMAIL_SMTP2GO_API_KEY` |
| Gmail | `FLUENTMAIL_GMAIL_CLIENT_ID`, `FLUENTMAIL_GMAIL_CLIENT_SECRET` |
| Outlook | `FLUENTMAIL_OUTLOOK_CLIENT_ID`, `FLUENTMAIL_OUTLOOK_CLIENT_SECRET` |
| Cloudflare | `FLUENTMAIL_CLOUDFLARE_API_KEY`, `FLUENTMAIL_CLOUDFLARE_ACCOUNT_ID` |
