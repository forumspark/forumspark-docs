# Board Menu

The board menu controls the navigation links shown at the top of your board. You can add, remove and reorder items to customise the navigation experience for your users. Menu management is found under the **Content** navigation group in the Admin CP.

![Board Menu](/screenshots/admin/board-menu.png)

[[toc]]

## Default menu items

Every new board is created with a set of default menu items:

| Item | Feature |
|------|---------|
| Home | `home` |
| What's New | `whats-new` |
| Members | `members` |
| Search | `search` |
| Staff | `staff` |
| Help | `help` |

You can remove, reorder or add to these at any time.

## Menu item types

There are three types of menu item you can create:

### Feature

Links to a built-in board feature. The available features are:

- **Home** — the board index
- **What's New** — recently active topics
- **Members** — the member list
- **Search** — the search page
- **Staff** — the staff page
- **Active Topics** — topics with recent activity
- **Top Posters** — leaderboard of top contributors
- **Help** — the help section

### External

Links to any external URL. Use this to point users to your main website, social media pages or any other off-board destination. The URL must include the scheme (e.g. `https://`).

### Resource

Links to a [Custom Page](/administration/content/pages) on your board. When you select this type, choose from your existing pages. This creates a polymorphic link — if the page is later deleted, the menu item is also removed.

> Note: You can also add pages to the menu automatically by enabling **Show in Menu** when editing a custom page.

## Creating a menu item

Click **Create Menu Item** and fill in:

- **Title** — the label displayed in the navigation bar.
- **Type** — choose from Feature, External or Resource.
- Depending on the type, you will be asked for a **feature**, **URL** or **page**.
- **Sort Order** — controls the position in the navigation bar (lower numbers appear first).

![Create Menu Item](/screenshots/admin/create-menu-item.png)

## Reordering menu items

Adjust the **Sort Order** value on each item to control the display order. Items are sorted in ascending order, so an item with sort order `0` appears before one with sort order `5`.

## Editing and deleting menu items

Click on any menu item to edit it. To remove an item from the navigation, delete it from the list. Deleting a menu item does not delete the underlying page or feature — it only removes the navigation link.
