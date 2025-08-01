---
title: "SPIRAL: Teaching LLMs Complex Skills"
author: Dani Balcells
date: 07.31.25
tags:
  - research
  - ml
  - reinforcement
  - learning
---

## Teaching Social Cognition Through Games

At Plastic Labs, we've been investigating how to improve language models' social cognition—their ability to understand mental states, predict behaviors, and navigate social dynamics. Our [recent work on next-message prediction](https://blog.plasticlabs.ai/research/Can-AI-Models-Predict-What-Youll-Say-Next) highlighted a concerning trend: models optimized for technical reasoning often perform poorly on social tasks.

This presents a fundamental challenge. Traditional supervised learning requires explicit examples of correct behavior, but social intelligence is difficult to specify through labeled datasets. How do you create training data for understanding someone's mental state or detecting subtle social cues?

We've been exploring whether competitive games might offer a solution. Games provide structured environments with clear objectives and outcomes, yet they can elicit complex behaviors without requiring explicit supervision. This mirrors how humans develop social skills—children learn theory of mind through pretend play[^1], and adults refine social cognition through games and role-playing[^2]. Could we leverage similar dynamics for training language models?

## Finding the Right Collaborators

Our exploration began with a conversation between Vince, Courtland, and Dani about using reinforcement learning to improve models' understanding of people. Dani had previously built a prototype sandbox for LLMs to play Avalon—a social deduction game requiring deception, trust-building, and complex theory of mind. This experience suggested that such games might provide the structured social challenges needed to develop these capabilities.

We began searching for existing work on training LLMs through game-playing and discovered TextArena, a library providing gym-style RL environments for text-based games. When we reached out to the team, we found that Leon Guertler and his colleagues were exploring similar questions about using self-play to develop sophisticated model capabilities. Their technical expertise in multi-agent RL combined with our focus on social cognition created a natural collaboration.

## SPIRAL's Key Contributions

The resulting [SPIRAL paper](https://arxiv.org/abs/2506.24119v2) demonstrates that self-play on simple games can develop generalizable reasoning skills. Training on Kuhn Poker alone—without any mathematical content—improved performance on math benchmarks by 8.6% and general reasoning by 8.4%.

The mechanism is particularly interesting. Self-play creates an ever-evolving challenge as the model must continuously adapt to stronger versions of itself. This competitive pressure prevents the overfitting and memorization common in static training regimes. Through analysis of game trajectories and mathematical problem-solving, the authors identified three cognitive patterns that transfer between domains:

- Systematic case-by-case analysis
- Expected value calculation  
- Pattern recognition and structural reasoning

Importantly, these patterns emerged without explicit instruction. The game dynamics alone were sufficient to develop reasoning strategies that generalized beyond the training domain.

## Implications for Social Intelligence

SPIRAL validates a crucial principle: competitive self-play can teach complex cognitive skills without domain-specific supervision. This is exactly the kind of approach we need for social cognition, where creating comprehensive labeled datasets is impractical.

Social deduction games like Avalon present particularly rich training environments. Players must:
- Maintain models of multiple agents' beliefs and intentions
- Recognize deception through behavioral patterns
- Strategically reveal and conceal information
- Build coalitions while managing trust

These games create natural curricula for theory of mind development. Success requires genuinely understanding other agents rather than memorizing response patterns.

## Relevance to Honcho

This research directly informs our work on [Honcho](https://honcho.dev), our platform for helping AI applications understand their users. While Honcho currently learns about users through ambient observation and theory of mind inference, SPIRAL suggests that competitive game-playing could provide complementary training signals.

Just as SPIRAL showed that poker develops mathematical reasoning, we hypothesize that social deduction games could develop the deeper social understanding needed for genuine personalization. This could help address the gap our next-message prediction work identified—where technical optimization actually degrades social performance.

## Next Steps

SPIRAL represents an important first step in using self-play to develop cognitive capabilities beyond traditional RL domains. We're grateful to Leon Guertler and the TextArena team for their collaboration and technical guidance throughout this project.

Moving forward, we're excited to explore how different game types might develop different aspects of social cognition. Can negotiation games improve persuasion understanding? Might collaborative games with hidden information teach trust calibration? These questions will guide our continued research.

The broader implication is clear: we need diverse approaches to capability development in language models. Rather than relying solely on supervised learning with static datasets, competitive dynamics and self-play offer paths to skills that are difficult to specify but essential for creating AI systems that truly understand people.

[^1]: Wellman, H. M., Cross, D., & Watson, J. (2001). Meta-analysis of theory-of-mind development: The truth about false belief. Child Development, 72(3), 655-684.

[^2]: Goldstein, T. R., & Winner, E. (2012). Enhancing empathy and theory of mind. Journal of Cognition and Development, 13(1), 19-37.