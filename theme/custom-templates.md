# Custom Layout Templates

Custom Layout Templates let you completely redesign how **forum rows**, **topic rows**, **replies**, and **categories** appear on your board using simple HTML with template variables. This gives you JCINK/InvisionFree-level customization without modifying any source code.

## Overview

ForumSpark provides **four template regions** that can be customized:

| Template | Where It Appears | Description |
|---|---|---|
| **Forum Row** | Board index page | Each forum listing within a category |
| **Topic Row** | Forum view page | Each topic listing within a forum |
| **Reply** | Topic view page | Each post/reply in a thread |
| **Category** | Board index page | The wrapper around each category and its forums |

Templates are managed in **Admin Panel > Board Templates** or through the **Theme Editor** sidebar (Templates tab).

---

## Template Syntax

Templates use a Mustache-style syntax with HTML:

### Variables

Insert dynamic data using double curly braces:

```html
{{ forum.name }}
{{ user.username }}
{{ topic.title }}
```

All variables are **HTML-escaped** by default for security.

### Dot Notation

Access nested properties:

```html
{{ forum.last_post.author }}
{{ topic.author.username }}
```

### Conditionals

Show content conditionally:

```html
{{#if forum.is_redirect}}
    <span>Redirect</span>
{{/if}}

{{#unless topic.is_locked}}
    <a href="{{ topic.url }}">Reply</a>
{{/unless}}
```

### Loops

Iterate over arrays:

```html
{{#each forum.subforums}}
    <a href="{{ this.url }}">{{ this.name }}</a>
{{/each}}
```

Inside a loop, use <code v-pre>{{ this.property }}</code> to access the current item and <code v-pre>{{ @index }}</code> for the zero-based loop index.

### Truthy/Falsy Rules

- **Falsy:** `null`, empty string `""`, `false`, empty array `[]`
- **Truthy:** Everything else (including `0` and `"0"`)

---

## Forum Row Template

Customizes each forum's appearance on the board index.

### Available Variables

| Variable | Type | Description |
|---|---|---|
| `forum.id` | number | Forum ID |
| `forum.name` | string | Forum name |
| `forum.description` | string | Forum description (formatted HTML) |
| `forum.url` | string | Forum URL |
| `forum.is_read` | boolean | Whether the forum has been read |
| `forum.is_redirect` | boolean | Whether this is a redirect forum |
| `forum.topics_count` | string | Formatted topic count (e.g., "1,234") |
| `forum.replies_count` | string | Formatted reply count |
| `forum.viewers_count` | string | Formatted viewer count |
| `forum.redirect_hits` | string | Formatted redirect hit count |
| `forum.subforums` | array | List of child subforums |
| `forum.subforums[].name` | string | Subforum name |
| `forum.subforums[].url` | string | Subforum URL |
| `forum.last_post` | object | Last post info (empty if no posts) |
| `forum.last_post.title` | string | Last post topic title |
| `forum.last_post.url` | string | Last post URL |
| `forum.last_post.author` | string | Last post author's username |
| `forum.last_post.avatar_url` | string | Last post author's avatar URL |
| `forum.last_post.date` | string | Human-readable date (e.g., "2 hours ago") |

### Example: Forum Row

```html
<div style="display: flex; padding: 1rem; border-bottom: 1px solid #e2e8f0;">
    <div style="flex: 1;">
        <a href="{{ forum.url }}" style="font-weight: bold; font-size: 1.1rem;">
            {{ forum.name }}
        </a>
        {{#if forum.description}}
            <div style="color: #64748b; font-size: 0.875rem; margin-top: 0.25rem;">
                {{ forum.description }}
            </div>
        {{/if}}
        {{#if forum.subforums}}
            <div style="margin-top: 0.5rem; font-size: 0.8rem; color: #94a3b8;">
                Subforums:
                {{#each forum.subforums}}
                    <a href="{{ this.url }}">{{ this.name }}</a>
                {{/each}}
            </div>
        {{/if}}
    </div>
    <div style="text-align: center; width: 100px; font-size: 0.875rem;">
        <div>{{ forum.topics_count }} topics</div>
        <div>{{ forum.replies_count }} replies</div>
    </div>
    {{#if forum.last_post}}
        <div style="width: 200px; font-size: 0.8rem;">
            <a href="{{ forum.last_post.url }}">{{ forum.last_post.title }}</a>
            <div>by {{ forum.last_post.author }}, {{ forum.last_post.date }}</div>
        </div>
    {{/if}}
</div>
```

---

## Topic Row Template

Customizes how each topic appears in the forum view.

### Available Variables

