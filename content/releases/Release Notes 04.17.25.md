---
title: Release Notes 04.17.25
date: 04.17.25
tags:
  - releases
  - demos
  - announcements
  - honcho
  - dev
---

## Honcho v1.0.0 is ready!

We’re excited to share that Plastic Labs has raised a [$5.3 M pre‑seed](https://x.com/plastic_labs/status/1910401372844970387) to solve
personal identity in AI and help developers provide personalized experiences
users will love.

Alongside our raise announcement, we’re excited to be releasing Honcho v1.0.0,
now with hosting support and other major enhancements. We can’t wait to see what
you build with it.

### Changelog

ADDED

- JWT based API authentication
- Configurable logging
- Consolidated LLM Inference via ModelClient class
- Dynamic logging configurable via environment variables

CHANGED

- Deriver & Dialectic API to use Hybrid Memory Architecture
- Metamessages are not strictly tied to a message
- Database provisioning is a separate script instead of happening on startup
- Consolidated `session/chat` and `session/chat/stream` endpoints

FIXED

- Self-hosting documentation and README to mention uv instead of poetry

> View the [Repository](https://github.com/plastic-labs/honcho/tree/v1.0.0) full patch notes and commit history

## Links

- [Sign-up for the early access](https://plasticlabs.typeform.com/honchoinvite) & start building personalized agent experiences
- [Join our Discord](https://discord.gg/plasticlabs) & tell us what you're working on
- [Visit our open-source repo](https://github.com/plastic-labs/honcho) & get your hands dirty
- [Check out the docs](https://docs.honcho.dev)
- [Play with YouSim](https://yousim.ai)--portal to the multiverse of identity
