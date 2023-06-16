# Board Settings

All of the following settings can be changed from within the board settings section of the Admin CP.  These are located at `/admin/preferences`.  You can get there by looking for the "Board Config" navigation group and hitting 'Settings'.

![Board Config](/screenshots/admin/board-config.png)

[[toc]]

## Rename your board

You can control the title and description for your board here.  The title is displayed throughout on each page.  The description will be used as a meta description to help search engines.

## Toggle board online status

Determine whether your board should be available to the public or not.  While your board is offline, guests will not be able to browse the board and will not be able to create new accounts.  The board will also return a 503 - Service Unavailable response code.

When your board is offline, you can set a message that will be presented to users.  You can use BB code here if needed.

![Board offline controls](/screenshots/admin/board-offline.png)

## Disable Registrations

If you need to disable new user registrations, you can do this from this section.  This might come in handy if you want a private, invite-only forum or if you're managing your users in some other way.

## Change default user groups

Every user on your forum has a user group - even guests.  The user group allows you to control what features and forums the contained users have access to.  By default, guests are given the *Guests* user group and new members are given the *Members* user group.  If these are unsuitable, you are free to change them.  While these are set, the groups will be unavailable for deletion.

![Default User Groups](/screenshots/admin/default-groups.png)

## Post Rate Limiting

The rate limiter prevents acts as a barrier to prevent excessive spam and post flooding.  There are 2 settings to control here, which are the number of posts that can be made and the number of minutes the limit should act on (decay).

![Rate limiting](/screenshots/admin/rate-limiting.png)

By default this is set to allow users to post 5 times every minute.  Once the user hits that limit, they will need to wait to be able to post again.

![Rate limit exceeded](/screenshots/admin/rate-limit-exceeded.png)