| Variable | Type | Description |
|---|---|---|
| `topic.id` | number | Topic ID |
| `topic.title` | string | Topic title |
| `topic.url` | string | Topic URL |
| `topic.is_read` | boolean | Whether the topic has been read |
| `topic.is_pinned` | boolean | Whether the topic is pinned/sticky |
| `topic.is_locked` | boolean | Whether the topic is locked |
| `topic.replies_count` | string | Formatted reply count |
| `topic.views_count` | string | Formatted view count |
| `topic.created_at` | string | Human-readable date |
| `topic.label` | string | Label name (empty if none) |
| `topic.label_color` | string | Label hex color (empty if none) |
| `topic.author` | object | Topic author info |
| `topic.author.username` | string | Author's username |
| `topic.author.avatar_url` | string | Author's avatar URL |
| `topic.author.profile_url` | string | Author's profile URL |
| `topic.last_post` | object | Last reply info (empty if no replies) |
| `topic.last_post.author` | string | Last replier's username |
| `topic.last_post.avatar_url` | string | Last replier's avatar URL |
| `topic.last_post.date` | string | Human-readable date |

### Example: Topic Row

```html
<div style="display: flex; align-items: center; padding: 0.75rem 1rem; border-bottom: 1px solid #e2e8f0;">
    {{#if topic.is_pinned}}
        <span style="color: #f59e0b; margin-right: 0.5rem;" title="Pinned">📌</span>
    {{/if}}
    {{#if topic.is_locked}}
        <span style="color: #ef4444; margin-right: 0.5rem;" title="Locked">🔒</span>
    {{/if}}
    <div style="flex: 1; min-width: 0;">
        {{#if topic.label}}
            <span style="background: {{ topic.label_color }}; color: white; padding: 0.125rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; margin-right: 0.5rem;">
                {{ topic.label }}
            </span>
        {{/if}}
        <a href="{{ topic.url }}" style="font-weight: {{ topic.is_read ? 'normal' : 'bold' }};">
            {{ topic.title }}
        </a>
        <div style="font-size: 0.8rem; color: #64748b; margin-top: 0.25rem;">
            by <a href="{{ topic.author.profile_url }}">{{ topic.author.username }}</a>,
            {{ topic.created_at }}
        </div>
    </div>
    <div style="text-align: center; width: 80px; font-size: 0.875rem;">
        {{ topic.replies_count }}
        <div style="font-size: 0.7rem; color: #94a3b8;">replies</div>
    </div>
    <div style="text-align: center; width: 80px; font-size: 0.875rem;">
        {{ topic.views_count }}
        <div style="font-size: 0.7rem; color: #94a3b8;">views</div>
    </div>
</div>
```

---

## Reply Template

Customizes how each post/reply appears in a thread.

### Available Variables

**Reply Variables:**

| Variable | Type | Description |
|---|---|---|
| `reply.id` | number | Reply/post ID |
| `reply.number` | number | Position in thread (1, 2, 3...) |
| `reply.content` | string | Formatted post content (HTML) |
| `reply.created_at` | string | Human-readable date |
| `reply.is_op` | boolean | Whether this is the opening post |
| `reply.attachments` | array | Attached files |
| `reply.attachments[].filename` | string | File name |
| `reply.attachments[].url` | string | Download URL |
| `reply.attachments[].size` | string | Formatted file size |
| `reply.attachments[].is_image` | boolean | Whether attachment is an image |

**User Variables (available in reply templates):**

| Variable | Type | Description |
|---|---|---|
| `user.username` | string | Post author's display name |
| `user.avatar_url` | string | Avatar image URL |
| `user.group_name` | string | User's group/role name |
| `user.group_image_url` | string | Group banner image URL (may be empty) |
| `user.custom_title` | string | Custom title or rank name |
| `user.rank` | string | Rank name |
| `user.num_posts` | string | Formatted post count |
| `user.num_topics` | string | Formatted topic count |
| `user.joined` | string | Short join date (e.g., "15th Mar 24") |
| `user.joined_long` | string | Long join date (e.g., "Mar 2024") |
| `user.reputation` | string | Reaction/reputation score |
| `user.location` | string | User location (may be empty) |
| `user.is_online` | boolean | Whether user is currently online |
| `user.last_active` | string | Last activity (e.g., "2 hours ago") |
| `user.profile_url` | string | Profile page URL |
| `user.custom_fields` | array | Custom profile fields |
| `user.custom_fields[].label` | string | Field label |
| `user.custom_fields[].value` | string | Field value |
| `user.achievements` | array | Showcased achievements |
| `user.achievements[].name` | string | Achievement name |
| `user.achievements[].icon` | string | Achievement icon URL |
| `user.achievements[].tier` | string | Tier: bronze, silver, or gold |

### Example: Reply

