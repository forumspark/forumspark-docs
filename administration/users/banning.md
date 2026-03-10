# Banning Users

Banning prevents a user from accessing your board. Bans can be permanent or temporary, and are managed from the user's profile in the Admin CP or through the moderation tools.

![Banning](/screenshots/admin/banning.png)

[[toc]]

## Ban types

### Permanent ban

A permanent ban has no expiry date. The user is blocked from accessing the board indefinitely, until an administrator manually lifts the ban.

### Temporary ban

A temporary ban expires after a set duration. You can specify the length using a number and a time unit:

- **Hours** — e.g. 24 hours
- **Days** — e.g. 7 days
- **Weeks** — e.g. 2 weeks

Once the ban expires, the user regains access to the board automatically.

## Creating a ban

When banning a user, you will be asked to provide:

- **Reason** — a short explanation for the ban (up to 255 characters). This is visible to the banned user when they attempt to access the board.
- **Duration** — choose **permanent** or set a time period using the interval and type fields.

![Ban User](/screenshots/admin/ban-user.png)

## What banned users see

When a banned user tries to access any page on the board, they are shown a dedicated ban notice page displaying:

- The reason for their ban.
- For temporary bans, when the ban expires.

Banned users cannot access any board features. The only action available to them is logging out.

## Managing bans

The ban list in the Admin CP shows all currently active bans. Expired temporary bans are automatically removed from the list.

To lift a ban early, delete it from the user's ban list. The user will immediately regain access to the board.

> Note: Banning is account-based. There is no IP-based banning — if a banned user creates a new account, they will be able to access the board unless that account is also banned.
