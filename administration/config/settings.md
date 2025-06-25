# Board Settings

All of the following settings can be changed from within the board settings section of the Admin CP. These are located at `/admin/preferences`. You can find them under the **Board Config** navigation group by clicking **Settings**.

![Board Config](/screenshots/admin/board-config.png)

[[toc]]

## Rename your board

You can control the **title** and **description** of your board here.

- **Title** appears at the top of every page and in browser tabs.
- **Description** is used as a meta description for search engines.

This is useful for setting your forum’s identity and improving SEO.

## Favicon

Upload a favicon image for your board. This is the small icon that appears in the browser tab. Common formats include `.ico` or small `.png` files.

## Toggle board online status

Control whether your board is publicly available. If disabled:

- Guests cannot access the board.
- Registration is blocked.
- A **503 - Service Unavailable** response is returned.

You can also define a **custom offline message**, which supports BBCode for formatting.

![Board offline controls](/screenshots/admin/board-offline.png)

## Disable registrations

To make your board invite-only or prevent new signups temporarily, disable the **Registrations Enabled** option. When disabled, users will not be able to access the registration page.

### Require admin approval

You can require that all new user registrations be manually approved by an administrator before they gain access to the board.

When this setting is enabled:
- New users will not be able to log into their account until approved
- Admins will receive a notification that a new user is pending
- The user will receive a confirmation email once they are approved

See [User Approvals](/administration/users/user-approvals) for the full flow.


## Default user groups

All users are assigned a user group, which determines their permissions.

- **Guest User Group**: Used for unauthenticated visitors.
- **Default User Group**: Assigned to users after they register.

These groups are locked from deletion while they are in use as defaults.

![Default User Groups](/screenshots/admin/default-groups.png)

## Default avatar

Upload an avatar image that will be used for users who haven’t set one. The image must be under 200KB and 400×400 pixels.

## Active user cutoff

This setting controls how long a user is considered "online" after their last activity. The default is 30 minutes.

## Hot topic reply count

Define how many replies are needed before a topic is marked as "hot." Set this to `0` to disable the hot topic indicator entirely.

## Post rate limiting

Post rate limiting helps reduce spam and posting abuse.

You can configure:
- **Max posts**: How many posts a user can make within the time window.
- **Rate limit decay**: The time window in minutes.

For example, with a max of 5 posts and a decay of 1 minute, users can post 5 times per minute before being rate-limited.

![Rate limiting](/screenshots/admin/rate-limiting.png)
