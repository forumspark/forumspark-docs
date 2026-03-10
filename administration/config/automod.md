# AutoMod

AutoMod allows you to create automated moderation rules that trigger when new topics are created. Rules can automatically close, pin, move topics, add a title prefix, or post an automatic reply.

You can manage AutoMod rules from the **AutoMod** section in the Admin Control Panel.

[[toc]]

## Creating a Rule

To create a new AutoMod rule, go to **AutoMod > Topic AutoMod** and click **Create AutoMod Rule**.

Fill in the following fields:

- **Name**: A label to identify the rule in the admin area.
- **Topic Prefix**: An optional text prefix that will be prepended to the topic title (max 255 characters). For example, `[Approved]` or `[Info]`.
- **Target Forum**: Optionally select a forum to move matching topics into.
- **Auto-Reply**: An optional message that will be posted as an automatic reply to the topic (max 65,000 characters). BBCode is supported.
- **Close Topic**: If enabled, the topic will be automatically closed (locked) so no further replies can be posted.
- **Pin Topic**: If enabled, the topic will be automatically pinned to the top of the forum.
- **Global**: If enabled, the rule applies to all forums. If disabled, you can select specific forums where the rule should apply.

<img width="1955" height="1071" alt="image" src="https://github.com/user-attachments/assets/8f09aca9-bada-46e3-9598-d5012894501b" />


## Available Actions

Each rule can perform one or more of the following actions when triggered:

| Action | Description |
|--------|-------------|
| Close topic | Locks the topic to prevent further replies. |
| Pin topic | Pins the topic to the top of the forum listing. |
| Move to forum | Moves the topic to a different forum section. |
| Add prefix | Prepends text to the topic title. |
| Post auto-reply | Automatically creates a reply in the topic with the configured message. |

Actions are applied in the order listed above. You can combine multiple actions in a single rule.

## Forum Targeting

- **Global rules** apply to topics created in any forum on your board.
- **Targeted rules** apply only to topics created in the selected forums.

When editing a rule, you can change the forum selection at any time. Updating the forums list will only affect new topics — existing topics that have already been processed will not be modified.

## Applying AutoMod Manually

In addition to automatic triggering, moderators can also apply AutoMod rules manually:

- **Single topic**: From a topic page, moderators can trigger AutoMod rules on that specific topic.
- **Bulk**: From a forum listing, moderators can apply AutoMod rules to multiple selected topics at once.

## Notes

- AutoMod rules are only triggered when a new topic is created. Editing a topic does not re-trigger rules.
- Rules are processed in the order they were created. If multiple rules match, all of them will be applied.
- Auto-replies are posted as system messages and are not attributed to any specific user.
- AutoMod is particularly useful for support forums (auto-reply with guidelines), announcement sections (auto-pin and close), or intake forums (move to appropriate section after posting).
