# Configure Postmark in FluentSMTP

In FluentSMTP, you can configure **Postmark** to improve email deliverability and authenticity. Postmark is one of the leading mailer options for WordPress.

This article will guide you through integrating Postmark into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring Postmark

To learn how to configure the **Postmark** with **FluentSMTP**, follow the steps with screenshots below –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard** in the left sidebar, and select **Postmark** from the given **Connection Providers**.

![Fluent Smtp Dshboard Scaled](/images/delivery-connections/configure-postmark-in-fluentsmtp/1.-Fluent-SMTP-dshboard-scaled.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar** and click the **+ Add Another Connection** button**.**

![Add Another Connection Settings Tab Scaled](/images/delivery-connections/configure-postmark-in-fluentsmtp/2.-Add-Another-Connection-Settings-tab-scaled.webp)

Click the **Postmark** tab to connect to this provider.

![Postmark](/images/delivery-connections/configure-postmark-in-fluentsmtp/3.-Postmark-.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your SparkPost.

> Additionally, if you want to change the connection provider, simply click the **Change** button right next to the **Postmark** tab at the top of the page. 

**Here, you need to provide –**

- **From Email**: The “From Email” should be the email you verified with **Postmark**.

- **From Name**: From name can be anything you want. You can use a combination of your name and company name.

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the "From Email" address for any bounced messages due to recipient email issues.

- **API Key**: The API Key has to be obtained from the **Postmark**. To get it you can click on the [Postmark Server](https://account.postmarkapp.com/servers) link under the API Key box.

- **Track Opens**: If you enable this option, the open tracking header will be added to the email for Postmark.

- **Track Links**: If you enable this option, the link tracking header will be added to the email for Postmark.

- **Message Stream**: Postmark allows you to specify your email types in two **Message** **Streams;** the **Transactional Stream** for individual messages like password resets and order confirmations, and the **Broadcast** **Stream** for bulk emails like newsletters and marketing campaigns.Now, input the desired **Postmark Message Stream ID** into the **Message Stream** field based on the type of email you plan to send. Selecting the proper email stream helps you manage and track your emails more effectively, ensuring you follow the best practices for sending emails.

Once you provide all the necessary information, click the **Save Connection Settings** button.
And, your **Postmark** will be connected with your Fluent SMTP plugin. 

![Add Connection Page](/images/delivery-connections/configure-postmark-in-fluentsmtp/4.-Add-Connection-page.webp)

### Get Postmark API Key

Learn how to get the API Key from **Postmark** by following the steps with the screenshots below –

First, log into your [Postmark Account](https://account.postmarkapp.com/servers), and select your **Server** (e.g., **My First Server**).
If you want to create a new server, click the **Create Server** button.

![Select Server In Postmark Account](/images/delivery-connections/configure-postmark-in-fluentsmtp/5.-Select-server-in-Postmark-Account.webp)

Now, open the **API Tokens** tab, you will get your API key in the **Server API tokens** box, and **copy** the **API Key**.
If you want to generate a new key, simply click the **Generate another token** button.

![Copy Server Api Token](/images/delivery-connections/configure-postmark-in-fluentsmtp/6.-Copy-Server-API-Token.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the **API Key** you copied from **Postmark** inside the **API Key** box.

Once you input all the necessary information, finally, click the **Save Connection Settings** button.
And, your **Postmark Server** will be connected to your **FluentSMTP**. 

![Paste Api Key](/images/delivery-connections/configure-postmark-in-fluentsmtp/7.-Paste-API-Key-.webp)

## Details of Postmark API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the **wp-config.php file** by the following directives.

Simply **copy** the **following** **snippet** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

define( 'FLUENTMAIL_POSTMARK_API_KEY', '********************' );

![Detail Of Postmark Api Settings](/images/delivery-connections/configure-postmark-in-fluentsmtp/8.-Detail-of-PostMark-API-Settings.webp)

## Configured Postmark

Here, you can see that your **Postmark** is connected and ready to send emails from your WordPress site.

> To learn the details about **General Settings**, read this [Documentation](/fluentsmtp-settings).
Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this [Documentation](/introduction-to-fluentsmtp-dashboard).

![Configured Postmark And General Settings Option Scaled](/images/delivery-connections/configure-postmark-in-fluentsmtp/9.-Configured-Postmark-and-General-Settings-option-scaled.webp)

That’s all about Configuring FluentSMTP with **Postmark** to send emails from the WordPress website.

