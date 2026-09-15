# Email Sending Error Notification Slack

FluentSMTP's **Email Sending Error Notification** can post directly to a **Slack** channel whenever an email fails to send, using the official FluentSMTP Slack app.

Learn how to connect Slack to FluentSMTP by following the steps below –

## Connect Slack to FluentSMTP

First, go to **FluentSMTP** from **Settings** of **WordPress Dashboard** in the left sidebar, then click the **Alerts** tab. This opens the **Alerts & Notifications** page. Under **Email Sending Error Notifications**, click the **Set Up** button next to **Slack**.

![Set Up Button for Slack in Email Sending Error Notifications](/images/alerts/email-sending-error-notification-slack/setup-slack-1.webp)

This takes you to the **Slack Settings** page. Enter **Your Email Address**, check **I agree to the terms and conditions of this Slack integration**, then click the **Continue to Slack** button.

![Slack Settings Page with Email Address and Continue to Slack Button](/images/alerts/email-sending-error-notification-slack/slack-settings-2.webp)

Now, you'll be redirected to **Slack**. Log in if you aren't already, select the **Workspace** from the dropdown in the top right, choose the **Channel** where you want to receive the error notifications, and click the **Allow** button.

![FluentSMTP Requesting Permission to Access Slack Workspace](/images/alerts/email-sending-error-notification-slack/authorize-slack-3.webp)

Back on the **Alerts & Notifications** page, **Slack** now shows as **Connected**. Use the toggle to turn notifications on or off, click the pencil icon to edit the connection, or click the trash icon to disconnect Slack.

![Slack Connected with Toggle, Edit, and Delete Options](/images/alerts/email-sending-error-notification-slack/slack-connected-4.webp)

## Failure Notification in Slack

Once connected, FluentSMTP posts a message to your chosen Slack channel whenever an email fails to send, naming the site, the email subject, and the error message, with a link to view the failed email.

![FluentSMTP Failure Notification Message in Slack](/images/alerts/email-sending-error-notification-slack/slack-notification-5.webp)

That's all about connecting Slack to FluentSMTP for Email Sending Error Notifications.
