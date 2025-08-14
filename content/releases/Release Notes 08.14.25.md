---
title: Release Notes 08.14.25
date: 08.14.25
tags:
  - releases
  - announcements
  - honcho
  - dev
---

## News

Checkout a community project to initialize Honcho with your ChatGPT conversations [teach-honcho](https://teach-honcho.brennerspear.com)

Stay tuned for Plastic Labs Launch Week!

## Honcho Updates v2.3.0

Test harness, system enhancements, bug fixes. Dialectic is ~40% faster + better performance with improvements allowing query expansion off by default.

ADDED

- `getSummaries` endpoint to get all available summaries for a session directly
- Peer Card feature to improve context for deriver and dialectic

CHANGED

- Session Peer limit to be based on observers instead, renamed config value to `SESSION_OBSERVERS_LIMIT`
- `Messages` can take a custom timestamp for the `created_at` field, defaulting to the current time
- `get_context` endpoint returns detailed `Summary` object rather than just summary content
- Working representations use a FIFO queue structure to maintain facts rather than a full rewrite
- Optimized deriver enqueue by prefetching message sequence numbers (eliminates N+1 queries)

FIXED

- Deriver uses `get_context` internally to prevent context window limit errors
- Embedding store will truncate context when querying documents to prevent embedding token limit errors
- Queue manager to schedule work based on available works rather than total number of workers
- Queue manager to use atomic db transactions rather than long lived transaction for the worker lifecycle
- Timestamp formats unified to ISO 8601 across the codebase
- Internal get_context method's cutoff value is exclusive now

## Links

- [Sign-up for Honcho](https://app.honcho.dev/) & start building personalized agent experiences
- [Join our Discord](https://discord.gg/honcho) & tell us what you're working on
- [Visit our open-source repo](https://github.com/plastic-labs/honcho) & get your hands dirty
- [Check out the docs](https://docs.honcho.dev)
