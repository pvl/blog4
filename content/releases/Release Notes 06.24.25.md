---
title: Release Notes 06.24.25
date: 06.24.25
tags:
  - releases
  - announcements
  - honcho
  - dev
---

## Honcho Updates v2.0.0

Introduction of the Peer Paradigm.

ADDED

- Ability to get a peer's working representation
- Metadata to all data primitives (Workspaces, Peers, Sessions, Messages)
- Internal metadata to store Honcho's state no longer exposed in API
- Batch message operations and enhanced message querying with token and message count limits
- Search and summary functionalities scoped by workspace, peer, and session
- Session context retrieval with summaries and token allocation

CHANGED

- API route is now /v2/
- New architecture centered around the concept of a "peer" replaces the former "app"/"user"/"session" paradigm
- Workspaces replace "apps" as top-level namespace
- Peers replace "users"
- Sessions no longer nested beneath peers and no longer limited to a single user-assistant model. A session exists independently of any one peer and peers can be added to and removed from sessions.
- Dialectic API is now part of the Peer, not the Session
- Dialectic API now allows queries to be scoped to a session or "targeted" to a fellow peer
- Database schema migrated to adopt workspace/peer/session naming and structure
- Authentication and JWT scopes updated to workspace/peer/session hierarchy
- Queue processing now works on 'work units' instead of sessions
- Message token counting updated with tiktoken integration and fallback heuristic
- Queue and message processing updated to handle sender/target and task types for multi-peer scenarios

FIXED

- Improved error handling and validation for batch message operations and metadata

REMOVED

- Metamessages removed in favor of metadata
- Collections and Documents no longer exposed in the API, solely internal
- Obsolete tests for apps, users, collections, documents, and metamessages
## Links

- [Sign-up for the early access](https://plasticlabs.typeform.com/honchoinvite) & start building personalized agent experiences
- [Join our Discord](https://discord.gg/plasticlabs) & tell us what you're working on
- [Visit our open-source repo](https://github.com/plastic-labs/honcho) & get your hands dirty
- [Check out the docs](https://docs.honcho.dev)
- [Play with YouSim](https://yousim.ai)--portal to the multiverse of identity
