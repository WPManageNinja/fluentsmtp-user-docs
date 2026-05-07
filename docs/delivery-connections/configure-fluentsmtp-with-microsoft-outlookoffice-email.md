# Configure FluentSMTP with Microsoft Outlook/Office Email

This documentation shows the process of **Configuring FluentSMTP with Microsoft Outlook** from the **Microsoft Entra Admin Center**.

We also have another documentation that demonstrates [Configuring FluentSMTP with Azure Portal](/outlook-or-office365-with-fluentsmtp). Alternatively, you can watch the video below for a full walkthrough:

![Dashboard Of Fluent Smtp 1 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Dashboard-of-Fluent-SMTP-1-scaled.webp)

Navigate to WordPress Settings and select Fluent SMTP. If connecting to Fluent SMTP for the first time, select the **Microsoft** Email Service Provider.

![Dashboard Of Fluent Smtp 2 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Dashboard-of-Fluent-SMTP-2-scaled.webp)

If Fluent SMTP is already connected to another Email Service Provider, click on the "**Add Another Connection**" button. Then select the Microsoft Email Service Provider to proceed to the Microsoft Outlook/Office 365 configuration page.

![Outlook Configure If Avilable Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-Configure-if-AVilable-scaled.webp)

## Credential Configuration of Microsoft in Fluent SMTP

Configure Fluent SMTP with Outlook/Office 365 by providing the necessary credentials:

1. **Sender Details:** Enter sender details in the sender settings option.
2. **Microsoft Outlook/Office 365 Credentials:** Provide credentials from the respective application.
3. **Authentication:** Authenticate your Office 365 account and get the Access Token. 

> **Note: Copy the App Callback URL and keep it in your clipboard. We need this URL for App registration. **

![Configure Outlook Of Fluent Smtp 3 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Configure-Outlook-of-Fluent-SMTP-3-scaled.webp)

## App Registration in Microsoft Azure Admin Center

To get the **App credentials** you need to create an **App** in the Microsoft Azure directory. Now go to your [Microsoft Entra](https://entra.microsoft.com/) account and log in with your Microsoft Account. 

Go to the **Applications** from the left sidebar click on the **App registration** and select **New Registration**. 

![Outlook App Reg 4 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-App-Reg-4-scaled.webp)

 Associate with Personal Account and proceed.

![Outlook App Reg 5 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-App-Reg-5-scaled.webp)

Fill out the **Register an Application** page with the **App Name** and other details.

1. Give the App Name 
2. In the Supported account type select ‘***Accounts in any organizational directory (Any Microsoft Entra ID tenant - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)***’ here. 
3. In Redirect URL settings select Web and then paste the redirect URL you have copied from the FLuent SMTP Microsoft Outlook Configure Page. 
4. Click the Register button. 

![Outlook App Reg 6 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-App-Reg-6-scaled.webp)

After that, you will be redirected to your App **Overview** where you can get the **Application Client ID**. Copy this **Application Client ID** for later use. 

![Outlook App Reg 7 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-App-Reg-7-scaled.webp)

Then Click on the **Certificate and Secret > Client Secret > New Client Secret** button. 

![Outlook App Reg 8 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-App-Reg-8-scaled.webp)

A pop-up will come to add the Client Secret **Description** and **Expires**. Give a description here select the expiration date and click on the **Add** button. 

![Outlook App Reg 9 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-App-Reg-9-scaled.webp)

You will get the Client's Secret now. Copy the **Value** from here. 

![Outlook App Reg 10 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-App-Reg-10-scaled.webp)

## Configuration Completion

Go back to the Fluent SMTP Microsoft Outlook Configure page. In the sender Settings give your Microsoft Email Account and a Form name. 

In the Outlook/Office 365 API Settings section paste the **App Client ID** and the **Client Secret Value** you copied earlier. 

To authenticate with **Office 365** & get an **Access Code** click on the **Authenticate with Office 365 & Get Access Code** button. 

![Configure Outlook Of Fluent Smtp 11 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Configure-Outlook-of-Fluent-SMTP-11-scaled.webp)

**Accept** permissions on the Permission Page of your Microsoft Outlook account.

![Outlook App Reg 12](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-App-Reg-12.webp)

After that, you will get an **Access Code** copy the code.

![Fluentsmtp 13](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/FluentSMTP-13.webp)

Paste your **Access Code** in the **Access Token** field and click the **Save Connection Settings** button. 

![Configure Outlook Of Fluent Smtp 13 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Configure-Outlook-of-Fluent-SMTP-13-scaled.webp)

You will see that your Fluent SMTP is now configured with your Microsoft Outlook/Office 365 account. Also, you will get some **General Settings** here for your Email service provider you can change them if you want. 

![Fluentsmtp 14 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/FluentSMTP-14-scaled.webp)

## **Send Test Email **

To test the functionality of your Email service, navigate to the **Email Test** section from the Navigation menu. Select your sender Email address, specify the recipient Email address for the Test Email, and click on the **Send Test Email** button.

![Test Email 15](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/test-email-15.webp)

If your Email service is functioning correctly, you will receive a confirmation message indicating that your email has been successfully sent.

![Test Email 16 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/test-email-16-scaled.webp)

By following these steps, FluentSMTP can be configured with Microsoft Outlook successfully.
