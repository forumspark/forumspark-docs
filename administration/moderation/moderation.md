# Moderation

ForumSpark provides a range of moderation tools that allow administrators and moderators to manage content across your board. These tools are accessible directly from the forum and topic views.

[[toc]]

## Topic Moderation

Moderators have access to the following actions on individual topics:

### Approving Topics

When **Require admin approval** is enabled in [Board Settings](/administration/config/settings), new topics are held in a moderation queue until approved.

- Pending topics are highlighted and visible only to moderators and the topic author.
- From the topic page, click **Approve** to publish the topic and make it visible to all users.

### Closing and Opening Topics

- **Close**: Locks a topic so that no further replies can be posted. The topic remains visible and readable.
- **Open**: Reopens a previously closed topic, allowing replies again.

Closed topics display a lock indicator in the topic listing.

### Pinning and Unpinning Topics

- **Pin**: Pins a topic to the top of the forum listing, above all other topics.
- **Unpin**: Returns a pinned topic to its normal position in the listing.

Pinned topics are useful for important announcements or sticky threads that should always be visible.

### Moving Topics

Move a topic from one forum to another. This is useful when a user posts in the wrong section.

1. From the topic, click the **Move** option.
2. Select the destination forum.
3. Confirm the move.

The topic and all its replies are moved to the new forum.

### Merging Topics

Merge two topics into one. This combines the replies from both topics into a single thread.

1. From the topic you want to merge, click **Merge**.
2. Select the target topic to merge into.
3. Confirm the merge.

All replies from both topics will be combined into the target topic.

### Deleting Topics

Topics can be deleted by moderators. Deleted topics are soft-deleted and removed from public view.

## Reply Moderation

### Approving Replies

When approval is required, individual replies are also held in a moderation queue. Moderators can approve pending replies from the topic view to make them visible.

### Editing Replies

Moderators can edit any reply. An edit notice is displayed on the post showing when it was last edited.

### Deleting Replies

Moderators can delete individual replies from a topic. Deleted replies are soft-deleted and removed from public view.

## Bulk Moderation

From the forum listing, moderators can select multiple topics and perform actions on them at once using the **bulk moderation toolbar**.

Available bulk actions include:

- Close selected topics
- Pin selected topics
- Move selected topics
- Delete selected topics
- Apply [AutoMod](/administration/config/automod) rules to selected topics

To use bulk moderation:

1. Navigate to a forum listing.
2. Use the checkboxes to select one or more topics.
3. Choose an action from the moderator toolbar at the bottom of the page.

## Moderation Queue

When user approval is enabled, pending topics and replies are visible in a moderation queue. Administrators and moderators can access this from the forum view to see all content awaiting approval.

Pending content is highlighted to distinguish it from approved content.

## Moderator Groups

Moderator permissions are assigned at the group level. When editing a forum section, you can designate one or more groups as moderators for that specific forum.

Users in moderator groups have elevated privileges within their assigned forums, including the ability to approve, close, pin, move, merge, and delete content.

See [Section Management](/administration/structure/section-management) for details on assigning moderator groups.

## Notes

- Moderation actions are available inline from the topic and forum views — there is no separate moderation panel.
- Only users with the appropriate group permissions will see moderation controls.
- Closing a topic does not affect its visibility. Users can still read the topic and its replies.
- Merging topics is a one-way action. The source topic is removed and its replies are merged into the target.
- Bulk moderation actions apply to all selected topics in the current forum.
