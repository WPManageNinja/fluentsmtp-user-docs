# Configure Postmark in FluentSMTP

With FluentSMTP, you can integrate **Postmark** into WordPress to improve email deliverability and authenticity. Postmark is one of the leading mailer options for WordPress, that is reliable and easy to set up.

This article will guide you through integrating Postmark into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Prerequisites

- FluentSMTP installed and activated ([installation guide](/install-and-activate-fluentsmtp))
- An active Postmark account

## Configuring Postmark

Go to **Settings** in the FluentSMTP top bar. If you haven't set up any connection yet, the setup wizard opens automatically. Otherwise, click the **+ Add Connection** button.

![settings page with add connection button](/images/delivery-connections/configure-postmark-in-fluentsmtp/1.webp)

Then select the **Postmark** icon from the provider grid.

![postmark highlighted in the add connection provider grid](/images/delivery-connections/configure-postmark-in-fluentsmtp/2.webp)

> [!Note]
> If you want to change the connection provider, click the **change** button next to the provider logo at the top of the page.

This opens the connection form, where you provide:

- **From Email** and **From Name**
- **Force Sender Name**: Uses this connection's **From Name**, whatever name the sending plugin set.
- **API Key**: Obtained from your Postmark account via the **Postmark Server** link, described in the next section.
- **Track Opens**: Adds an open-tracking header to emails sent through Postmark (HTML emails only).
- **Track Links**: Adds a link-tracking header to emails sent through Postmark (HTML emails only).
- **Message Stream**: Postmark separates email into **Transactional Stream** for individual messages like password resets and order confirmations, and **Broadcast Stream** for bulk emails like newsletters and marketing campaigns. Enter the **Message Stream ID** that matches the type of email you plan to send. This defaults to **outbound**.

![empty add connection form for postmark](/images/delivery-connections/configure-postmark-in-fluentsmtp/3.webp)

The rest of this guide walks through getting the **API Key** from Postmark, then pasting it into this form.

### Get Postmark API Key

First, log into your [Postmark Account](https://account.postmarkapp.com/servers), and select your **Server** (e.g., **My First Server**). If you want to create a new server, click the **Create Server** button.

![server list in postmark account](/images/delivery-connections/configure-postmark-in-fluentsmtp/4.webp)

Name your server, pick a color label, and choose a **Server Type**: **Live** to deliver messages to recipients, or **Sandbox** to send messages to a test inbox. This choice is permanent, so pick the one that matches how you plan to use this server. Then click the **Create Server** button.

![create server dialog in postmark account](/images/delivery-connections/configure-postmark-in-fluentsmtp/5.webp)

Now, open the **API Tokens** tab. You will find your key under **Server API tokens**, next to **copy** it. If you want to generate a new key, click the **Generate another token** button.

![api tokens tab in postmark server](/images/delivery-connections/configure-postmark-in-fluentsmtp/6.webp)

Then, go back to the **Add Connection** page under **Settings** in the FluentSMTP top bar, and **paste** the API Key you copied from Postmark inside the **API Key** box.

Once you input all the necessary information, click the **Save Connection Settings** button. Your Postmark server will be connected to your FluentSMTP.

![filled add connection form ready to save](/images/delivery-connections/configure-postmark-in-fluentsmtp/7.webp)

## Details of Postmark API Settings

- **Store in Database**: By default, this is enabled and strongly recommended. This will keep the information in the database in encrypted format. Tick **Disable Encryption for API Key (Not Recommended)** only if a security plugin rotates your SALT keys and the encrypted value keeps breaking.
- **Store in wp-config.php**: This allows you to store the access key inside the `wp-config.php` file by the following directive.

Copy the snippet below, replace the stars with your own credential, and paste it into your site's `wp-config.php` file.

```
define( 'FLUENTMAIL_POSTMARK_API_KEY', '********************' );
```

![wp-config.php snippet in edit connection page](/images/delivery-connections/configure-postmark-in-fluentsmtp/8.webp)

## Configured Postmark

Here, you can see that your **Postmark** connection is listed under **Active Email Connections**. Click the **…** menu next to it to **Set as Default**, **Set as Fallback**, **View**, or **Delete** the connection.

> To learn the details about **General Settings**, read this [documentation](/fluentsmtp-settings). Additionally, it is recommended to send a test email to check whether the configuration is successful, to learn how to send a test email in detail, read this [documentation](/introduction-to-fluentsmtp-dashboard).

![postmark connection listed in fluentsmtp settings](/images/delivery-connections/configure-postmark-in-fluentsmtp/9.webp)

That's all about configuring FluentSMTP with Postmark to send emails from the WordPress website.
