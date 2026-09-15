# Email Sending Error Notification Discord

FluentSMTP's **Email Sending Error Notification** can post a message to a **Discord** channel whenever an email fails to send, using a Discord webhook. Once you've created that webhook, you can connect it to FluentSMTP by following the steps below –

## Connect Discord to FluentSMTP

First, go to **FluentSMTP** from **Settings** of **WordPress Dashboard** in the left sidebar, then click the **Alerts** tab. This opens the **Alerts & Notifications** page. Under **Email Sending Error Notifications**, click the **Set Up** button next to **Discord**.

![Set Up Button for Discord in Email Sending Error Notifications](/images/alerts/email-sending-error-notification-discord/setup-discord-1.webp)

This takes you to the **Discord Settings** page, with a **Channel Name (for your own reference)** field and a **Channel Webhook URL** field. Keep this page open, you'll come back to paste the webhook URL in after creating it in Discord.

![Discord Settings Page with Channel Name and Webhook URL Fields](/images/alerts/email-sending-error-notification-discord/discord-settings-2.webp)

Now, in your **Discord** server, go to the channel where you want to receive the notifications, and click the **settings (gear)** icon next to it.

![Settings Gear Icon Next to a Discord Channel](/images/alerts/email-sending-error-notification-discord/open-channel-settings-3.webp)

Select **Integrations** from the left sidebar of the channel settings, then click the **Create Webhook** button.

![Create Webhook Button in Discord Channel Integrations](/images/alerts/email-sending-error-notification-discord/create-webhook-4.webp)

Give the webhook a **Name** and confirm the **Channel** it should post to, then click the **Copy Webhook URL** button.

![Copy Webhook URL Button for a Discord Webhook](/images/alerts/email-sending-error-notification-discord/copy-webhook-url-5.webp)

Back on the FluentSMTP **Discord Settings** page, enter a **Channel Name** for your own reference, paste the copied URL into **Channel Webhook URL**, then click the **Connect Discord** button.

![Discord Settings Page with Channel Name, Webhook URL, and Connect Discord Button](/images/alerts/email-sending-error-notification-discord/configure-discord-notification-6.webp)

Back on the **Alerts & Notifications** page, **Discord** now shows as **Connected**. Use the toggle to turn notifications on or off, click the **pencil** icon to edit the connection, or click the **trash icon** to disconnect Discord.

> [!Note]
> FluentSMTP recommends activating only one notification channel at a time.

![Discord Connected with Toggle, Edit, and Delete Options](/images/alerts/email-sending-error-notification-discord/enable-disable-7.webp)

That's all about connecting Discord to FluentSMTP for Email Sending Error Notifications.
