# FluentSMTP Email Logs Feature

With the Email Logs feature of FluentSMTP, you can see the reports of all outgoing Emails sent from your WordPress site. Here we will show you how to check the Logs for your Emails in Fluent SMTP.

## Email Logs

First, go to the Dashboard of Fluent SMTP and click on the **Email Logs**.

![Email Log Fluentsmtp 1 1](/images/miscellaneous/fluentsmtp-email-logs-feature/Email-Log-FLuentSMTP-1-1.webp)

Now you will see the Email Logs. Here are some features to manage your **Email Logs** in Fluent SMTP. We will describe them here. 

1. **All Statuses:** This option will show all the *Successful* or *Failed* to Send Emails here. 
2. **Successful:** You will see all sending successful email logs here. 
3. **Failed:** This will show you the reports for all the sending failed emails. 
4. **Date Filter:** You can filter your Email reports to any date. 
5. **Search Field:** This is the search field for your Emails. You can search here for the specific email reports you are finding. 
6. **Refresh Button:** This is the refresh button for your Email logs to see the real-time reports. Click on the button to refresh your Email logs. 
7. **Resend:** Conveniently resend failed emails with a single click.
8. **View Email:** With this button, you can see your Email details. 
9. **Delete:** With this delete option button you can delete any specific Email log if you want. 
10. **Delete All Logs:** This button is for deleting all the Email logs from your Fluent SMTP.
11. **Pagination:** This is the Pagination option for your Email log report for how much Email log you want to show on your Email Log page. 

![Email Log Fluentsmtp 2](/images/miscellaneous/fluentsmtp-email-logs-feature/Email-Log-FLuentSMTP-2.webp)

## Email Log details 

If you you click on any email **View** Icon button you will able to see every detail of that Email. Here, you will also be able to see the *Server Responses*, *Email headers*, and *Attachments*. You can navigate through logs with the **Next** and **Previous** buttons. 

As of v2.3.0, this detail view also shows a **Send Time** entry — how long that email took to send, in milliseconds (or seconds, for anything over a second).

![Email Log Fluentsmtp 3](/images/miscellaneous/fluentsmtp-email-logs-feature/Email-Log-FLuentSMTP-3.webp)

## Date Filter

If you open the **Date filter** you will see many options to customize your report into very specific dates.

![Email Log Fluentsmtp 4](/images/miscellaneous/fluentsmtp-email-logs-feature/Email-Log-FLuentSMTP-4.webp)

## Resend Email

If you want to resend any email from the Email Log section, click the **Resend** button — either from the log list or from the **View Email** detail page.

As of v2.3.0, this opens a **Resend Email** dialog where you choose **Send this email to:**

- **Original recipient(s):** Resend to the same address(es) the email originally went to. Selected by default.
- **My account email:** Resend to your own WordPress account email, useful for checking how the email looks without notifying the original recipient.
- **A different email address:** Type in one or more addresses, separated by commas, to resend somewhere else entirely.

![Resend Email Dialog](/images/miscellaneous/fluentsmtp-email-logs-feature/06-resend-email-dialog.webp)

Once you choose a target and confirm, you'll see that your mail has been resent. 

![Email Log Fluentsmtp 5](/images/miscellaneous/fluentsmtp-email-logs-feature/Email-Log-FLuentSMTP-5.webp)

## Resend History

Open a log entry's **View Email** details and, if it's been resent before, you'll see a **Resend History** list showing each past attempt: who it was sent to, when, who triggered it (if done manually from the dashboard), how long that resend took to send, and whether it succeeded or failed.

![Resend History in Email Log Details](/images/miscellaneous/fluentsmtp-email-logs-feature/07-resend-history.webp)

> **Note:** Resend History keeps the most recent attempts for each log entry — very old resends may age out if a log has been resent many times.

## Performance at Scale

As of v2.3.0, Email Logs use a new database index and batched pruning, so large log tables stay fast to search and filter. If you want to trigger a prune manually instead of waiting for the automatic schedule, see the [WP-CLI Commands](/wp-cli-commands) documentation.

For further assistance with Email Logs, don't hesitate to contact us.
