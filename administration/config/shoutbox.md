# Shoutbox

The Shoutbox is a lightweight live chat feature that appears on the board homepage. It allows members to send quick public messages without creating a full topic.

You can configure the Shoutbox from the **Board Config** section of the Admin Control Panel.

## Settings

- **Enabled?**: Toggle to turn the Shoutbox on or off.
- **Placement**: Choose where the Shoutbox appears:
    - **Top**: Appears above the main content on the homepage.
    - **Bottom**: Appears below the main content on the homepage.
- **Title**: The heading shown above the Shoutbox. You can rename this to suit your community tone.
- **Rules**: Optional text shown beneath the shout input. This text appears in a modal when users click the “Rules” link next to the Shoutbox title. BBCode is supported here.

![Shoutbox Settings](/screenshots/admin/shoutbox.png)

## Embedding the Shoutbox in Themes

You can also render the Shoutbox manually in custom themes using the special theme token:

`<!-- SHOUTBOX -->`


This is useful if you want to place the Shoutbox in a sidebar, header block, or anywhere else in your layout.

## Notes

- Shouts are not threaded or paginated. The most recent messages are shown first.
- All users can view the Shoutbox, but posting may be limited based on group permissions.
- Moderators can delete shouts via inline controls.
- If you’ve defined any **emoticons**, they will also be shown in a modal accessible from the Shoutbox interface.
