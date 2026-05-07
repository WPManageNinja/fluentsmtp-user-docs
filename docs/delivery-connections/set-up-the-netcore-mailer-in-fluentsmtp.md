# Set Up the Netcore Mailer in FluentSMTP

Do you want to use Netcore Mailer to improve the email delivery of your WordPress site? In this article, you will learn about how you can use Netcore for sending WordPress emails using FluentSMTP’s Netcore Driver.

## Configuring FluentSMTP for Netcore

Log into your WordPress admin dashboard and hover over Settings and select FluentSMTP from the dropdown menu.

![Configuring Fluent SMTP for Pepipost](/images/delivery-connections/set-up-the-netcore-mailer-in-fluentsmtp/Configuring-Fluent-SMTP-for-Pepipost.webp)

If this is the first time you are using FluentSMTP and haven’t set up any connection yet, you will see the list of available Mailers to configure, as we will work with Netcore, select Netcore from the list.

![Fluent Smtp ‹ Demosite — Wordpress](/images/delivery-connections/set-up-the-netcore-mailer-in-fluentsmtp/Fluent-SMTP-‹-Demosite-—-WordPress.webp)

If you already have one or multiple SMTP driver setups and now you want to add Netcore also, go to the **Settings Tab of FluentSMTP** and select **Add New Connection**. Now again all the available drivers will appear from where you need to select **Netcore**.

![Fluent SMTP for Pepipost](/images/delivery-connections/set-up-the-netcore-mailer-in-fluentsmtp/Fluent-SMTP-for-Pepipost.webp)

## Sender Settings

Now we will configure the sender details. Fill up the “From Email” and “From Name” from the sender settings

**From Email:** The “From Email” should be the email you verified with Netcore. Check the box to set the return path to match the from. The Return Path indicates where non-delivery receipts or bounce messages are to be sent. If unchecked, bounce messages will be lost. With this enabled,
you’ll be emailed using “From Email” if any messages bounce as a result of issues with the recipient’s email.

**From Name:** From name can be anything you want. You can use a combination of your name and company name. For example, I would choose something like “Jafor From WPManageNinja” where Jafor is the name and WPManageNinja is the company. The API key will be provided by Netcore.

## Get Netcore API Key

Log into your Netcore account and click on Settings and choose Integrations. Now select API Tab. Copy the API Key from here and paste it into the FluentSMTP Private API Key filed of MailGun configuration.

![Where will I find my Pepipost SMTP details API key](/images/delivery-connections/set-up-the-netcore-mailer-in-fluentsmtp/Screenshot_11.webp)

After getting the Netcore API key, go back to FluentSMTP’s Netcore configuration panel and enter the API key. Once done, click on **Save Connection Settings,** and your Netcore Driver is ready to send emails from your WordPress site.
