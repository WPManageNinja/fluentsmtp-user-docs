# Setup the SendGrid Driver with FluentSMTP

In FluentSMTP, you can configure **SendGrid** to improve email deliverability and authenticity. SendGrid is one of the leading mailer options for WordPress, SendGrid is reliable and easy to set up.

This article will guide you through integrating **SendGrid** into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring SendGrid

To learn how to configure the **SendGrid** with **FluentSMTP**, follow the steps with screenshots below – 

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard** in the left sidebar, and select SendGrid from the given **Connection Providers**.

![Fluent Smtp Dshboard 2 Scaled](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/1.-Fluent-SMTP-dshboard-2-scaled.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar** and click the **+ Add Another Connection** button**.**

![Add Another Connection Settings Tab 3 Scaled](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/2.-Add-Another-Connection-Settings-tab-3-scaled.webp)

Click the **SendGrid** tab to connect to this provider.

![Sendgrid](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/3.-Sendgrid.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your **SendGrid**.

> Additionally, if you want to change the connection provider, simply click the **Change** button right next to the **SendGrid** tab at the top of the page.

**Here, you need to provide –**

- **From Email**: The “From Email” should be the email you verified with **SendGrid**.

- **From Name**: From name can be anything you want. You can use a combination of your name and company name.

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the "From Email" address for any bounced messages due to recipient email issues.

- **API Key**: The API Key has to be obtained from the **SendGrid**. To get it you can click on the [Create API Key](https://app.sendgrid.com/settings/api_keys) link under the API Key box.

Once you provide all the necessary information, click the **Save Connection Settings** button.
And, your **SendGrid** will be connected with your **FluentSMTP** plugin. 

![Add Connection Page 2](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/4.-Add-Connection-Page-2.webp)

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

![Paste Api Key](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/8.-Paste-API-Key.webp)

## Details of SendGrid API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the **wp-config.php file** by the following directives.

Simply **copy** the **following** **snippet** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

define( 'FLUENTMAIL_SENDGRID_API_KEY', '********************' );

![Detail Of Sendgrid Api Settings](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/9.-Detail-of-SendGrid-API-Settings-.webp)

## Configured SendGrid

Here, you can see that your SendGrid is connected and ready to send emails from your WordPress site.

> To learn the details about General Settings, read this [Documentation](/fluentsmtp-settings).
Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this [Documentation](/introduction-to-fluentsmtp-dashboard).

![Added Sendgrid General Settings Scaled](/images/delivery-connections/setup-the-sendgrid-driver-with-fluentsmtp/10.-Added-Sendgrid-General-Settings-scaled.webp)

That’s all about Configuring FluentSMTP with SendGrid to send emails from the WordPress website.
