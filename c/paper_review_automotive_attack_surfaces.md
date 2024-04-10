---
slug: "paper_review_automotive_attack_surfaces"
date: "2020-02-12"
title: "Paper Review: Comprehensive Experimental Analyses ofAutomotive Attack Surfaces"
tags: ["paper review", "iot"]
description: 'This is a paper review for: Checkoway, Stephen, et al. "Comprehensive experimental analyses of automotive attack surfaces." USENIX Security Symposium. Vol. 4. 2011.'
---

## Summary

Modern vehicles are made up of several distributed compute resources(components). Each of these
components has an implicit connection to other components. This architecture provides a broad surface
for attacks. The authors made a vulnerability study, and for each vulnerability, they were able to control
the whole vehicle's distributed system. They found that all vulnerabilities are at the interface boundaries
between code written by distinct organizations. The authors performed a threat assessment showing
the different types of attacks that can be done like mass car theft and surveillance. The authors then
provided implementation fixes like the usage of app-level authentication and encryption, limiting
Bluetooth pairing, and limiting capabilities that can be done via the cellular interface. Besides that, the
paper discussed the reasoning behind why these vulnerabilities are already there, although the fixes are
known. The authors attributed this to outsourcing components from different proprietary vendors and
to the fact that no large-scale attacks had ever happened regularly.

## Things I liked

- The author presented the topic in a clear, coherent fashion and gave enough context to describe
  the reasoning behind publishing the paper including the criticism they faced from a previous
  paper they published
- They used minimum assumptions to prove that they were correct (get this from the note in the
  pdf)
- The authors were imaginative in the scale of attacks that can take place like mass car theft.
- The authors also suggested fixes with detailed implementation rather than only describing
  vulnerabilities
- Invested time and space in answering an interesting question of why all these clear noninnovative ideas to secure the vehicles' distributed systems have not been implemented yet.

## Things I did not like:

- The paper somehow generalized the findings of one car to all other cars.
- The paper was a bit mean to other authors that criticized their previous paper. From my
  understanding, the authors of this paper implied that the other authors had a knowledge gap.

## Further research

A study on interface tests that asserts security for components in a black box fashion that has no access
to source code simulating proprietary source code of car manufacturers
