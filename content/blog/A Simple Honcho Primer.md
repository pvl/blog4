---
title: A Simple Honcho Primer
date: 04.16.24
tags:
  - blog
  - honcho
---
![[Honcho_Final-23.png]]

Welcome to our quick, ELI5[^1] guide to [Honcho](https://honcho.dev).

We'll cover [[A Simple Honcho Primer#^ef795f|what Honcho is]], [[A Simple Honcho Primer#^x125da|why we built it]], [[A Simple Honcho Primer#^1d2d3c|how to use it]], and [[A Simple Honcho Primer#^ca46d7|where the product is going]].

And throughout, we'll link to places you can dive deeper[^2].

## What is Honcho?
^ef795f

Honcho is a personalization platform for large language model (LLM) applications built by [Plastic Labs](https://plasticlabs.ai).  

It's software infrastructure that lets AI apps to "get to know" their users, resulting in delightful experiences and optimized time to value.

We'll have direct consumer experiences in the future, but today, the product is for application developers. It allows them to [[Introducing Honcho's Dialectic API#^a14c2f|reduce overhead]] and [[Introducing Honcho's Dialectic API#^x7f7f8|enhance their machine learning pipeline]].

Right now, Honcho is in private beta, that means integrating our hosted version requires permission and onboarding[^3]. [You can sign-up here](https://plasticlabs.typeform.com/honchobeta).

In its current form, Honcho has three core components:

1. [[Announcing Honcho's Private Beta#^415f37|Storage]] - managing each user's data
2. [[Announcing Honcho's Private Beta#^453717|Inference]] - processing user data with our proprietary AI models
3. [[Announcing Honcho's Private Beta#^ee4516|Retrieval]] - surfacing user data to personalize user experience (UX)

If you've heard of [Retrieval Augmented Generation](https://en.wikipedia.org/wiki/Prompt_engineering#Retrieval-augmented_generation) (RAG), this might sound familiar. But Honcho is doing *much* more than simple RAG.

Behind the scenes, Honcho learns about users as people--[[User State is State of the Art|richly modeling identity]]. It seeks to understand their beliefs, hopes, dreams, history, interests, and preferences. 

It then acts as [[Introducing Honcho's Dialectic API|an oracle to each user]], allowing apps ask for any personal context they need to improve UX and giving them access to a social cognition layer.

## Why We Built Honcho
^x125da

We believe Honcho will be a key part of the AI application development stack.

Why? Because [[Humans like personalization|users will want]] their AI experiences to be personalized and app developers shouldn't be redundantly solving that problem.

But this might not be intuitive for a few reasons:

- AI app builders are [[Machine learning is fixated on task performance|still focused on]] just getting general tasks to work
- LLMs' [[LLMs excel at theory of mind because they read|potential to personalize]] is still under-appreciated  
- Historic examples of personalized apps just leverage our activity and engagement data
- Those examples tend target only base user needs and have poor privacy records

Still, when interacting with an AI app, there's a sense that it *should* be getting to know us. In fact, we're often surprised when we realize it's not learning about us over time. And probably annoyed at having to start over.

There's [[Announcing Honcho's Private Beta#^5b6ef1|enormous potenial]] for more positive-sum use of user data and for aligning AI applications more closely with user needs and preferences.

## How to Use Honcho
^cd2d3c


## What's Next for Honcho
^5a46d7

Beyond improving our internal AI models so they can get to know users as richly as possible, we see three natural extensions in [[Announcing Honcho's Private Beta|Honcho's future]]:

1. [[Announcing Honcho's Private Beta#^82dd3b|Monitoring & Evaluation]] - developer tools to understand & assess the impact of personalization + machine learning tools to build personalized datasets
2. [[Announcing Honcho's Private Beta#^a84f44|User-Facing Controls]] - chat with *your* Honcho to direct how it manages & shares data + authenticate with Honcho to sign-in to AI apps
3. [[Announcing Honcho's Private Beta#^ebf071|A Honcho Application Ecosystem]] - a network of apps contributing to & sharing Honcho data, user-owned & stored in confidential environments  

And in just a few weeks, we'll be launching a demo platform where anyone can interact with (& eventually build) Honcho powered apps.

## Join the Beta

[Sign-up for the private beta](https://plasticlabs.typeform.com/honchobeta) and start building personalized experiences.

[Join Discord](https://discord.gg/plasticlabs), introduce yourself, and tell us what you're working on.

[Visit our open-source repo](https://github.com/plastic-labs/honcho) and get your hands dirty.

🫡

[^1]: "Explain it like I'm 5"

[^2]: And if you want to get further into the weeds technically, head over to [our docs](https://docs.honcho.dev). If you want to go deeper on the philosophical or machine learning side, take some time to explore the [rest of the blog](https://blog.plasticlabs.ai). To sign up for the private beta waitlist, [click here]().

[^3]: There's also [an open source repo for Honcho](https://github.com/plastic-labs/honcho), so you can self-host a basic version--[join our Discord](https://discord.gg/plasticlabs) for support.