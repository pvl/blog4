---
title: "SPIRAL: Letting LLMs Teach Themselves Through Self-Play"
author: Dani Balcells
date: 08.15.24
tags:
  - research
  - ml
  - reinforcement
  - learning
---

![[selfplay.png]]
*Source: [Liu, Guertler et al., 2025](https://arxiv.org/abs/2506.24119).*

## TL;DR
_We collaborated with the TextArena team to develop SPIRAL, a novel RL framework that allows LLMs to develop complex reasoning capabilities by playing text-based games against themselves. Using SPIRAL on a simplified variant of poker with no mathematical content, a 4B-parameter Qwen model improved its performance on math and reasoning benchmarks by 8.6% and 8.4% respectively. It does this by learning specific strategies, such as case-by-case analysis and expected value calculation, that generalize beyond poker better than simple game heuristics. We're excited to explore whether self-play on social deduction games like Mafia can lead to general improvements in LLMs' social cognition._

---
## Teaching Social Cognition Through Games
At Plastic Labs, one of our key research interests is improving language models' social cognition: their ability to represent people's mental states, predict users' behaviors, and navigate complex social dynamics. This capability is essential for creating AI systems that can genuinely understand and adapt to individual users, yet it remains underdeveloped compared to technical abilities and so-called "hard skills" like reasoning and coding.

Complex skills like social cognition present unique challenges for conventional supervised learning, arguably the dominant paradigm in machine learning, where models are given labeled examples of correct behavior. Unlike conventional language modeling tasks such as question answering or translation, social understanding involves nuanced judgments about beliefs, intentions, and interpersonal dynamics. With social reasoning, on the other hand, creating comprehensive labeled datasets of correct behavior is not just expensive, but often an ill-posed and under-specified problem, given how hard it is to define what the right answer should be in the first place.

Something similar has happened in the field of mathematical and logical reasoning over the last 12 to 18 months. In this realm, reinforcement learning (RL) has shown remarkable success where supervised learning was struggling: instead of relying on providing the model with costly labeled examples of entire correct solutions to math and reasoning tasks, RL enables the model to propose its own solution to a problem, and learn from the much sparser signal that is a yes/no judgment on whether it has arrived at a valid answer. Projects like OpenAI's o1 and DeepSeek-R1 demonstrate that RL can unlock sophisticated reasoning capabilities despite only providing models with sparse reward signals. 

These approaches have primarily focused on domains with verifiable answers: mathematics, coding, and formal logic. This raised a key question: if we identified the appropriate reward signals, could we use RL to teach social cognition? As we considered the fact that most social interactions don't have easily verifiable correct answers like math problems do, we thought: What about social deduction games? Games like [Mafia](https://en.wikipedia.org/wiki/Mafia_(party_game)), Werewolf, [The Resistance](https://en.wikipedia.org/wiki/The_Resistance_(game)) and Avalon provide structured social environments with clear win conditions, requiring players to model others' mental states, detect deception, and navigate trust dynamics. If we used these games as RL environments, could LLMs learn the social skills required to win? And would this lead to improvements in social skills that generalize beyond them games themselves?

Our research soon connected us with [Leon Guertler](https://x.com/leonguertler) and the [TextArena](https://www.textarena.ai) team, who were working on a Python library designed for this exact purpose: providing text-only games as RL environments in the hopes that they might allow LLMs to acquire general skills. We soon discovered we were kindred spirits working on similar problems, and decided to collaborate.

This blog post introduces the first result of that collaboration: SPIRAL, a framework that allows LLMs to develop complex reasoning skills by playing text-based games against themselves. 

## SPIRAL's Key Contributions

The [SPIRAL paper](https://arxiv.org/abs/2506.24119) demonstrates that self-play on simple games can develop generalizable reasoning skills without any domain-specific training data. The experiments consisted of training Qwen3-4B-Base on Kuhn Poker—a minimal three-card poker variant—for just 400 training steps. Despite the game containing no mathematical content whatsoever, this training improved the model's performance on math benchmarks by 8.6% and general reasoning by 8.4%. Perhaps most surprisingly, the self-play approach outperformed a baseline trained using supervised fine-tuning on 25,000 expert game trajectories, suggesting that the competitive dynamics of self-play provide a more effective learning signal than imitation learning.

Self-play creates fundamentally different training dynamics than conventional approaches. When a model plays against continuously updating copies of itself, it faces an opponent that evolves in lockstep with its own improvements. This prevents the static exploitation patterns that emerge when training against fixed opponents: in the paper, we find that models trained against unchanging opponents like Mistral or Gemini initially struggle, then plateau once they discover winning exploits. Furthermore, given the zero-sum nature of the games, self-play forces models to develop genuine strategic reasoning that remains robust against an ever-adapting adversary.

What makes it possible for the skills learned through SPIRAL to generalize beyond poker? Careful analysis of the resulting model’s playing style uncovered that it had developed three major strategies that were not used by the base model. As opposed to simple game heuristics, these strategies have broader applicability, enabling the model to perform better at math and reasoning tasks. The strategies are:

- Case-by-case analysis, allowing the model to systematically enumerate scenarios, such as considering each possible hand an opponent in poker might have.
- Expected value calculation, enabling the model to weigh probabilistic outcomes mathematically, such as estimating whether a given play in a game of poker will result in a higher expected gain.
- Pattern recognition, helping the model identify recurring structures and regularities, such as recognizing when an opponent's betting pattern signals strength.

The main technical innovation that enabled stable self-play training was Role-conditioned Advantage Estimation (RAE). It is designed to mitigate the effects of variance, a common challenge in multi-agent reinforcement learning. Facing a constantly changing opponent makes it difficult to determine whether a given positive reward should be attributed to good play or to a mistake by an opponent, which in turn makes model updates unreliable and unstable. RAE addresses this by maintaining separate baselines for each role in the game, normalizing rewards relative to the expected performance in each specific role. Without RAE, the training often led to "thinking collapse", where gradients become unstable and eventually drop to near zero, halting learning and resulting in nonsensical outputs. 

## Next Steps for Social Intelligence

For Plastic Labs, SPIRAL is a first step pointing us in an intriguing direction: competitive self-play as an effective way to teach models complex skills without domain-specific supervision. It opens the door for us to explore using similar approaches to teach models social cognition specifically.

We’re currently exploring whether social deduction games like Mafia, Avalon and Werewolf are the natural next step for this approach. They require exactly the capabilities we want models to develop: maintaining accurate models of multiple agents' mental states simultaneously, detecting deception through subtle behavioral cues, building trust strategically, and managing the flow of information to achieve goals. Success in these games depends on genuine social understanding, precisely the core components of social cognition that remain underdeveloped in current language models.

Our past research in [[Can AI Models Predict What Youll Say Next|next-message prediction]] has suggested that RL for reasoning hampers models' social intelligence. We're curious to explore whether a self-play curriculum containing a mix of games that require both reasoning and social intelligence might allow us to bypass this apparent tradeoff.

We're grateful to the TextArena team, and Leon Guertler in particular, for their collaboration and technical guidance throughout this project. We're excited to look for ways to keep working together as we move into the next stages of our research. SPIRAL has demonstrated that we need diverse approaches to capability development beyond traditional supervised learning, and we're eager to see where this research leads.