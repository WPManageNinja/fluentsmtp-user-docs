# Connect Cloudflare With FluentSMTP

In FluentSMTP, you can integrate **Cloudflare** to improve email deliverability and authenticity. Cloudflare connects through its own **Email Sending API**, making it a fast and reliable mailer option for WordPress.

This article will guide you through integrating Cloudflare into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Prerequisites

- FluentSMTP installed and activated ([installation guide](/install-and-activate-fluentsmtp))
- An active Cloudflare account with a sending domain added and **Email Sending** enabled for it (SPF, DKIM, and DMARC records published and verified)

## Configuring Cloudflare

To learn how to configure **Cloudflare** with **FluentSMTP**, follow the steps with screenshots below –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard** in the left sidebar, and select **Cloudflare** from the given **Connection Providers**. But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar** and click the **+ Add Another Connection** button first.

![Cloudflare Selected in Connection Providers](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/01-select-cloudflare-provider.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your **Cloudflare**.

> Additionally, if you want to change the connection provider, simply click the **change** button right next to the **Cloudflare** tab.

**Here, you need to provide –**

- **From Email**: The "From Email" should be on a domain that is verified for Email Sending in your Cloudflare account.

- **From Name**: From name can be anything you want. You can use a combination of your name and company name.

- **Force Sender Name**: Check the box to always use the "From Name" above for outgoing emails, regardless of what the sending code specifies.

- **API Token**: The API Token has to be obtained from **Cloudflare**. To learn how to get it, follow the next section below.

- **Cloudflare Account ID**: This also has to be obtained from **Cloudflare**, alongside your API Token.

Once you provide all the necessary information, click the **Save Connection Settings** button.
And, your **Cloudflare** will be connected with your **FluentSMTP** plugin.

![Cloudflare Add Connection Page](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/02-cloudflare-connection-form.webp)

### Get API Token from Cloudflare

Learn how to get the API Token from **Cloudflare** by following the steps with the screenshots below –

First, log into your [Cloudflare Account API Tokens](https://dash.cloudflare.com/) page and click the **Create Token** button.

![Create Token Button on Cloudflare Account API Tokens Page](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/03-cloudflare-api-tokens.webp)

Now, give your token a **Token name**, set **Permission policies** to **Custom**, add a policy scoped to **Entire Account**, then search for **Email** and check both **Read** and **Edit** under **Email & Messaging → Email Sending**.

![Custom Permission Policy for Email Sending](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/04-cloudflare-token-permissions.webp)

Then, review your token on the **Review token** page, and click the **Create token** button.

![Review Token Page with Create Token Button](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/05-cloudflare-review-token.webp)

Here is your **Account ID** and **API Token**, copy both by clicking the **copy** icon next to each.

> **Remember**, make sure you copy the token and store it somewhere safe and accessible, as it is only displayed once. If you lose it, you'll need to generate a new one by repeating the previous steps.

![Token Created Successfully Dialog with Account ID and API Token](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/06-cloudflare-token-created.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the **API Token** and **Cloudflare Account ID** you copied from **Cloudflare** into their respective boxes.

Once you input all the necessary information, finally, click the **Save Connection Settings** button.
And, your **Cloudflare Server** will be connected to your **FluentSMTP**.

> **Remember**, the sender domain must be added to this Cloudflare account with Email Sending enabled, and its SPF, DKIM, and DMARC records published, before FluentSMTP can send through it.

## Details of Cloudflare API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the **wp-config.php file** by the following directives.

Simply **copy** the **following** **snippet** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

```
define( 'FLUENTMAIL_CLOUDFLARE_API_KEY', '********************' );
define( 'FLUENTMAIL_CLOUDFLARE_ACCOUNT_ID', '********************' );
```

## Configured Cloudflare

Here, you can see that your **Cloudflare** is connected and ready to send emails from your WordPress site. Click the **eye icon** next to the connection under **Active Email Connections** to expand **Connection Details** and confirm the **Connection Status** reads **API Token is valid and active**.

![Configured Cloudflare and Connection Details](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/07-configured-cloudflare.webp)

> To learn the details about **General Settings**, read this [Documentation](/fluentsmtp-settings).
Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this [Documentation](/introduction-to-fluentsmtp-dashboard).

![Send Test Email](/images/delivery-connections/connect-cloudflare-with-fluentsmtp/08-send-test-email.webp)

That's all about Configuring FluentSMTP with **Cloudflare** to send emails from the WordPress website.
