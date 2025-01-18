# Webhooks

## Overview

ForumSpark's webhook system enables near real-time notifications for various forum events, allowing your applications to respond immediately to changes within your forum. When an event occurs, our system sends detailed information to your specified endpoint, enabling seamless integration with your external systems.

## Event Types

ForumSpark supports webhooks for a comprehensive range of forum events across different resource types:

### Topics
- `topics/create`: Triggered when a new topic is created
- `topics/update`: Triggered when a topic is modified
- `topics/delete`: Triggered when a topic is removed

### Replies
- `replies/create`: Triggered when a new reply is posted
- `replies/update`: Triggered when a reply is edited
- `replies/delete`: Triggered when a reply is removed

### Forums
- `forums/create`: Triggered when a new forum is created
- `forums/update`: Triggered when forum settings are modified
- `forums/delete`: Triggered when a forum is removed

### Groups
- `groups/create`: Triggered when a new group is created
- `groups/update`: Triggered when group settings are modified
- `groups/delete`: Triggered when a group is removed

### Users
- `users/create`: Triggered when a new user registers
- `users/update`: Triggered when user information is modified
- `users/delete`: Triggered when a user account is removed

## Authentication and Permissions

To receive webhook notifications for specific events, your API token must have appropriate permissions for the corresponding resources. For instance, to receive notifications about topic-related events, your token must have either the `topics.read` or `topics.write` permission. This permission-based system ensures secure access to sensitive information while allowing flexibility in implementation.

## Webhook Payload

When an event occurs, the webhook system sends a payload to your specified endpoint that matches the format of our API endpoint responses. This consistency makes it easier to process webhook data using the same logic you use for direct API interactions.

## Reliability and Retries

Our webhook system implements a robust retry mechanism to ensure reliable delivery of event notifications. In case of delivery failures, the system will automatically attempt to resend the webhook up to 10 times over a designated period. This retry mechanism helps ensure that your application doesn't miss critical events due to temporary network issues or system downtime.

## Webhook Management

You can manage your webhook subscriptions programmatically through our API. This includes:

- Creating new webhook subscriptions
- Removing webhook subscriptions when they're no longer needed
- Viewing current webhook configurations

Detailed endpoint documentation for webhook management is available in our main API documentation.

## Board Identification

Each webhook request includes a `X-ForumSpark-Board` header that identifies the source forum of the event. This header contains the complete forum domain, for example `support.forumspark.net`. This information allows you to handle webhooks from multiple forums within a single endpoint while maintaining proper context for each event.

## Request Signing and Security

To ensure the authenticity of webhook requests, ForumSpark implements a request signing mechanism. When you create a new webhook through the API, you'll receive a signing secret. This secret is only displayed once during creation, so it should be securely stored for future use.

Each webhook request includes a `X-ForumSpark-Signature` header containing a signature generated using your webhook's secret. This signature is created using HMAC SHA-256 with the JSON payload as the message and your signing secret as the key.

To validate incoming webhooks, you should:
1. Extract the signature from the `X-ForumSpark-Signature` header
2. Generate a signature using the raw JSON payload and your stored secret
3. Compare the generated signature with the one provided in the header

Here's an example of how to generate and verify the signature in PHP:

```php
$signature = hash_hmac('sha256', $requestJson, $secret);

// To verify, compare this signature with the X-ForumSpark-Signature header
$isValid = hash_equals($signature, $forumSparkSignature);
```

Always verify the signature of incoming webhooks before processing them to ensure the requests are genuinely from ForumSpark. This helps prevent unauthorized actors from sending fake webhook events to your endpoint.

## Best Practices

When implementing webhook handlers, consider the following recommendations:

- Implement proper validation of incoming webhooks to ensure security
- Process webhook payloads asynchronously to prevent timeout issues
- Maintain idempotency in your webhook processing to handle potential duplicate deliveries
- Monitor webhook delivery success rates and implement appropriate logging
- Ensure your endpoint responds quickly to webhook deliveries (recommended within 5 seconds)

## Error Handling

Your webhook endpoint should return an appropriate HTTP status code to indicate successful receipt of the webhook. Status codes in the 2xx range indicate success, while other status codes will trigger our retry mechanism. Consider implementing a queueing system if your webhook processing might take longer than a few seconds.