# Configure SparkPost with FluentSMTP

With FluentSMTP, you can integrate **SparkPost** into **WordPress** to improve email deliverability and authenticity. SparkPost is one of the leading mailer options for WordPress, that is reliable and easy to set up. This article will guide you through integrating SparkPost into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring SparkPost 

To learn how to configure the **SparkPost** with **FluentSMTP**, follow the steps with screenshots below –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard** in the left sidebar, and select SparkPost from the given **Connection Providers**.

![Connection Providers under Settings from FluentSMTP Dashboard](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/FluentSMTP-dashboard-scaled.webp)

But, if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar** and click the **+ Add Another Connection** button**.** 

![Add Another Connection button](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/Add-Another-Connection-button-under-Settings-section-scaled.webp)

Click the **SparkPost** tab to connect to this provider.

![SparkPost tab under Add Connection page of FluentSMTP Settings](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/SparkPost-tab-under-Connection-Providers-scaled.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your SparkPost.

> Additionally, if you want to change the connection provider, simply click the **Change** button right next to the SparkPost tab at the top of the page.

**Here, you need to provide –**

- **From Email**: The “From Email” should be the email you verified with SparkPost.

- **From Name**: From name can be anything you want. You can use a combination of your name and company name.

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the "From Email" address for any bounced messages due to recipient email issues.

- **API Key**: The API Key has to be obtained from the SparkPost. To get the SparkPost API Key, click the [Get API Key](https://app.sparkpost.com/account/api-keys) link under the API Key box.

Once you provide all the necessary information, click the **Save Connection Settings** button.
And, your **SparkPost** will be connected with your **FluentSMTP** plugin. 

![Explanation of all the options of Add Connection page](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/Add-Connection-page-scaled.webp)

### Get SparkPost API Key

Learn how to get the API Key from **SparkPost** by following the steps with the screenshots below –

First, log into your [SparkPost Account](https://login.sparkpost.com/u/login?state=hKFo2SBBRGo5eUIxbDRRdmVWczJnU1l0d1MxazNXdUFiNTZXb6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDQ5em5yWTRrSW5kc1hHc2RUbUdCV0RtTWQ2TDhTOWlJo2NpZNkgUXR5QVJpOEZoTlpUZ2xCWXdPNWRTeXpzZG5RdmR4Q3k), click the **Configuration** section from the top navbar, select the **API Keys** tab, and press the **Create API Key** button to get your desired API key.

![Dashboard of SparkPost](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/SparkPost-dashboard.webp)

Give your **API Key** a **Name** according to your requirements and click the **Create API** Key button and your API will be created.

![Create API Key page](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/Create-API-Key-page.webp)

Here, you will get your API key in the **New API Key** box. Now, press the **Copy** button and your API Key will be copied. 

![Newly created API Key](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/Get-the-API-Key.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the API Key you copied from SparkPost inside the **API Key** box.

Once you input all the necessary information, finally, click the **Save Connection Settings** button and your Gmail server will be connected to your Fluent SMTP.

![Pasted API Key and Save Connection Settings page](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/paste-API-Key--scaled.webp)

## Details of SparkPost API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the **wp-config.php file** by the following directives.

Simply **copy** the **following** **snippet** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

define( 'FLUENTMAIL_SPARKPOST_API_KEY', '********************' );

![Detail Of Sparkpost Api Settings](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/9.-Detail-of-SparkPost-API-Settings.webp)

## Configured SparkPost 

Here, you can see that your SparkPost is connected and ready to send emails from your WordPress site.

> To learn the details about General Settings, read this [Documentation](/fluentsmtp-settings).
Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this [Documentation](/introduction-to-fluentsmtp-dashboard).

![Preview of connected SparkPost](/images/delivery-connections/configure-sparkpost-with-fluentsmtp/Connected-SaprkPost-scaled.webp)

That’s all about Configuring FluentSMTP with SparkPost to send emails from the WordPress website.
