# Custom Pages

Custom pages let you create standalone content on your board, such as rules, guidelines, about pages or any other static information. You can find them under the **Content** navigation group in the Admin CP.

![Custom Pages](/screenshots/admin/custom-pages.png)

[[toc]]

## Creating a page

Click **Create Page** to add a new page. Each page has the following fields:

- **Title** — the page heading displayed to users and in the browser tab.
- **Slug** — the URL-friendly identifier for the page (letters, numbers, dashes and underscores only). Must be unique across your board.
- **Description** — an optional short summary, used as a meta description for search engines.
- **Content** — the body of the page. Supports up to 60,000 characters.
- **Content Format** — choose between **BBCode** or **HTML**.
- **Sort Order** — controls the display order when listing pages.

![Create Page](/screenshots/admin/create-page.png)

## Content formats

### BBCode

The default format. Write your page content using BBCode tags, which are automatically converted to HTML when displayed. This is the same syntax used throughout the board for posts and signatures.

### HTML

For advanced layouts, choose the HTML format. This allows you to write raw HTML, including `<style>` and `<script>` tags for fully custom page designs.

> Note: HTML pages give you full control over the markup. Be careful when pasting HTML from external sources.

## Publishing

Pages are not visible to users until published. Toggle the **Published** checkbox when creating or editing a page to control its visibility. Only published pages are accessible on the front end.

## Adding pages to the board menu

Enable the **Show in Menu** option to automatically add the page as a menu item. When this option is toggled:

- A menu item linking to the page is created automatically.
- If you later disable this option, the corresponding menu item is removed.

You can also manage menu items separately from the [Board Menu](/administration/content/board-menu) section.

## Editing and deleting pages

To edit a page, click on it from the pages list. All fields can be updated at any time. If the page has a linked menu item and you delete the page, the menu item is also removed automatically.
