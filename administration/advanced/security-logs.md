# Security Logs

Security logs provide an audit trail of authentication and account-related events on your board. They help administrators monitor suspicious activity and investigate potential security issues.

You can view security logs from the **Advanced** section in the Admin Control Panel.

[[toc]]

## Viewing Logs

The security log displays a chronological list of events, with the most recent entries shown first. Each log entry includes:

- **Event Type**: The type of action that occurred.
- **User**: The user associated with the event (if applicable).
- **Date**: When the event occurred.

Logs are paginated at 50 entries per page.

## Event Types

The following event types are tracked:

| Event | Description |
|-------|-------------|
| Login | A user successfully logged in. |
| Logout | A user logged out. |
| Registered | A new user account was created. |
| Password Reset | A user requested a password reset. |
| Password Changed | A user changed their password. |
| Email Changed | A user changed their email address. |
| Account Deleted | A user account was removed. |
| Lockout | A user was locked out after too many failed login attempts. |

## Filtering

You can filter the log by event type using the dropdown at the top of the page. This is useful for quickly finding specific types of events, such as all failed login attempts or recent registrations.

## Privacy

For privacy and security reasons, certain sensitive information is not displayed to board administrators:

- **IP addresses** are not shown in the admin view.
- **Email addresses** and related metadata (such as old and new email addresses during an email change) are hidden.

This ensures that board administrators cannot access personal data unnecessarily. Full log details are only available to platform super-administrators.

## Notes

- Security logs are created automatically whenever a tracked event occurs. No configuration is required.
- Logs are retained according to the platform's data retention policy. Older entries are pruned periodically.
- Security logs are read-only. They cannot be edited or deleted by board administrators.
