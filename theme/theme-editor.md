# Visual Theme Editor

The **Theme Editor** is a visual, real-time sidebar tool that lets board administrators customize every color, font, and layout setting without writing CSS. Changes preview instantly on your live forum — just click **Save** when you're happy.

## Opening the Theme Editor

1. Navigate to your forum as an **admin**
2. Click the **palette icon** in the admin toolbar (bottom-right)
3. The editor sidebar opens, showing the current theme's settings

::: tip
Changes preview in real-time as you adjust colors. Nothing is saved until you click the **Save** button.
:::

---

## Editor Modes

The editor has two mode toggles at the top:

### Light / Dark Mode

Switch between editing your **light mode** and **dark mode** color palettes independently. Each mode has its own set of color overrides.

| Icon | Mode |
|---|---|
| ☀️ Sun | Light mode palette |
| 🌙 Moon | Dark mode palette |

### Device Preview

Preview how your forum looks on different screen sizes:

| Icon | Device | Width |
|---|---|---|
| 🖥 Desktop | Full width |
| 📱 Tablet | Medium viewport |
| 📱 Phone | Narrow viewport |

---

## Editor Sections

The editor is organized into tabs along the second toolbar row:

| Tab | Description |
|---|---|
| **Color Palette** | All color settings organized by section |
| **Typography** | Font family, font size |
| **Header** | Logo area gradient |
| **Components** | Panel, button, navigation, and element colors |
| **Templates** | Board layout templates (head, top/above/after the board) |
| **Images** | Theme images (logo, forum markers, stats icons) |
| **Custom CSS** | Raw CSS editor for advanced overrides |
| **Layouts** | Layout template HTML and guest layout |

---

## Color Palette Reference

Every color setting maps to a CSS custom property (variable). When you set a color in the editor, it generates a `:root` block that overrides the default theme values.

### Page

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Background | `--fs-body-bg` | `#f1f5f9` | `#0f172a` |
| Text Color | `--fs-body-color` | `#334155` | `#e2e8f0` |
| Link Color | `--fs-link-color` | `#64748b` | `#7fa5db` |
| Link Hover | `--fs-link-hover-color` | `#6087d1` | `#a8c4e8` |

### Header

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Gradient Start | `--fs-header-from` | `#4c6ec4` | `#172033` |
| Gradient End | `--fs-header-to` | `#6087d1` | `#1e293b` |

### User Menu Bar

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Background | `--fs-user-menu-bg` | `#1e293b` | `#0b1120` |
| Text Color | `--fs-user-menu-color` | `#f2f6fc` | `#94a3b8` |

### Navigation

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Background | `--fs-nav-bg` | `#6087d1` | `#1e293b` |
| Text Color | `--fs-nav-color` | `#f2f6fc` | `#94a3b8` |
| Active Background | `--fs-nav-active-bg` | `#f1f5f9` | `#0f172a` |
| Active Text | `--fs-nav-active-color` | `#4c6ec4` | `#7fa5db` |

### Breadcrumbs

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Background | `--fs-breadcrumb-bg` | `#e2eaf7` | `#172033` |
| Text Color | `--fs-breadcrumb-color` | `#334155` | `#64748b` |

### Panel Headers

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Gradient Start | `--fs-panel-title-from` | `#4c6ec4` | `#283a55` |
| Gradient End | `--fs-panel-title-to` | `#6087d1` | `#1e3050` |
| Text Color | `--fs-panel-title-color` | `#ffffff` | `#e2e8f0` |
| Border | `--fs-panel-title-border` | `#6087d1` | `#334155` |
| Footer Accent | `--fs-panel-footer-accent` | `#6087d1` | `#6087d1` |
| Footer Gradient Start | `--fs-panel-footer-from` | `#e2eaf7` | `#1e293b` |
| Footer Gradient End | `--fs-panel-footer-to` | `#f2f6fc` | `#172033` |

### Secondary Headers

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Gradient Start | `--fs-panel-secondary-from` | `#2f9a81` | `#196355` |
| Gradient End | `--fs-panel-secondary-to` | `#51b69a` | `#164f44` |
| Border | `--fs-panel-secondary-border` | `#2f9a81` | `#1f7c67` |
| Footer Accent | `--fs-panel-secondary-footer-accent` | `#2f9a81` | `#2f9a81` |

### Panel Body

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Background | `--fs-panel-bg` | `#f8fafd` | `#172033` |
| Border | `--fs-panel-border` | `#ccdbf1` | `#283548` |
| Section Background | `--fs-panel-section-bg` | `#f2f6fc` | `#172033` |
| Sub-header Text | `--fs-sub-header-color` | `#64748b` | `#64748b` |

### Forum Rows

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Background | `--fs-forum-bg` | `#f8fafd` | `#1a2536` |
| Marker Background | `--fs-forum-marker-bg` | `#f2f6fc` | `#1e293b` |
| Last Post Background | `--fs-forum-last-bg` | `#f2f6fc` | `#1e293b` |
| Link Color | `--fs-forum-link-color` | `#4059ad` | `#7fa5db` |
| Divider | `--fs-forum-divider` | `#e2eaf7` | `#283548` |

### Topic Rows

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Background | `--fs-topic-bg` | `rgba(242,246,252,0.5)` | `#1a2536` |

### Replies / Posts

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Background | `--fs-reply-bg` | `#f8fafd` | `#1a2536` |
| Details Bar | `--fs-reply-details-bg` | `#f2f6fc` | `#1e293b` |
| User Border | `--fs-reply-user-border` | `#e2eaf7` | `#283548` |
| Actions Bar | `--fs-reply-actions-bg` | `#f2f6fc` | `#1e293b` |
| Divider | `--fs-reply-divider` | `#e2eaf7` | `#283548` |

