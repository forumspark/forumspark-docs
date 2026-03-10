# Groups & Permissions

User groups are the foundation of ForumSpark's permission system. Every user belongs to a primary group, and can optionally belong to one or more secondary groups. Groups determine what a user can see and do across your board.

You can manage groups from the **Users & Groups** section in the Admin Control Panel.

[[toc]]

## Creating a Group

To create a new group, go to **Users & Groups > Groups** and click **Create Group**.

Fill in the following fields:

- **Name**: The name of the group (max 255 characters). For example, "Moderators" or "VIP Members".
- **Title Format**: Controls how the group name is displayed alongside the username. Use `%s` as a placeholder for the username. For example, `<strong>%s</strong>` would bold the username for members of this group.
- **Custom CSS Classes**: Optional CSS classes applied to the username when displayed (max 255 characters). This lets you colour-code groups in post listings.
- **Sort Order**: Controls the display order in group listings. Lower numbers appear first.
- **Show on Staff Page**: If enabled, members of this group will appear on the public Staff page.

<img width="1940" height="1517" alt="image" src="https://github.com/user-attachments/assets/23584ac0-7217-4b5e-a5c6-87e0b3d3c567" />


## Forum Permissions

Each group can be assigned specific permissions on a per-forum basis. This gives you fine-grained control over which groups can access which forums.

The available permission types are:

| Permission | Description |
|------------|-------------|
| View | Whether the group can see the forum exists in the forum listing. |
| Read | Whether the group can open and read topics within the forum. |
| Reply | Whether the group can post replies to existing topics. |
| Start | Whether the group can create new topics in the forum. |

Permissions are managed from the forum edit page in [Section Management](/administration/structure/section-management).

## Default Groups

Two groups have special roles:

- **Guest User Group**: Applied to all unauthenticated visitors. Controls what non-logged-in users can see.
- **Default User Group**: Automatically assigned to users when they register.

These groups can be changed in [Board Settings](/administration/config/settings) under **Default user groups**. Groups currently assigned as a default cannot be deleted.

## Secondary Groups

Users can belong to multiple groups at the same time. Every user has one **primary group**, and can be assigned to additional **secondary groups**.

When determining permissions, ForumSpark checks all of a user's groups (primary and secondary). If any group grants a permission, the user has that permission.

Secondary groups are assigned from the user edit page in the Admin CP.

## Auto-Promotion

Groups can be configured to automatically promote users to a higher group based on their post count.

To set up auto-promotion:

1. Edit the group you want to promote **from**.
2. Set **Promotes to Group** to the target group.
3. Set **Minimum Posts** to the number of posts required to trigger the promotion.

When a user's post count reaches the threshold, they are automatically moved to the target group. This is useful for creating tiered membership levels (e.g., "New Member" → "Regular" → "Senior").

## Staff Page

Groups with **Show on Staff Page** enabled will have their members listed on the public Staff page. This is typically used for administrators, moderators, and other staff-level groups.

Members are displayed grouped by their group, in the order defined by the group's sort order.

## Notes

- Groups cannot be deleted while they are assigned as the default or guest group.
- The title format field must contain exactly one `%s` placeholder.
- Permissions are additive — if a user belongs to multiple groups, they receive the combined permissions of all their groups.
- Changes to group permissions take effect immediately for all members of the group.
