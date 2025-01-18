# Admin API

## Overview

The ForumSpark Admin API provides privileged access to your forum board, enabling developers to create powerful extensions and integrations. This API suite allows interaction with your forum's core functionality, empowering developers to build sophisticated solutions that enhance and extend the basic capabilities of ForumSpark.

## Current Status

This version of the API is in its early stages and may undergo changes as we continue to develop and improve the service. Given the evolving nature of the API, developers should maintain regular awareness of our [Changelog](https://headwayapp.co/forumspark-changelog) and actively participate in our [Support Forum](https://support.forumspark.net/). These resources will keep you informed about any potential breaking changes and ensure your implementations remain compatible as the API matures.

## API Capabilities

Developers can programmatically manipulate the forum structure, handle user management tasks, create and moderate topics and posts, and customize forum themes. We are actively developing additional endpoints to expand these capabilities further, with our roadmap driven by developer feedback and common use cases within the ForumSpark community.

## Event Webhooks

The ForumSpark API includes a webhook system that serves as an almost real-time bridge between your forum and external applications. When significant events occur within your forum, our webhook system can notify your applications, allowing for real-time responses and interactions. This system enables developers to create responsive applications that maintain perfect synchronization with forum activities, opening up possibilities for advanced moderation tools, content syndication, and integrated community features.

## Endpoint Documentation

Comprehensive documentation for individual endpoints is available at https://forumspark.net/api. Our documentation provides detailed specifications for each endpoint, including authentication requirements, request and response formats, and practical implementation examples.  This documentation serves as your primary reference for technical implementation details.

## Best Practices

When integrating with the ForumSpark API, we recommend implementing proper error handling and rate limiting compliance in your applications. Consider implementing caching mechanisms where appropriate to optimize performance and reduce API calls. Stay informed about API updates through our communication channels, and maintain flexibility in your implementations to accommodate future enhancements to the API. These practices will help ensure robust and maintainable integrations with your ForumSpark forum.

## Rate Limiting

The ForumSpark API implements rate limiting to ensure fair usage and system stability across all integrations. Each API token is allowed 60 requests per minute, regardless of how many boards your application is interacting with. This token-based approach provides flexibility for applications that need to interact with multiple boards while maintaining predictable system performance.

The API includes the following headers with each response to help you track your rate limit status:

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | The total number of requests allowed per minute (60) |
| `X-RateLimit-Remaining` | The number of requests remaining in the current time window |
| `Retry-After` | The number of seconds to wait before making another request when rate limit is exceeded |
| `X-RateLimit-Reset` | The time when the rate limit window will reset |

We recommend implementing proper rate limit handling in your applications by monitoring these headers and adjusting request timing accordingly. This might include implementing backoff strategies when approaching limits, queuing requests that exceed the rate limit, or optimizing your code to batch requests where possible. By respecting these rate limits and implementing proper handling, you can ensure reliable operation of your ForumSpark integrations.