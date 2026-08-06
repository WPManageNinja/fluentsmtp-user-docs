# FluentSMTP Filters & Hooks

To customize FluentSMTP's behavior in code, use the filters below –

> **Note:** Both filters on this page were added in v2.3.0. Test any snippet on a staging site before using it in production.

## Change the Required Admin Capability

By default, FluentSMTP requires the `manage_options` capability — the same one WordPress administrators have — to view or change its settings. Use the `fluent_mail/manage_capability` filter to require a different capability instead.

```php
add_filter( 'fluent_mail/manage_capability', function( $capability ) {
    return 'my_custom_capability';
} );
```

This is useful on multi-tenant sites or hosting products where the people who should manage email settings aren't necessarily full WordPress administrators.

> **Remember**, once you change this, having `manage_options` no longer grants access to FluentSMTP on its own — your site administrators will need the replacement capability granted to them separately too. Only grant it to roles you trust, since anyone with it can view and change your email connection credentials.

## Embed Inline Images in Outgoing Emails

Pass an `$embeds` array as the sixth argument to `wp_mail()` to attach inline images that render directly in the email body via a `cid:` reference, instead of as a regular attachment. Use the `wp_mail_embed_args` filter to customize how a given image is embedded.

```php
wp_mail(
    'user@example.com',
    'Newsletter',
    '<p>Hello</p><img src="cid:logo" alt="Logo">',
    [],
    [],
    [ 'logo' => '/path/to/logo.png' ] // embeds: array key becomes the CID
);

// Optional: override the CID, filename, or disposition for a specific embed
add_filter( 'wp_mail_embed_args', function( $args ) {
    if ( basename( $args['path'] ) === 'logo.png' ) {
        $args['cid'] = 'company-logo';
    }
    return $args;
} );
```

The filter receives an array with `path`, `cid` (defaults to the embeds array key), `name` (defaults to the file's basename), `encoding` (default `base64`), `type` (default auto-detected), and `disposition` (default `inline`).

> **Note:** Inline embeds only work on connections that send through PHPMailer — the built-in **SMTP** and **Any Hosting Email Service** connections. Providers that send over their own HTTP API (Amazon SES, Mailgun, Cloudflare, toSend, and similar) build their message separately and don't support this filter.

## Related

- [Multiple SMTP Connections & Auto Routing](/multiple-smtp-connections-auto-routing) — setting a custom sender per plugin
- [FluentSMTP Settings](/fluentsmtp-settings) — general settings covered in the dashboard, not by filter
