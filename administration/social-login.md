# Social Login

Social login allows users to easily authenticate into ForumSpark using their preferred provider.  Users can choose to link 1 or more providers once they have been configured in the admin.

![Board Config](/screenshots/admin/users-and-groups.png)

[[toc]]

## OAuth 2.0

Social Login uses an authentication mechanism called OAuth 2.0.  In order to configure authentication with a 3rd party provider, you will need to create an OAuth app in the developer tools of your chosen integration.

From the admin area, choose 'Social Login'.

From the list provided, choose the integration you wish to enable and then click 'Configure'.

![Discord Configuration](/screenshots/admin/social-login.png)

From the configuration page, you will be given a callback URL that you will need to paste into the 3rd party callback URL field.  It will look something like `https://support.forumspark.net/social/discord/callback` - this is the URL that the user is redirected to once they have confirmed their login with the 3rd party service.

Once you have an app, you'll be able to use its client id and secret and paste those into the ForumSpark admin:

![Discord Configuration](/screenshots/admin/configure-discord.png)

## Create a login app with 3rd party services

This section will describe where and how to set up each 3rd party integration.

### Discord

### Facebook

### GitHub

### Google

## User Login

Once you have enabled a service, it will automatically appear on the user login screen.

![Login with social buttons enabled](/screenshots/admin/login-with-social-buttons.png)