# User Approvals

When **manual approval** is enabled for new registrations, administrators must manually approve each user before they can access the forum.

## What happens when a user registers

- The user is **blocked from logging in** until approved.
- The user is **not allocated a member number** until approval.
- A notification is sent to all administrators informing them that a new user is awaiting approval.

## Reviewing pending users

Clicking the link in the admin notification will take you directly to the **user edit page** in the Admin CP.

From there, you can choose to:

- **Approve** the user:
    - The user is assigned a member number.
    - An approval confirmation email is sent to the user.
    - The user can now log in and access the forum.

- **Deny** the user:
    - The account is immediately deleted.
    - No further action is required.

![Approve or Deny User](/screenshots/admin/user-approval.png)

> Note: This process is one-time. Once approved or denied, the account status cannot be reverted.

## Related Settings

Manual approval can be enabled or disabled from the [Board Settings](/administration/config/settings) section under the **Registrations** section.
