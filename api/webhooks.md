# Webhooks

Webhooks notify your application in near real-time when events occur on your board. When a topic is created, a user registers or a reply is posted, ForumSpark sends a `POST` request to your endpoint with the event details.

[[toc]]

## Creating a webhook

Webhooks are created via the API. Your token needs the `webhooks.write` ability, plus read or write access for the resources you want to subscribe to.

```bash
curl -X POST https://yourboard.forumspark.net/api/v1/webhooks \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://myapp.com/webhooks/forumspark",
    "topics": ["topics/create", "replies/create", "users/create"]
  }'
```

The response includes a `signing_secret` — store it securely, it is only shown once:

```json
{
  "id": 1,
  "signing_secret": "s9x2k8m0p1q3r5t7v9w2y4z6a8b0c2d4",
  "topics": ["topics/create", "replies/create", "users/create"],
  "url": "https://myapp.com/webhooks/forumspark",
  "created_at": "2025-03-15T10:30:00.000000Z",
  "updated_at": "2025-03-15T10:30:00.000000Z"
}
```

## Event types

Subscribe to any combination of the following events using the `topics` array:

### Topics
- `topics/create` — a new topic is created
- `topics/update` — a topic is modified
- `topics/delete` — a topic is removed

### Replies
- `replies/create` — a new reply is posted
- `replies/update` — a reply is edited
- `replies/delete` — a reply is removed

### Forums
- `forums/create` — a new forum is created
- `forums/update` — forum settings are modified
- `forums/delete` — a forum is removed

### Groups
- `groups/create` — a new group is created
- `groups/update` — group settings are modified
- `groups/delete` — a group is removed

### Users
- `users/create` — a new user registers
- `users/update` — user information is modified
- `users/delete` — a user account is removed

### Required permissions

Your API token must have read or write access for the resource type you are subscribing to. For example, to receive `topics/create` events, your token needs either `topics.read` or `topics.write`.

## Payload format

Every webhook request is a `POST` with a JSON body containing two fields:

- `topic` — the event name (e.g. `replies/create`)
- `data` — the resource data, matching the format used by the API endpoints

### Example: `replies/create`

```json
{
  "topic": "replies/create",
  "data": {
    "id": 123,
    "content": "Great post, thanks for sharing!",
    "content_html": "<p>Great post, thanks for sharing!</p>",
    "user_id": 5,
    "topic_id": 42,
    "author": {
      "username": "alice",
      "member_number": 5,
      "signature_html": null,
      "num_posts": 87,
      "num_topics": 12,
      "location": "London",
      "custom_user_title": null,
      "avatar": "https://yourboard.forumspark.net/storage/avatars/alice.png",
      "is_online": true,
      "created_at": "2025-01-15T10:00:00.000000Z"
    },
    "last_edited_at": null,
    "last_edited_by": null,
    "show_edited_by": false,
    "approved_at": "2025-03-15T10:30:00.000000Z",
    "created_at": "2025-03-15T10:30:00.000000Z",
    "updated_at": "2025-03-15T10:30:00.000000Z"
  }
}
```

### Example: `topics/create`

```json
{
  "topic": "topics/create",
  "data": {
    "id": 42,
    "title": "How to configure the forum",
    "description": "A guide to forum settings",
    "user_id": 1,
    "num_replies": 0,
    "approved_at": "2025-03-15T10:30:00.000000Z",
    "closed_at": null,
    "pinned_at": null,
    "label_id": null,
    "first_post": {
      "content": "Here is how to get started...",
      "content_html": "<p>Here is how to get started...</p>",
      "user_id": 1,
      "topic_id": 42,
      "last_edited_at": null,
      "last_edited_by": null,
      "show_edited_by": false,
      "approved_at": "2025-03-15T10:30:00.000000Z",
      "created_at": "2025-03-15T10:30:00.000000Z",
      "updated_at": "2025-03-15T10:30:00.000000Z"
    },
    "latest_post": null,
    "created_at": "2025-03-15T10:30:00.000000Z",
    "updated_at": "2025-03-15T10:30:00.000000Z"
  }
}
```

### Example: `users/create`

