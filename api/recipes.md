# Recipes

Practical examples showing common ForumSpark API integrations. Each recipe is a self-contained example you can adapt for your own use case.

[[toc]]

## Create a user and assign to a group

Register a new user and place them in a specific group — useful for syncing users from an external system.

First, find the group ID you want to assign. List your groups:

```bash
curl https://yourboard.forumspark.net/api/v1/groups \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

Then create the user with that group:

```bash
curl -X POST https://yourboard.forumspark.net/api/v1/users \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "new_member",
    "email": "member@example.com",
    "password": "securepassword123",
    "group_id": 3
  }'
```

**Required token abilities:** `users.write`, `groups.read`

## Post a topic from an external service

Create a topic in a specific forum — for example, from a Discord bot or CI/CD pipeline.

```bash
# Find the forum ID first
curl https://yourboard.forumspark.net/api/v1/forums \
  -H "Authorization: Bearer YOUR_API_TOKEN"

# Create a topic in forum 5
curl -X POST https://yourboard.forumspark.net/api/v1/forums/5/topics \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "v2.5.0 Released",
    "description": "New features and bug fixes",
    "content": "[B]Version 2.5.0[/B] has been released!\n\nChangelog:\n[LIST]\n[*]New dashboard\n[*]Performance improvements\n[*]Bug fixes\n[/LIST]"
  }'
```

**Required token abilities:** `topics.write`, `forums.read`

## Display latest posts on an external site

Fetch recent replies and display them on your main website. This PHP example fetches the 5 most recent posts:

```php
$response = file_get_contents('https://yourboard.forumspark.net/api/v1/replies', false, stream_context_create([
    'http' => [
        'header' => "Authorization: Bearer YOUR_API_TOKEN\r\n",
    ],
]));

$data = json_decode($response, true);

foreach (array_slice($data['data'], 0, 5) as $reply) {
    echo '<div class="post">';
    echo '<p>' . strip_tags($reply['content_html']) . '</p>';
    echo '<small>Posted ' . $reply['created_at'] . '</small>';
    echo '</div>';
}
```

**Required token abilities:** `replies.read`

## Sync new users to an external system via webhook

Forward new user registrations to your CRM, mailing list or external database.

### 1. Create the webhook

```bash
curl -X POST https://yourboard.forumspark.net/api/v1/webhooks \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://myapp.com/webhooks/forumspark",
    "topics": ["users/create"]
  }'
```

Save the `signing_secret` from the response.

### 2. Handle the webhook (Node.js)

```javascript
const crypto = require('crypto');
const express = require('express');
const app = express();

app.post('/webhooks/forumspark', express.raw({ type: 'application/json' }), (req, res) => {
  // Verify signature
  const signature = req.headers['x-forumspark-signature'];
  const expected = crypto
    .createHmac('sha256', process.env.FORUMSPARK_WEBHOOK_SECRET)
    .update(req.body)
    .digest('hex');

  if (!crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature || ''))) {
    return res.status(401).send('Invalid signature');
  }

  const event = JSON.parse(req.body);

  if (event.topic === 'users/create') {
    const user = event.data;
    console.log(`New user registered: ${user.username} (${user.email})`);

    // Add to your mailing list, CRM, etc.
    // addToMailingList(user.email, user.username);
  }

  res.status(200).send('OK');
});

app.listen(3000);
```

## Apply a custom theme via API

Create and activate a theme with custom CSS — useful for automated deployments or A/B testing.

```bash
# Create a theme
curl -X POST https://yourboard.forumspark.net/api/v1/themes \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dark Pro",
    "is_available": true
  }'

# Note the theme ID from the response, then apply custom CSS
curl -X PATCH https://yourboard.forumspark.net/api/v1/themes/2/css \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "css": ":root { --primary-color: #6366f1; --bg-color: #0f172a; }"
  }'
```

**Required token abilities:** `themes.write`

## Monitor new replies with a Discord bot

Use webhooks to forward new replies to a Discord channel via a Discord webhook.

### 1. Create a ForumSpark webhook for replies

```bash
curl -X POST https://yourboard.forumspark.net/api/v1/webhooks \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://myapp.com/webhooks/forum-to-discord",
    "topics": ["replies/create"]
  }'
```

### 2. Forward to Discord (PHP)

```php
Route::post('/webhooks/forum-to-discord', function (Request $request) {
    // Verify ForumSpark signature
    $signature = $request->header('X-ForumSpark-Signature');
    $expected = hash_hmac('sha256', $request->getContent(), config('services.forumspark.webhook_secret'));

    if (! hash_equals($expected, $signature ?? '')) {
        abort(401);
    }

    $event = $request->all();
    $reply = $event['data'];
    $board = $request->header('X-ForumSpark-Board');

    // Send to Discord webhook
    Http::post(config('services.discord.webhook_url'), [
        'embeds' => [[
            'title' => 'New reply on ' . $board,
            'description' => Str::limit(strip_tags($reply['content_html']), 200),
            'url' => 'https://' . $board . '/topics/' . $reply['topic_id'],
            'author' => [
                'name' => $reply['author']['username'],
            ],
            'timestamp' => $reply['created_at'],
        ]],
    ]);

    return response('OK', 200);
});
```
