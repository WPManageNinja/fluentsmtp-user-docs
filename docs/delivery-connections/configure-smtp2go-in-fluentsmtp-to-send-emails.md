# Configure SMTP2GO in FluentSMTP to Send Emails

With FluentSMTP, you can integrate **SMTP2GO** into WordPress to improve email deliverability and authenticity. SMTP2GO is a reliable email delivery service that helps businesses and website owners send emails successfully.

This article will guide you through integrating SMTP2GO into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring SMTP2GO

Go to **Settings** in the FluentSMTP top bar. If you haven't set up any connection yet, the setup wizard opens automatically. Otherwise, click the **+ Add Connection** button.

![Settings Page With Add Connection Button in FluentSMTP](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/add-connection-1.webp)

Then select the **SMTP2GO** icon from the provider grid.

![SMTP2GO Highlighted in the Add Connection Provider Grid](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/select-smtp2go-2.webp)

> [!Note]
> If you want to change the connection provider, click the **change** button next to the provider logo at the top of the page.

This opens the connection form, where you provide:

- **From Email** and **From Name**
- **Force Sender Name**: Uses this connection's **From Name**, whatever name the sending plugin set.
- **API Key**: Obtained from your SMTP2GO account via the **Create API Key** link, described in the next section.

![Sender Settings and SMTP2GO API Settings on the Add Connection Form](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/add-credetials-3.webp)

The rest of this guide walks through getting the **API Key** from SMTP2GO, then pasting it into this form.

### Verify Your Domain in SMTP2GO

Before you can create an API Key, SMTP2GO requires a Verified Sender on your account. To learn how to verify your domain, follow the steps below –

First, log into your [SMTP2GO Account](https://app.smtp2go.com/), open the **Sending** section from the left sidebar, select **Verified Senders**, and click the **Add a sender domain** button to add your desired domain for verification.

![Add a Verified Sender in SMTP2GO Dashboard](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/5.-Verified-Senders-scaled.webp)

Now, provide your site domain and click the **Continue with this domain** button.

![Continue With This Domain Button in SMTP2GO](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/6.-Continue-with-this-Domain-button-scaled.webp)

After confirming your domain, SMTP2GO will provide you with **CNAME** records that you need to **copy** and add to your site domain's DNS settings.

> [!Note]
> This domain authorization process, adding the CNAME records, is crucial for protecting site owners and their visitors from spam and ensuring reliable email delivery. To learn more about DNS, read this [article](https://fluentsmtp.com/articles/email-dns-settings/).

Once you have added these CNAME records to your site's DNS settings, click the **Verify** button, and your domain will be verified.

![Verify Button in SMTP2GO Verified Senders](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/7.-Verify-button.webp)

### Get SMTP2GO API Key

After completing domain verification, collect your API Key to finish the configuration. To learn how to get the API key, follow the steps with the screenshots below –

First, log into your [SMTP2GO Account](https://app.smtp2go.com/), open the **Sending** section from the left sidebar, select the **API Keys** tab, and press the **Add API Key** button to create your desired API key.

![API Keys Tab in SMTP2GO Dashboard](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/8.-Api-Keys-scaled.webp)

Give your **API Key** a **Description** as per your requirements and click the **Add API Key** button. Your key will then be created, so copy it using the **Copy** button.

![Copy API Key in SMTP2GO](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/9.-Copy-API-Key-scaled.webp)

Then, go back to the **Add Connection** page under **Settings** in the FluentSMTP top bar, and **paste** the API Key you copied from SMTP2GO inside the **API Key** box.

Once you input all the necessary information, click the **Save Connection Settings** button. Your SMTP2GO server will be connected to your FluentSMTP.

![Filled API Key Field With Save Connection Settings Button](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/10.-Paste-API-Key.webp)

## Details of SMTP2GO API Settings

- **Store in Database**: By default, this is enabled and strongly recommended. This will keep the information in the database in encrypted format. Tick **Disable Encryption for API Key (Not Recommended)** only if a security plugin rotates your SALT keys and the encrypted value keeps breaking.
- **Store in wp-config.php**: This allows you to store the access key inside the `wp-config.php` file by the following directive.

Copy the snippet below, replace the stars with your own credential, and paste it into your site's `wp-config.php` file.

```
define( 'FLUENTMAIL_SMTP2GO_API_KEY', '********************' );
```

![Store in wp-config.php View With define Snippet on the SMTP2GO Connection Form](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/11.-SMTP2GO-API-Settings.webp)

> To learn the details about **General Settings**, read this [documentation](/fluentsmtp-settings). Additionally, it is recommended to send a test email to check whether the configuration is successful. To learn how to send a test email in detail, read this [documentation](/introduction-to-fluentsmtp-dashboard).

That's all about configuring FluentSMTP with SMTP2GO to send emails from the WordPress website.
