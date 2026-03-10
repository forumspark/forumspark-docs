# JavaScript API

ForumSpark exposes a global `ForumSpark` object in the browser that provides access to the current user, dark mode controls, favicon badges and a widget system for extending user profiles.

[[toc]]

## Getting started

All frontend APIs are available through `window.ForumSpark`. To run code after ForumSpark has initialised, listen for the `forumspark:init` event:

```javascript
document.addEventListener("forumspark:init", () => {
  console.log("ForumSpark is ready");
  console.log(window.ForumSpark.currentUser);
});
```

You can include your custom JavaScript via the **Head** or **After the Board** injection fields in the board settings, or through a custom theme layout.

## Current user

The authenticated user's data is available at `ForumSpark.currentUser`:

```javascript
const user = window.ForumSpark.currentUser;
console.log(user.username); // "alice"
```

### Available properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | number | User ID |
| `name` | string | Display name |
| `username` | string | Unique username |
| `custom_user_title` | string \| null | Custom title override |
| `avatar` | string \| null | Avatar URL |
| `member_number` | number | Registration order |
| `num_posts` | number | Total post count |
| `num_topics` | number | Total topic count |
| `dark_mode` | boolean | Dark mode preference |
| `auto_watch_replies` | boolean | Auto-watch topics on reply |
| `signature` | string \| null | Formatted signature HTML |
| `email_topic_reply` | boolean | Email notifications for replies |
| `weekly_digest` | boolean | Weekly digest emails |
| `frontend_secret` | string | Secret for frontend-to-backend validation |

The `frontend_secret` can be used to validate user actions in your own backend endpoints. Send it along with API calls to your server and verify it against the ForumSpark user API.

## Dark mode

ForumSpark provides reactive dark mode controls that sync with the server.

### Reading dark mode state

```javascript
if (window.ForumSpark.darkMode) {
  console.log("Dark mode is enabled");
}
```

### Toggling dark mode

```javascript
window.ForumSpark.toggleDarkMode();
```

This toggles the `dark` class on the `<body>` element and sends a `PATCH` request to `/frontend/api/me/dark-mode` to persist the preference.

## Favicon badges

Show a notification count on the browser tab favicon.

### Setting a count

```javascript
// Show a red badge with the number 3
window.ForumSpark.setFaviconCount(3);
```

This overlays a red circular badge on the existing favicon. The badge scales to fit the number of digits.

### Clearing the badge

```javascript
window.ForumSpark.restoreFavicon();
```

This restores the original favicon without a badge.

## Mini profile widgets

Register custom widgets that appear alongside user posts in the mini profile area. Widgets use [Alpine.js](https://alpinejs.dev/) for reactivity.

### Registration

```javascript
window.ForumSpark.registerMiniProfileWidget({
  name: "my-widget",     // Unique identifier (required)
  render: (user, store) => `...`,  // Returns HTML string (required)
  state: (user) => ({ ... }),      // Returns Alpine store data (optional)
  onInit: (user) => { ... },       // Called when profile loads (optional)
});
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Unique widget identifier |
| `render` | function | Yes | Returns HTML markup. Receives `user` object and `store` reference (if `state` is defined). |
| `state` | function | No | Returns an Alpine.js store object. The store is namespaced per user as `{name}-{user.id}`. |
| `onInit` | function | No | Called once when a user's profile loads. Receives the `user` object. |

### Example: stateful widget

A counter that persists across page loads using Alpine.js `$persist`:

```javascript
document.addEventListener("forumspark:init", () => {
  window.ForumSpark.registerMiniProfileWidget({
    name: "counter",
    state: (user) => ({
      loading: true,
      counter: Alpine.$persist(0).as(`counter-${user.username}`),
      init() {
        setTimeout(() => (this.loading = false), 2000);
      },
      increment() {
        this.counter++;
      },
      get label() {
        return `Pressed: ${this.counter}`;
      },
    }),
    render: (user, store) => `<div>
        <button
            type="button"
            x-show="!${store}.loading"
            @click="${store}.increment()"
            x-text="${store}.label"
            class="btn-primary btn btn-sm"
        ></button>
        <span x-show="${store}.loading">Loading..</span>
    </div>`,
  });
});
```

### Example: modal widget

ForumSpark provides a `<fs-modal>` web component for consistent modal dialogs:

```javascript
document.addEventListener("forumspark:init", () => {
  window.ForumSpark.registerMiniProfileWidget({
    name: "modal",
    render: (user) => `
        <div x-data="{
            show: false,
            title: 'bound in alpine'
        }">
            <button class="btn btn-sm btn-secondary" type="button" @click="() => show = true">
                Modal Example
            </button>
            <fs-modal @close="show = false" :show="show" :title="title">
                <p>This is some content in my web component modal. ${user.username}</p>
                <p x-text="title"></p>
            </fs-modal>
        </div>
    `,
  });
});
```

### Example: tooltip widget

Widgets can use the `x-tooltip` directive for rich interactive tooltips:

```javascript
document.addEventListener("forumspark:init", () => {
  window.ForumSpark.registerMiniProfileWidget({
    name: "tooltip",
    render: (user) => `
        <div x-data x-tooltip="{
            allowHTML: true,
            content: () => $refs.content.innerHTML,
            trigger: 'click',
            interactive: true,
            theme: 'light-border',
            animation: 'scale',
        }">
            <button type="button" class="cursor-pointer text-sm">Send a gift</button>
            <template x-ref="content">
                <div class="grid grid-cols-5 gap-2">
                    <div class="bg-gray-50 text-2xl p-2 rounded flex justify-center items-center">🎂</div>
                    <div class="bg-gray-50 text-2xl p-2 rounded flex justify-center items-center">🚀</div>
                    <div class="bg-gray-50 text-2xl p-2 rounded flex justify-center items-center">🎈</div>
                    <div class="bg-gray-50 text-2xl p-2 rounded flex justify-center items-center">👑</div>
                    <div class="bg-gray-50 text-2xl p-2 rounded flex justify-center items-center">💍</div>
                </div>
            </template>
        </div>
    `,
  });
});
```

## Method reference

| Method | Parameters | Description |
|--------|------------|-------------|
| `init()` | — | Initialises ForumSpark and dispatches the `forumspark:init` event. Called automatically. |
| `setCurrentUser(user)` | User object | Sets the current user and syncs dark mode. Called automatically. |
| `toggleDarkMode()` | — | Toggles dark mode on/off and persists to the server. |
| `getDarkMode()` | — | Returns the current dark mode state (boolean). |
| `setFaviconCount(count)` | number | Overlays a red notification badge on the favicon. |
| `restoreFavicon()` | — | Removes the favicon badge and restores the original. |
| `registerMiniProfileWidget(options)` | Object | Registers a custom widget in the mini profile area. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `currentUser` | object \| null | The authenticated user's data. `null` for guests. |
| `darkMode` | boolean | Reactive dark mode state. Can be read or set directly. |
| `profileWidgets` | array | Reactive array of registered mini profile widgets. |

## Best practices

1. Always use the provided `store` parameter when referencing state in your render function.
2. Implement loading states for asynchronous operations.
3. Use Alpine.js `$persist` for maintaining state across page loads.
4. Validate user actions server-side using the `frontend_secret`.
5. Use the provided UI components (`<fs-modal>`) for a consistent user experience.
6. Listen for `forumspark:init` before accessing the API — the object may not be ready on `DOMContentLoaded`.

The ForumSpark frontend API is designed to work seamlessly with Alpine.js, providing a robust foundation for building interactive forum features.