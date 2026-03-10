# Bulletins

Bulletins are dismissible announcements that you can display across your board. They're useful for sharing important updates, event notices, or time-sensitive information with your community.

You can manage bulletins from the **Custom Content** section in the Admin Control Panel.

[[toc]]

## Creating a Bulletin

To create a new bulletin, go to **Custom Content > Bulletins** and click **Create Bulletin**.

Fill in the following fields:

- **Title**: A short heading for the bulletin (max 255 characters).
- **Body**: The main announcement content (max 10,000 characters). BBCode is supported.
- **Style**: Choose a visual style for the bulletin (see below).
- **Custom CSS Class**: If using the "Custom CSS Class" style, enter one or more CSS class names here. Only alphanumeric characters, spaces, dashes, and underscores are allowed.
- **Dismissible**: If enabled, users can dismiss the bulletin and it will not appear again for them.
- **Active**: Whether the bulletin is currently visible.
- **Cached**: When enabled, the bulletin content is cached for improved performance. Recommended for bulletins that don't change frequently.
- **Position**: Where the bulletin appears on the page.
- **Priority**: Controls the display order when multiple bulletins are active. Lower numbers appear first (0–999).
- **Starts At**: Optional. The date and time when the bulletin should start appearing.
- **Ends At**: Optional. The date and time when the bulletin should stop appearing. Must be after the start date.

<img width="1935" height="1854" alt="image" src="https://github.com/user-attachments/assets/49f99a9a-f1ed-44f0-b910-f39d4a19f1d1" />


## Styles

Bulletins support the following visual styles:

| Style | Description |
|-------|-------------|
| Primary | Uses the board's primary colour scheme. |
| Accent | Uses the accent/highlight colour scheme. |
| Info | A neutral informational style. |
| Warning | A yellow/amber warning style. |
| Success | A green success/confirmation style. |
| Dark | A dark background with light text. |
| Light | A light background with dark text. |
| Custom CSS Class | Allows you to provide your own CSS class for full control. |

## Positions

Choose where the bulletin appears on the page:

| Position | Description |
|----------|-------------|
| Header Bar | Appears at the very top of the page, above all content. |
| Above Content | Appears above the main content area but below the navigation. |
| Below Content | Appears below the main content area. |

## Scheduling

You can schedule bulletins to appear during a specific time window using the **Starts At** and **Ends At** fields. This is useful for event announcements, seasonal messages, or temporary notices.

- If only **Starts At** is set, the bulletin will appear from that date onwards.
- If only **Ends At** is set, the bulletin will appear immediately and disappear at that date.
- If both are set, the bulletin will only appear during that window.
- If neither is set, the bulletin will appear immediately and remain visible until deactivated.

## Group Targeting

By default, bulletins are visible to everyone. You can restrict visibility to specific user groups by selecting one or more groups when creating or editing a bulletin.

When groups are selected, only members of those groups will see the bulletin. This is useful for showing group-specific information, such as moderator notices or VIP announcements.

The guest group can also be targeted, allowing you to display bulletins specifically to non-logged-in visitors.

## Dismissals

When a bulletin is marked as **Dismissible**, users can close it and it will not appear again for that user.

As an administrator, you can:

- **View Dismissals**: See which users have dismissed a specific bulletin.
- **Reset Dismissals**: Re-show a dismissed bulletin to all users who previously closed it. This is useful if the bulletin content has been updated.

## Notes

- Multiple bulletins can be active at the same time. They are displayed in priority order.
- Caching is recommended for bulletins with static content to reduce page load times.
- Users who are not logged in cannot dismiss bulletins, so they will see dismissible bulletins on every visit.
- Bulletins support BBCode formatting in the body field, so you can include links, bold text, and other formatting.
