---
title: Release Notes 05.09.24
date: 05.09.24
tags:
  - releases
  - announcements
  - honcho
  - dev
  - blog
---
## News

Some content & code for ya today:

- [[SDK-Design|Blog post in SDK design]]

- [[A Simple Honcho Primer|A Simple Honcho Primer]]

- [NodeJS SDK](https://github.com/plastic-labs/honcho-node)
  
- [Honcho v0.0.8](https://github.com/plastic-labs/honcho)  
  
[Sign-up for the private beta](https://plasticlabs.typeform.com/honchobeta) and start building personalized agent experiences.

[Join Discord](https://discord.gg/plasticlabs), introduce yourself, and tell us what you're working on.

[Visit our open-source repo](https://github.com/plastic-labs/honcho) and get your hands dirty.

## Honcho v0.0.8

ADDED
- NodeJS client library
- Documentation to OpenAPI
- Bearer token auth to OpenAPI routes
- Get by ID routes for users and collections

CHANGED
- Authentication Middleware now implemented using built-in FastAPI Security  
    module
- Get by name routes for users and collections now include "name" in slug

FIXED
- Error reporting for methods with integrity errors due to unique key  
    constraints
