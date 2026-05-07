# Configure SMTP2GO in FluentSMTP to Send Emails

With FluentSMTP, you can integrate SMTP2GO into WordPress to improve email deliverability and authenticity. SMTP2GO is a reliable email delivery service that helps businesses and website owners send emails successfully. This article will guide you through integrating SMTP2GO into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring FluentSMTP for SMTP2GO

To learn how to configure the **SMTP2GO** with **FluentSMTP.** follow the steps with screenshots below –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard** in the left sidebar, and select **SMTP2GO** from the given **Connection Providers**.

![Fluentsmtp Dashboard Scaled](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/1.-FluentSMTP-Dashboard-scaled.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar** and click the **+ Add Another Connection** button**.**

![Add Another Connection Settings Tab Scaled](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/2.-Add-Another-Connection-Settings-tab-scaled.webp)

Click the **SMTP2GO** tab to connect to this provider.

![Add Smtp2Go Connection Scaled](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/3.-Add-SMTP2GO-connection-scaled.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your SMTP2GO.

> Additionally, if you want to change the connection provider, simply click the **Change** button right next to the SMTP2GO tab at the top of the page. 

Here, you need to provide –

- **From Email**: The “From Email” should be the email you verified with SMTP2GO.

- **From Name**: From name, you can choose anything you want. You can use a combination of your name and company name.

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the "From Email" address for any bounced messages due to recipient email issues.

- **API Key**: The API Key has to be obtained from the SMTP2GO. You can click the [Create API Key](https://app-eu.smtp2go.com/sending/apikeys/) link under the API Key box to get it.

Once you provide all the necessary information, click the **Save Connection Settings** button and your SMTP2GO will be connected with your Fluent SMTP plugin. 

![Add Connection Page](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/4.-Add-connection-page.webp)

### Verify Your Domain in SMTP2GO

Before you collect the API Key to send emails, you will need to add a Verified Sender to your account.  To learn how to verify the site domain, follow the steps below – 

First, log into your [SMTP2GO Account](https://app.smtp2go.com/), open the **Sending** section from the left sidebar, select the **Verified Senders** tab, and press the **Add a Sender domain** button to add your desired domain for verification.

![Verified Senders Scaled](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/5.-Verified-Senders-scaled.webp)

Now, provide ur site domain here and click the **Continue with this domain** button.

![Continue With This Domain Button Scaled](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/6.-Continue-with-this-Domain-button-scaled.webp)

After confirming your domain, SMTP2GO will then provide you with three **CNAME** records that you need to **Copy** and **add** to your **Site Domain’s DNS Settings**. 

> **Remember**, this domain authorization process by adding the **CNAME** records is crucial for protecting site owners and their visitors from spam and ensuring reliable email delivery. To learn more about **DNS (Domain Name System/Server**), read this [article](https://fluentsmtp.com/articles/email-dns-settings/).

Once you have added these CNAME records to the Site’s DNS Settings, click the **Verify** button, and your domain will be verified.

![Verify Button](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/7.-Verify-button.webp)

### Get SMTP2GO API Key 

After completing the domain verification, collect your API Key for completing the configuration. To learn how to get the API key, follow the steps with the screenshots below – 

First, log into your [SMTP2GO Account](https://app.smtp2go.com/), open the **Sending** section from the left sidebar, select the **API Keys** tab, and press the **Add API Key** button to get your desired API Key.

![Api Keys Scaled](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/8.-Api-Keys-scaled.webp)

Here, you will get your **API key** in the **API Key** box under the **Details** tab. Now, copy your API Key by clicking the **Copy** button.

Then, give your **API Key** a **Description** as per your requirements and click the **Add API** **Key** button and your API will be created.

![Copy Api Key Scaled](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/9.-Copy-API-Key-scaled.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the API Key you copied from SMTP2GO inside the **API Key** box.

Once you input all the necessary information, finally, click the **Save Connection Settings** button and your SMTP2Go server will be connected to your Fluent SMTP.

![Paste Api Key](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/10.-Paste-API-Key.webp)

## Details of SMTP2GO API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the **wp-config.php file** by the following directives.

Simply **copy** the **following** **snippet** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

define( 'FLUENTMAIL_SMTP2GO_API_KEY', '********************' );

![Smtp2Go Api Settings](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/11.-SMTP2GO-API-Settings.webp)

## Configured SMTP2GO in FluentSMTP

Here, you can see that your SMTP2GO is connected and ready to send emails from your WordPress site.

> To learn the details about General Settings, read this [Documentation](/fluentsmtp-settings).
Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this [Documentation](/introduction-to-fluentsmtp-dashboard).

![Configured Smtp2Go Scaled](/images/delivery-connections/configure-smtp2go-in-fluentsmtp-to-send-emails/12.-Configured-SMTP2GO-scaled.webp)

That’s all about Configuring FluentSMTP with SMTP2GO to send emails from the WordPress website.