# Connect Cloudflare With FluentSMTP

Learn how to connect **Cloudflare Email Sending** as an email sending provider by following the steps with the screenshots below –

## Prerequisites

- FluentSMTP installed and activated ([installation guide](/install-and-activate-fluentsmtp))
- An active Cloudflare account with a sending domain added and **Email Sending** enabled for it (SPF, DKIM, and DMARC records published and verified)

> **Note:** Cloudflare was added as a FluentSMTP connection provider in v2.3.0. This connects to Cloudflare's Email Sending API — a different product from Cloudflare Email Routing or Workers.

## Configuring Cloudflare

First, go to **FluentSMTP** from **Settings** of **WordPress Dashboard** in the left sidebar, and select **Cloudflare** from the given **Connection Providers**.

![FluentSMTP Dashboard Connection Providers](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/01-fluentsmtp-dashboard.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar** and click the **+ Add Another Connection** button.

![Add Another Connection Button](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/02-add-connection.webp)

Click the **Cloudflare** tab to connect to this provider.

![Cloudflare Provider Tab](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/03-cloudflare-tab.webp)

After you choose the provider, it will take you to the **Cloudflare Email API Settings** page where you will get all the options to connect your Cloudflare account. FluentSMTP shows an inline setup guide on this screen that walks through the same steps as below.

> **Remember**, if you want to change the connection provider, click the **Change** button right next to the Cloudflare tab at the top of the page.

**Here, you need to provide –**

- **From Email:** The email address you want to send from. This must be on a domain that is verified for Email Sending in your Cloudflare account.
- **From Name:** This can be anything you want, such as your name or company name.
- **API Token:** The Cloudflare API token obtained from your account, described in the next section.
- **Cloudflare Account ID:** Your Cloudflare account's ID, also obtained in the next section.

![Cloudflare Add Connection Page](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/04-add-connection-page.webp)

## Get API Credentials from Cloudflare

First, log into your [Cloudflare dashboard](https://dash.cloudflare.com/) and open **API Tokens** from your account settings.

Now, click the **Create Token** button.

![Cloudflare API Tokens Page](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/05-cloudflare-api-tokens.webp)

Set **Permission policies** to **Custom**, then add a policy with scope **Entire Account**, select **Email & Messaging → Email Sending**, and check both **Read** and **Edit**.

![Cloudflare Custom Token Permissions](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/06-cloudflare-token-permissions.webp)

Then, save the token and copy it — Cloudflare shows it only once. Also copy your **Account ID**, shown on the same account's dashboard.

> **Remember**, the sender domain must be added to this Cloudflare account with Email Sending enabled, and its SPF, DKIM, and DMARC records published, before FluentSMTP can send through it.

## Configured Cloudflare

Once you paste the **API Token** and **Cloudflare Account ID** into FluentSMTP and click the **Save Connection Settings** button, FluentSMTP verifies the token against Cloudflare and shows a confirmation. Your Cloudflare connection is now ready to send emails.

![Configured Cloudflare Connection](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/07-configured-cloudflare.webp)

> To learn the details about **General Settings**, read this [documentation](/fluentsmtp-settings). It's recommended to send a test email to confirm the configuration works — see the [dashboard overview](/introduction-to-fluentsmtp-dashboard) for how to do that.

That's all about connecting FluentSMTP with Cloudflare to send emails from your WordPress website.
