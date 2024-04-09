---
slug: 'paper_review_targeted_attacks_surgical_robots'
date: '2019-03-04'
title: 'Paper Review: Targeted Attacks on Teleoperated Surgical Robots: Dynamic Model-based Detection and Mitigation'
template: 'post'
tags: ['paper review', 'attacks', 'robotics']

description: 'This is a paper review for: Alemzadeh, Homa, et al. "Targeted attacks on teleoperated surgical robots: Dynamic model-based detection and mitigation." 2016 46th Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN). IEEE, 2016.'
---

## Summary

The authors presented cyber physical attacks on surgical robots. They used Raven 2 as a prototype
which is an open-source platform for robotic surgery that has control and safety mechanisms used in the
best surgical systems. The attacks take advantage of exposures of the robot’s control system during
surgery. The attacks involve injecting control commands that can cause sudden movements that can
injure the patient or even put the system a halt state during a surgery. The authors used a model-based
analysis framework to assess the after-effects of control commands and know whether these commands
are malicious or not. They used real-time computation to assess the robot’s movements. They showed
that their framework can identify and mitigate malicious commands with a high accuracy.

## Things I liked

- One of the first works if not the first work to study attacks on the control systems of surgical
  robots.
- The malware presented by the authors does not need to understand the dynamics of the robot’s
  manipulators to perform its attacks.
- The authors presented clearly the reasons behind selecting Raven 2 as a prototype

## Things I did not like:

- I think the whole paper assumed that the attacker is an insider or has access to the system
  through remote code execution. I think more information should be shown on the possibility
  that this takes place in real life.
- The author should have hidden details that can act as a guide for attackers to perform their
  attacks

## Further research

I understood from this paper that the effects of the malicious attacks on surgical robots can be
unnoticed by the operator. I think one of the topics that deserves exploring are attacks that go
unnoticed until very late. By “unnoticed”, I do not only mean attacks that cause robots to misbehave by
a few millimetres. I also mean attacks that involve causing a robot to misbehave infrequently (every
know and them). An example can be attacks performed on factory robots where robots misbehave
infrequently and only a small fraction of the products made goes corrupt to the market. This type of
stealthy attacks helps the attackers be unidentified until too late in the process.
