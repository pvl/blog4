---
title: Release Notes 07.11.25
date: 07.11.25
tags:
  - releases
  - announcements
  - honcho
  - dev
---

## Honcho Updates v2.0.2 - v2.0.5

Bug Fixes

FIXED

- Database initialization was misconfigured and led to provision_db script failing: switch to consistent working configuration with transaction pooler
- Bug that causes runtime error when Sentry flags are enabled
- Migration/provision scripts did not have correct database connection arguments, causing timeouts
- Groq API client to use the Async library

## Links

- [Sign-up for Honcho](https://app.honcho.dev/) & start building personalized agent experiences
- [Join our Discord](https://discord.gg/honcho) & tell us what you're working on
- [Visit our open-source repo](https://github.com/plastic-labs/honcho) & get your hands dirty
- [Check out the docs](https://docs.honcho.dev)