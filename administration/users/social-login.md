# Social Login

Social login allows users to easily authenticate into ForumSpark using their preferred provider.  Users can choose to link 1 or more providers once they have been configured in the admin.

<img width="1937" height="543" alt="image" src="https://github.com/user-attachments/assets/0a4ad88d-b5fe-4896-b15f-bc48aedab039" />

[[toc]]

## OAuth 2.0

Social Login uses an authentication mechanism called OAuth 2.0.  In order to configure authentication with a 3rd party provider, you will need to create an OAuth app in the developer tools of your chosen integration.

From the admin area, choose 'Social Login'.

From the list provided, choose the integration you wish to enable and then click 'Configure'.

<img width="1940" height="681" alt="image" src="https://github.com/user-attachments/assets/d8486aa8-a7fd-41b9-a660-32f0df5d24eb" />

From the configuration page, you will be given a callback URL that you will need to paste into the 3rd party callback URL field.  It will look something like `https://support.forumspark.net/social/discord/callback` - this is the URL that the user is redirected to once they have confirmed their login with the 3rd party service.

Once you have an app, you'll be able to use its client id and secret and paste those into the ForumSpark admin:


## Create a login app with 3rd party services

This section will describe where and how to set up each 3rd party integration.

### Discord

### Facebook

### GitHub

### Google

## User Login

Once you have enabled a service, it will automatically appear on the user login screen.

