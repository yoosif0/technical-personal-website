---
slug: 'paper_review_attacks_agains_process_control'
date: '2019-03-11'
title: 'Paper Review: Attacks Against Process Control Systems:Risk Assessment, Detection, and Response'
template: 'post'
tags: ['paper review', 'attacks', 'process control']

description: 'This is a paper review for: Cárdenas, Alvaro A., et al. "Attacks against process control systems: risk assessment, detection, and response." Proceedings of the 6th ACM symposium on information, computer and communications security. 2011.'
---

## Summary

The authors were able to detect attacks that manipulate the behavior of a targeted control system. In
their research, the authors were not focused on the vulnerabilities’ exploitation methods. Instead, they
were focused on the end to end purpose of the attack. They also analyzed the security of their solution
to guarantee that it would not put the system in an unwanted state. The authors also studied the
number of false alarms and made conclusions on the applicability of their solution to other control
systems. They mentioned that nonresilient solutions might not similar positive results.

## Things I liked

- The authors did an excellent job explaining what control system is for those who have no
  sufficient background and defined the taxonomy of control systems. They provided examples
  and classification of different control systems based on their functionalities. They explained how
  control systems work in real life by giving a use case in the oil and gas industry.
- Were clear in their conclusion that their solution might not work in nonresilient control systems
- Explained why although no substantial amounts of cyberattacks on control systems have taken
  place, this research is still essential. They attributed this to the exposure of vulnerabilities to
  talented and motivated attackers.
- They have demonstrated previous attacks that took place on control systems like the Stuxnet
  worm.
- Presented an elegant idea from the high conceptual level that although attackers might be
  successful in hiding details about their attacks, they can not hide their final goal.
- Did an excellent job in presenting the taxonomy of attacks by differentiating non targeted
  attacks from targeted attacks.
- The authors were clear about some considerations of their solution. They stated that the
  amount of time for a human to respond should be put into consideration before the
  deployment of an automatic response.
- Explained how control systems security is different from traditional IT security
- The paper is relatively easy to understand, and the authors did a good job in their writing style.
  They used italic and bold phrases for emphasis.
- They explained how previous work on fault and safety diagnosis had their drawbacks since they
  did work in detecting specific attacks launched by high-level attackers with system knowledge.
- They did not ignore false positives and measured the number of false alarms.

## Things I did not like:

- I think the authors were oversimplifying when they implied that knowing the final objective of
  the attacker is enough to detect attacks. Sometimes, sophisticated control systems can be
  harmed by different means. So more than one final objective can be reached to harm the
  system, and in some cases, a specific final objective might not the cause of attack.
- Their solution depends on human response.
- I am skeptical that the use case of TE plant in the paper can be generalized to other control
  systems and other industries. I believe that in some critical systems, we should not depend on
  anomaly detection.
- False alarms might put the system in an undesirable state.
- In their conclusion, they went into details about the TE plant that I believe has no place. For
  example, they mentioned that DoS attacks have a negligible impact on TE-PCS.
- Their solution depends on the resiliency of the control system

## Further research

A study on how anomaly detection can be used for regular IT systems as a final defense system when
antivirus and other defenses fail
