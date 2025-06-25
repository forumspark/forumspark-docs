# Emoticons

ForumSpark allows you to define custom emoticons that users can include in their posts using shortcodes.

You can access the **Emoticons** panel from the **Board Config** section in the Admin Control Panel.

## Adding a New Emoticon

To add a new emoticon, provide the following:

- **Text to replace**: This is the shortcode users will type, such as `:wave:` or `:)`. When the post is rendered, this text will be replaced by the associated image.
- **Image URL**: The full URL to the image to use for the emoticon. This must be a valid image format (e.g. `.png`, `.gif`, `.jpg`).
- **Display order**: Determines where the emoticon appears in the selection list. Lower numbers appear first.
- **Show in list**: If enabled, the emoticon will appear in the emoticon picker UI. You can keep this off for hidden or rarely used emoticons.

![Add Emoticon Form](/screenshots/admin/emoticons.png)

## Notes

- Emoticons are parsed after BBCode, so make sure your shortcodes don't interfere with any formatting tags.
- Avoid using very large images. Aim for small icons (e.g. 16–32px square) for consistency.
- You can upload emoticon images directly to your board using the **File Manager** in the Admin Control Panel. After uploading, copy the URL from the file list and use it in the **Image URL** field.

Once saved, the new emoticon will be available for use across all posts, shoutbox and private messages.
