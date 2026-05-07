# Setup Brevo Mailer with FluentSMTP

In FluentSMTP, you can integrate **Brevo Mailer** to improve email deliverability and authenticity. **Brevo Mailer** (previously recognized as **Sendinblue**) is one of the leading mailer options for WordPress, that is reliable and easy to set up.

This article will guide you through integrating Brevo Mailer into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring Brevo Mailer 

To learn how to configure the **Brevo Mailer** with **FluentSMTP**, follow the steps with screenshots below –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard** in the left sidebar, and select Brevo Mailer from the given **Connection Providers**.

![Fluent Smtp Dshboard Scaled](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/1.-Fluent-SMTP-dshboard-scaled.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar** and click the **+ Add Another Connection** button**.** 

![Add Another Connection Settings Tab Scaled](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/2.-Add-Another-Connection-Settings-tab-scaled.webp)

Click the **Brevo Mailer** tab to connect to this provider.

![Brevo Mailer](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/3.-Brevo-Mailer.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your **Brevo Mailer**.

> Additionally, if you want to change the connection provider, simply click the **Change** button right next to the **Brevo Mailer** tab at the top of the page. 

**Here, you need to provide –**

- **From Email**: The “From Email” should be the email you verified with **Brevo Mailer**.

- **From Name**: From name can be anything you want. You can use a combination of your name and company name.

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the "From Email" address for any bounced messages due to recipient email issues.

- **API Key**: The API Key has to be obtained from the SparkPost. To get it you can click on the [Get V3 API Key](https://app.brevo.com/settings/keys/api) link under the API Key box.

Once you provide all the necessary information, click the **Save Connection Settings** button.
And, your **Brevo Mailer** will be connected with your Fluent SMTP plugin. 

![Add Connection Page](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/4.-Add-connection-page.webp)

### Get Brevo Mailer API Key

Learn how to get the API Key from **Brevo Mailer** by following the steps with the screenshots below –

First, log into your [Brevo Mailer Account](https://app.brevo.com/settings/keys/api), click the **Company Name** in the top right corner, and open the **SMTP & API** tab.

![Smtp Api Option In Brevo Scaled](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/5.-SMTP-API-option-in-Brevo-scaled.webp)

Now, go to the **API Keys** tab and click the **Generate a new API key** button.

![Api Keys Tab Generate New Key Button Scaled](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/6.-API-Keys-tab-Generate-new-key-button-scaled.webp)

Give your **API Key** a **Name** as per your requirements and click the **Generate** button and your API will be created.

![Name Api Key](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/7.-Name-API-key-.webp)

Here, you will get your API key. Now, press the **Copy** button and your API Key will be copied. 

![Copy Api Key](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/8.-Copy-API-key.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the API Key you copied from **Brevo Mailer** inside the **API Key** box.

Once you input all the necessary information, finally, click the **Save Connection Settings** button.
And, your **Brevo Mailer** server will be connected to your Fluent SMTP.

![Paste Api Key](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/9.-Paste-API-key.webp)

## Details of Sendinblue API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the **wp-config.php file** by the following directives.

Simply **copy** the **following** **snippet** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

```
define( 'FLUENTMAIL_SENDINBLUE_API_KEY', '********************' );
```

![Detail Of Sendinblue Api Settings](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/10.-Detail-of-Sendinblue-API-Settings.webp)

## Configured Brevo Mailer 

Here, you can see that your Brevo Mailer is connected and ready to send emails from your WordPress site.

> To learn the details about General Settings, read this [Documentation](/fluentsmtp-settings).
Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this [Documentation](/introduction-to-fluentsmtp-dashboard).

![Configured Brevo Mailer And General Settings Scaled](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/11.-Configured-Brevo-Mailer-and-General-Settings-scaled.webp)

That’s all about Configuring FluentSMTP with Brevo Mailer to send emails from the WordPress website.
