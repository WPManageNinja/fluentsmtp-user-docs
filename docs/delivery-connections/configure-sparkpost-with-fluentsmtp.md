# Configure SparkPost with FluentSMTP

With FluentSMTP, you can integrate **SparkPost** into **WordPress** to improve email deliverability and authenticity. SparkPost is one of the leading mailer options for WordPress, that is reliable and easy to set up. 

This article will guide you through integrating SparkPost into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring SparkPost 

To learn how to configure the **SparkPost** with **FluentSMTP**, follow the steps with screenshots below –

Go to **Settings** in the FluentSMTP top bar. If you haven't set up any connection yet, the setup wizard opens automatically. Otherwise, click the **+ Add Connection** button.

![Add Connection Button on FluentSMTP Settings Page](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/Add-Another-Connection-button-under-Settings-section-scaled.webp)

Then select the **SparkPost** icon from the provider grid.

![SparkPost Highlighted in the Add Connection Provider Grid](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/SparkPost-tab-under-Connection-Providers-scaled.webp)

> [!Note]
> If you want to change the connection provider, click the **change** button next to the provider logo at the top of the page.

This opens the connection form, where you provide:

- **From Email** and **From Name**
- **Force Sender Name**: uses this connection's **From Name**, whatever name the sending plugin set.
- **API Key**: obtained from your SparkPost account via the **Get API Key** link, described in the next section.

![Sender Settings and SparkPost API Settings on the Add Connection Form](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/Add-Connection-page-scaled.webp)

The rest of this guide walks through getting the **API Key** from SparkPost, then pasting it into this form.

### Get SparkPost API Key

Learn how to get the API Key from **SparkPost** by following the steps with the screenshots below –

First, log into your [SparkPost Account](https://login.sparkpost.com/u/login?state=hKFo2SBBRGo5eUIxbDRRdmVWczJnU1l0d1MxazNXdUFiNTZXb6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDQ5em5yWTRrSW5kc1hHc2RUbUdCV0RtTWQ2TDhTOWlJo2NpZNkgUXR5QVJpOEZoTlpUZ2xCWXdPNWRTeXpzZG5RdmR4Q3k), click the **Configuration** section from the top navbar, select the **API Keys** tab, and press the **Create API Key** button to get your desired API key.

![Dashboard of SparkPost](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/SparkPost-dashboard.webp)

Give your **API Key** a **Name** according to your requirements and click the **Create API Key** button, and your API will be created.

![Create API Key page](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/Create-API-Key-page.webp)

Here, you will get your API key in the **New API Key** box. Now, press the **Copy** button and your API Key will be copied. 

![Newly created API Key](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/Get-the-API-Key.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the API Key you copied from SparkPost inside the **API Key** box.

Once you input all the necessary information, finally, click the **Save Connection Settings** button and your SparkPost server will be connected to your FluentSMTP.

![Filled API Key Field with Save Connection Settings Button](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/paste-API-Key--scaled.webp)

## Details of SparkPost API Settings

- **Store in Database**: By default, this is enabled and strongly recommended. This will keep the information in the database in encrypted format. Tick **Disable Encryption for API Key (Not Recommended)** only if a security plugin rotates your SALT keys and the encrypted value keeps breaking.
- **Store in wp-config.php**: This allows you to store the access key inside the `wp-config.php` file by the following directive.

Copy the snippet below, replace the stars with your own credential, and paste it into your site's `wp-config.php` file.

```
define( 'FLUENTMAIL_SPARKPOST_API_KEY', '********************' );
```

![Store in wp-config.php View with define Snippet on the SparkPost Connection Form](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/9.-Detail-of-SparkPost-API-Settings.webp)



That’s all about Configuring FluentSMTP with SparkPost to send emails from the WordPress website.
