# Configure Elastic Email with FluentSMTP

In FluentSMTP, you can configure **Elastic Email** to improve email deliverability and authenticity. Elastic Email provides the API to send emails and it will allow you to send 1000 emails at only $0.10 which is a very low price considering the service they offer.

This article will guide you through integrating **Elastic Email** into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring Elastic Email

To learn how to configure the **Elastic Email** with **FluentSMTP**, follow the steps with screenshots below –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard** in the left sidebar, and select Elastic Email from the given **Connection Providers**.

![Fluent Smtp Dshboard Scaled](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/1.-Fluent-SMTP-dshboard-scaled.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar** and click the **+ Add Another Connection** button**.**

![Add Another Connection Settings Tab Scaled](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/2.-Add-Another-Connection-Settings-tab-scaled.webp)

Click the **Elastic Email** tab to connect to this provider.

![Elastic Email](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/3.-Elastic-Email.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your **Elastic Email**.

> Additionally, if you want to change the connection provider, simply click the **Change** button right next to the **Elastic Email** tab at the top of the page.

**Here, you need to provide –**

- **From Email**: The “From Email” should be the email you verified with **Elastic Email**.

- **From Name**: From name can be anything you want. You can use a combination of your name and company name.

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the "From Email" address for any bounced messages due to recipient email issues.

- **API Key**: The API Key has to be obtained from the **Elastic Email**. To get it you can click on the [Get API Key](https://elasticemail.com/account#/settings/new/manage-api) link under the API Key box.

- **Email Type**: Here, you can provide a clear instruction about the purpose of your email sending by choosing the **Email** **Type** between **Transactional** and **Marketing**.

Once you provide all the necessary information, click the **Save Connection Settings** button.
And, your **Elastic Email** will be connected with your **FluentSMTP** plugin. 

![Add Connection Page](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/4.-Add-connection-page.webp)

### Get SparkPost API Key

Learn how to get the API Key from **Elastic Email** by following the steps with the screenshots below –

First, log into your [Elastic Email Account](https://elasticemail.com/account#/settings/new/manage-api), click the **Settings** section from the left sidebar, and select the **Create additional API Key** option.

![Settings Of Elastic Email Acount Scaled](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/5.-Settings-of-Elastic-Email-Acount-scaled.webp)

Give your **API Key** a **Name** as per your requirements. Also can set the **Expiration** **Date** and access restriction for your API if needed.

Then, give the necessary **Custom** **Permissions** shown in the screenshot below and click the **Create** button and your API will be created.

![Create Api Key Page](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/6.-create-API-key-page.webp)

Here, you will get your API key in the **New API Key** box. Now, press the **Copy** button and your API Key will be copied. 

![Copy Api Key](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/7.-copy-API-key.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the API Key you copied from **Elastic Email** inside the **API Key** box. 

Once you input all the necessary information, finally, click the **Save Connection Settings** button.
And, your **Elastic Email** server will be connected to your **FluentSMTP**.

![Paste Api Key](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/8.-Paste-API-key.webp)

## Details of ElasticEmail API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the **wp-config.php file** by the following directives.

Simply **copy** the **following** **snippet** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

define( 'FLUENTMAIL_ELASTICMAIL_API_KEY', '********************' );

![Detail Of Elastic Email Api Settings](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/9.-Detail-of-Elastic-Email-API-Settings.webp)

## Configured Elastic Email 

Here, you can see that your Elastic Email is connected and ready to send emails from your WordPress site.

> To learn the details about General Settings, read this [Documentation](/fluentsmtp-settings).
Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this [Documentation](/introduction-to-fluentsmtp-dashboard).

![Configured Elastic Email And General Settings Scaled](/images/delivery-connections/configure-elastic-email-with-fluentsmtp/10.-Configured-Elastic-Email-and-General-Settings-scaled.webp)

That’s all about Configuring FluentSMTP with Elastic Email to send emails from the WordPress website.

