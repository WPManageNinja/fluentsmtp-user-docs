# Email Sending Error Notification Pushover

FluentSMTP's **Email Sending Error Notification** can push a notification straight to your Android, iPhone, iPad, or desktop whenever an email fails to send, using **Pushover**. Once you have a Pushover account and application ready, you can connect it to FluentSMTP by following the steps below –

## Connect Pushover to FluentSMTP

First, go to **FluentSMTP** from **Settings** of **WordPress Dashboard** in the left sidebar, then click the **Alerts** tab. This opens the **Alerts & Notifications** page. Under **Email Sending Error Notifications**, click the **Set Up** button next to **Pushover**.

![Set Up Button for Pushover in Email Sending Error Notifications](/images/alerts/email-sending-error-notification-pushover/setup-pushover-1.webp)

## Get Your Credentials from Pushover

Now, sign in to your [Pushover dashboard](https://pushover.net) and copy **Your User Key**, shown at the top right of the page. Then scroll down to **Your Applications** and click **Create an Application/API Token**.

![Your User Key and Create an Application Link on the Pushover Dashboard](/images/alerts/email-sending-error-notification-pushover/pushover-user-key-2.webp)

Then, give the application a **Name**, agree to the terms, and click the **Create Application** button.

![Create Application Button on the Pushover Application Form](/images/alerts/email-sending-error-notification-pushover/create-application-3.webp)

Once created, copy the **API Token** shown on the application's page.

![API Token on the Pushover Application Page](/images/alerts/email-sending-error-notification-pushover/copy-api-token-4.webp)

## Finish Connecting in FluentSMTP

Back on the FluentSMTP **Pushover Settings** page, paste your **API Token** and **User Key** into their fields, then click the **Connect Pushover** button.

![Pushover Settings Page with API Token, User Key, and Connect Pushover Button](/images/alerts/email-sending-error-notification-pushover/paste-api-and-user-key-5.webp)

Back on the **Alerts & Notifications** page, **Pushover** now shows as **Connected**. Use the toggle to turn notifications on or off, click the pencil icon to edit the connection, or click the trash icon to disconnect Pushover.

> [!Note]
> FluentSMTP recommends activating only one notification channel at a time.

![Pushover Connected with Toggle, Edit, and Delete Options](/images/alerts/email-sending-error-notification-pushover/enable-disable-edit-delete-6.webp)

Once connected, failed emails show up as notifications in the Pushover app on your phone, tablet, or desktop.

> [!Note]
> If the connection fails, check that the **API Token** and **User Key** weren't pasted into each other's fields, and that the Application you created in Pushover still exists. It may have been deleted.

That's all about connecting Pushover to FluentSMTP for Email Sending Error Notifications.
