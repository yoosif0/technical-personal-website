---
slug: 'paper_review_contextIot'
date: '2020-02-05'
title: 'Paper Review: ContexloT: Towards Providing Contextual Integrity to Appified IoT Platforms'
template: 'post'
tags: ['paper review', 'iot']

description: 'This is a paper review for: Jia, Yunhan Jack, et al. "ContexloT: Towards Providing Contextual Integrity to Appified IoT Platforms." NDSS. Vol. 2. No. 2. 2017.'
---

## Summary

The authors performed a study of possible attacks on IoT platforms that supports third-party apps. They
picked Samsung's SmartThings as a use case. They introduced ContextIoT, which is a new backwardcompatible context-based permission system that identifies the context for sensitive actions and
provides users with useful information to help them determine whether to approve or disprove a
specific action in a particular context. They evaluated ContextIoT on a dataset of IoT attacks and found
that neither performance nor usability was affected considerably

## Things I liked

- The authors explored how they can migrate exploits that occur in non-appified IoT platforms to
  appified IoT platforms which seems to provide more use cases
- They mentioned the performance aspect of their contribution and were not satisfied by only
  the novelty of their contribution
- They gave a hard solid number for the average number of prompts for the smart app, which is
  3.5. If they did not mention this number, I would have thought that this number is much larger.
- They compared their definition of context with definitions provided by previous context-based
  permissions papers and proved that their definition is better in terms of security against attacks
- The authors' solution does not require extra programming effort. It allows the user to approve a
  specific data flow in one scenario and disapprove of the same data flow in another scenario. This
  concept is novel in the IoT world
- I liked how they focused the study on one aspect of attacks, which are those on the app-level.
  They ignored attacks on external services.
- I liked how the authors introduced a different domain which is natural language processing as
  one of the domains that can enhance the usage of ContextIoT

## Things I did not like:

- Regarding time delays, the authors only mentioned delay caused by code and did not include
  delays caused by the waiting time for the user to respond to the prompt
- The authors mentioned papers that discussed the usability aspect of the permission system. I
  am not sure this is related to the topic of the paper.

## Further research

The authors used static analysis and runtime logging to analyze the risks of smart apps. I guess that took
them some time. I think looking into more efficient means to analyze the risks of smartapps can be of
benefit.
