# Multiple SMTP Connections & Auto Routing

You can set up Multiple Email Delivery Connections in FluentSMTP and use them throughout the whole WordPress when necessary and possible to set a custom Mail From. So, you can use separate Marketing, Notification and Transactional emails all configured within a single FluentSMTP plugin.

## Adding Multiple Email Delivery Connections

If you already have one Email Delivery Connection setup and now you want to add another then go to the **Settings Tab** of FluentSMTP and select **Add Another Connection**. Please check out in-depth guides for all available [Configurable Email Delivery Providers](/configurable-email-delivery-providers).

> Please note that, you cannot add Multiple Email Delivery Connection with the same Email Address. For each separate connection you have to use a different sender email.
> Adding a new connection with any existing Sender Email will replace previously configured Email Delivery Connection.
> **Important Note**

## Multiple Email Delivery Connections List

![Fluent Smtp Multiple Connections](/images/advanced-functionalities/multiple-smtp-connections-auto-routing/fluent-smtp-multiple-connections.webp)

After setting up multiple SMTP connections, you can set a **Fallback Connection** from the General Settings tab. If the Default Connection fails to send the emails for some reason then the Fallback Connection will be used. For more details and descriptions please check the full documentation about [FluentSMTP Settings](/fluentsmtp-settings)

## Using Different Email Delivery Connections

We can now use any of the successfully configured Email Delivery Connections listed under FluentSMTP Active Connections in any plugin to send emails using that address. FluentCRM and Fluent Forms allow you to set a Custom mail From Address and you can use the sender address from the active connections.

### Set a Custom Sender in FluentCRM

![Fluent Crm Campaign Custom Mail From](/images/advanced-functionalities/multiple-smtp-connections-auto-routing/fluent-crm-campaign-custom-mail-from.webp)

As you can see in the above screenshot, FluentCRM allows you to set a Custom Mail From Name and Email Address to set and you will be able to select a sender from the dropdown on the right side.

### Set a Custom Sender in Fluent Forms

![Fluent Forms Custom Mail From](/images/advanced-functionalities/multiple-smtp-connections-auto-routing/fluent-forms-custom-mail-from.webp)

The above screenshot shows that you can set a Custom Mail From Name and Email Address and if this exists in FluentSMTP active connections, then this will be automatically used to send the Email Notifications from Fluent Forms.

### Set a Custom Sender in Fluent Support

![Fluent Support Custom Mail From](/images/advanced-functionalities/multiple-smtp-connections-auto-routing/fluent-support-custom-mail-from.webp)

You can also set a Custom Mail From Name and Email Address in Business Inboxes in FluentSMTP settings. This allows you to send the Ticket Replies from this Email Address and this should be configured in FluentSMTP successfully to be used automatically when tickets are replied to by Support Agents.
