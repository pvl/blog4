---
title: Release Notes 05.15.25
date: 05.15.25
tags:
  - releases
  - demos
  - announcements
  - honcho
  - dev
---

## Honcho Updates v1.1.0

Improved query speed performance and enhanced debugging capabilities.

### Changelog

ADDED

- Normalize resources to remove joins and increase query performance
- Query tracing for debugging

CHANGED

- `/list` endpoints to not require a request body
- `metamessage_type` to label with backwards compatability
- Database Provisiong to rely on alembic
- Database Session Manager to explicitly rollback transactions before closing the connection

FIXED

- Alembic Migrations to include initial database migrations
- Sentry Middleware to not report Honcho Exceptions


## Links

- [Sign-up for the early access](https://plasticlabs.typeform.com/honchoinvite) & start building personalized agent experiences
- [Join our Discord](https://discord.gg/plasticlabs) & tell us what you're working on
- [Visit our open-source repo](https://github.com/plastic-labs/honcho) & get your hands dirty
- [Check out the docs](https://docs.honcho.dev)
- [Play with YouSim](https://yousim.ai)--portal to the multiverse of identity
