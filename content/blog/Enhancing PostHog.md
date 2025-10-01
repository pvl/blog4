---
title: Enhancing PostHog for Advanced Analytics in LLM Applications
date: 04.16.24
tags:
  - blog
  - ml
  - posthog
  - analytics
  - projects
---

## Introduction

The vast amount of text interactions between users and LLMs holds many insights, but it’s unrealistic to manually sift through all this data due to its overwhelming volume and repetitive nature.

While [PostHog](https://github.com/PostHog/posthog) offers powerful analytics for tracking user clicks in web and mobile apps, its current setup falls short for analyzing LLM-generated text, lacking essential features for this purpose.

By integrating machine learning models as plugins during data ingestion, capable of extracting valuable text features, and enhancing the user interface for easier text data exploration, PostHog can be transformed into a highly effective tool for LLM text analytics.

This blog post will detail these enhancements and show you how to leverage this open-source tool to extract valuable insights from your data.

## The Mechanics of PostHog-LLM

### Data Ingestion

We adhere to PostHog’s event capture methodology, focusing on events where LLM generates outputs from user inputs. These events, termed tasks, encapsulate the input-output pair. For instance, in LLM applications, a typical event captures the LLM’s response using the standard PostHog client, as shown:

```
output_generated = llm_model.generate(prompt_input, ...)

posthog.capture(user_id, event="llm-task",
                properties={"$llm_input": prompt_input,
                            "$llm_output": output_generated})
```

Conversations are sequences of such tasks. We offer two methods for sequence management: linking tasks via a “$session_id” property or, alternatively, incorporating the conversation history in ChatML format within the “$llm_input” property for stateless tasks.

```
 user_chatml = [
  {"role": "user", "content": "first user message"},
  {"role": "assistant", "content": "first agent message"},
  {"role": "user", "content": "next user message"}, 
 ]

 output_generated = llm_model.generate(....)

 posthog.capture(user_id, event="llm-task",
        properties={"$llm_input": user_chatml
           "$llm_ouput": output_generated})
```

For user feedback, such as thumbs up/down on LLM outputs, we capture these as distinct events, also including the input/output context of the task.

Although the same texts may be captured multiple times, this approach allows each task to be processed independently without dependencies in the ingestion pipeline.


### User Interface Enhancements

Although PostHog’s UI is both elegant and powerful, it wasn’t designed with LLM applications in mind. We’ve introduced modifications to enable seamless navigation from aggregated insights to detailed event analysis, showing the conversation transcripts. These UI enhancements can be found in the [PostHog-LLM](https://github.com/postlang/posthog-llm) repository. The installation of this variant follows the same [self-host](https://posthog.com/docs/self-host) or [local development](https://posthog.com/handbook/engineering/developing-locally) instructions in the PostHog documentation.

![[ep_posthogconv.png]]

### Leveraging Plugins for Text Analysis

We’ve exploited PostHog’s plugin system to incorporate machine learning models into the data ingestion pipeline. These models act in each LLM event and classify user intents, emotions, and actions. We published plugins for [emotion](https://github.com/minuva/ph-emotion-plugin) and [toxicity](https://github.com/minuva/ph-toxicity-plugin) classification, as well as [event flow](https://github.com/minuva/ph-flowdetect-plugin). A plugin for conversation topic is forthcoming. The models used by these plugins are designed for rapid execution and efficiency and can be deployed on either CPU or GPU instances.

These adaptations collectively strengthen PostHog as a comprehensive analytics solution for LLM applications, enabling a holistic understanding of user interactions through geographical, behavioural, and textual data analysis.

## Analysis and Use Cases

### Retention Analysis

PostHog-LLM facilitates retention analysis by enabling the tracking and analysis of user cohorts based on a combination of demographic, behavioural, and linguistic factors. The inclusion of labels for topics, emotions, and flow actions allows for the detailed segmentation of users, providing insights into factors influencing user retention.

![[ep_posthogconv2.png]]

### Trends and Event Tracking

A core strength of PostHog is its advanced event tracking capabilities, which adeptly convert user interactions into valuable insights. This functionality also proves especially beneficial for LLM applications. A notable application is the tracking of instances where an LLM issues apologies, serving as a critical indicator of user satisfaction levels and pinpointing opportunities for enhancement.

![[ep_posthogconv3.png]]

### Funnel Analysis

Funnel analysis in PostHog-LLM extends beyond traditional user journey tracking to include conversational pathways. Mapping the progression from topics to desired outcomes, such as account upgrades, can unveil the elements driving user conversion.

## Conclusion

PostHog can be used as an advanced analytics platform for LLM applications, merging the quantitative analysis of user interactions with qualitative assessment of text data. Through enhanced data ingestion, user interface improvements, and the integration of machine learning models, [PostHog-LLM](https://github.com/postlang/posthog-llm) provides a comprehensive analytics solution that is open-source and allows full control over platform and data.

