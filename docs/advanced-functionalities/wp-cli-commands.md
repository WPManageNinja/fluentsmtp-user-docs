# WP-CLI Commands

To manage FluentSMTP from the command line, follow the commands below –

## Prerequisites

- FluentSMTP installed and activated ([installation guide](/install-and-activate-fluentsmtp))
- [WP-CLI](https://wp-cli.org/) installed and available on your server

> **Note:** WP-CLI support was added in v2.3.0. All commands use the `wp fluent-smtp` namespace.

## Send a Test Email

Use this command to send a test email from the command line, without opening the WordPress dashboard.

```
wp fluent-smtp test [--to=<email>] [--from=<email>] [--text]
```

- `--to` — recipient address. Defaults to the site admin email if omitted.
- `--from` — sender address. Defaults to your default connection if omitted.
- `--text` — send as plain text instead of HTML.

```
wp fluent-smtp test
wp fluent-smtp test --to=me@example.com --text
```

## Check Connection Health

Use this command to manually run the same health check described in [Connection Health Check](/connection-health-check), instead of waiting for the daily automatic check.

```
wp fluent-smtp health [--format=<format>]
```

- `--format` — output format: `table` (default), `csv`, `json`, or `yaml`.

```
wp fluent-smtp health
wp fluent-smtp health --format=json
```

The command exits with an error status if any connection is unhealthy, so it's safe to use in a monitoring script or cron job.

## View Sending Stats

Use this command to print sending statistics for your connections directly in the terminal.

```
wp fluent-smtp stats
```

## Prune Email Logs

Use this command to manually prune old email logs in batches. This uses the same batched-pruning improvement described in the [Email Logs](/fluentsmtp-email-logs-feature) documentation, and is useful for large sites that want to trigger a prune outside of the automatic schedule.

```
wp fluent-smtp prune-logs [--days=<days>] [--yes]
```

- `--days` — delete logs older than this many days. Defaults to your configured **Delete Logs** period under [FluentSMTP Settings](/fluentsmtp-settings) if omitted.
- `--yes` — skip the confirmation prompt.

```
wp fluent-smtp prune-logs
wp fluent-smtp prune-logs --days=30 --yes
```

> **Remember**, pruning deletes email log entries permanently. Confirm your retention needs before running this command on a production site.
