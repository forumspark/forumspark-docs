# Javascript API Documentation

## Overview

ForumSpark provides several frontend APIs to enhance your forum's client-side functionality. These APIs enable access to user data, custom profile widgets, and UI components, allowing developers to create rich, interactive forum experiences.

## Current User Data

User data is accessible through the global `ForumSpark` object in the browser window. The current authenticated user's information can be accessed via `ForumSpark.currentUser`, which includes:

- User's name
- Username
- Other user details
- `frontend_secret` - a unique identifier for secure frontend-to-backend communication

The `frontend_secret` is a special property that can be used to validate user actions in your backend endpoints. This secret is only exposed through the frontend API and should be validated against the user API when processing requests. For security purposes, always verify this secret server-side when handling user actions.

## Mini Profile Widgets

ForumSpark allows registration of custom widgets that appear in user profiles. These widgets can be registered using `window.ForumSpark.registerMiniProfileWidget()` and support various interactive features including state management, modals, and tooltips.

### Widget Registration

The registration function accepts an object with the following properties:

- `name`: A unique identifier for your widget (required)
- `state`: A function that returns an Alpine.js state object (optional)
- `render`: A function that returns the widget's HTML markup (required)

### Widget Types and Examples

#### Stateful Widget

This example demonstrates a widget with persistent state using Alpine.js:

```javascript
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
```

#### Modal Widget

ForumSpark provides a custom modal web component (`fs-modal`) that can be used in your widgets:

```javascript
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
```

#### Interactive Tooltip Widget

Widgets can incorporate tooltips with rich content and interactions:

```javascript
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
```

## Best Practices

When implementing frontend widgets:

1. Always use the provided `store` parameter when referencing state in your render function
2. Implement loading states for asynchronous operations
3. Use Alpine.js's `$persist` feature for maintaining state across page loads
4. Validate any user actions server-side using the `frontend_secret`
5. Follow proper security practices when handling user data
6. Use the provided UI components (like `fs-modal`) for consistent user experience

The ForumSpark frontend API is designed to work seamlessly with Alpine.js, providing a robust foundation for building interactive forum features.