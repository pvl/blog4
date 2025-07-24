---
title: Release Notes 07.24.25
date: 07.24.25
tags:
  - releases
  - announcements
  - honcho
  - dev
---
## News

New Honcho MCP available at [mcp.honcho.dev](https://mcp.honcho.dev)

Set-up docs available in the link. 

## Honcho Updates v2.1.1

Test harness, system enhancements, bug fixes. Dialectic is ~40% faster + better performance with improvements allowing query expansion off by default.

ADDED

- Test harness for custom Honcho evaluations
- Better support for session and peer aware dialectic queries
- Langfuse settings
- Added recent history to dialectic prompt, dynamic based on new context window size setting

CHANGED

- Made query expansion in dialectic off by default
- Overhauled logging
- Refactor summarization for performance and code clarity
- Refactor queue payloads for clarity

FIXED

- Summary queue logic
- Formatting of logs
- Filtering by session
- Peer targeting in queries


## Links

- [Sign-up for Honcho](https://app.honcho.dev/) & start building personalized agent experiences
- [Join our Discord](https://discord.gg/honcho) & tell us what you're working on
- [Visit our open-source repo](https://github.com/plastic-labs/honcho) & get your hands dirty
- [Check out the docs](https://docs.honcho.dev)