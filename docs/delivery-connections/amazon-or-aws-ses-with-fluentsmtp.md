# Amazon or AWS SES with FluentSMTP

Amazon SES is one of the cheapest email API services available for WordPress, with powerful, high-deliverability infrastructure managed by Amazon. Learn how to connect Amazon SES with FluentSMTP by following the steps with the screenshots below –

## Prerequisites

- FluentSMTP installed and activated ([installation guide](/install-and-activate-fluentsmtp))
- An active Amazon Web Services (AWS) account

## Add an Amazon SES Connection

Go to **Settings** in the FluentSMTP top bar and click the **+ Add Connection** button. Then select the **aws** icon from the provider grid.

![aws Icon Highlighted in the Add Connection Provider Grid](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-0-scaled.webp)

This opens the Amazon SES connection form, where you provide:

- **From Email** and **From Name**
- **Force From Email** (recommended, on by default): sends everything not already routed to another connection from this **From Email**, whatever address the sending plugin set.
- **Force Sender Name**: uses this connection's **From Name**, whatever name the sending plugin set.
- **Set the return-path to match the From Email**: sends bounce notices back to the **From Email** address.
- **Access Key**, **Secret Key**, and **Region**, obtained from the **AWS Console**.

![Sender Settings and Amazon SES API Settings on the Add Connection Form](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-scaled.webp)

The rest of this guide walks through getting the **Access Key**, **Secret Key**, and **Region** from AWS, then pasting them into this form.

## Get Credentials from AWS Console

The Access Key, Secret Key, and Region come from the AWS Console. You need to:

1. Create an IAM user in the AWS Console.
2. Attach the SES and SNS permissions policies.
3. Create and retrieve an access key.
4. Identify your region.

### Navigate to the AWS Console

Go to the [AWS Console](https://console.aws.amazon.com/console/home) and sign in. Use **Root user** if this is a new account.

![Sign In Page with Root User Selected on AWS Console](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-Login-PAge-scaled.webp)

Once signed in, search for **IAM** in the top search bar and click **Users** under its **Top features**.

![IAM Search Result with Users Link Highlighted](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-1-scaled.webp)

### Create an IAM User

Click the **Create user** button.

![Create User Button on the IAM Users Page](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-2-scaled.webp)

Give the user a name, for example `FluentSMTP`, and leave **Provide user access to the AWS Management Console** unchecked, since this user only needs API access. Click **Next**.

![User Name Field and Next Button on the Create User Page](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-3-scaled.webp)

### Attach SES and SNS Permissions

AWS creates the user right away without console access, so permissions are attached as a separate step. From the new user's **Permissions** tab, click **Add permissions**, then select **Attach policies directly**.

Search the policy list for `sesfull` and `snsfull`, and check **AmazonSESFullAccess** and **AmazonSNSFullAccess**.

![Attach Policies Directly Selected with Permissions Policies List](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-4-scaled.webp)

Review the **Permissions summary**, confirming both policies are listed, then click **Add permissions**.

![Permissions Summary with Add Permissions Button](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-5-scaled.webp)

### Identify Your AWS Region

From the user's page, click the region menu in the top-right corner to see which region you're working in.

![Region Menu with N Virginia Highlighted](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-6-scaled.webp)

Our region here is **US East (N. Virginia)**, `us-east-1`. Use whichever region your SES identity is verified in.

> [!Note]
> FluentSMTP also supports **EU Sovereign Cloud (Germany, Brandenburg)** `[eusc-de-east-1]` in the Region dropdown, alongside the regular EU regions like Frankfurt, Milan, and Stockholm. This is a separate AWS partition (`aws-eusc`), so your IAM user and SES identity need to be created in an AWS European Sovereign Cloud account. The credentials from your regular AWS account won't work here.

### Create an Access Key

From the user's page, click **Create access key**.

![Create Access Key Link on the IAM User Page](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-7-scaled.webp)

On **Access key best practices & alternatives**, select **Other**, since this key is for a third-party application (FluentSMTP), then click **Next**.

![Other Use Case Selected on Access Key Best Practices Page](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-8-scaled.webp)

Optionally add a description tag, then click **Create access key**.

![Description Tag Field and Create Access Key Button](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-9-scaled.webp)

Copy the **Access key** and **Secret access key** now. AWS only shows the secret once.

![Access Key and Secret Access Key on the Retrieve Access Keys Page](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-10-scaled.webp)

## Connect the Credentials in FluentSMTP

Back on the FluentSMTP connection form, paste the **Access Key** and **Secret Key** you just copied, choose the matching **Region**, and click **Save Connection Settings**.

> [!Note]
> Use the same **From Email** here that's verified as a **Verified Identity** in your SES account, or sending will fail.


![Filled Sender Settings and Amazon SES API Settings with Save Connection Settings Button](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-11-scaled.webp)


### Where Secrets Are Stored

Leave **Store in Database** selected. That is the default. FluentSMTP encrypts the **Access Key** and **Secret Key** with your WordPress SALT keys before saving. Tick **Disable Encryption for Secret Key (Not Recommended)** only if a security plugin rotates your SALT keys and the encrypted value keeps breaking.

Click **Store in wp-config.php** instead if you don't want the credentials in the database at all. The key fields disappear, and the form shows the `define()` lines to paste into `wp-config.php`:

> [!Note]
> We recommend using [FluentSnippet](https://fluentsnippets.com/) on your WordPress site for a seamless experience. However, you can use any other snippet plugin of your choice.

```
define( 'FLUENTMAIL_AWS_ACCESS_KEY_ID', '********************' );

define( 'FLUENTMAIL_AWS_SECRET_ACCESS_KEY', '********************' );
```

![Store in wp-config.php View with define Snippet](/images/delivery-connections/amazon-or-aws-ses-with-fluentsmtp/FluentSMTP-Amazon-AWS-SES-Configure-12-scaled.webp)

That's all it takes to configure FluentSMTP with Amazon SES. It's recommended to send a test email afterward. See the [dashboard overview](/introduction-to-fluentsmtp-dashboard) for how to do that. If you want to send from more than one address on this connection, see [Multiple SMTP Connections & Auto Routing](/multiple-smtp-connections-auto-routing) for how additional sender addresses work.

> [!Note]
> FluentSMTP reuses the SES connection across sends instead of reconnecting each time, which improves sending speed, especially for bulk sends like FluentCRM campaigns. No setup is needed to benefit from this; it applies automatically.

## Additional Resources

### Moving Out of the Amazon SES Sandbox

A new AWS account starts in **Sandbox** mode, where you can only send to your own verified email addresses under **Verified Identities**.

To send to other recipients, request **Production Access** from AWS Support to move your SES account out of the sandbox. See AWS's own guide: [Moving out of the Amazon SES sandbox](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html).
