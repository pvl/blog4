---
title: Release Notes 07.17.25
date: 07.17.25
tags:
  - releases
  - announcements
  - honcho
  - dev
---

## Honcho Updates v2.1.0

Introduction of Honcho's R.O.T.E Deriver for explicit, certain reasoning over `peer` data, new "working" representations, & updates to the Dialectic API. Honcho is state of the art against SOTA evals, other memory solutions, and foundation model inference.

ADDED

- File uploads
- Brand new "ROTE" deriver system
- Updated dialectic system
- Local working representations
- Better logging for deriver/dialectic
- Endpoint for deriver queue status

CHANGED

- Dialectic chat endpoint takes a single query
- Rearranged configuration values (LLM, Deriver, Dialectic, History->Summary)

FIXED

- Document insertion
- Session-scoped and peer-targeted dialectic queries work now

REMOVED

- Peer-level messages

## Links

- [Sign-up for Honcho](https://app.honcho.dev/) & start building personalized agent experiences
- [Join our Discord](https://discord.gg/honcho) & tell us what you're working on
- [Visit our open-source repo](https://github.com/plastic-labs/honcho) & get your hands dirty
- [Check out the docs](https://docs.honcho.dev)