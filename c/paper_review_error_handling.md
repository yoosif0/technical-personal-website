---
slug: "paper_review_error_handling"
date: "2020-02-12"
title: "Paper Review: Error Handling of In-vehicle Networks Makes Them Vulnerable"
tags: ["paper review", "ecu", "error handling", "DoS", "automotive"]
description: 'This is a paper review for: Cho, Kyong-Tak, and Kang G. Shin. "Error handling of in-vehicle networks makes them vulnerable." Proceedings of the 2016 ACM SIGSAC Conference on Computer and Communications Security. 2016.'
---

## Summary

Modern vehicles use lots of ECUs to improve the vehicle’s spec and safety. The authors in this paper
were focused on what can happen after an ECU is compromised. They discovered a vulnerability in error
handling of the standard vehicle network protocol (control area network). Error handling in the CAN
protocol is used to detect issues in CAN frames and help ECUs take the right actions to have a fault
tolerant system. They discovered a new DoS threat (bus off attack) can trick IDSs to think that the there
is an internal error in the system. The attack can be performed without understanding messages
transmitted (no need for reverse engineering). The authors experimented the attack on two real
vehicles and demonstrated the practicality of this attack. Finally, they developed and evaluated
measures to prevent the attack.

## Things I liked

- Added a historical incidence that took place in 2015 and showed how this incidence (Jeep
  Cherokee attack) triggered modern research in vehicle security
- Displayed a type of attack that is generalizable to a wide range of vehicles and is independent of
  an ECU implementation.
- Talked about previous solutions to this attack and their limitations and provided and a better
  solution.
- Explained background information needed to understand the paper such as background
  information about CAN
- Besides their proposed solution, the authors even discussed an alternative solution (which is
  checking of errors based on bit position rather than frames) and even mentioned cons to this
  alternative solution that included extra cost and additional memory needed.
- I think the authors were able to successfully sell their idea and convince readers of the urgency
  needed in solving the bus-off attack by including reasons related to the drivers’ and passengers’
  safety.

## Things I did not like:

- Did not find mentions of any areas of future research other than the area related to this
  vulnerability
- Did not find it necessary to mention the five different ways of detecting errors by the CAN
  protocol

## Further research

The authors mentioned that provided authentication for CAN is difficult due to the limited space
for appending a message authentication code and due to performance. I think it might be useful
to research how we can provide authentication for CAN in limited space and limited computer
resources.
