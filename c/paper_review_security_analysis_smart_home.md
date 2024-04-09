---
slug: 'paper_review_security_analysis_smart_home'
date: '2020-02-05'
title: 'Paper Review: Security Analysis of Emerging Smart Home Applications'
template: 'post'
tags: ['paper review', 'iot']

description: 'This is a paper review for: Fernandes, Earlence, Jaeyeon Jung, and Atul Prakash. "Security analysis of emerging smart home applications." 2016 IEEE symposium on security and privacy (SP). IEEE, 2016.'
---

## Summary

Several Smart home programming frameworks support third-party app development. These frameworks
expose users to security risks. The authors of this paper presented an empirical study on SmartThings.
They picked SmartThings since it has the most significant number of apps and has native support for
device types of major manufacturers. The authors discovered security-critical design issues in
SmartThings' capability model by revealing that the majority of apps in the framework's store are
overprivileged. Besides that, the authors found that events that deal with SmartThings' event
subsystem, which devices use to communicate with apps, hold sensitive information. The authors were
able to prove these security flaws in real-life scenarios by stealing pin codes and causing fake fire alarms
without the need to keep the required permissions to perform these actions.

## Things I liked

- The authors explained in detail the reason for picking smarththings rather than other
  frameworks.
- The authors were practical and demonstrated real risks that can be induced by working on it
  themselves and provided real-world cases like causing fake fire alarms without the need of
  holding the required permissions to perform these actions
- The paper is explanative and did not only present security risks of smart home frameworks but
  also presented the security properties of these system
- The paper is easy to follow and to comprehend, and the authors made sure to explain concepts
  even if they are not required to explain them to make it easier for readers who have no
  sufficient background. For example, the authors explained why the principle of least privilege is
  hard to achieve in the real world. They also explained the permission/capability model design.
- I liked how the authors categorized the event data protection into two categories since,
  technically speaking, they are two different problems.
- The authors were honest by mentioning a shortcut they took by stating that they opted for an
  automated approach, rather than the manual approach, to download source code, although the
  manual approach makes the study more comprehensive

## Things I did not like:

- I think that finding faults in the smart things capability model can not be generalizable to other
  frameworks.

## Further research

Analyzing security threats that causes different types of attacks like Mirai
