# Setup Brevo Mailer with FluentSMTP

In FluentSMTP, you can integrate **Brevo Mailer** to improve email deliverability and authenticity. **Brevo Mailer** (previously recognized as **Sendinblue**) is one of the leading mailer options for WordPress, that is reliable and easy to set up.

This article will guide you through integrating Brevo Mailer into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring Brevo Mailer 

To learn how to configure the **Brevo Mailer** with **FluentSMTP**, follow the steps with screenshots below –

Go to **Settings** in the FluentSMTP top bar. If you haven't set up any connection yet, the setup wizard opens automatically. Otherwise, click the **+ Add Connection** button.

![Add Connection Button on FluentSMTP Settings Page](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/2.-Add-Connection-Settings-tab-scaled.webp)

Then select the **Brevo** icon from the provider grid.

![Brevo Highlighted in the Add Connection Provider Grid](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/3.-Brevo-Mailer.webp)

> [!Note]
> If you want to change the connection provider, click the **change** button next to the provider logo at the top of the page.

This opens the connection form, where you provide:

- **From Email**: the email address you've verified with **Brevo**.
- **From Name**: any name you want, such as a combination of your name and company name.
- **Force Sender Name**: uses this connection's **From Name**, whatever name the sending plugin set.
- **API Key**: obtained from your Brevo account, described in the next section.

![Sender Settings and Sendinblue API Settings on the Add Connection Form](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/4.-Add-connection-page.webp)

The rest of this guide walks through getting the **API Key** from Brevo, then pasting it into this form.

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

> [!Note]
> To learn the details about General Settings, read this [Documentation](/fluentsmtp-settings). Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this [Documentation](/introduction-to-fluentsmtp-dashboard).

![Configured Brevo Mailer And General Settings Scaled](/images/delivery-connections/setup-brevo-mailer-with-fluentsmtp/11.-Configured-Brevo-Mailer-and-General-Settings-scaled.webp)

That’s all about Configuring FluentSMTP with Brevo Mailer to send emails from the WordPress website.
