# Multiple SMTP Connections & Auto Routing

FluentSMTP can route your site's emails through more than one connection at once, picking the right one automatically from the **From** address on each message. Learn how the routing works, and how to add and manage connections, by following the guide below –

## How FluentSMTP Picks a Connection

> [!Note]
> Mail sent from a connection's own **From** address always goes through that connection. Everything else goes through the **Default**, and if that fails, the **Fallback**.

You cannot use the same **From** address on two connections. Saving a second connection with a **From** address that's already in use replaces the first connection.


## Add Another Connection

First, go to **Settings**, then click **Add Connection**. Pick a provider, use a **From Email** that's different from your other connections, then click **Save**.

## Set the Default and Fallback Connections

On a connection's row, open the **actions** menu to:

- **Set as Default**: makes this the connection used for mail whose **From** address doesn't match any connection.
- **Set as Fallback** on a different connection: used only when the Default connection's send fails. The Default connection cannot also be the Fallback.
- **Clear Fallback**: removes the backup connection if you no longer want one.

> [!Note]
> Until you have two connections, **Fallback** cannot be set. With only one connection, everything goes through it.

![Fallback](/images/advanced-functionalities/multiple-smtp-connections-auto-routing/falback-1.webp)

## Extra Senders on Amazon SES and toSend

**Amazon SES** and **toSend** can send as several **From** addresses on a single connection. The row shows **+N senders**. Click it, then add an address on a domain that provider has verified. Those addresses then route through that same connection.

<!-- TODO: Screenshot needed — "+N Senders on an Amazon SES or toSend Connection" → /images/advanced-functionalities/multiple-smtp-connections-auto-routing/extra-senders.webp -->

## How Other Plugins Should Send

If **Fluent Forms**, **FluentCRM**, or **Fluent Support** lets you set a **From** address, pick one that already exists on a FluentSMTP connection. That message then uses that connection. If they send from an address FluentSMTP doesn't know, the **Default** connection is used, then the **Fallback** if that fails.

### Set a Custom Sender in FluentCRM

![Set Custom From Name and Email in a FluentCRM Campaign](/images/advanced-functionalities/multiple-smtp-connections-auto-routing/fluent-crm-campaign-custom-mail-from.webp)

### Set a Custom Sender in Fluent Forms

![From Name and From Email Fields in a Fluent Forms Notification](/images/advanced-functionalities/multiple-smtp-connections-auto-routing/fluent-forms-custom-mail-from.webp)

### Set a Custom Sender in Fluent Support

![Support From Email Field in a Fluent Support Business Inbox](/images/advanced-functionalities/multiple-smtp-connections-auto-routing/fluent-support-custom-mail-from.webp)

> [!Note]
> **Force From Email** on the Default connection rewrites the **From** address for mail that didn't match another connection. This is usually what you want on a site with one "real" sending domain.

## Fallback Is Not a Second Opinion on Spam

**Fallback** runs only when the Default connection's send fails, for example an API error, an authentication failure, or a timeout. It does not retry a message just because it landed in spam. Fix **SPF**, **DKIM**, and **DMARC** on the sending domain, or use a provider that's allowed to send as that domain.

That's all about Multiple SMTP Connections & Auto Routing in FluentSMTP.
