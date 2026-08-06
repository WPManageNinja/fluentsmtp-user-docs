# Connect toSend With FluentSMTP

Learn how to connect **toSend** as an email sending provider by following the steps with the screenshots below –

## Prerequisites

- FluentSMTP installed and activated ([installation guide](/install-and-activate-fluentsmtp))
- An active toSend account with a verified sending domain

> **Note:** toSend was added as a FluentSMTP connection provider in v2.2.95, and v2.3.0 adds an inline setup guide plus connection-reuse performance improvements for it. Don't have a toSend account yet? [Sign up free](https://tosend.com/?fluent-smtp=connect) — it includes 10,000 emails/month at no cost, then $3 per 10,000 after that, with no credit card required to start.

## Configuring toSend

First, go to **FluentSMTP** from **Settings** of **WordPress Dashboard** in the left sidebar, and select **toSend** from the given **Connection Providers**.

![FluentSMTP Dashboard Connection Providers](/images/delivery-connections/connect-tosend-with-fluentsmtp/01-fluentsmtp-dashboard.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar** and click the **+ Add Another Connection** button.

![Add Another Connection Button](/images/delivery-connections/connect-tosend-with-fluentsmtp/02-add-connection.webp)

Click the **toSend** tab to connect to this provider.

![toSend Provider Tab](/images/delivery-connections/connect-tosend-with-fluentsmtp/03-tosend-tab.webp)

After you choose the provider, it will take you to the **toSend Api Settings** page where you will get all the options to connect your toSend account. FluentSMTP shows an inline setup guide on this screen that walks through the same steps as below.

> **Remember**, if you want to change the connection provider, click the **Change** button right next to the toSend tab at the top of the page.

**Here, you need to provide –**

- **From Email:** The email address you want to send from. This must be on a domain verified in your toSend account.
- **From Name:** This can be anything you want, such as your name or company name.
- **API Key:** The credential obtained from your toSend account, described in the next section.
- **Additional Sender Emails:** Optional — add more From addresses that route through this same toSend connection. Each one must also be on a domain verified in your toSend account.

![toSend Add Connection Page](/images/delivery-connections/connect-tosend-with-fluentsmtp/04-add-connection-page.webp)

## Get API Key from toSend

First, sign in to your [toSend dashboard](https://dash.tosend.com/) and add your sending domain if you haven't already.

Now, publish the SPF, DKIM, and DMARC DNS records toSend shows for that domain, and wait for it to verify.

![toSend Domain Verification](/images/delivery-connections/connect-tosend-with-fluentsmtp/05-tosend-domain-verification.webp)

Then, open [API Keys](https://dash.tosend.com/app/api-keys) in your toSend dashboard, create a new key, and copy its value — keep it safe for the next step.

![toSend API Keys Page](/images/delivery-connections/connect-tosend-with-fluentsmtp/06-tosend-api-keys.webp)

## Configured toSend

Once you paste the **API Key** into FluentSMTP, enter a **From Email** on your verified domain, and click the **Save Connection Settings** button, your toSend connection is ready to send emails.

![Configured toSend Connection](/images/delivery-connections/connect-tosend-with-fluentsmtp/07-configured-tosend.webp)

> To learn the details about **General Settings**, read this [documentation](/fluentsmtp-settings). It's recommended to send a test email to confirm the configuration works — see the [dashboard overview](/introduction-to-fluentsmtp-dashboard) for how to do that.

That's all about connecting FluentSMTP with toSend to send emails from your WordPress website.
