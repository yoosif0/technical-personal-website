---
slug: "paper_review_false_data_injection"
date: "2019-03-11"
title: "Paper Review: False Data Injection Attacks against State Estimation in Electric Power Grids"
tags: ["paper review", "attacks", "robotics"]
description: 'This is a paper review for: Liu, Yao, Peng Ning, and Michael K. Reiter. "False data injection attacks against state estimation in electric power grids." ACM Transactions on Information and System Security (TISSEC) 14.1 (2011): 1-33.'
---

## Summary

The authors introduced false data injection attacks that target state estimation in electric power grids.
Bypassing current techniques of bad measurement detection, they manipulated the configuration of a
power system and induced errors into a state variable. The authors presented two scenarios where the
attack can take place in real life. In the first, the attacker was constrained to some specific meters. In the
second, the attacker had limited resources to compromise the meters. In the two attacks, the authors
were able to conduct the attack successfully and were also able to manipulate the results in the
direction they want.

## Things I liked

- By mentioning the electric blackout that took place in 2003, the authors provided a historical
  context to emphasize the importance of having secure and reliable power grids.
- Were straightforward when they mentioned that false data injection attacks pose substantial
  requirements that include that the attackers should
  o know the configuration of the target power system, which is not easy.
  o Manipulate meter measurements before they are used for state estimation
- Provided beneficial background information

## Things I did not like:

- Their abstract was too long and wordy.
- A big part of the abstract replicates what is in the introduction
- They did not introduce any solutions

## Further research

- A new electric grid system where there is only a centralized place where the state of all terminal
  meters is stored, and any discrepancy would be identified.
- Anomaly detection technique that compares the expected state value to the current value for
  power girds.
