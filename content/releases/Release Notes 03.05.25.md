---
title: Release Notes 03.05.25
date: 03.05.25
tags:
  - releases
  - demos
  - announcements
  - honcho
  - dev
---

## Honcho v0.0.16

Improved User Representations

ADDED

- Detailed custom exceptions for better error handling
- CLAUDE.md for claude code

CHANGED

- Deriver to use a new cognitive architecture that only updates on user messages and updates user representation to apply more confidence scores to its known facts
- Dialectic API token cutoff from 150 tokens to 300
- Dialectic API uses Claude 3.7 Sonnet
- SQLAlchemy echo changed to false by default, can be enabled with SQL_DEBUG - environment flag

FIXED

- Self-hosting documentation and README to mention uv instead of poetry

## Links

- [Sign-up for the early access](https://plasticlabs.typeform.com/honchoinvite) & start building personalized agent experiences
- [Join our Discord](https://discord.gg/plasticlabs) & tell us what you're working on
- [Visit our open-source repo](https://github.com/plastic-labs/honcho) & get your hands dirty
- [Check out the docs](https://docs.honcho.dev)
- [Play with YouSim](https://yousim.ai)--portal to the multiverse of identity
