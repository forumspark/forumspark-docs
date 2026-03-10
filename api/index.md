# Getting Started

The ForumSpark Admin API gives you programmatic access to your board. You can manage forums, topics, replies, users, groups and themes — anything a board owner can do from the Admin CP.

> This API is in its early stages and may undergo breaking changes. Follow the [Changelog](https://headwayapp.co/forumspark-changelog) and [Support Forum](https://support.forumspark.net/) for updates.

For full endpoint specifications, request parameters and response schemas, see the interactive [API Reference](https://forumspark.net/api).

[[toc]]

## Base URL

All API requests are made to your board's domain:

```
https://{yourboard}.forumspark.net/api/v1/
```

Replace `{yourboard}` with your board's subdomain, or your custom domain if configured.

## Creating an API token

1. Open the Admin CP on your board.
2. Under the **ForumSpark** menu, click **API Tokens**.
3. Enter a name for your token and select the abilities (scopes) it should have.
4. Click **Generate**.

The token is displayed once — copy and store it securely. It cannot be retrieved again.

## Authentication

Include your token in the `Authorization` header of every request:

```bash
curl https://yourboard.forumspark.net/api/v1/board \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

## Token abilities

Each token is granted one or more abilities that control what it can access. When creating a token, select only the abilities your integration needs.

| Ability | Description |
|---------|-------------|
| `forums.read` | Read forums and categories |
| `forums.write` | Read, write and delete forums and categories |
| `topics.read` | Read topics |
| `topics.write` | Read, write and delete topics |
| `replies.read` | Read replies |
| `replies.write` | Read, write and delete replies |
| `users.read` | Read users |
| `users.write` | Read, write and delete users |
| `groups.read` | Read groups |
| `groups.write` | Read, write and delete groups |
| `themes.read` | Read themes |
| `themes.write` | Read, write and delete themes |
| `webhooks.read` | Read webhooks |
| `webhooks.write` | Read, write and delete webhooks |

A `.write` ability always includes read access for that resource. If your token lacks the required ability for an endpoint, the API returns a `403 Forbidden` response.

## Your first API call

Fetch your board's configuration to confirm everything is working:

```bash
curl https://yourboard.forumspark.net/api/v1/board \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

A successful response looks like:

```json
{
  "name": "My Forum",
  "slug": "my-forum",
  "description": "A community for developers",
  "is_online": true,
  "enable_registrations": true,
  "created_at": "2025-01-15T10:00:00.000000Z",
  "updated_at": "2025-03-10T14:30:00.000000Z"
}
```

## Pagination

List endpoints return paginated results. The response includes `data`, `links` and `meta` fields:

```json
{
  "data": [
    { "id": 1, "username": "alice" },
    { "id": 2, "username": "bob" }
  ],
  "links": {
    "first": "https://yourboard.forumspark.net/api/v1/users?page=1",
    "last": "https://yourboard.forumspark.net/api/v1/users?page=5",
    "prev": null,
    "next": "https://yourboard.forumspark.net/api/v1/users?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 5,
    "per_page": 50,
    "to": 50,
    "total": 250,
    "path": "https://yourboard.forumspark.net/api/v1/users"
  }
}
```

Page sizes vary by resource:

| Resource | Per page |
|----------|----------|
| Users | 50 |
| Topics | 50 |
| Replies | 50 |
| Forums | 15 |
| Groups | 15 |
| Themes | 15 |
| Webhooks | 15 |

Use the `page` query parameter to navigate: `GET /api/v1/users?page=2`.

## Error responses

The API uses standard HTTP status codes. Error responses include a `message` field and, for validation errors, an `errors` object.

### 401 Unauthenticated

Returned when the `Authorization` header is missing or the token is invalid.

```json
{
  "message": "Unauthenticated."
}
```

### 403 Forbidden

Returned when your token does not have the required ability for the endpoint.

```json
{
  "message": "This action is unauthorized."
}
```

### 404 Not Found

Returned when the requested resource does not exist.

```json
{
  "message": "The specified resource was not found."
}
```

### 422 Validation Error

Returned when the request body fails validation. The `errors` object contains field-level messages.

```json
{
  "message": "The given data was invalid.",
  "errors": {
    "title": ["The title field is required."],
    "content": ["The content must be at least 5 characters."]
  }
}
```

### 429 Too Many Requests

Returned when you have exceeded the rate limit.

## Rate limiting

Each API token is allowed **60 requests per minute**. The following headers are included with every response:

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Requests allowed per minute (60) |
| `X-RateLimit-Remaining` | Requests remaining in the current window |
| `Retry-After` | Seconds to wait before retrying (only present when limit is exceeded) |
| `X-RateLimit-Reset` | Timestamp when the rate limit window resets |

When you receive a `429` response, wait for the number of seconds in the `Retry-After` header before making another request.

## Available resources

The API provides endpoints for the following resources. See the [API Reference](https://forumspark.net/api) for full request and response details.

| Resource | Endpoints | Description |
|----------|-----------|-------------|
| **Board** | `GET /board` | Board configuration and settings |
| **Forums** | `GET` `POST` `PATCH` | Forum structure and hierarchy |
| **Topics** | `GET` `POST` `PATCH` | Discussion topics |
| **Replies** | `GET` `POST` `PATCH` `DELETE` | Posts within topics |
| **Users** | `GET` `POST` `PATCH` `DELETE` | User accounts |
| **Groups** | `GET` `POST` `PATCH` | User groups and roles |
| **Themes** | `GET` `POST` `PATCH` `DELETE` + CSS/Layout | Board themes and customisation |
| **Webhooks** | `GET` `POST` `DELETE` | Event webhook subscriptions |

## Next steps

- Browse the full [API Reference](https://forumspark.net/api) for endpoint details
- Set up [Webhooks](/api/webhooks) for real-time event notifications
- Explore the [JavaScript API](/api/js) for frontend integrations
- See [Recipes](/api/recipes) for common integration examples