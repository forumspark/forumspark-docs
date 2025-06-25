# Reactions

ForumSpark allows you to define custom reactions that users can give to posts. These can be used for quick feedback (like, agree, thanks, etc.) and can optionally contribute to a user’s overall reaction score.

You can access the **Reactions** panel from the **Board Config** section in the Admin Control Panel.

## Adding a Reaction

To define a new reaction, fill out the following fields:

- **Reaction Name**: The label that will be shown in tooltips and for accessibility purposes.
- **Emoji**: An optional emoji to use as the visual for the reaction. If this is set, it takes priority over the custom image.
- **Custom Image**: An optional custom image URL. Only one of **Emoji** or **Custom Image** is required. If you use an image, upload it via the **File Manager** and paste the URL here.
- **Reaction Score**: A number used to increase or decrease the recipient's total reaction score when this reaction is received. Each user’s reaction only contributes once per post.
- **Display Order**: Controls where this reaction appears in reaction lists. Lower numbers appear first.

![Add Reaction Form](/screenshots/admin/reactions.png)

## Notes

- Users can give **multiple different reactions** to the same post, but not the **same reaction more than once**.
- Reaction scores only apply **once per user per reaction per post**.
- Reactions appear beneath posts and are visible to all users.
- You can combine emoji-based and image-based reactions across your board, but each reaction must use only one type.

