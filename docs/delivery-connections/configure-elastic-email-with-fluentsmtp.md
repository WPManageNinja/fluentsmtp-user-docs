# Configure Elastic Email with FluentSMTP

With FluentSMTP, you can integrate **Elastic Email** into WordPress to improve email deliverability and authenticity. Elastic Email provides the API to send emails and it will allow you to send 1000 emails at only $0.10, which is a very low price considering the service they offer.

This article will guide you through integrating Elastic Email into WordPress using the FluentSMTP plugin to send emails via SMTP.


## Configuring Elastic Email

Go to **Settings** in the FluentSMTP top bar. If you haven't set up any connection yet, the setup wizard opens automatically. Otherwise, click the **+ Add Connection** button.

![settings page with add connection button](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/1.webp)

Then select the **Elastic Email** icon from the provider grid.

![elastic email highlighted in the add connection provider grid](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/2.webp)

> [!Note]
> If you want to change the connection provider, click the **change** button next to the provider logo at the top of the page.

This opens the connection form, where you provide:

- **From Email** and **From Name**
- **Force Sender Name**: uses this connection's **From Name**, whatever name the sending plugin set.
- **API Key**: obtained from your Elastic Email account via the **Get API Key** link, described in the next section.
- **Email Type**: choose **Transactional** for individual messages like password resets and order confirmations, or **Marketing** for bulk emails like newsletters and campaigns.

![empty add connection form for elastic email](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/3.webp)

The rest of this guide walks through getting the **API Key** from Elastic Email, then pasting it into this form.

### Get Elastic Email API Key

Learn how to get the API Key from **Elastic Email** by following the steps with the screenshots below –

First, log into your [Elastic Email Account](https://elasticemail.com/account#/settings/new/manage-api), click the **Settings** section from the left sidebar, and select the **Create additional API Key** option.

![settings tab in elastic email account](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/4.webp)

Give your **API Key** a **Name** as per your requirements. You can also set the **Expiration Date** and access restrictions if needed. Then give the necessary **Custom Permissions** and click the **Create** button, and your API key will be created.

![create api key page in elastic email](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/5.webp)

Here, you will get your API key in the **New API Key** box. Press the **Copy** button and your API Key will be copied.

![copy api key in elastic email](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/6.webp)

Then, go back to the **Add Connection** page under **Settings** in the FluentSMTP top bar, and **paste** the API Key you copied from Elastic Email inside the **API Key** box.

Once you input all the necessary information, click the **Save Connection Settings** button. Your Elastic Email server will be connected to your FluentSMTP.

![filled add connection form ready to save](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/7.webp)

## Details of Elastic Email API Settings

- **Store in Database**: By default, this is enabled and strongly recommended. This will keep the information in the database in encrypted format. Tick **Disable Encryption for API Key (Not Recommended)** only if a security plugin rotates your SALT keys and the encrypted value keeps breaking.
- **Store in wp-config.php**: This allows you to store the access key inside the `wp-config.php` file by the following directive.

Copy the snippet below, replace the stars with your own credential, and paste it into your site's `wp-config.php` file.

```
define( 'FLUENTMAIL_ELASTICMAIL_API_KEY', '********************' );
```

![wp-config.php snippet in add connection page](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/8.webp)

That's all about configuring FluentSMTP with Elastic Email to send emails from the WordPress website.
