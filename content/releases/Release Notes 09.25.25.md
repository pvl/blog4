---
title: Release Notes 09.25.25
date: 09.25.25
tags:
  - releases
  - announcements
  - honcho
  - dev
---
## Honcho Updates v2.3.2

- Honcho is 10x faster!
- Added the ability to fetch peer cards directly from the API for streamlined access 
- Reliability improvements
- Stability and performance improvements, bug fixes

Added

- Get peer cards endpoint (`GET /v2/peers/{peer_id}/card`) for retrieving targeted peer context information

Changed

- Replaced Mirascope dependency with small client implementation for better control
- Optimized deriver performance by using joins on messages table instead of storing token count in queue payload
- Database scope optimization for various operations
- Batch representation task processing for ~10x speed improvement in practice

Fixed

- Separated clean and claim work units in queue manager to prevent race conditions
- Skip locked ActiveQueueSession rows on delete operations
- Langfuse SDK integration updates for compatibility
- Added configurable maximum message size to prevent token overflow in deriver
- Various minor bugfixes

## Links

- [Sign-up for Honcho](https://app.honcho.dev/) & start building personalized agent experiences
- [Join our Discord](https://discord.gg/honcho) & tell us what you're working on
- [Visit our open-source repo](https://github.com/plastic-labs/honcho) & get your hands dirty
- [Check out the docs](https://docs.honcho.dev)