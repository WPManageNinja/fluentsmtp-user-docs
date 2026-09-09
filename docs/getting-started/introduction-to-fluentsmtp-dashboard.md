# Introduction to FluentSMTP Dashboard

FluentSMTP is easily accessible from your WordPress admin panel by navigating to **Settings → FluentSMTP**. The interface is designed for simplicity, featuring a primary top navigation bar and a main content area that displays one page at a time.

The top navigation bar contains your main destinations: **Dashboard**, **Settings**, **Email Logs**, **Alerts**, and **About**. On the right side of this bar, you will find quick-access tools including the **Send Test Email** button, a documentation search icon (i), and an appearance toggle.

Here is a complete breakdown of the dashboard interface and its features.

## The Dashboard View

Once you have set up at least one active connection, the Dashboard provides a comprehensive overview of how your site's email sending is performing.

### 1. Quick Stats Cards

At the very top of the dashboard, you will see four quick-glance metrics:

* **Emails sent:** The total number of successful emails sent within the current period.
* **Emails failed:** The total number of emails that failed to send. Clicking on this will take you directly to the Email Logs, automatically filtered to show the failures.
* **Active connections:** The number of SMTP or API routing connections currently active on your site.
* **Active senders:** The number of "From" addresses currently in use.

### 2. Sending Stats Chart

This dynamic chart gives you a visual representation of your sent (blue) and failed (red) emails over time. You can easily adjust the reporting period by using the **Start date to End date** selector at the top of the chart and clicking **Apply**. You can also toggle between a bar chart and a line graph view.

### 3. Sending by Time of Day

This section displays a heatmap tracking your email volume throughout the week, broken down by hour. It is a highly useful tool for identifying peak sending hours or checking if emails are getting bottlenecked at a specific time of day.

### 4. Right-Hand Sidebar Widgets

The right column of the dashboard gives you quick administrative insights:

* **Alerts & Notifications:** Displays the current status (On/Off) of your Failure Alerts and Summary Emails. You can click **Manage** to adjust these.
* **Email Logs:** Shows whether email logging is turned On or Off, and how many days your logs are retained before being deleted.
* **Recent Activity:** A quick feed of the latest emails processed by your site, showing whether they were successfully delivered or failed. You can filter this feed by *All*, *Today*, *Yesterday*, and *Last 7 Days*.

![Fluent SMTP Dashboard](/images/getting-started/introduction-to-fluentsmtp-dashboard/dashboard-1.webp)

## Dashboard Theme Settings

FluentSMTP includes a built-in dark mode to match your preferences. Click the **Appearance icon** (the sun icon) in the top right corner of the navigation bar to reveal a dropdown menu. From here, you can switch the plugin interface between:

* **Light** mode
* **Dark** mode
* **System** (matches your current operating system or browser theme)

![Dashboard Theme Settings](/images/getting-started/introduction-to-fluentsmtp-dashboard/theme-settings-2.webp)

## Sending a Test Email

Because testing is the most frequent check run by site admins, the **Send Test Email** button is persistently pinned to the top right of the navigation bar.

To verify your configuration:

1. Click the **Send Test Email** button in the top bar.
2. **From:** Select one of your connected addresses from the dropdown list. If you leave it empty, the plugin will use your Default connection.
3. **Send To:** Enter an email address you have access to. Your WordPress admin email is filled in by default.
4. **HTML:** Leave this toggle enabled to send an HTML-formatted test email, or turn it off to send a plain-text version.
5. Click the **Send Test Email** button at the bottom of the form.

> **Note on Deliverability:** If the plugin reports a success message, it simply means WordPress successfully handed the message over to your email provider. To confirm it landed in the inbox, open your testing mailbox. If it is not in the Inbox, check the Spam folder. If the email never arrives, navigate to **Email Logs** to read the raw server response for troubleshooting.

![Send a Test Email](/images/getting-started/introduction-to-fluentsmtp-dashboard/send-test-email-3.webp)


