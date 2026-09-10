# Configure Mailgun with FluentSMTP

With FluentSMTP, you can integrate Mailgun into WordPress to improve email deliverability and authenticity. Mailgun is one of the leading mailer options for WordPress, that is reliable and easy to set up.

This article will guide you through integrating Mailgun into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring Mailgun

Go to **Settings** in the FluentSMTP top bar. If you haven't set up any connection yet, the setup wizard opens automatically. Otherwise, click the **+ Add Connection** button.

![Add Connection Button on FluentSMTP Settings Page](/images/delivery-connections/configure-mailgun-with-fluentsmtp/2.-Add-Connection-Settings-tab-scaled.webp)

Then select the **mailgun** icon from the provider grid.

![Mailgun Highlighted in the Add Connection Provider Grid](/images/delivery-connections/configure-mailgun-with-fluentsmtp/3.-Mailgun.webp)

> [!Note]
> If you want to change the connection provider, click the **change** button next to the provider logo at the top of the page.

This opens the connection form, where you provide:

- **From Email** and **From Name**
- **Set the return-path to match the From Email**: sends bounce notices back to the **From Email** address.
- **Force Sender Name**: uses this connection's **From Name**, whatever name the sending plugin set.
- **Private API Key**: obtained from your Mailgun account via the **Get a Private API Key** link, described in the next section.
- **Domain Name**: the domain you've added and verified in Mailgun, via the **Get a Domain Name** link, described further below.
- **Select Region**: **US** or **EU**, matching what you set up in Mailgun. Anyone outside the European Union should select **US**. See [more information on Mailgun.com](https://www.mailgun.com/regions).

![Sender Settings and Mailgun API Settings on the Add Connection Form](/images/delivery-connections/configure-mailgun-with-fluentsmtp/4.-Add-Connection-Page.webp)

The rest of this guide walks through getting the **Private API Key** and **Domain Name** from Mailgun, then pasting them into this form.

### Get Private API Key from Mailgun

Learn how to get the Private API Key from **Mailgun** by following the steps with the screenshots below –

First, log into your [Mailgun Account Dashboard](https://app.mailgun.com/settings/api_security/api_keys), click the **Dropdown Arrow** right next to the profile section from the top navbar, and open the **API Security** tab.

![Api Security Tab Scaled](/images/delivery-connections/configure-mailgun-with-fluentsmtp/5.-API-Security-tab-scaled.webp)

This will take you to a page that includes your **Mailgun API keys**.

> [!Note]
> In your Mailgun account, you will see 3 API keys; **Mailgun API keys**, **HTTP Webhook Signing key**, and **Verification Public key**. We **recommend** using your **Mailgun API Key** to **configure** **FluentSMTP**.

Now, if you want to generate a new API key for the configuration, click the **Add new key** button. 

![Add New Key Button](/images/delivery-connections/configure-mailgun-with-fluentsmtp/6.-Add-New-Key-button.webp)

Now add a **Name** for your API key into the **Description** box to find it easily later, select the **Role** from the **Dropdown List**, and click the **Create Key** button to get your desired API key.

Plus, by expanding the **“What does each role have access to?”** option, you can see what permissions each role has. To know more details, visit the **Learn more about role-based access control** link.

![Create Key Button](/images/delivery-connections/configure-mailgun-with-fluentsmtp/7.-Create-Key-button.webp)

Here is your **Mailgun Private API Key**, copy it by clicking the **Copy** icon.

> [!Note]
> Make sure you copy the key and store it somewhere safe and accessible, as the key is only displayed once. If you lose the key, you'll need to generate a new one by repeating the previous steps.

![Copy Api Key 1](/images/delivery-connections/configure-mailgun-with-fluentsmtp/8.-Copy-API-Key-1.webp)

### Get Domain Name from Mailgun

Learn how to get the Domain verified from **Mailgun** by following the steps with the screenshots below –

First, log into your [Mailgun Account Dashboard](https://app.mailgun.com/mg/sending/domains), expand the **Send** dropdown list from the left sidebar, open the **Domains** tab by clicking the **Sending** button, and click the **Add new domain** button.

![Add New Domain Button Scaled](/images/delivery-connections/configure-mailgun-with-fluentsmtp/9.-Add-New-Domain-button-scaled.webp)

**On this page, provide all the necessary information to get your desired Domain Name.**

**Domain Name**: Here, enter the site domain you want to add in the **Domain Name** field.

> [!Note]
> We recommend you use a subdomain of your website's domain name **(e.g., subdomain.example.com)**. Mailgun will use this subdomain exclusively for sending emails and it will not be visible on your site. It doesn't matter what you name your subdomain, but you can use "mail" or "mg" in your subdomain as it makes the purpose clear.

**Domain Region:** Here, you need to select the domain region between **US** and **EU**. If your site is hosted in the European Union, please choose the EU. If your site is hosted outside of the European Union, please leave the default option as the US.

**DKIM key length**: This advanced setting adds an extra security layer for spam protection. We recommend selecting the **2048** option, which creates a longer **DKIM key** to make spamming more difficult for spammers.

Once you are done, click the **Add Domain** button, and your desired domain will be added.

![Add Domain Page Scaled](/images/delivery-connections/configure-mailgun-with-fluentsmtp/10.-Add-Domain-page-scaled.webp)

After adding the domain, you will be redirected to the **DNS records** tab to verify the added domain and activate the configuration. You will see, each record is showing as **Unverified**.

![Unverified Domain Scaled](/images/delivery-connections/configure-mailgun-with-fluentsmtp/11.-Unverified-Domain-scaled.webp)

#### Verify Your Domain

> [!Note]
> Like other SMTP services, **Mailgun** also requires you to verify your added domain by adding **Mailgun-provided Records** to your **Site's DNS** to protect the site owners and their visitors. You can find more information on the benefits of verifying your domain in [Mailgun's guide](https://documentation.mailgun.com/en/latest/quickstart-sending.html#verify-your-domain).

First, go to the **Site** which domain you added and open the **DNS** settings. Then**, add** all of the **Mailgun Records** for **Sending**, **Receiving**, and **Tracking** shown in the screenshot below into your **Site’s** **DNS Provider**.

If you’re not sure how to find your **DNS Provider,** **Mailgun** added a detailed **Guide** with some helpful links under the **Assist Me** dropdown list. Read these accordingly.

Once you have completed the process on your site, return to this page and click the **Verify** button.

![Verify Button Scaled](/images/delivery-connections/configure-mailgun-with-fluentsmtp/12.-Verify-button--scaled.webp)

Once Mailgun verifies the DNS changes you made, you can see each record is shown as **Active**/**Verified**.

> [!Note]
> Mailgun will verify whether your domain has proper DNS records. This verification can take a while (sometimes 24-48 hours) because DNS records may take some time to update.

![Preview Os Each Record Verified Scaled](/images/delivery-connections/configure-mailgun-with-fluentsmtp/13.-Preview-os-each-record-verified-scaled.webp)

After completing the Domain Verification, it will show a **Tick Sign** as an active status next to your domain name.

Simply, **copy** it for later use in the configuration with FluentSMTP.

![Copy Domain Name Png Scaled](/images/delivery-connections/configure-mailgun-with-fluentsmtp/14.copy-domain-name-png-scaled.webp)

Finally, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar,** and **paste** the **Private** **API Key** and **Domain Name** you copied from **Mailgun** into respective fields.

Once you input all the necessary information, finally, click the **Save Connection Settings** button.
And, your **Mailgun Server** will be connected to your Fluent SMTP. 

![Filled Private API Key and Domain Name Fields with Save Connection Settings Button](/images/delivery-connections/configure-mailgun-with-fluentsmtp/15.-Paste-Private-Key-Domain-Name.webp)

## Details of Mailgun API Settings

- **Store in Database**: By default, this is enabled and strongly recommended. This will keep the information in the database in encrypted format. Tick **Disable Encryption for API Key (Not Recommended)** only if a security plugin rotates your SALT keys and the encrypted value keeps breaking.
- **Store in wp-config.php**: This allows you to store the access keys inside the `wp-config.php` file by the following directives.

Copy the snippet below, replace the stars with your own credentials, and paste it into your site's `wp-config.php` file.

```
define( 'FLUENTMAIL_MAILGUN_API_KEY', '********************' );
define( 'FLUENTMAIL_MAILGUN_DOMAIN', '********************' );
```

![Store in wp-config.php View with define Snippet on the Mailgun Connection Form](/images/delivery-connections/configure-mailgun-with-fluentsmtp/16.-Details-of-Mailgun-API-Settings.webp)



That’s all about Configuring FluentSMTP with Mailgun to send emails from the WordPress website.