```html
<div style="display: flex; border-bottom: 2px solid #e2e8f0; margin-bottom: 1rem;">
    <!-- User sidebar -->
    <div style="width: 180px; padding: 1rem; text-align: center; border-right: 1px solid #e2e8f0;">
        <a href="{{ user.profile_url }}">
            <img src="{{ user.avatar_url }}" alt="{{ user.username }}"
                 style="width: 80px; height: 80px; border-radius: 50%; margin: 0 auto;" />
        </a>
        <div style="font-weight: bold; margin-top: 0.5rem;">{{ user.username }}</div>
        <div style="font-size: 0.8rem; color: #64748b;">{{ user.group_name }}</div>
        <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 0.5rem;">
            Posts: {{ user.num_posts }}<br />
            Joined: {{ user.joined }}
        </div>
        {{#if user.is_online}}
            <span style="color: #22c55e; font-size: 0.75rem;">● Online</span>
        {{/if}}
    </div>

    <!-- Post content -->
    <div style="flex: 1; display: flex; flex-direction: column;">
        <div style="padding: 0.5rem 1rem; font-size: 0.8rem; color: #94a3b8; border-bottom: 1px solid #f1f5f9;">
            #{{ reply.number }} · {{ reply.created_at }}
        </div>
        <div style="padding: 1rem; flex: 1;">
            {{ reply.content }}
        </div>
        {{#if reply.attachments}}
            <div style="padding: 0.75rem 1rem; border-top: 1px solid #e2e8f0; font-size: 0.875rem;">
                <strong>Attachments:</strong>
                {{#each reply.attachments}}
                    {{#if this.is_image}}
                        <img src="{{ this.url }}" alt="{{ this.filename }}" style="max-width: 200px; margin: 0.5rem 0;" />
                    {{/if}}
                    {{#unless this.is_image}}
                        <a href="{{ this.url }}">{{ this.filename }} ({{ this.size }})</a>
                    {{/unless}}
                {{/each}}
            </div>
        {{/if}}
    </div>
</div>
```

---

## Category Template

Customizes the category wrapper on the board index. Each category contains its forum rows.

### Available Variables

| Variable | Type | Description |
|---|---|---|
| `category.id` | number | Category (forum) ID |
| `category.name` | string | Category name |
| `category.url` | string | Category URL |
| `category.forums` | array | Forums in this category |
| `category.forums[].name` | string | Forum name |
| `category.forums[].url` | string | Forum URL |
| `category.forums[].is_read` | boolean | Whether forum is read |

### Example: Category

```html
<div style="margin-bottom: 2rem; border: 1px solid #ccdbf1; border-radius: 0.25rem; overflow: hidden;">
    <div style="background: linear-gradient(to bottom, #4c6ec4, #6087d1); color: white; padding: 0.75rem 1rem;">
        <a href="{{ category.url }}" style="color: white; font-weight: bold; font-size: 1.1rem;">
            {{ category.name }}
        </a>
    </div>
    <!-- Forum rows are automatically rendered inside the category -->
</div>
```

::: warning
The category template wraps around the forum rows. The individual forum rows within the category are rendered using the **Forum Row Template** (if set) or the default layout.
:::

---

## Mini Profile & Profile Templates

In addition to the four main layout templates, you can also customize:

### Mini Profile Template

The user info card shown alongside each post (in the user sidebar area of replies). Uses the same **user variables** listed in the Reply Template section above.

### Profile Template

The user profile page header. Uses all **user variables** plus:

| Variable | Type | Description |
|---|---|---|
| `user.best_answers` | number | Count of best/accepted answers |

---

## Tips & Best Practices

### Use Inline Styles for Custom Templates

Since custom templates bypass the base CSS classes, use inline styles or define your own classes in the theme's Custom CSS:

```html
<!-- Option 1: Inline styles -->
<div style="padding: 1rem; background: #f8fafd;">{{ forum.name }}</div>

<!-- Option 2: Custom class + theme CSS -->
<div class="my-forum-row">{{ forum.name }}</div>
```

```css
/* In your theme's Custom CSS */
.my-forum-row {
    padding: 1rem;
    background: var(--fs-forum-bg);
}
```

### Use CSS Variables for Theme Consistency

Reference the theme's CSS custom properties to ensure your templates respect the user's color settings:

```html
<div style="background: var(--fs-forum-bg); color: var(--fs-body-color); border-color: var(--fs-forum-divider);">
    {{ forum.name }}
</div>
```

### Dark Mode Compatibility

When using inline styles, you can't easily target dark mode. For dark mode support, use CSS custom properties (which automatically switch) or define classes in your Custom CSS with `.dark` prefixes:

```css
.my-forum-link { color: #4059ad; }
.dark .my-forum-link { color: #7fa5db; }
```

### Resetting to Default

To remove a custom template and return to the default layout, clear the template content in the admin editor and save.

### Template Sanitization

Templates are sanitized on save using HTML Purifier. Potentially dangerous HTML (e.g., `<script>` tags, event handlers) will be stripped. Template variables (`{{ }}`, `{{#if}}`, etc.) are preserved through sanitization.
