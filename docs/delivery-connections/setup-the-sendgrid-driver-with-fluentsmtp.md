# Setup the SendGrid Driver with FluentSMTP

In FluentSMTP, you can configure **SendGrid** to improve email deliverability and authenticity. SendGrid is one of the leading mailer options for WordPress, SendGrid is reliable and easy to set up.

This article will guide you through integrating **SendGrid** into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring SendGrid

To learn how to configure the **SendGrid** with **FluentSMTP**, follow the steps with screenshots below – 

Go to **Settings** in the FluentSMTP top bar. If you haven't set up any connection yet, the setup wizard opens automatically. Otherwise, click the **+ Add Connection** button.

![Add Connection Button on FluentSMTP Settings Page](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/2.-Add-Another-Connection-Settings-tab-3-scaled.webp)

Then select the **SendGrid** icon from the provider grid.

![SendGrid Highlighted in the Add Connection Provider Grid](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/3.-Sendgrid.webp)

> [!Note]
> If you want to change the connection provider, click the **change** button next to the provider logo at the top of the page.

This opens the connection form, where you provide:

- **From Email** and **From Name**
- **Force Sender Name**: uses this connection's **From Name**, whatever name the sending plugin set.
- **API Key**: obtained from your SendGrid account via the **Create API Key** link, described in the next section. The key only needs **Mail Send** permission.

![Sender Settings and SendGrid API Settings on the Add Connection Form](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/4.-Add-Connection-Page-2.webp)

The rest of this guide walks through getting the **API Key** from SendGrid, then pasting it into this form.

### Get SendGrid API Key

Learn how to get the API Key from **SendGrid** by following the steps with the screenshots below –

First, log into your [SendGrid Account](https://app.sendgrid.com/settings/api_keys), click the **Settings** section from the left sidebar, open the **API Keys** page, and click the **Create API Key** button.

![Sendgrids Settings Api Keys Generate Api Key Button](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/5.-SendGrids-Settings-API-keys-Generate-API-key-button.webp)

Give your **API Key** a **Name** as per your requirements.

Then, give the necessary **Permissions** according to your needs, click the **Create & View** button, and your API key will be created.

![Provide Name Permission For Api](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/6.-Provide-Name-Permission-for-API.webp)

Here, you will get your created API key, simply **Copy** it.

![Copy Api Key](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/7.-Copy-API-Key.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the API Key you copied from **SendGrid** inside the **API Key** box.

Once you input all the necessary information, finally, click the **Save Connection Settings** button.
And, your **SendGrid** server will be connected to your **FluentSMTP**.

![Filled API Key Field with Save Connection Settings Button](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/8.-Paste-API-Key.webp)

## Details of SendGrid API Settings

- **Store in Database**: By default, this is enabled and strongly recommended. This will keep the information in the database in encrypted format. Tick **Disable Encryption for API Key (Not Recommended)** only if a security plugin rotates your SALT keys and the encrypted value keeps breaking.
- **Store in wp-config.php**: This allows you to store the access key inside the `wp-config.php` file by the following directive.

Copy the snippet below, replace the stars with your own credential, and paste it into your site's `wp-config.php` file.

```
define( 'FLUENTMAIL_SENDGRID_API_KEY', '********************' );
```

![Store in wp-config.php View with define Snippet on the SendGrid Connection Form](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/9.-Detail-of-SendGrid-API-Settings.webp)

