# FluentSMTP Settings

This article will guide you through the process of using the **General Settings** of the main section of FluentSMTP.

## General Settings

To learn how you can get the General Settings option of FluentSMTP, follow the steps with screenshots below –

First, go to the **Settings** section from the **FleuntSMTP Navbar** and you will get all the settings options under the **General Settings** sidebar on the right-hand side.

Once you are done, do not forget to click the **Save Settings** button, otherwise the changes you have made will not save.

![General Settings tab on the right-hand side](/images/getting-started/fluentsmtp-settings/General-Settings-tab-on-the-right-hand-side-scaled.webp)

**All the options mentioned below inside the General Settings of the FluentSMTP are briefly explained below:**

- **Log Emails**: Whether to Log All Outgoing Emails for Reporting or not.

- **FluentCRM Email Logging**: Whether to Log All FluentCRM Emails for Reporting or not. Since FluentCRM has its own Email Logging. Disabling this option may reduce the Database Size for FluentSMTP.

- **Delete Logs**: The period after the emails sent and logged will be deleted.

- **Default Connection**: The default Delivery Connection is to be used for the whole of WordPress.

- **Fallback Connection**: A Fallback Connection in case of failure using default Delivery Connection.

- **Email Simulation**: You can enable email delivery simulation with this option. All the emails will be simulated but not delivered outside of WordPress. Enabling Email Logging will store the simulated emails under Email Logs and you can check them for further purposes.

- **Add Multi-Part Plain Text for HTML Emails** (**beta):** A multipart MIME message consists of parts with headers and content types (e.g., 'text/plain' or 'image/jpeg'). The message starts with standard email headers and a 'Content-Type' header indicating its multipart nature and defining a unique boundary string that separates each section. Each part includes its own headers and body. The message ends with the boundary string followed by two hyphens, signifying the end of the multipart content.

**See the screenshot below as an example of Add Multi-Part Plain Text for HTML Emails** (**beta)** –

![Example of Multi-part plain text for HTML emails (beta)](/images/getting-started/fluentsmtp-settings/Example-of-Multi-part-plain-text-for-HTML-.webp)

## Settings in a Specific Email Service Provider

Inside a specific email service provider you are already connected to, you will get three more settings options under the Action column. These are:

- **Edit option**: By clicking this **Pencil** icon, you can go to the **Connection** **Provider** page and edit the existing information.

- **Preview option**: By clicking this **Eye** icon, you can preview your Connection Details (e.g., sender email, sender name, force sender name, and token validity).

- **Delete option**: By clicking this **Trash** icon, you can delete the connection anytime for this specific server if needed.

![Three more settings under Action column of a specific email service provider](/images/getting-started/fluentsmtp-settings/Three-more-settings-under-Action-column-of-a-specific-email-service-provider-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.