### Separator

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Gradient Start | `--fs-separator-from` | `#e2eaf7` | `#283548` |
| Gradient End | `--fs-separator-to` | `#f2f6fc` | `#1e293b` |

### Mini Profile

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Background | `--fs-mini-profile-bg` | `#f2f6fc` | `#1e293b` |
| Border | `--fs-mini-profile-border` | `#ccdbf1` | `#283548` |

### Buttons — Primary (CTA)

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Gradient Start | `--fs-btn-primary-from` | `#f2a82d` | `#f4b942` |
| Gradient End | `--fs-btn-primary-to` | `#f4b942` | `#ec8714` |
| Border | `--fs-btn-primary-border` | `#f2a82d` | `#d1630e` |
| Text Color | `--fs-btn-primary-color` | `#ffffff` | `#ffffff` |

### Buttons — Blue

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Gradient Start | `--fs-btn-blue-from` | `#4c6ec4` | `#f4b942` |
| Gradient End | `--fs-btn-blue-to` | `#6087d1` | `#ec8714` |
| Border | `--fs-btn-blue-border` | `#4c6ec4` | `#d1630e` |

### Buttons — Secondary

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Gradient Start | `--fs-btn-secondary-from` | `#f8fafc` | `#283548` |
| Gradient End | `--fs-btn-secondary-to` | `#f1f5f9` | `#1e293b` |
| Border | `--fs-btn-secondary-border` | `#e2e8f0` | `#334155` |
| Text Color | `--fs-btn-secondary-color` | `#475569` | `#94a3b8` |

### Buttons — Danger

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Gradient Start | `--fs-btn-danger-from` | `#ef4444` | `#dc2626` |
| Gradient End | `--fs-btn-danger-to` | `#f87171` | `#b91c1c` |
| Border | `--fs-btn-danger-border` | `#ef4444` | `#7f1d1d` |
| Text Color | `--fs-btn-danger-color` | `#ffffff` | `#fef2f2` |

### Buttons — Success

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Gradient Start | `--fs-btn-success-from` | `#10b981` | `#059669` |
| Gradient End | `--fs-btn-success-to` | `#34d399` | `#047857` |
| Border | `--fs-btn-success-border` | `#10b981` | `#064e3b` |
| Text Color | `--fs-btn-success-color` | `#ffffff` | `#ecfdf5` |

### Status Indicators

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Notification Dot | `--fs-notification-dot` | `#ef4444` | `#ef4444` |
| Online Active | `--fs-online-active` | `#22c55e` | `#22c55e` |
| Online Away | `--fs-online-away` | `#facc15` | `#eab308` |
| Online Idle | `--fs-online-idle` | `#cbd5e1` | `#475569` |

### Bulletins

| Setting | CSS Variable | Default (Light) | Default (Dark) |
|---|---|---|---|
| Primary Color | `--fs-bulletin-primary` | `rgb(96 135 209)` | `rgb(96 135 209)` |
| Accent Color | `--fs-bulletin-accent` | `#51b69a` | `#51b69a` |

---

## Typography & Layout Settings

These are non-color settings managed via the Typography and Components tabs:

| Setting | CSS Variable | Default | Description |
|---|---|---|---|
| Font Family | `--fs-font-family` | `'Inter', sans-serif` | Primary font (loaded from Google Fonts automatically) |
| Font Size | `--fs-font-size` | `1rem` | Base font size |
| Container Max Width | `--fs-container-max-width` | `80rem` | Maximum content width |
| Avatar Radius | `--fs-avatar-radius` | `0.25rem` | Border radius for user avatars |
| Border Radius | `--fs-border-radius` | `0.125rem` | Global border radius |
| Box Shadow | `--fs-box-shadow` | `none` | Global box shadow |
| Panel Border Width | `--fs-panel-border-width` | `1px` | Panel border thickness |

---

## Theme Images

Upload custom images to replace the default ForumSpark assets:

| Field | Description | Default |
|---|---|---|
| **Board Logo** | Logo in the page header | ForumSpark logo |
| **Forum Read** | Marker icon for forums with no new posts | Folder icon |
| **Forum Unread** | Marker icon for forums with new posts | Open folder icon |
| **Forum Redirect** | Marker icon for redirect forums | Arrow icon |
| **Stats Users** | Users icon in board statistics | Users icon |
| **Stats Birthdays** | Birthday icon in board statistics | Cake icon |
| **Stats Record** | Record icon in board statistics | Chart icon |

---

## Custom CSS

For advanced customization beyond the color palette, use the **Custom CSS** tab to write raw CSS. This CSS is appended after all theme variables and the base stylesheet.

```css
/* Example: Rounded panels with shadow */
.panel {
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

/* Example: Larger forum markers */
.forum__marker img {
    width: 48px;
    height: 48px;
}
```

---

## How It Works

The theme editor generates CSS custom property overrides based on your settings:

```css
/* Generated from your theme editor settings */
:root {
    --fs-body-bg: #fef7cd;
    --fs-panel-title-from: #1e3a5f;
    --fs-panel-title-to: #2c5282;
    --fs-font-family: 'Poppins', sans-serif;
}

/* Dark mode overrides (separate dark palette) */
body.dark {
    --fs-body-bg: #1a1a2e;
    --fs-panel-title-from: #0f1629;
}
```

This is injected as an inline `<style>` tag, meaning your settings always override the default values defined in the theme's CSS variables.

---

## Resetting a Setting

Each color input has a **reset button** (✕) that appears when a custom value is set. Clicking it removes your override, reverting that setting to the default theme value.

Leaving a field showing "default" means no override is applied — the theme's default CSS variable value is used.
