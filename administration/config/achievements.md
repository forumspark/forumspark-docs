# Achievements

ForumSpark includes a built-in achievement system that lets you reward users for their contributions and milestones. Achievements appear on user profiles and contribute to an overall achievement score.

You can manage achievements from the **Achievements** section in the Admin Control Panel.

[[toc]]

## Enabling Achievements

Before achievements will appear on your board, you need to enable the feature:

1. Go to **Achievements > Settings** in the Admin CP.
2. Toggle **Achievements Enabled** to on.
3. Set the **Showcase Limit** — this controls how many achievements a user can display on their profile (between 0 and 6).

## Achievement Categories

Every achievement belongs to a category. Categories help organise achievements and make them easier for users to browse:

- **Posting** — Rewards based on creating topics and replies.
- **Engagement** — Rewards for interacting with content (reactions, polls, etc.).
- **Social** — Rewards for community interactions (mentions, conversations, etc.).
- **Milestones** — Rewards for reaching specific thresholds (post counts, anniversaries, etc.).
- **Community** — Rewards for contributing to the community overall.

## Achievement Tiers

Each achievement has a tier that determines its point value:

| Tier | Points |
|------|--------|
| Bronze | 10 |
| Silver | 25 |
| Gold | 50 |
| Platinum | 100 |

A user's total achievement score is the sum of all points from their earned achievements.

## Creating an Achievement

To create a new achievement, go to **Achievements** and click **Create Achievement**.

Fill in the following fields:

- **Name**: The display name of the achievement (max 255 characters).
- **Slug**: A URL-safe identifier for the achievement. Must be unique per board (max 255 characters).
- **Description**: A short explanation of how the achievement is earned (max 1,000 characters).
- **Category**: Select one of the predefined categories.
- **Tier**: Select the tier (Bronze, Silver, Gold, or Platinum).
- **Points**: Automatically set based on the tier, but can be overridden (minimum 0).
- **Icon**: Upload an image to use as the achievement's icon (max 512KB, image format).
- **Sort Order**: Controls the display order. Lower numbers appear first.
- **Active**: Whether the achievement is currently earnable.
- **Secret**: If enabled, the achievement is hidden from users until they earn it.

![Create Achievement](/screenshots/admin/create-achievement.png)

## System Achievements

ForumSpark ships with a set of built-in system achievements that cover common milestones. These are seeded automatically when achievements are first enabled and cover all five categories.

System achievements cannot be deleted, but they can be deactivated if you don't want them to be earnable.

## Granting and Revoking Achievements

As an administrator, you can manually award or remove achievements from users:

- **Grant**: From the achievement detail page, use the **Grant Achievement** form to award it to a specific user by username.
- **Revoke**: From the same page, you can revoke an achievement from a user. This will also deduct the points from that user's achievement score.

> Note: Deleting an achievement entirely will remove it from all users who earned it and deduct the corresponding points from their scores.

## Achievement Showcase

Users can choose which achievements to display on their profile. The number of achievements they can showcase is controlled by the **Showcase Limit** setting (0–6).

Achievements are displayed on the user's profile page and can also appear in the mini-profile alongside posts, depending on your theme.

## Notes

- Achievements are checked automatically when certain actions occur (posting, receiving reactions, etc.).
- A scheduled command also runs periodically to check for time-based achievements.
- The achievement score is cached per user and updated whenever achievements are granted or revoked.
- Secret achievements will not appear in achievement listings until the user has earned them.