```json
{
  "topic": "users/create",
  "data": {
    "id": 25,
    "username": "new_member",
    "email": "newmember@example.com",
    "email_verified_at": null,
    "member_number": 25,
    "last_active_at": null,
    "signature": null,
    "signature_html": null,
    "num_posts": 0,
    "num_topics": 0,
    "group_id": 2,
    "location": null,
    "date_of_birth": null,
    "requires_approval": false,
    "custom_user_title": null,
    "hide_birthday": false,
    "hide_age": false,
    "avatar": null,
    "timezone": "UTC",
    "is_online": false,
    "invisible": false,
    "approved_at": "2025-03-15T10:30:00.000000Z",
    "updated_at": "2025-03-15T10:30:00.000000Z",
    "created_at": "2025-03-15T10:30:00.000000Z"
  }
}
```

## Request headers

Each webhook request includes the following headers:

| Header | Description |
|--------|-------------|
| `Content-Type` | `application/json` |
| `X-ForumSpark-Signature` | HMAC-SHA256 signature of the payload |
| `X-ForumSpark-Board` | Your board's domain (e.g. `yourboard.forumspark.net`) |

The `X-ForumSpark-Board` header is useful if you receive webhooks from multiple boards on the same endpoint.

## Verifying signatures

Every webhook is signed using the `signing_secret` you received when creating the webhook. Always verify the signature before processing the payload.

### PHP

```php
// Retrieve the raw request body and signature header
$payload = file_get_contents('php://input');
$signature = $_SERVER['HTTP_X_FORUMSPARK_SIGNATURE'] ?? '';

// Generate the expected signature
$expected = hash_hmac('sha256', $payload, $signingSecret);

// Compare using a timing-safe function
if (! hash_equals($expected, $signature)) {
    http_response_code(401);
    exit('Invalid signature');
}

// Signature is valid — process the webhook
$event = json_decode($payload, true);
$eventType = $event['topic'];
$data = $event['data'];
```

### Laravel middleware

```php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class VerifyForumSparkWebhook
{
    public function handle(Request $request, Closure $next)
    {
        $signature = $request->header('X-ForumSpark-Signature');
        $expected = hash_hmac('sha256', $request->getContent(), config('services.forumspark.webhook_secret'));

        if (! hash_equals($expected, $signature ?? '')) {
            abort(401, 'Invalid webhook signature');
        }

        return $next($request);
    }
}
```

### Node.js (Express)

```javascript
const crypto = require('crypto');

app.post('/webhooks/forumspark', express.raw({ type: 'application/json' }), (req, res) => {
  const signature = req.headers['x-forumspark-signature'];
  const expected = crypto
    .createHmac('sha256', process.env.FORUMSPARK_WEBHOOK_SECRET)
    .update(req.body)
    .digest('hex');

  if (!crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature || ''))) {
    return res.status(401).send('Invalid signature');
  }

  const event = JSON.parse(req.body);
  console.log(`Received ${event.topic}`, event.data);

  res.status(200).send('OK');
});
```

## Reliability and retries

If your endpoint does not return a `2xx` status code, ForumSpark will retry delivery up to **10 times** with exponential backoff. Ensure your endpoint responds within **5 seconds** to avoid timeouts.

If your webhook processing takes longer than a few seconds, accept the request immediately with a `200` response and process it asynchronously using a queue.

## Managing webhooks

### Listing webhooks

```bash
curl https://yourboard.forumspark.net/api/v1/webhooks \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

Webhooks are scoped to the token that created them. Each token can only see its own webhooks.

### Deleting a webhook

```bash
curl -X DELETE https://yourboard.forumspark.net/api/v1/webhooks/1 \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

## Testing webhooks

During development, you can use a service like [webhook.site](https://webhook.site) to inspect incoming payloads. Create a webhook pointing to your webhook.site URL, perform an action on your board (e.g. create a topic), and inspect the payload in real time.

## Best practices

- **Verify signatures** — always validate the `X-ForumSpark-Signature` header before processing.
- **Respond quickly** — return a `2xx` status within 5 seconds. Queue heavy processing for later.
- **Handle duplicates** — in rare cases, the same event may be delivered more than once. Use idempotent processing to avoid duplicate side effects.
- **Monitor delivery** — log incoming webhooks and track failures so you can detect issues early.
- **Use HTTPS** — always use an HTTPS endpoint to protect webhook payloads in transit.