---
title: "Memory as Reasoning"
date: 08.19.2025
tags:
  - blog
  - ml
author: "Courtland Leer and Vince Trost"
---

## TL;DR

*Memory in agentic systems has historically focused on static storage, but we propose treating it as a dynamic reasoning task. Humans evolved to leverage prediction & surprisal-based reasoning systems to deal with resource constraints. LLMs and agents, however, don’t have these limitations, so we make the argument for logical reasoning as a trainable task to produce memory models that exceed human performance on several axes. Scaffolding reasoning traces using this approach allows us to get more out of user and agent data and form more useful representations of personal identity. This piece is a more exhaustive treatment of our [recent talk](https://x.com/vintrotweets/status/1950945331178336468) below.*

<iframe width="560" height="315" src="https://www.youtube.com/embed/uCeRCJ6zot4?si=KViHYtiZTG_ALv4X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Memory is ~~Storage~~ Prediction

Most of the discourse around memory in agentic systems focuses on storage. That's probably because historically in deterministic software systems, we think about data as composed of discrete information that needs to be preserved with as much fidelity as possible for verbatim retrieval to achieving predictable outcomes.

Common storage solutions include, but are not limited to, the following:

- **Relational Databases**: Reliable, familiar, optimizable. Good for almost everything. We’ve found developers often wish they started here, but they try out fancy new frameworks and quickly find their limits.
- **Vector Databases**: Newer, well understood, supported by most relational databases. Allows developers to “embed” their text sequences–-meaning they get run through a special LLM that produces a high-dimensional vector representation that you can do math on. Cosine similarity is a popular way to compute “semantic” similarity, meaning you can search on ideas rather than just strings. Fuzzy, but still useful.
- **Graph Databases**: Organize data via nodes and edges. The associations are the product. Great for human legibility, hard to scale.  

All are useful tools but they assume you already know what’s worth storing and how to structure it. And the formation step is routinely overlooked--ask the model to extract some facts, embed them, store them, done. But once stored, those artifacts are static. The system's success relies on the search strategy aligning with whatever context was baked in during storage.  

But deterministic systems are not AI-native, agents and LLMs afford us the ability to approach problems which are non-deterministic in nature. Understanding personal identity (the selfhood, personality, and psychology) of a human user or an agent entity is an AI-native problem. It deals with incomplete information and relies on making the best possible predictions about personal identity in novel situations at the time of inference. Simply storing and retrieving static data isn't sufficient for this task. It's not effective or efficient, nor can it compete in many important ways with biological systems.  

Human cognitive systems evolved under energy, information, and computation constraints. They therefore evolved elegant ways of taking incomplete data flowing over sensory organs and constructing representations or models of reality. Cognitive science tells us that the brain employs sophisticated prediction and surprisal strategies to build models under such constraints. Remembering everything with perfect fidelity just isn't realistic for a system evolving in a competitive, under-resourced environment. So memory is not simply the encoding of perfect static data about the world and surfacing it when needed. Instead, it's making predictions about the environment based on incomplete data and checking at the margins for errors thrown by sensory inputs to improve the next round of predictions. In this way, an internal model of reality is born.  

The same kind of predictive processing is leveraged to form representations of others. Social predictions are made, they're checked against sensory social information, and a model of personal identity is bootstrapped into existence. This is social cognition, a prediction-based system for getting to know others. Memories about a friend, colleague, partner, stranger etc. are more than just static data retrieved at the time of interaction. They're part of an internal model of that person, constantly updated and re-weighted based on the fidelity or novelty (surprisal) of that model's predictive capacity.  

That yields rich, composable, self-improving memories and predictions that furnish the context needed to succeed in social situations. All accomplished with minimal data, on the fly.  

So when we approach the problem of personal identity and context to personalize or improve AI-systems, we shouldn't assume that static facts and associations will be sufficient. Traditional storage-based approaches are brittle, deal poorly with contradictions and incomplete information, and thus fall short of dynamic, biological social cognition. We can do better.  

## Prediction Requires Reasoning

Though most prediction and surprise happens subconsciously at multiple upstream, downstream, and lateral levels in the brain, fundamentally it's reasoning. The cognitive system is processing information and producing conclusions entailed in or best explained by that data.

It's not perfect, but it's not meant to be. It's a relatively inexpensive way to construct models of the world or other actors under resource constraints. Error is a feature that improves the system cheaply. But still, imperfect.

The conscious reasoning we do can be more exact and deliberate, but it's computationally expensive. Everyone who has thought hard about a problem or reasoned for extended, focused periods, has felt the literal fatigue caused by a calorie hungry brain. And it's subject to all sorts of coercion, bias, manipulation, and hallucination caused by both internal and external forces.

The reasoning required to compute consciously and subconsciously over experience for memory and social cognition is no exception. Still prone to error, imperfection, and limited bandwidth. We forget key details, recall things that didn't happen, and use mental shortcuts and heuristics inappropriately. And even when we do avoid all those pitfalls and reason effectively, we're awful at updating our priors based on fresh consciously reasoned conclusions.

Simply, while the brain is an amazing and sophisticated system, and our memory and social cognition are remarkable, we can't reason with high-fidelity from first principles about everything, much less the social information we need in order to form the best possible representations of others.

But LLMs can.

## Reasoning in LLMs

The machine learning research and product space has been moving in this direction for quite some time. The [chain-of-thought](https://arxiv.org/abs/2205.11916) method added “let’s think step by step” to the prompt in order to get the model to expend more tokens “thinking” about the correct answer. Researchers noticed that this simple prompting change increased performance on a diverse set of benchmarks, revealing just how much cross-domain knowledge is already contained in LLMs.

More work applying reinforcement learning to [desired model behavior](https://arxiv.org/abs/2203.02155) showed promising results for aligning LLMs to human intent. Human evaluators preferred the outputs of a model RL’ed this way that was 100x smaller than their flagship model at the time (GPT-3 175B). This was the introduction of the InstructGPT series of models, which served as the foundation for ChatGPT. Researchers noticed however, that optimizing only on those final outputs led to brittle models that sounded like they were reasoning without actually reasoning well.

So the two ideas were combined--reinforcement learning was (and is being) applied to the chain-of-thought reasoning traces directly, computing rewards based on whether or not the reasoning led to the correct answers. The first demonstration of this concept was OpenAI’s [o1 series](https://arxiv.org/abs/2412.16720) of models, which hid the “thinking” trace and served the response once it was done. From what OpenAI said about these models, it was clear they relied on a verifiable reward–-most performance gains were found in math and coding tasks. In a major shock to the AI industry, DeepSeek open sourced their [R1 series](https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf) of models, which effectively reverse engineered the o1 methodology, exposed the “thinking” of the model for all to see, and demonstrated the cost benefits of scaling post-training. It was this moment that kicked off the scaling post-training revolution.

If memory is actually prediction, prediction requires reasoning, and LLMs are excellent at reasoning and prediction, how can we leverage them for memory? They don’t have the same compute constraints as us and they can be trained on the hardest types of reasoning. It’s nearly effortless for them to generate inferences, and agents should have perfect memory--which means perfect prediction, perfect reasoning, and it should scale.

With all of that in mind, we arrived at logical reasoning as the task to train for. Logical reasoning is the process by which we derive conclusions based on premises that serve as evidence to support that conclusion. We’ve all encountered these terms before, but deductive conclusions are certain statements supported by premises that were explicitly stated or observed. Inductive conclusions form general statements based on observed patterns, and abductive conclusions seek the best explanation for behaviors in the simplest way possible.  

Those reasoning tasks are very well represented in the pretraining, so almost all language models know how to do them. And most importantly, it’s the hardest type of reasoning for humans to do. So we should and can train best in class logical reasoners to do formal logic on social information (about user and agent personal identity) as the foundation of an AI-native memory and social cognition system. And those models can be lower latency, more economical, and better suited to the task than other methodologies.  

## Scaffolding Logic

When we approach memory and social cognition for AI systems as a reasoning task, lots of affordances not present in both human cognition and storage-based paradigms become available.

LLMs excel at reaching explicit, deductive, inductive, and abductive conclusions quickly and consistently. They can show their work in reasoning traces, supporting each conclusion with premises and qualifying the spectrum of certainty in natural language. This avoids falling into the trap of assigning arbitrary numerical tokens representing degrees of certainty and instead leverages both the model’s reasoning acumen and the evidence it's built to support each conclusion. That’s more robust, AI-native and useful context for future inference.

This produces atomic, composable conclusions (observations about personal identity) that can be scaffolded on one another dynamically to produce new reasoning and synthesized at time of inference to engineer the optimal context for any interaction with an AI system or product. Infinitely re-composable predictions.

New information is reasoned about instantly to pull out all the insights latent in explicit user or agent data. And LLMs are much less error prone than humans doing conscious reasoning; they deal with contradictions and updates without neural inertia, cognitive biases, emotional interference, or belief resistance. So, we can implement prediction-based memory without human limitation. More, we can exceed human capability.  

This tree of logical reasoning is far superior to static storage. It can be entered and traversed anywhere to scaffold reasoning and answer any query, a capability not true of any other method. And it can be computed over asynchronously or on the fly to improve the representation.

The tree constitutes a set of predictions about user or agent identity. It's a representation of personal identity--a working model that still leverages error or surprisal to self-improve and maximize insight from sparse data. Synthetic social cognition.

## The Case for Honcho

Language models have ushered in a new era of opportunity. We're afforded the opportunity to approach non-deterministic, sophisticated problems like superhuman memory and social cognition.

Inference on top of tabular data has worked quite well, but it's skeuomorphic, and now we have the ability to map--in dense natural language reasoning--the personal identity of any [[Beyond the User-Assistant Paradigm; Introducing Peers|peer]] (human or AI) and everything that comes with it. The question isn’t how best to store your data as it exists for prediction later, but rather how best to reason over it to get the most accurate topological representation of identity upon which to run simulation. We can transcend mere good guessing and black box inference and replace it with reaching certainty and making high-fidelity, traceable predictions.

Go deep enough down the memory rabbithole and you’ll either give up or conclude you need to model the [[The model-able space of user identity is enormous|identity of each of your users]]. We built [Honcho](https://honcho.dev) so you don't have to do either. Lucky for you, our sole mission and focus is to solve this problem. Honcho treats memory as reasoning, bringing this novel approach to you in a simple API.  

How much latent information are you leaving on the table by not reasoning about your users?
