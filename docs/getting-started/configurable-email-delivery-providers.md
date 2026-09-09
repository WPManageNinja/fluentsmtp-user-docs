# Choose an Email Service

FluentSMTP is free. The email service you connect handles delivery and sets the sending price and limits. Choose based on what your site sends, how often it sends, and how much setup you want to manage. Learn how to pick the right provider and connect it by following the guide below –

## Our Recommendation: toSend

toSend is our email delivery service, from the team behind FluentSMTP. We recommend it for contact-form notifications, password resets, WooCommerce emails, and sites with growing or uneven sending volume.

Its published rate is $0.30 per 1,000 emails — that's $3 for 10,000 — with no monthly minimum. Unlimited sending domains and all features are included. The first 10,000 emails are free; this is an introductory allowance, not a monthly free plan.

[Set up toSend](/connect-tosend-with-fluentsmtp) · [Sign up for toSend](https://tosend.com/?fluent-smtp=connect)

For example, at that rate, 5,000 emails cost $1.50 and 50,000 cost $15, before introductory credits. You pay for usage rather than a monthly email bundle.

> [!Note]
> The public toSend site currently labels signup as early access — check availability when you register.

## Choose by How You Send

- **Business site, WooCommerce store, or membership site:** start with toSend. A dedicated delivery service is our recommendation when customers depend on receipts, account emails, and password resets.
- **Small site sending a few messages a day:** an existing Gmail or Microsoft mailbox can be enough. Keep sending comfortably below its limits and leave room for your normal mailbox traffic — see **Gmail & Microsoft Mailbox Limits** below.
- **Lowest raw sending cost, with technical setup:** consider Amazon SES. You manage AWS permissions, domain verification, and production access yourself.
- **Newsletters or campaigns:** use a dedicated provider that permits your type of marketing email, such as toSend or Brevo, together with a newsletter tool that manages subscribers and unsubscribes. FluentSMTP handles delivery; it does not manage a mailing list.
- **Already happy with a provider:** connect it below — you do not need to switch services to use FluentSMTP.

## Compare Provider Pricing

Pricing checked September 8, 2026. Amounts are in USD. Monthly subscriptions below use monthly billing unless noted. These are entry options, not equivalent feature packages. Taxes, overages, attachments, optional features, and account approval can affect the final cost. Confirm current pricing directly with each provider before signing up.

### Dedicated Email Services

| Provider | Free Option & Starting Price | When to Consider It |
|---|---|---|
| [toSend](/connect-tosend-with-fluentsmtp) — our recommendation | First 10,000 emails free, then $0.30/1,000. No monthly minimum. | WordPress sites, stores, and agencies wanting usage-based pricing and a direct FluentSMTP connection. |
| [Amazon SES](/amazon-or-aws-ses-with-fluentsmtp) | $0.10/1,000 for à-la-carte outbound sending; Essentials starts at $0.16/1,000. Attachment data and extras are additional. | Technical users prioritizing low sending costs and comfortable managing AWS. New accounts start on Essentials; you can switch to à-la-carte. |
| [Mailgun](/configure-mailgun-with-fluentsmtp) | Free: 100/day. Basic: $15/month for 10,000. | Teams using email APIs, webhooks, and inbound routes. Basic includes one sending domain and one day of logs. |
| [SendGrid](/setup-the-sendgrid-driver-with-fluentsmtp) | Trial: 100/day for 60 days. Essentials: $19.95/month for 50,000. | Sites already using Twilio SendGrid or needing its templates and delivery tooling. The trial is time-limited. |
| [Brevo](/setup-brevo-mailer-with-fluentsmtp) | Free: 300/day. Starter: from $9/month for 5,000. Prepaid credits are also available. | Sites wanting marketing tools and transactional sending in one account. Check contact limits and branding options as well as email volume. |
| [Postmark](/configure-postmark-in-fluentsmtp) | Free: 100/month. Basic: $15/month for 10,000. | Teams wanting detailed email history — Basic includes 45-day retention and five sending domains. |
| [SMTP2GO](/configure-smtp2go-in-fluentsmtp-to-send-emails) | Free: 1,000/month, capped at 200/day. Starter: 10,000/month; confirm the paid price at signup (public listings differ between $10 and $15/month). | Small sites starting with a recurring free allowance, or teams also connecting devices and other SMTP applications. |
| [Elastic Email](/configure-elastic-email-with-fluentsmtp) | Free: 3,000/month, with a 100/day limit. Email API Starter: $19/month for 50,000. | Sites sending enough email to use a larger monthly bundle. Choose the Email API product when comparing delivery costs. |
| [Cloudflare Email](/connect-cloudflare-with-fluentsmtp) | Workers Paid required: 3,000/month included, then $0.35/1,000, plus the $5/month Workers subscription and any other Workers usage. | Sites already using Workers Paid. Sending is currently labeled beta; free inbound Email Routing is a separate feature. |

> [!Note]
> A daily allowance is not a monthly pool. For example, 300 free emails per day will not cover a 1,000-email campaign sent on one day. Include busy days, retries, and emails to multiple recipients when estimating your needs.

### Existing SparkPost & Netcore Accounts

| Provider | Pricing | When to Consider It |
|---|---|---|
| [SparkPost](/configure-sparkpost-with-fluentsmtp) | Check your SparkPost account or request current terms from the provider — we could not verify a current public price for the legacy SparkPost connection. | Existing SparkPost users. Confirm that a new plan supports the SparkPost API used by FluentSMTP before buying; Bird plans should not be assumed interchangeable. |
| [Netcore / Pepipost](/set-up-the-netcore-mailer-in-fluentsmtp) | Ask Netcore for current Email API pricing and trial availability — no verified public entry price is listed here. | Existing Netcore users or teams arranging a plan around their sending volume. |

### Mailboxes & Other SMTP Hosts

| Provider | Pricing | When to Consider It |
|---|---|---|
| [Gmail / Google Workspace](/connect-gmail-or-google-workspace-with-fluentsmtp) | Use an existing mailbox. Personal Gmail has a free option; custom-domain Workspace email requires a subscription. | A few site notifications a day. Avoid newsletters, large bursts, and high-volume automated email through this mailbox connection. |
| [Outlook / Microsoft 365](/outlook-or-office365-with-fluentsmtp) | Use an existing mailbox. Personal Outlook.com has a free option; business email requires a suitable paid plan. | Low-volume site notifications using an existing Microsoft account. Avoid bulk and high-volume transactional sending. |
| [Other SMTP](/any-hosting-email-service-with-fluentsmtp) | Set by your host or mail service; sometimes included with hosting. | Any provider that supplies SMTP credentials. Suitability depends on the underlying service — a hosting mailbox and a dedicated SMTP relay can have very different limits. |

## Gmail & Microsoft Mailbox Limits

Gmail and Microsoft mailboxes are useful for everyday correspondence. Their sending quotas also apply when FluentSMTP sends through the connected account. Your website and your regular mailbox activity share that capacity — using an API connection does not turn it into an unlimited sending service.

Google documents sending limits for personal Gmail and Google Workspace: personal Gmail can stop sending after more than 500 messages in a day, and recovery can take 1–24 hours. Treat that as a ceiling, not a target for website traffic. Workspace limits depend on the account and sending method.

Microsoft recommends specialized providers for bulk commercial email, and explains that Exchange Online throttles messages when sending rates are exceeded.

> [!Note]
> Check Google's and Microsoft's current sending-limit documentation directly for the exact numbers that apply to your account type, these limits change and vary by plan.

For a busy store, a membership launch, or a newsletter, choose a dedicated sending service such as toSend. Keep your Google or Microsoft inbox for reading and replying to email — you can use a separate delivery service for your site's authenticated domain email without moving that inbox.

## Connect Your Chosen Provider

Go to **WordPress → Settings → FluentSMTP**. If nothing is connected yet, the setup wizard opens automatically.

![FluentSMTP configuration prompt on the Plugins screen](/images/getting-started/configurable-email-delivery-providers/fluent-smtp-configure-new.webp)

Otherwise, open **Settings** in the top bar and click **Add Connection**.

![Provider picker on Add Connection](/images/getting-started/configurable-email-delivery-providers/fluent-smtp-connection-providers.webp)

Pick your provider's logo and follow its setup guide above. Use **Other SMTP** when your provider supplies SMTP credentials. The **php** option uses the server's `mail()` function — it is not a separate delivery service and does not fix email delivery by itself.

After saving the connection, click **Send Test Email** and check the receiving inbox. If you need different providers for different From addresses, see [Multiple SMTP Connections & Auto Routing](/multiple-smtp-connections-auto-routing).
