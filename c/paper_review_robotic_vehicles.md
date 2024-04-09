---
slug: 'paper_review_rocking_drones'
date: '2019-04-01'
title: 'Paper Review: Detecting attacks against robotic vehicles: A control invariant approach.'
template: 'post'
tags: ['paper review', 'robotic vehicles', 'security', 'attacks']

description: 'This is a paper review for: Choi, Hongjun, et al. "Detecting attacks against robotic vehicles: A control invariant approach." Proceedings of the 2018 ACM SIGSAC Conference on Computer and Communications Security. 2018.'
---

## Summary

Robotic vehicles are a type of cyber-physical systems that operates in the physical world. Examples of
RVs include drones and ground rovers. Cyber and physical attacks on RVs may lead to the failure of
these systems. Therefore attack detection techniques are essential to prevent some of those attacks.
The authors in this paper provided a novel attack detection framework that focuses on detecting
external physical attacks against RVs via control invariants. The authors modeled a vehicle's physical
properties, its control algorithm, and the laws of physics to extract these control invariants. The authors
then inserted these invariants into the vehicle's control program for runtime invariant check. They
experimented with their novel framework on eleven RVs, including quadrotors, hexacopters, and ground
rovers. Control invariants were able to detect three types of attacks, which are sensor spoofing, control
signal spoofing, and parameter corruption.

## Things I liked

- The invariant check errors could still sense the attack even if the attacker were able to
  manipulate signals deftly.
- The authors provided sufficient background examples of how attackers can target physical
  components. Examples included GPS spoofing, optical sensor spoofing, gyroscopic spoofing,
  injecting magnetic fields to compromise ABS braking systems.
- Their framework applies to a wide range of RVs.
- Their framework has high detection accuracy. Attack detection accomplishes no false positives
  during regular operation.
- Their framework is software-based and does not require any hardware modifications.
- The control invariant checking code causes no significant runtime overhead.
- Their framework does not require reverse engineering to get control invariants.

## Things I did not like:

- Their solution can not detect attacks in which the attacker simulates the behaviors of the target
  vehicle.
- The framework, in different unpreferable environments, can wrongly identify transient errors as
  attacks (have false positives).

## Further research

The authors mentioned that attacks that mimic the behaviors of the target vehicle might not be
detected. They also said that these attacks are hard to implement in real life. They mentioned that the
attacker needs to comprehend three factors, which are the physics, control algorithm and parameters,
and mission plan and user commands. I think we can look into ways an attacker can grasp these factors
in real-life conditions.
