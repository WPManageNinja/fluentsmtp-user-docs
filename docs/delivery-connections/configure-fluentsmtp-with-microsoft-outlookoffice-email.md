# Configure FluentSMTP with Microsoft Outlook/Office Email

This documentation shows the process of **Configuring FluentSMTP with Microsoft Outlook** from the **Microsoft Entra Admin Center**.

We also have another documentation that demonstrates [Configuring FluentSMTP with Azure Portal](/outlook-or-office365-with-fluentsmtp). Alternatively, you can watch the video below for a full walkthrough:

Navigate to WordPress **Settings** and select **FluentSMTP**. If connecting for the first time, select the **Microsoft** Email Service Provider.

![FluentSMTP Submenu Under WordPress Settings](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Dashboard-of-Fluent-SMTP-1-scaled.webp)

If FluentSMTP is already connected to another Email Service Provider, go to **Settings** and click the **+ Add Connection** button.

![Add Connection Button on FluentSMTP Settings Page](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-Configure-if-AVilable-scaled.webp)

Then select **Microsoft** from the provider grid to proceed to the Microsoft Outlook/Office 365 configuration page.

![Microsoft Highlighted in the Add Connection Provider Grid](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Dashboard-of-Fluent-SMTP-2-scaled.webp)

## Credential Configuration of Microsoft in Fluent SMTP

Configure Fluent SMTP with Outlook/Office 365 by providing the necessary credentials:

1. **Sender Details:** Enter sender details in the sender settings option.
2. **Microsoft Outlook/Office 365 Credentials:** Provide credentials from the respective application.
3. **Authentication:** Authenticate your Office 365 account and get the Access Token. 

> [!Note]
> Copy the App Callback URL and keep it in your clipboard. We need this URL for App registration. 

![Sender Settings and Outlook Office365 API Settings on the Microsoft Connection Form](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Configure-Outlook-of-Fluent-SMTP-3-scaled.webp)

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

> [!Note]
> If your organization uses a single-tenant app registration (**Accounts in this organizational directory only**) instead of the multitenant type above, FluentSMTP now supports it. In the Fluent SMTP Microsoft connection settings, provide your Azure app's **Directory (tenant) ID** — found on the app's **Overview** page next to the **Application (client) ID** — in the optional **Directory (tenant) ID** field.

In the **FluentSMTP** connection form, this field is labeled **Directory (tenant) ID (Optional)** and sits right below **Disable Encryption for Application Client Secret**, with `common` shown as its placeholder. Leave it empty unless your Entra app registration is single-tenant. Paste the **Directory (tenant) ID** from the app's **Overview** page, or a verified domain such as `contoso.onmicrosoft.com`. Use `organizations` to allow any work or school account but no personal Microsoft accounts, or `consumers` if the app registration only allows personal Microsoft accounts such as outlook.com or hotmail.com.

After that, you will be redirected to your App **Overview** where you can get the **Application Client ID**. Copy this **Application Client ID** for later use. 

![Outlook App Reg 7 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-App-Reg-7-scaled.webp)

Then Click on the **Certificates & secrets > Client secrets > New client secret** button.

![Outlook App Reg 8 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-App-Reg-8-scaled.webp)

A pop-up will come to add the Client Secret **Description** and **Expires**. Give a description here select the expiration date and click on the **Add** button. 

![Outlook App Reg 9 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-App-Reg-9-scaled.webp)

You will get the Client's Secret now. Copy the **Value** from here. 

![Outlook App Reg 10 Scaled](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-App-Reg-10-scaled.webp)

## Configuration Completion

Go back to the Fluent SMTP Microsoft Outlook Configure page. In the sender Settings give your Microsoft Email Account and a Form name. 

In the Outlook/Office 365 API Settings section paste the **App Client ID** and the **Client Secret Value** you copied earlier. 

To authenticate with **Office365** and get an **Access Code**, click the **Authenticate with Office365** button.

![Authenticate with Office365 Button on the Microsoft Connection Form](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Configure-Outlook-of-Fluent-SMTP-11-scaled.webp)

**Accept** permissions on the Permission Page of your Microsoft Outlook account.

![Outlook App Reg 12](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Outlook-App-Reg-12.webp)

After that, you will get an **Access Code** copy the code.

![Fluentsmtp 13](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/FluentSMTP-13.webp)

Paste your **Access Code** in the **Access Token** field and click the **Save Connection Settings** button. 

![Access Token Field and Save Connection Settings Button on the Microsoft Connection Form](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/Configure-Outlook-of-Fluent-SMTP-13-scaled.webp)

You will see that your Fluent SMTP is now configured with your Microsoft Outlook/Office 365 account.


## Send Test Email 

To test the functionality of your Email service, navigate to the **Email Test** section from the Navigation menu. Select your sender Email address, specify the recipient Email address for the Test Email, and click on the **Send Test Email** button.

![Send Test Email Form with Send Test Email Button Highlighted](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/test-email-15.webp)

If your Email service is functioning correctly, you will receive a confirmation message indicating that your email has been successfully sent.

![Test Email Sent Confirmation with Delivery Speed Stats](/images/delivery-connections/configure-fluentsmtp-with-microsoft-outlookoffice-email/test-email-16-scaled.webp)

By following these steps, FluentSMTP can be configured with Microsoft Outlook successfully.
