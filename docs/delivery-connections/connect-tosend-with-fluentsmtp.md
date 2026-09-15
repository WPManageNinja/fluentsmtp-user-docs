# Connect toSend With FluentSMTP

**toSend** is an email sending API for WordPress sites, offering a free tier of 10,000 emails a month with no credit card required to get started. Connecting it to **FluentSMTP** lets your site route its emails through toSend instead of your host's default mail setup.

Learn how to connect **toSend** as an email sending provider by following the steps with the screenshots below –

## Prerequisites

- FluentSMTP installed and activated ([installation guide](/install-and-activate-fluentsmtp))
- An active toSend account with a verified sending domain

> [!Note]
> toSend was added as a FluentSMTP connection provider in v2.2.95, and v2.3.0 adds an inline setup guide plus connection-reuse performance improvements for it. Don't have a toSend account yet? [Sign up free](https://tosend.com/?fluent-smtp=connect) — it includes 10,000 emails/month at no cost, then $3 per 10,000 after that, with no credit card required to start.

## Configuring toSend

First, go to **FluentSMTP** from **Settings** of **WordPress Dashboard** in the left sidebar. If you are already connected to any email service provider, click the **+ Add Connection** button on the **Settings** page first.

![Add Connection Button in FluentSMTP Settings](/images/delivery-connections/connect-tosend-with-fluentsmtp/add-connection-1.webp)

This will take you to the **Add Connection** page, where you can click the **toSend** tile from the given **Connection Providers**.

![Choose Connection Provider](/images/delivery-connections/connect-tosend-with-fluentsmtp/choose-connectrion-provider-2.webp)

After you choose the provider, it will take you to the **toSend API Settings** page where you will get all the options to connect your toSend account. FluentSMTP shows an inline setup guide on this screen that walks through the same steps as below.

> [!Note]
> If you want to change the connection provider, click the **Change** button right next to the toSend tab at the top of the page.

**Here, you need to provide –**

- **From Email:** The email address you want to send from. This must be on a domain verified in your toSend account.
- **From Name:** This can be anything you want, such as your name or company name.
- **Force From Email:** Checked by default and recommended. This always sends using the "From Email" above, regardless of what the sending code specifies.
- **Force Sender Name:** Check the box to always use the "From Name" above for outgoing emails, regardless of what the sending code specifies.
- **API Key:** The credential obtained from your toSend account, described in the next section.
- **Additional Sender Emails:** Optional — add more From addresses that route through this same toSend connection. Each one must also be on a domain verified in your toSend account.

![toSend Add Connection Form](/images/delivery-connections/connect-tosend-with-fluentsmtp/add-connection-3.webp)

## Get API Key from toSend

First, sign in to your [toSend dashboard](https://dash.tosend.com/) and add your sending domain if you haven't already.

Now, publish the SPF, DKIM, and DMARC DNS records toSend shows for that domain, and wait for it to verify.

<!-- TODO: Screenshot needed — "toSend Domain Verification" → /images/delivery-connections/connect-tosend-with-fluentsmtp/05-tosend-domain-verification.webp -->

Then, open [API Keys](https://dash.tosend.com/app/api-keys) in your toSend dashboard, create a new key, and copy its value — keep it safe for the next step.

<!-- TODO: Screenshot needed — "toSend API Keys Page" → /images/delivery-connections/connect-tosend-with-fluentsmtp/06-tosend-api-keys.webp -->

## Configured toSend

Once you paste the **API Key** into FluentSMTP, enter a **From Email** on your verified domain, and click the **Save Connection Settings** button, your toSend connection is ready to send emails.

![toSend Connection Form with API Key and Sender Details Saved](/images/delivery-connections/connect-tosend-with-fluentsmtp/enter-api-key-4.webp)

## Details of toSend API Settings

- **Store in Database**: Selected by default and recommended. This keeps the API key in the database in encrypted format.
- **Store in wp-config.php**: This lets you store the API key in your site's **wp-config.php** file instead, using the following directive.

Copy the snippet below, replace the stars with your own API key, and paste it into the **wp-config.php** file of your WordPress installation.

```
define( 'FLUENTMAIL_TOSEND_API_KEY', '********************' );
```

![Store in wp-config.php Tab with API Key Snippet](/images/delivery-connections/connect-tosend-with-fluentsmtp/store-configure-5.webp)

> [!Note]
> To learn the details about **General Settings**, read this [documentation](/fluentsmtp-settings). It's recommended to send a test email to confirm the configuration works — see the [dashboard overview](/introduction-to-fluentsmtp-dashboard) for how to do that.

That's all about connecting FluentSMTP with toSend to send emails from your WordPress website.
