# Set Up the Netcore Mailer in FluentSMTP

With FluentSMTP, you can integrate **Netcore** (formerly **Pepipost**) into WordPress to improve email deliverability and authenticity. Netcore is one of the leading mailer options for WordPress, that is reliable and easy to set up.

This article will guide you through integrating Netcore into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring Netcore

Go to **Settings** in the FluentSMTP top bar. If you haven't set up any connection yet, the setup wizard opens automatically. Otherwise, click the **+ Add Connection** button.

![Settings Page With Add Connection Button in FluentSMTP](/images/delivery-connections/set-up-the-netcore-mailer-in-fluentsmtp/Configuring-Fluent-SMTP-for-Pepipost.webp)

Then select the **Netcore** icon from the provider grid.

![Netcore Highlighted in the Add Connection Provider Grid](/images/delivery-connections/set-up-the-netcore-mailer-in-fluentsmtp/choose-netcore-2.webp)

> [!Note]
> If you want to change the connection provider, click the **change** button next to the provider logo at the top of the page.

This opens the connection form, where you provide:

- **From Email** and **From Name**
- **Force Sender Name**: Uses this connection's **From Name**, whatever name the sending plugin set.
- **API Key**: Obtained from your Netcore account under **Pepipost API Settings**, described in the next section.

![Sender Settings and Pepipost API Settings on the Add Connection Form](/images/delivery-connections/set-up-the-netcore-mailer-in-fluentsmtp/Fluent-SMTP-for-Pepipost-3.webp)

The rest of this guide walks through getting the **API Key** from Netcore, then pasting it into this form.

### Get Netcore API Key

First, log into your Netcore account and click the **Settings** icon from the left sidebar, then select **Integrations**. Now, open the **API** tab. You will find your key listed under **Name**, or click the **Create API Key** button to generate a new one.

![API Tab in Netcore Integrations Settings](/images/delivery-connections/set-up-the-netcore-mailer-in-fluentsmtp/Screenshot_11.webp)

> [!Note]
> Netcore's dashboard layout may look slightly different from the screenshot above depending on when you signed up. If a menu item has moved, look for **Settings → Integrations → API** in your account.

Then, go back to the **Add Connection** page under **Settings** in the FluentSMTP top bar, and **paste** the API Key you copied from Netcore inside the **API Key** box.

Once you input all the necessary information, click the **Save Connection Settings** button. Your Netcore server will be connected to your FluentSMTP.

![Filled API Key Field With Save Connection Settings Button](/images/delivery-connections/set-up-the-netcore-mailer-in-fluentsmtp/enter-api-key-4.webp)

## Details of Netcore API Settings

- **Store in Database**: By default, this is enabled and strongly recommended. This will keep the information in the database in encrypted format. Tick **Disable Encryption for API Key (Not Recommended)** only if a security plugin rotates your SALT keys and the encrypted value keeps breaking.
- **Store in wp-config.php**: This allows you to store the access key inside the `wp-config.php` file by the following directive.

Copy the snippet below, replace the stars with your own credential, and paste it into your site's `wp-config.php` file.

```
define( 'FLUENTMAIL_PEPIPOST_API_KEY', '********************' );
```

![Netcore API Settings](/images/delivery-connections/set-up-the-netcore-mailer-in-fluentsmtp/netcore-api-settings-5.webp)

That's all about setting up the Netcore Mailer in FluentSMTP to send emails from the WordPress website.
