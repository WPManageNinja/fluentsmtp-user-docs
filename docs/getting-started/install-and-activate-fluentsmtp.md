# Install and Activate FluentSMTP

FluentSMTP takes over `wp_mail` and sends through an email service you connect. Until you add a connection, WordPress still uses whatever your host left behind, which is why contact form and password-reset mail often never arrives. Learn how to install and activate FluentSMTP by following the steps below –

## Requirements

- WordPress 6.5 or later
- PHP 7.4 or later

## Install from the Dashboard

1. In WordPress, go to **Plugins → Add Plugin**.
2. Search for **fluentsmtp**.
3. Find **FluentSMTP - WP Mail SMTP Plugin** by **WPManageNinja**.
4. Click the **Install Now** button.

![Searching for FluentSMTP on the Add Plugins screen](/images/getting-started/install-and-activate-fluentsmtp/fluent-smtp-install.webp)

The button changes to **Activate** once the install finishes.

![Activate button on the Add Plugins screen](/images/getting-started/install-and-activate-fluentsmtp/fluent-smtp-activate-2.webp)

> **Note:** If another SMTP plugin is already active, WordPress will tell you. FluentSMTP should be the only plugin sending mail — deactivate the other SMTP plugin first, or you will get double-sending and confusing logs.

> **Note:** If FluentSMTP is already active and you search for another SMTP plugin, FluentSMTP shows a notice: "You already have an SMTP plugin." That is the plugin protecting you from installing a second mailer — go to its settings instead.

After activation, go to **Settings → FluentSMTP**. That is the plugin screen — it is not a top-level menu.

![FluentSMTP row with Settings link in the Installed Plugins list](/images/getting-started/install-and-activate-fluentsmtp/fluent-smtp-active-5.webp)

## Install from a Zip

Use this if you cannot reach wordpress.org from the site, or you are installing a specific build.

1. Download the zip from [wordpress.org/plugins/fluent-smtp](https://wordpress.org/plugins/fluent-smtp).

![Download button on the FluentSMTP WordPress.org plugin page](/images/getting-started/install-and-activate-fluentsmtp/fluent-smtp-wordpress-3.webp)

2. Go to **Plugins → Add Plugin → Upload Plugin**.
3. Choose the zip, click **Install Now**, then click **Activate**.

![Selected zip file and Install Now button on the Upload Plugin screen](/images/getting-started/install-and-activate-fluentsmtp/fluent-smtp-install-manually-4.webp)

The plugin then appears under **Settings → FluentSMTP**.

## What You Should See Next

On a site with no connection yet, FluentSMTP opens a first-run wizard: pick a provider, fill the form, save. On a site that already has a connection, you get the dashboard.

![FluentSMTP dashboard after a connection exists](/images/getting-started/install-and-activate-fluentsmtp/fluent-smtp-dashboard-6.webp)

Next: choose an [email service](/configurable-email-delivery-providers) and save a connection. Then send a test from **Send Test Email** in the top bar.
