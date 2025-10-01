---
title: First TextWorld Challenge — Winning Solution Notes
date: 10.21.19
tags:
  - blog
  - ai
  - ml
  - competition
  - microsoft
---
![Playing a game in TextWorld](ftc_textworld.png)

The [First TextWorld Challenge](https://www.microsoft.com/en-us/research/project/textworld/) was a machine learning competition organized by Microsoft Research and run between Jan-Jul 2019 with the goal of building an agent capable of playing text based games. The agents could not be a collection of hard coded rules, they had to learn from playing games from a large collection provided.

My solution won the competition with a raw score of 91.9% (70.8% with handicap) in the games hidden test set. The code for the agent is on GitHub.

Solution source code: [CogniTextWorldAgent on GitHub](https://github.com/pvl/CogniTextWorldAgent)

Competition results: [Microsoft Blog](https://www.microsoft.com/en-us/research/blog/first-textworld-problems-the-competition-using-text-based-games-to-advance-capabilities-of-ai-agents/)

In text games the typical flow is for the game engine to return just the initial introduction text and then feedback text as result of the commands entered by the player. In this TextWorld competition we have the possibility to get from the game engine additional information that makes the agent decision easier. The list of additional information includes the list of verbs used in the game, list of command templates, list of entities, the cookbook recipe or the list of admissible commands for a given game state. By choosing to have this extra information we get a percentage reduction on our score (handicap). My first approach was to ignore the score and use all the information possible, trying to build an agent that solved as many games as possible. My initial agent was using the admissible commands, so for each location the agent would have available a list of possible commands and just needed to choose the best command to use from the list. The recipe, location description and inventory were also taken from the extra information.

For example in this scenario:

location: -= Kitchen =- Ah, the kitchen. This is some kind of kitchen, really great ordinary vibes in this place, a wonderful ordinary atmosphere…

inventory: You are carrying: an orange bell pepper, a raw purple potato, …

recipe: Recipe #1 Gather all following ingredients and follow the directions to prepare this tasty meal…

admissible commands: close plain door, cook orange bell pepper with oven, drop purple potato, go south, …

I defined the game state as a text concatenation of location, inventory and recipe descriptions. In addition I added the number of elements in the inventory, because in some games there is a limit of 3 items in the inventory and the agent may need to drop some of the inventory before getting new items. Having the number explicit in the text makes it easier for the model to learn this relation.

```
<number of items in inventory> <inventory text> <recipe text> <location text>
```

With the game state and the list of admissible commands I trained a binary model that predicts the probability of a given command being the correct one for the game state. After running for all commands it ranks the commands using the probabilities. For this model I used a pre-trained [BERT model](https://arxiv.org/abs/1810.04805) (12 layers uncased model) with a head for binary classification. The model inputs are pairs of sentences, where the first sentence is the game state and the second is the command. This is the same formulation as a question & answer model.

Another additional information provided by TextWorld in training mode was the sequence of correct commands to solve the game. To train the model I generated a dataset with the game states and correct commands (positive examples) and same game states and other commands sampled from the list of admissible commands (negative examples). I sampled a maximum of 8 wrong commands for each game state. For test and validation used 200 games with the remaining used for training the model.

The model was trained for 5 epochs with learning rate of 2e-5. The batch size was 14 and max sequence length was 342 (parameters chosen to fit the memory constraints of the 8gb GPU used). Models were implemented using [PyTorch](https://pytorch.org/) and [Transformers](https://github.com/huggingface/transformers).

With this model the agent is able to get for each of the admissible commands the probability that command is the right one. For the decision of what command to use I applied a UCB1-like formula, based on the number of times the commands were tried in the given state, to increase the agent probability of exploring commands tried less often. A counter of how many executions of each command for each state is kept during the game play.

During execution, since each game is played 10 times, I added a simple rule to capture the state/command that makes a game end prematurely (when the player dies) and in the next run of the game this state/command will have a large penalty applied to the model score, so that the agent never repeats it.

When the agent goes north from location A arriving at location B, there will be a south exit in location B that goes to A. When arriving to a new location the model is good at predicting if there was some action to do on the location or if it should continue to navigate. But since there are no hints in the game state about what is found on the other side of the exits, the model cannot guess the correct exit. To account for this, the counter for the command go south in location B is incremented to account for the fact that the agent already traveled that path. This rule is applied only if there are multiple exits in a location and this way avoids that the agent immediately goes back when arriving to a new location. If there is only one exit to a location, then the best option could be to just return, so the counter is not incremented.

The model probabilities with the UCB1 adjustment and the two simple rules was all that was needed for the agent solve the games the validation set.

Next I made the agent search for the cookbook and read the recipe from the cookbook, instead of using the recipe in the additional information (to reduce the handicap on the score). For this I had to rework the sequence of commands that solves a game to first navigate to find the cookbook and read the recipe and then to do the actions. This rework originated a different dataset that was used to train a new version of the model. In the game state, when the agent does not know the recipe, that part of the text is set as “missing recipe”. This is enough for the model to learn to have different behaviors, when the recipe is missing the model predicts higher probability for navigation until it finds the cookbook, only after it will predict high probability for actions on the food elements.

In a lower level of handicap we had available a full list of possible command templates for all games. The command templates show the verb, prepositions and slots to be filled by entities, the following list shows some examples. In total there were 31 templates.

```
drop {o}
go west
cook {f} with {stove}
chop {f} with {o}
```

The slots in the command templates represent groups of entities that can be used in the commands. The meaning of these groups can be inferred by analyzing the admissible commands provided by the game engine, for example {d} is doors or containers that open or close, {f} is food or {o} that is objects that can be taken. Based on this analysis the game entities were split into 5 categories, doors, containers (fridge, toolbox, etc), structural objects (table, workbench, etc), food (banana, parsley, etc), movable objects (knife, cookbook, etc) and cardinal points (south, west, etc). A dataset was built with these labels to be used for named entity recognition (NER). The game location and inventory descriptions were annotated with the list of known game entities to build the NER dataset. The dataset was augmented with the same texts but using other entities that did not exist in the game but were similar, to improve the model generalization (eg. metal door, scissors, pumpkin).

A BERT model with a token classification head was trained for the named entity recognition task. The NER model was trained for 3 epochs with BERT 12 layer uncased model.

The commands using in the final version of the agent are generated by filling the slots in the command templates with the entities identified by NER model for the location and inventory texts. The command templates were simplified to only consider a single slot (the first), except for the slots oven, toaster and stove that used the corresponding entities. The list of possible commands corresponds to the combination of command templates with the entities having a type that fits the template slot, for example in “cook {f} with {stove}” the {f} slot is only replaced by entities with type food.

The decision model was retrained with using the commands generated through the use of the command templates.

As a summary, the logic used for the agent was to read the location description and inventory from the game engine (this is equivalent to the feedback from commands “look” and “inventory”), then build the game state, predict the entities using the NER model, use the command templates from the game engine, generate a list of possible commands from the entities and command templates, use the decision model to rank the list of commands, apply the UCB1 formula and execute the command with highest probability.

An agent using the models and algorithm described was able to solve the games in the validation set (95% of maximum points).

Text games are fun and that makes TextWorld is a great tool for natural language research.

