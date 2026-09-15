# Email Sending Error Notification Pushover

FluentSMTP's **Email Sending Error Notification** can push a notification straight to your Android, iPhone, iPad, or desktop whenever an email fails to send, using **Pushover**. Once you have a Pushover account and application ready, you can connect it to FluentSMTP by following the steps below –

## Get Your Credentials from Pushover

First, create an account at [pushover.net](https://pushover.net), then copy your **User Key** from the Pushover dashboard.



Now, create an **Application** in Pushover, or use one you already have, and copy its **API Token**.



## Connect Pushover to FluentSMTP

Then, go to **FluentSMTP** from **Settings** of **WordPress Dashboard** in the left sidebar, then click the **Alerts** tab. This opens the **Alerts & Notifications** page. Under **Email Sending Error Notifications**, click the **Set Up** button next to **Pushover**.

![Set up Button Pushover Notification](/images/alerts/pushover-notification/setup-pushover-1.webp)

This takes you to the **Pushover Settings** page. Paste your **API Token** and **User Key** into their fields, then click the **Connect Pushover** button.

![Set up Button Pushover Notification](/images/alerts/pushover-notification/connect-pushover-2.webp)

Back on the **Alerts & Notifications** page, **Pushover** now shows as **Connected**. Use the toggle to turn notifications on or off, click the pencil icon to edit the connection, or click the trash icon to disconnect Pushover.

> [!Note]
> FluentSMTP recommends activating only one notification channel at a time.

<!-- TODO: Screenshot needed — "Pushover Connected with Toggle, Edit, and Delete Options" → /images/alerts/email-sending-error-notification-pushover/pushover-connected-5.webp -->

Once connected, failed emails show up as notifications in the Pushover app on your phone, tablet, or desktop.

> [!Note]
> If the connection fails, check that the **API Token** and **User Key** weren't pasted into each other's fields, and that the Application you created in Pushover still exists. It may have been deleted.

That's all about connecting Pushover to FluentSMTP for Email Sending Error Notifications.
