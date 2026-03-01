# Forum Spark Theme Guide

:::info WIP
Theming ForumSpark is a work in progress.  Please be aware that whilst we are still in MVP phase, some of these things will be subject to change and may have impact on your theme if you decide to create one.
:::

This section will give you an overview of how to approach theming with Forum Spark.  The idea was to give themers a level of control over the appearance of a ForumSpark board without making it too complicated in managing all of the individual templates that make up the whole board.

As such there are 3 main components that make up a theme: the stylesheet, the board template and the theme images.

![Theme](/screenshots/theming/theme.png)


# ForumSpark Theming Guide

Everything you need to create and customize themes for your ForumSpark board.

---

## Table of Contents

- [Getting Started](#getting-started)
- [How Themes Work](#how-themes-work)
- [Theme Inheritance](#theme-inheritance)
- [CSS Variables Starter Template](#css-variables-starter-template)
- [Color Palette Reference](#color-palette-reference)
- [Layout Tokens](#layout-tokens)
- [Page Body Classes](#page-body-classes)
- [Theme Images](#theme-images)
- [Board Template Injection Points](#board-template-injection-points)
- [CSS Class Reference](#css-class-reference)
  - [Base Styles](#base-styles)
  - [Utilities](#utilities)
  - [Components](#components)
- [Theme Export & Import](#theme-export--import)
- [Tips & Best Practices](#tips--best-practices)

---

## Getting Started

ForumSpark themes allow board administrators to fully customize the look and feel of their forum. Themes are managed in **Admin Panel > Themes** and consist of three parts:

1. **CSS Stylesheet** — Custom CSS that styles every element of your board
2. **Layout Template** — HTML structure using special tokens that define how the page is assembled
3. **Theme Images** — Replaceable icons and branding (logo, forum markers, stats icons)

Each board has a **default theme**, and users can switch between any enabled themes.

---

## How Themes Work

When a page loads, ForumSpark:

1. Loads the base compiled CSS (if theme inheritance is enabled)
2. Loads your theme's custom CSS on top as a `<link>` tag
3. Renders the page using your theme's layout template, replacing tokens with rendered components
4. Uses your theme's custom images (or falls back to defaults)

Your custom CSS is served at `/themes/{theme}/css` and cache-busted automatically via a version hash.

---

## Theme Inheritance

When creating a theme, you can choose to **inherit from the ForumSpark base theme**.

| Inherit Default | Behavior |
|---|---|
| **Enabled** (recommended) | The full base Tailwind CSS is loaded first. Your theme CSS layers on top as overrides. You only need to write the CSS for things you want to change. |
| **Disabled** | Only your theme CSS is loaded. You are responsible for styling every element from scratch. |

For most themes, **keep inheritance enabled** and override only what you need.

---

## CSS Variables Starter Template

Copy this into your theme's stylesheet editor as a starting point. Uncomment and change any value to customize your board.

```css
/* ============================================
   ForumSpark Theme Starter
   ============================================
   Uncomment and modify any variable below to
   override the default appearance.
   ============================================ */

/* === Body & Page Background === */
/* body { background-color: #f1f5f9; } */

/* === Links === */
/* a { color: #64748b; } */
/* a:hover { color: #6087d1; } */

/* === Page Header (Logo Area) === */
/* .page-header {
     background: linear-gradient(to bottom, #4c6ec4, #6087d1);
   } */

/* === User Menu Bar (Top Bar) === */
/* .user-menu { background-color: #1e293b; } */

/* === Navigation Menu === */
/* .sub-menu { background-color: #6087d1; } */
/* .nav-link { color: #f2f6fc; } */
/* .nav-link:hover { color: #ffffff; } */
/* .nav-link-active { background-color: #f1f5f9; color: #4c6ec4; } */

/* === Breadcrumbs === */
/* .breadcrumbs { background-color: #e2eaf7; } */

/* === Panels (Primary) === */
/* .panel { background-color: #f8fafd; } */
/* .panel .panel__title {
     background: linear-gradient(to bottom, #4c6ec4, #6087d1);
     border-color: #6087d1;
   } */
/* .panel .panel__content { border-color: #ccdbf1; } */
/* .panel .panel__footer {
     background: linear-gradient(to top, #e2eaf7, #f2f6fc);
     border-color: #ccdbf1;
     border-bottom-color: #6087d1;
   } */
/* .panel .panel__sub-header { background-color: #f2f6fc; } */
/* .panel .panel__section { background-color: #f2f6fc; } */

/* === Panels (Secondary — e.g. Board Stats) === */
/* .panel--secondary .panel__title {
     background: linear-gradient(to bottom, #2f9a81, #51b69a);
     border-color: #2f9a81;
   } */
/* .panel--secondary .panel__footer {
     border-bottom-color: #2f9a81;
   } */

/* === Forum List === */
/* .forum { background-color: #f8fafd; } */
/* .forum__marker { background-color: #f2f6fc; } */
/* .forum__name > a { color: #4059ad; } */
/* .forum__name > a:hover { color: #4c6ec4; } */
/* .forum__last { background-color: #f2f6fc; } */

/* === Topic List === */
/* .topic-row { background-color: rgba(242, 246, 252, 0.5); } */

/* === Posts === */
/* .reply .reply__main { background-color: #f8fafd; } */
/* .reply .reply__user { } */
/* .reply .reply__content { } */
/* .reply .reply__details { background-color: #f2f6fc; } */
/* .reply__actions { background-color: #f2f6fc; } */
/* .separator {
     background: linear-gradient(to bottom, #e2eaf7, #f2f6fc);
   } */

/* === Buttons === */
/* .btn-primary {
     background: linear-gradient(to bottom, #f2a82d, #f4b942);
     border-color: #f2a82d;
   } */
/* .btn-secondary {
     background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
     border-color: #e2e8f0;
   } */

/* === Shoutbox === */
/* .shoutbox { background-color: #ffffff; } */
/* .shoutbox-input-container { background-color: #f2f6fc; } */

/* === Pagination === */
/* .pagination-link { background-color: #ffffff; border-color: #ccdbf1; } */
/* .pagination-link--current { background-color: #f2f6fc; } */

/* === Reactions === */
/* .reactions__reaction { background-color: #f2f6fc; border-color: #ccdbf1; } */
/* .reactions__reaction--reacted { background-color: #fef9ec; border-color: #f8d98f; } */

/* === Badges === */
/* .badge { background-color: #ccdbf1; } */

/* === Spoiler === */
/* .spoiler-header {
     background: linear-gradient(to bottom, #2f9a81, #51b69a);
     border-color: #2f9a81;
   } */
/* .spoiler-content {
     background-color: #effaf6;
     border-color: #97d8c4;
   } */

/* === Guest / Auth Layout === */
/* .guest-layout { background-color: #f2f6fc; } */

/* === Dark Mode (add .dark prefix) === */
/* .dark body { background-color: #0f172a; color: #e2e8f0; } */
/* .dark .panel { background-color: #1e293b; } */
/* .dark .panel .panel__title { background: linear-gradient(to bottom, #334275, #3b4c92); } */
```

---

## Color Palette Reference

These are the exact color values used in the default ForumSpark theme. Reference these when creating your overrides.

### Primary (Blues)

Used for panels, headers, navigation, backgrounds, links, and focus states.

| Shade | Hex | Usage |
|---|---|---|
| 25 | `#f8fafd` | Panel backgrounds, lightest tint |
| 50 | `#f2f6fc` | Section backgrounds, sub-headers |
| 100 | `#e2eaf7` | Breadcrumbs, dividers, borders |
| 200 | `#ccdbf1` | Panel content borders, lighter borders |
| 300 | `#a8c4e8` | Hover states, subtle accents |
| 400 | `#7fa5db` | Interactive elements |
| 500 | `#6087d1` | Primary brand color, panel title gradient end |
| 600 | `#4c6ec4` | Panel title gradient start, navigation bg |
| 700 | `#4059ad` | Forum link text |
| 800 | `#3b4c92` | Dark accents |
| 900 | `#334275` | Very dark accents |
| 950 | `#232b48` | Deepest shade |

### Accent (Orange/Amber)

Used for primary action buttons (CTA) and highlighted states.

| Shade | Hex | Usage |
|---|---|---|
| 50 | `#fef9ec` | Reacted states, approval backgrounds |
| 100 | `#fcedc9` | Light highlights |
| 200 | `#f8d98f` | Reacted border color |
| 300 | `#f4b942` | Button gradient end |
| 400 | `#f2a82d` | Button gradient start, border |
| 500 | `#ec8714` | Strong accent |
| 600 | `#d1630e` | Dark accent |
| 700 | `#ad4510` | Darker accent |
| 800 | `#8d3513` | Very dark accent |
| 900 | `#742d13` | Deepest accent |
| 950 | `#421506` | Darkest shade |

### Secondary (Teal/Green)

Used for secondary panels, checkboxes, best-answer highlights, spoilers, and success states.

| Shade | Hex | Usage |
|---|---|---|
| 50 | `#effaf6` | Best answer/spoiler background |
| 100 | `#d8f3e7` | Success alert background |
| 200 | `#b5e5d3` | Best answer/success borders |
| 300 | `#97d8c4` | Spoiler content border |
| 400 | `#51b69a` | Secondary panel gradient end |
| 500 | `#2f9a81` | Secondary brand color, panel/spoiler headers |
| 600 | `#1f7c67` | Darker secondary |
| 700 | `#196355` | Dark secondary |
| 800 | `#164f44` | Very dark secondary |
| 900 | `#134139` | Deepest secondary |
| 950 | `#0a2420` | Darkest shade |

### Neutrals (Slate)

Inherited from Tailwind's `slate` palette. Used for body text, borders, backgrounds, and muted elements.

| Shade | Common Hex | Usage |
|---|---|---|
| 50 | `#f8fafc` | Code backgrounds, blockquotes |
| 100 | `#f1f5f9` | Body background, active nav states |
| 200 | `#e2e8f0` | Secondary button borders, inputs |
| 300 | `#cbd5e1` | Input borders, checkbox borders |
| 400 | `#94a3b8` | Muted icon colors, breadcrumb dividers |
| 500 | `#64748b` | Default link color, muted text |
| 600 | `#475569` | Secondary button text |
| 700 | `#334155` | Body text color, heading text |
| 800 | `#1e293b` | User menu bar background |
| 900 | `#0f172a` | Very dark |

### Box Shadows

Custom shadow utilities used throughout the theme:

| Name | Value | Usage |
|---|---|---|
| `shadow-px` | `inset 0 1px 0 #b8dcff` | Blue inset highlight |
| `shadow-inset-px` | `inset 0 1px 0 rgba(255,255,255,0.6)` | White inset glow |
| `shadow-highlight` | `inset 0 1px 0 rgba(255,255,255,0.4)` | Subtle inner highlight on rows |
| `shadow-highlighter` | `inset 0 1px 0 rgba(255,255,255,0.2)` | Very subtle inner highlight |
| `shadow-inset` | `inset 0 2px 0 rgba(0,0,0,0.1)` | Subtle top shadow |

### Font

The default font stack is **Inter** with system font fallbacks: `Inter, ui-sans-serif, system-ui, sans-serif, ...`

---

## Layout Tokens

Theme layouts use HTML with special comment tokens. ForumSpark replaces these tokens with rendered components when the page loads.

### Default Layout

```html
<!-- USERMENU -->
<div id="wrap">
    <!-- HEADER -->
    <!-- TOPMENU -->
    <!-- NAV -->
    <!-- MAIN -->
</div>
```

### Available Tokens

| Token | Description | Renders |
|---|---|---|
| `<!-- USERMENU -->` | User menu bar | The dark top bar with login/register (guests) or user dropdown, notifications, conversations (members) |
| `<!-- HEADER -->` | Board header | The logo/banner area with gradient background |
| `<!-- TOPMENU -->` | Main navigation | The primary navigation bar with links (Home, Help, Members, etc.) |
| `<!-- NAV -->` | Breadcrumbs | The breadcrumb trail for the current page |
| `<!-- MAIN -->` | Page content | The main page content area + footer. **Required — must appear exactly once.** |
| `<!-- USERSONLINE -->` | Users online panel | Panel showing currently online users |
| `<!-- RECENTLYONLINE -->` | Recently online | Panel listing recently active users |
| `<!-- SHOUTBOX -->` | Shoutbox | The real-time shoutbox chat panel |
| `<!-- RECENTACTIVITY -->` | Recent activity | Panel showing latest forum activity |
| `<!-- BOARDSTATS -->` | Board statistics | Panel with member counts, post counts, newest member, birthdays, etc. |

### Layout Customization Tips

- You can **reorder tokens** to change the page structure (e.g., move shoutbox above the main content)
- You can **wrap tokens in your own HTML** to add custom containers, classes, or spacing
- The `<!-- MAIN -->` token can only appear **once** in the layout
- Other tokens can appear up to **twice** each
- You can **omit tokens** to hide sections entirely

### Example: Custom Layout

```html
<!-- USERMENU -->
<div id="wrap">
    <!-- HEADER -->
    <!-- TOPMENU -->
    <!-- NAV -->
    <div class="custom-banner" style="background: #fef9ec; padding: 1rem; text-align: center;">
        Welcome to our community!
    </div>
    <!-- SHOUTBOX -->
    <!-- MAIN -->
    <!-- BOARDSTATS -->
</div>
```

### Guest Layout

A separate layout template for the guest/login/register pages. Default:

```html
<!-- AUTH -->
```

The `<!-- AUTH -->` token renders the authentication form (login, register, forgot password, etc.).

---

## Page Body Classes

Every page automatically receives a CSS class on the `<body>` element, allowing you to target specific pages in your CSS.

| Page | Body Class |
|---|---|
| Board Homepage | `.page-board-home` |
| Forum List | `.page-forum-list` |
| Single Forum | `.page-forum` |
| Topic View | `.page-topic` |
| Reply Page | `.page-reply` |
| User Profile | `.page-user` |
| Members List | `.page-members` |
| Staff Page | `.page-staff` |
| Help Pages | `.page-help` |
| Custom Pages | `.page-custom-page` |
| Search | `.page-search` |
| Conversations List | `.page-conversations-list` |
| Single Conversation | `.page-conversation` |

Additionally, when a user has dark mode enabled, the body receives the `.dark` class.

### Example: Page-Specific Styling

```css
/* Only change the header color on the homepage */
.page-board-home .page-header {
    background: linear-gradient(to bottom, #1e293b, #334155);
}

/* Hide the breadcrumbs on the board homepage */
.page-board-home .breadcrumbs {
    display: none;
}

/* Wider content area on topic pages */
.page-topic #wrap main {
    max-width: 90rem;
}
```

---

## Theme Images

Each theme can customize 7 image slots. If not set, ForumSpark defaults are used.

| Image Slot | Description | Default |
|---|---|---|
| **Board Logo** | The logo displayed in the header | `/logo.svg` |
| **Forum Read Marker** | Icon for forums with no new posts | `/f_nonew.svg` |
| **Forum Unread Marker** | Icon for forums with new posts | `/f_new.svg` |
| **Forum Redirect Marker** | Icon for redirect/link forums | `/redirect.svg` |
| **Stats Users Marker** | Icon in board statistics for users section | `/users.svg` |
| **Stats Birthday Marker** | Icon in board statistics for birthdays | `/birthdays.svg` |
| **Stats Record Marker** | Icon in board statistics for record info | `/stats.svg` |

Images are managed in **Admin > Themes > Edit Images** for each theme.

---

## Board Template Injection Points

Separate from themes, **Board Templates** (Admin > Board Templates) let you inject raw HTML at four fixed positions. These apply globally regardless of the active theme.

| Injection Point | Location | Max Length |
|---|---|---|
| `top_of_page` | Very first thing in `<body>`, before everything | 10,000 chars |
| `head` | Inside `<head>`, after all default tags | 10,000 chars |
| `above_the_board` | Above the board content area | 10,000 chars |
| `after_the_board` | Below the board content area | 10,000 chars |

Use these for analytics scripts, custom banners, announcement bars, or third-party widget integrations.

---

## CSS Class Reference

Below is the complete reference of all CSS classes used by ForumSpark's component system. These are the classes you can target in your theme stylesheet.

> **Note:** The source CSS uses Tailwind's `@apply` directive. The values shown here are the Tailwind utility classes that compile to standard CSS. When overriding in your theme, use standard CSS properties.

---

### Base Styles

Core element styles applied globally.

```css
/* Body */
body {
    /* bg-slate-100 text-slate-700 font-sans antialiased */
    background-color: #f1f5f9;
    color: #334155;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
}

/* Links */
a { color: #64748b; /* slate-500 */ }
a:hover { color: #6087d1; /* primary-500 */ }

/* Form Inputs */
select { /* rounded-sm, border-slate-200, focus:border-primary-500 */ }
input[type=checkbox] { /* border-slate-300, text-secondary-500, focus:ring-primary-500 */ }
textarea, input[type=text], input[type=email], input[type=password] {
    /* border-slate-300, focus:border-primary-500, focus:ring-primary-500, rounded-md */
}

/* Code & Blockquotes */
code { /* bg-slate-50, border */ }
blockquote { /* bg-slate-50, border-slate-200, rounded */ }

/* Labels & Errors */
.input-label { /* text-slate-700, text-sm, font-medium */ }
.input-error { /* text-red-600, text-sm */ }

/* Copyright Footer */
.copyright { /* text-xs, text-center */ }
```

### Utilities

```css
/* Container — max-width wrapper */
.container { /* max-w-7xl, mx-auto, sm:px-4, lg:px-6 */ }

/* Truncation helper */
.truncate-child > * { /* truncate (text-overflow: ellipsis) */ }
```

---

### Components

#### Alert

Notification/flash messages.

```css
.alert { /* bg-slate-50, border-slate-300, rounded-lg, text-sm, p-4 */ }
.alert--notice { /* border-[#FBD14B], text-[#B37C08], bg-[#FEF7CF] */ }
.alert--success { /* border-secondary-200, text-secondary-700, bg-secondary-100 */ }
.alert__icon { /* flex-shrink-0 */ }
.alert__content { /* space-y-4 */ }
```

#### Alert Banner

Fixed bottom-screen banner (e.g., group preview mode).

```css
.alert-banner-wrapper { /* fixed, bottom-0, w-full, z-20 */ }
.alert-banner { /* bg-slate-800, text-white, rounded, shadow-lg, p-4 */ }
```

#### Auth / Login

```css
.login-with-social { /* border-t, mt-4 */ }
.login-with-social__providers { /* grid, grid-cols-2, gap-2 */ }
.auth-intro { /* text-sm, text-slate-600 */ }
.auth-options { /* flex, justify-between */ }
.auth-actions { /* flex, justify-end, space-x-3 */ }
```

#### Avatar

User avatar images in various sizes.

```css
.avatar { /* relative, flex-shrink-0 */ }
.avatar img { /* absolute, inset-0, object-cover, w-full, h-full */ }
.avatar--lg { /* 96px × 96px */ }
.avatar--md { /* 48px × 48px */ }
.avatar--sm { /* 32px × 32px */ }
.avatar--xs { /* 28px × 28px */ }
.avatar--xxs { /* 20px × 20px, rounded-full */ }
```

#### Avatar Layout

Avatar with adjacent content.

```css
.avatar-layout { /* flex, items-center, space-x-2 */ }
```

#### Badge

Small label/tag.

```css
.badge { /* bg-primary-200, text-slate-600, rounded, px-2, py-1, text-xs */ }
```

#### Ban Period

```css
.ban-period { /* mt-4, flex, items-center, space-x-2 */ }
```

#### Best Answer

Highlighted best/accepted answer.

```css
.best-answer { /* border-secondary-200, text-secondary-700, bg-secondary-100, rounded-lg, p-8 */ }
```

#### Board

Main board structure, logo, and action bar.

```css
#wrap { }
#wrap main { /* max-w-7xl, mx-auto */ }

.board-logo { /* flex, items-center */ }

.board-actions { /* grid, grid-cols-2, max-w-7xl, mx-auto */ }
.board-actions__theme-selector { /* theme dropdown area */ }
.board-actions__mark-read { /* "mark all read" link area */ }
.board-actions__time { /* board time display */ }
```

#### Breadcrumbs

Navigation trail.

```css
.breadcrumbs { /* bg-primary-100, rounded, text-sm, flex-wrap, text-slate-700 */ }
.breadcrumbs a { /* text-slate-700, hover:text-slate-600 */ }
.breadcrumbs__divider { /* size-4, text-slate-400 */ }
```

#### Buttons

```css
.btn { /* rounded-sm, font-semibold, text-xs, uppercase, tracking-widest */ }
.btn-primary { /* gradient accent-400→accent-300, border-accent-400, text-accent-50 */ }
.btn-secondary { /* gradient slate-100→slate-50, border-slate-200, text-slate-600 */ }
.btn-danger { /* gradient red-500→red-400, border-red-500, text-white */ }
.btn-success { /* gradient emerald-500→emerald-400, border-emerald-500, text-white */ }
.btn.btn-sm { /* smaller padding, normal-case */ }
.btn-disabled { /* opacity-60, cursor-not-allowed */ }
.btn--social { /* bg-white, border, shadow-sm — for OAuth buttons */ }
```

#### Cookie Consent

```css
.cookie-consent { /* fixed, bottom-0, z-50 */ }
.cookie-consent__banner { /* p-4 */ }
.cookie-consent__inner { /* bg-white, border, shadow-xl, rounded-lg */ }
.cookie-consent__title { /* text-base, font-semibold */ }
.cookie-consent__description { /* text-sm, text-slate-600 */ }
.cookie-consent__actions { /* flex, flex-wrap, gap-2 */ }
.cookie-consent__btn--accept { /* bg-slate-800, text-white */ }
.cookie-consent__btn--reject { /* bg-slate-100, text-slate-700 */ }
.cookie-consent__btn--preferences { /* text-slate-600, underline */ }
.cookie-consent__options { /* mt-4, space-y-3 */ }
.cookie-consent__option { /* flex, bg-slate-50, rounded */ }
```

#### Data Grid

Tabular data (members, staff, bans, etc.).

```css
.data-grid { /* divide-y, text-sm */ }
.data-grid__header { /* gradient primary-100→primary-50, text-slate-500, text-sm, grid */ }
.data-grid__row { /* grid, text-sm */ }
```

#### Dropdown

```css
.dropdown { /* relative */ }
.dropdown--left { /* origin-top-left */ }
.dropdown--right { /* origin-top-right */ }
.dropdown__trigger { /* rounded-md, text-slate-500, bg-white */ }
.dropdown__content { /* rounded-md, ring-1, ring-black/5, bg-white, py-1 */ }
.dropdown__link { /* px-4, py-2, text-slate-700, hover:bg-primary-100 */ }
.dropdown__separator { /* h-px, bg-primary-100 */ }
.dropdown--sm { /* w-48 */ }
.dropdown--md { /* w-56 */ }
.dropdown--lg { /* w-64 */ }
.dropdown--xl { /* w-72 */ }
```

#### Editor

Post/reply text editor.

```css
.editor-tools { /* flex, flex-wrap, gap-1 — toolbar */ }
.editor-emoticons { /* border, bg-white — emoticon picker panel */ }
.editor-emoticons__header { /* bg-primary-50, border-b */ }
.editor-preview { /* px-6, border, rounded, prose — live preview */ }
textarea#reply-editor { /* mt-2, resize-none */ }
```

#### Empty State

```css
.empty-message { /* p-4, text-center, text-sm, italic, text-slate-500, bg-primary-50/50 */ }
```

#### Error Message

```css
.error-message { /* p-4, text-center */ }
.error-message__title { /* text-xl */ }
.error-message__actions { /* flex, justify-center, space-x-4 */ }
```

#### Form Row

Settings/admin form layout.

```css
.form-layout { /* space-y-4 */ }
.formrow { /* flex, divide-x — label on left, input on right */ }
.formrow > div:first-child { /* w-1/3, max-w-[18rem], bg-primary-50 — label column */ }
.formrow > div:last-child { /* flex-1, bg-primary-50/50 — input column */ }
.form-actions { /* mt-6, flex, justify-end */ }
```

#### Forum List

Category and forum listing on the board index.

```css
.category + .category { /* mt-6 — spacing between categories */ }

.forum { /* flex, items-stretch, bg-primary-25 */ }
.forum__marker { /* w-24, bg-primary-50, border-r — read/unread icon area */ }
.forum__marker-responsive { /* bg-primary-500, text-white, rounded, text-xs — mobile marker */ }
.forum__detail { /* flex-1, flex-col */ }
.forum__name { /* p-4, flex-1 */ }
.forum__name > a { /* font-bold, text-primary-700, hover:text-primary-600 */ }
.forum__description { /* text-sm, text-slate-500 */ }
.forum__info { /* w-1/3, border-l */ }
.forum__last { /* p-4, text-sm, bg-primary-50 — last post info */ }
.forum__stats { /* divide-x, border-t — topics/posts count row */ }
.forum__subforums { /* bg-primary-50, border-t, text-sm — subforum links */ }

.last-post { /* flex, items-center */ }
.last-post__avatar { /* w-8, h-8, rounded-sm */ }
.last-post__detail { /* min-w-0, flex-1 */ }
.last-post__title { /* truncate, font-bold, text-slate-700 */ }
.last-post__meta { /* text-xs, text-slate-500 */ }

.forum-actions { /* flex, justify-end, space-x-2 */ }

.active-users { /* p-4, text-sm, border-t — "users browsing this forum" */ }
```

#### Groups

Username styling.

```css
span.username, a.username { display: inline-block; }
```

#### Guest Layout

Login/register page wrapper.

```css
.guest-layout { /* min-h-screen, flex, flex-col, justify-center, bg-primary-50 */ }
.guest-layout__container { /* max-w-md, mt-6, px-6, py-4 */ }
```

#### Header

Page header/logo area.

```css
.page-header { /* h-32, gradient primary-600→primary-500, p-6, shadow-highlighter */ }
.page-header__logo { /* max-w-7xl, mx-auto, w-full, h-full */ }
.page-header__logo img { /* h-full */ }
```

#### Help

```css
.help-page { /* p-4 */ }
.help-page .description { /* text-sm, text-zinc-500 */ }
.help-text { /* text-zinc-500, text-xs */ }
```

#### Icons

Size utility classes for SVG icons.

```css
.icon { /* w-5, h-5 (20px) */ }
.icon--xs { /* w-3, h-3 (12px) */ }
.icon--sm { /* w-4, h-4 (16px) */ }
.icon--lg { /* w-8, h-8 (32px) */ }
```

#### Images & Emoji

```css
img.emoji { /* w-5 (20px), inline-block, vertical-align: middle */ }
img.emoji.emoji--sm { /* w-4 (16px) */ }
img.emoticon { /* w-6 (24px), inline-block */ }
```

#### Labels

Topic labels/tags.

```css
.label { /* text-xs, bg-slate-50, rounded-sm, border, px-1, py-0.5 */ }
.topic-labels { /* flex, flex-wrap, gap-4 */ }
.topic-labels__label { /* flex, items-center, text-sm */ }
```

#### Lists

```css
.item-list { /* divide-y, divide-primary-100 */ }
.option-list { /* space-y-2 */ }
```

#### Member Tooltip

Hover tooltip for usernames.

```css
.member-tooltip { /* bg-white, shadow-lg, rounded-lg, border-primary-200, w-96 */ }
.member-tooltip__details { /* bg-white, p-4, flex */ }
.member-tooltip__detail-row { /* grid, grid-cols-3 */ }
.member-tooltip__actions { /* flex, divide-x, bg-primary-50, border-t */ }
```

#### Memberlist

```css
.panel--members .data-grid__row,
.panel--members .data-grid__header { /* grid-cols-2 sm:grid-cols-4 */ }
```

#### Menu (Admin/Moderator Sidebar)

```css
.menu { /* p-4 */ }
.menu__items { /* space-y-2 */ }
.menu-item__active { /* font-bold */ }
```

#### Menu Layout

Two-column layout (sidebar + content).

```css
.menu-layout { /* grid, grid-cols-5, gap-4 */ }
.menu-layout > div:first-child { /* col-span-1 — sidebar */ }
.menu-layout > div:last-child { /* col-span-4 — content */ }
```

#### Mini Profile

User info card in post sidebar.

```css
.usertitle { /* mt-2, text-sm, text-center */ }
.mini-profile { /* border-primary-200, bg-primary-50, p-3.5, rounded */ }
.mini-profile dl { /* space-y-2, text-sm */ }
.mini-profile dt { /* font-medium */ }
.mini-profile dd { /* text-right, text-slate-500 */ }
```

#### Modal

```css
.modal { /* fixed, inset-0, z-50 */ }
.modal--sm { /* max-w-sm */ }
.modal--md { /* max-w-md */ }
.modal--lg { /* max-w-lg */ }
.modal--xl { /* max-w-xl */ }
.modal--2xl { /* max-w-2xl */ }
.modal-backdrop > div { /* bg-slate-800, opacity-75 */ }
.modal-container { /* shadow-xl */ }
```

#### Moderated Posts

```css
.moderated-post__details { /* grid, grid-cols-2 */ }
.moderated-post__reason { /* bg-primary-50, border-t */ }
.moderated-post__content { /* bg-primary-50, border-t */ }
.moderated-post__topic { /* font-bold */ }
.moderated-post__meta { /* text-primary-500, text-sm */ }
```

#### Moderator Actions

Action bar at bottom of forum/topic pages.

```css
.moderator-actions { /* p-4, bg-primary-50, border-t, grid sm:flex, gap-4 */ }
.select-group { /* flex, items-center, gap-2 */ }
```

#### Multiquote

```css
.quotes-list { /* divide-y */ }
.quotes-list__row { /* flex, bg-primary-50, opacity-50 */ }
.quotes-list__row--selected { /* opacity-100 */ }
.quote-author { /* text-sm, font-bold */ }
```

#### Navigation

Main site navigation.

```css
.main-menu { /* flex, justify-between */ }
.main-menu-left { /* flex */ }
.main-menu-right { /* hidden sm:flex, items-center */ }

.sub-menu { /* bg-primary-300 sm:bg-primary-500 — nav bar background */ }

.nav-links { /* hidden sm:flex, space-x-4 */ }
.nav-link { /* text-primary-50, text-sm, px-5, py-3, rounded-t */ }
.nav-link:hover { /* text-white */ }
.nav-link-active { /* bg-slate-100, text-primary-600, font-bold */ }

.responsive-nav-toggle { /* sm:hidden — mobile hamburger */ }
.nav-links--responsive { /* p-4, sm:hidden — mobile nav panel */ }
.responsive-nav__link { /* block, text-primary-500, hover:bg-white/25, rounded */ }
.responsive-nav__link--active { /* bg-white/30 */ }
```

#### Notifications

```css
.notifications .dropdown__content { /* bg-primary-25 */ }
.notifications__list { /* divide-y, max-h-[400px], overflow-y-auto */ }
.notifications__actions { /* bg-primary-50, border-t, text-sm */ }
.notification { /* p-3, text-sm, bg-primary-25, hover:bg-primary-50 */ }
.notification__meta { /* text-xs, text-slate-500 */ }
.notification__dot { /* w-2, h-2, rounded-full, bg-red-500 — unread indicator */ }
```

#### Pagination

```css
.pagination { /* mt-6 */ }
.pagination__simple { /* flex, justify-between — mobile */ }
.pagination__windowed { /* hidden sm:flex — desktop */ }
.pagination__windowed__label { /* text-sm, text-slate-600 */ }
.pagination-link { /* bg-white, border-primary-200, text-slate-500 */ }
.pagination-link--page { /* px-4 */ }
.pagination-link--current { /* bg-primary-50 */ }
.pagination-link--disabled { /* opacity-65 */ }
```

#### Panels

The primary content container used throughout the forum.

```css
.panel { /* bg-primary-25 */ }
.panel .panel__title { /* gradient primary-600→primary-500, text-white, border-primary-500 */ }
.panel .panel__title h2 { /* text-lg, font-semibold */ }
.panel .panel__title__actions { /* ml-auto, text-sm */ }
.panel .panel__content { /* border-primary-200, p-4 */ }
.panel .panel__content--flush { /* p-0 */ }
.panel .panel__section { /* p-4, bg-primary-50 */ }
.panel .panel__footer { /* gradient primary-100→primary-50, border-primary-200, border-bottom: primary-500 */ }
.panel .panel__sub-header { /* bg-primary-50, text-slate-500, text-sm, font-medium */ }
.panel .panel__actions { /* bg-primary-50, flex, justify-center, gap-4 */ }

/* Secondary panel variant */
.panel--secondary .panel__title { /* gradient secondary-500→secondary-400, border-secondary-500 */ }
.panel--secondary .panel__content { /* border-primary-200, bg-primary-50 */ }
.panel--secondary .panel__footer { /* border-bottom: secondary-500 */ }

/* Quick reply panel */
.panel--quick-reply { /* mt-6 */ }

/* Mobile menu panel */
.panel-mobile-menu { /* block sm:hidden */ }
```

#### Poll

```css
.poll .option { /* grid, grid-cols-2, divide-x */ }
.poll .option__label { /* p-4, bg-primary-50, text-right */ }
.poll .option__result { /* flex, items-center, p-4 */ }
.poll .option__percent { /* text-sm, text-slate-500 */ }
.poll-options { /* space-y-2 */ }
.progress-bar-container { /* bg-slate-200, rounded-sm */ }
.progress-bar { /* gradient primary-500→primary-400, border-primary-500, rounded-sm */ }
```

#### Posts / Replies

```css
/* Reply container */
.reply .reply__row { /* flex */ }
.reply .reply__details { /* flex, bg-primary-25, border-b — post header */ }
.reply .reply__details__username { /* text-center */ }
.reply .reply__details__info { /* text-slate-400, text-sm */ }

/* Reply main area */
.reply .reply__main { /* flex, border-b, bg-primary-25 */ }
.reply .reply__user { /* w-1/5, border-r, text-center, py-8 — user sidebar */ }
.reply .reply__content { /* flex-1, flex-col, min-w-0 — post body */ }
.reply .reply__content > div:not(.signature) { /* p-4 sm:p-8 */ }

/* Reply actions bar */
.reply__actions { /* flex, bg-primary-50, border-b */ }

/* Read reply details */
.reply:not(.approval-required) .reply__details { /* bg-primary-50 */ }

/* Post separator between replies */
.separator { /* h-4, gradient primary-100→primary-50 */ }

/* Edit notice */
.editby { /* pt-6, text-xs, text-slate-500, italic */ }

/* Approval required highlight */
.approval-required { /* bg-accent-50 */ }

/* Topic container */
.topic { /* mt-6 */ }
.topic .replies { /* divide-y, bg-white, border-t */ }

/* Quick reply */
.quick-reply { /* flex */ }
.quick-reply__user { /* w-1/5, border-r, text-center — avatar area */ }
.quick-reply__input { /* flex-1, flex-col */ }
.quick-reply__text { /* p-4 */ }
.quick-reply__actions { /* p-4, border-t, flex, justify-end */ }

/* Signature */
.signature { /* hidden sm:block, p-4 sm:p-8, border-t, text-sm */ }

/* Reply link */
.reply-link { /* ml-auto */ }
```

#### Prose / Content

Post content typography.

```css
.content { /* prose, prose-zinc, prose-sm sm:prose-base */ }
```

#### Profile

User profile page.

```css
.profile-grid { /* flex, divide-x */ }
.profile-grid > div:first-child { /* w-64, bg-primary-50, text-right — label column */ }
.profile-grid > div:last-child { /* flex-1, bg-primary-25 — value column */ }
.profile-grid--heading { /* sub-header row */ }
.profile-actions { /* flex, justify-center, space-x-1 */ }
.profile-details { /* flex */ }
.profile-details__avatar { /* flex-shrink-0, p-6 */ }
```

#### Reactions

```css
.reactions { /* mt-4, flex, flex-wrap, gap-2 */ }
.reactions__reaction { /* rounded-full, border-primary-200, bg-primary-50, text-sm */ }
.reactions__reaction--reacted { /* border-accent-200, bg-accent-50 */ }
.reactions__reaction-count { /* font-medium, text-xs */ }
.reaction-picker { /* relative, inline-block */ }
.reaction-picker__toggle { /* rounded-full, border, bg-slate-50 */ }
.reaction-picker__panel { /* grid, grid-cols-4 sm:grid-cols-6, bg-white */ }
.reaction-picker__reaction { /* bg-gray-100, hover:bg-blue-100, rounded-md, cursor-pointer */ }
```

#### Search

```css
.search-input { /* flex, items-center, space-x-2, p-6 */ }
.search-result-topic { /* mr-auto */ }
```

#### Shoutbox

```css
.shoutbox { /* bg-white */ }
.shoutbox__messages { /* px-4, overflow-y-auto, h-[250px] */ }
.shoutbox__message { /* py-3, flex, space-x-4 */ }
.shoutbox__message__actions { /* text-xs, text-slate-700 */ }
.shoutbox-input-container { /* bg-primary-50, border-t, border-primary-200, p-3 */ }
.shoutbox-input { /* border-primary-200, bg-white, flex, rounded */ }
.shoutbox-input__actions { /* flex, px-3 */ }
.shoutbox__send { /* ml-auto */ }
```

#### Skip Links

Accessibility skip navigation.

```css
.skip-links { /* sr-only, focus-within:not-sr-only */ }
.skip-link { /* bg-primary-600, focus:bg-primary-500, text-white, rounded-sm */ }
```

#### Social Accounts

```css
.panel--social-accounts .data-grid__row,
.panel--social-accounts .data-grid__header { /* grid-cols-2 */ }
```

#### Spoiler

Collapsible spoiler blocks in posts.

```css
.spoiler { /* my-4 */ }
.spoiler-header { /* gradient secondary-500→secondary-400, border-secondary-500, text-white, font-bold */ }
.spoiler-content { /* border-secondary-300, bg-secondary-50 */ }
```

#### Staff Page

```css
.panel--staff .data-grid__row,
.panel--staff .data-grid__header { /* grid-cols-3 sm:grid-cols-4 */ }
.stafflist { /* space-y-6 */ }
```

#### Stats Links

Footer links (Who's online, etc.).

```css
.stats-links { /* mt-6, text-sm, flex, justify-center, space-x-4 */ }
.stats-links__divider { /* text-slate-300 */ }
```

#### Board Stats Panel

```css
.panel--board-stats { /* mt-6 */ }
.stats { /* flex-1, p-4, text-sm */ }
.stats-users { /* flex-1, text-sm */ }
.stats-users__userlist { /* flex-1, p-4 */ }
.stats-users__groups { /* border-t, p-4 */ }
```

#### Switch (Toggle)

```css
.inline-switch { /* flex, items-center, space-x-4 */ }
.switch { /* w-10, rounded-full, p-1, cursor-pointer */ }
.switch--active { /* bg-primary-500 */ }
.switch--inactive { /* bg-slate-300 */ }
.switch__toggle { /* bg-white, h-4, w-4, rounded-full */ }
```

#### Topic List

```css
.topiclist { /* mt-6 */ }

.topic-row { /* flex, bg-primary-50/50 */ }
.topic-row--unread .topic-row__name a { /* font-medium, text-slate-700 */ }
.topic-row__bulk-select { /* hidden sm:flex, w for checkbox column */ }
.topic-row__marker { /* hidden sm:flex, w-12 — topic read/unread marker */ }
.topic-row__badges { /* flex, items-center, text-slate-600 */ }
.topic-row__name { /* flex-1 — topic title area */ }
.topic-row__name .description { /* text-xs, text-slate-400 */ }
.topic-row__author { /* hidden sm:flex, w-1/6, border-l */ }
.topic-row__details { /* w-1/3, flex, divide-x, border-l */ }
.topic-row__details .replies { /* w-24, justify-center */ }
.topic-row__details .views { /* w-24, justify-center */ }
.topic-row__details .last-post { /* flex-1, text-sm */ }

.topic-marker--read { /* text-slate-400 */ }
.topic-marker--unread { /* text-slate-500 */ }

/* Topic actions (multi-select toolbar) */
.topic-actions { /* hidden sm:flex, divide-x */ }
.topic-actions--responsive { /* block sm:hidden */ }

/* Sub-header row (column labels) */
.sub-header { /* bg-primary-50, text-slate-500, text-sm, font-medium, flex */ }
.sub-header .topic-name { /* flex-1 */ }
.sub-header .topic-details { /* w-1/3 */ }
```

#### Two-Factor Auth

```css
.enable-two-factor { /* space-y-6 */ }
.enable-two-factor__key { /* font-medium */ }
```

#### User Menu

Top bar.

```css
.user-menu { /* py-1, bg-slate-800, text-primary-50 */ }
.user-menu .container { /* flex, items-center */ }
.user-menu__links { /* ml-auto, flex, items-center */ }
.user-menu__guest { /* text-sm, font-medium, space-x-4 */ }
.user-menu__guest a { /* text-primary-100, hover:text-white */ }
.user-menu__trigger { /* text-primary-100, hover:text-white, bg-transparent */ }
.user-alerts { /* flex, items-center, space-x-4 */ }
```

#### Users Online

```css
.panel--users-online .data-grid__row,
.panel--users-online .data-grid__header { /* grid-cols-1 sm:grid-cols-4 */ }
```

#### Welcome Message

```css
.welcome-message { /* fixed, bottom-4, right-4, bg-white, border-primary-200, shadow-lg */ }
.welcome-message__close { /* absolute, top-2, right-2 */ }
```

---

## Theme Export & Import

### Export

Export any theme from **Admin > Themes > Export**. This downloads a `.json` file containing:

```json
{
    "name": "My Custom Theme",
    "inherit_default": true,
    "layout": "<!-- USERMENU -->\n<div id=\"wrap\">...",
    "guest_layout": "<!-- AUTH -->",
    "css": ".panel .panel__title { background: ... }"
}
```

### Import

Import a theme from **Admin > Themes > Import Theme**. Upload a `.json` file in the format above.

**Note:** Theme images are not included in export/import. You'll need to re-upload images after importing.

### Validation Limits

| Field | Max Size |
|---|---|
| `name` | 255 characters |
| `css` | 250,000 characters |
| `layout` | 50,000 characters |
| `guest_layout` | 50,000 characters |

---

## Tips & Best Practices

### Start Small
Don't try to restyle everything at once. Begin with the most visible elements:
1. `.page-header` — the logo header gradient
2. `.panel .panel__title` — panel header bars
3. `.panel .panel__footer` — panel footer bars
4. `.sub-menu` / `.nav-link` — navigation colors
5. `.user-menu` — the top bar
6. `.btn-primary` — call-to-action buttons

### Use Inheritance
Keep **Inherit Default** enabled and layer your CSS on top. This ensures you get all base functionality and only need to override what you want to change.

### Target with Specificity
If a base style isn't being overridden, increase specificity:
```css
/* Instead of this: */
.panel__title { background: red; }

/* Try this: */
.panel .panel__title { background: red; }
```

### Use Page Classes for Per-Page Styles
```css
/* Different header only on the homepage */
.page-board-home .page-header {
    background-image: url('https://example.com/banner.jpg');
    background-size: cover;
}
```

### Dark Mode
If your board has dark mode enabled, prefix styles with `.dark`:
```css
.dark .panel { background-color: #1e293b; }
.dark .panel .panel__title {
    background: linear-gradient(to bottom, #334275, #3b4c92);
}
.dark body { background-color: #0f172a; color: #e2e8f0; }
```

### Test Responsively
ForumSpark uses `sm:` breakpoint (640px) extensively. Many elements are hidden on mobile and shown on desktop (or vice versa). Test your theme at both sizes.

### Use the Autosave Feature
The stylesheet editor has an autosave toggle that saves your CSS every 60 seconds — useful during extended editing sessions.

If you ever need additional help, feel free to use our support forum. 
