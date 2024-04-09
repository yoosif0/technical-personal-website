---
slug: 'paper_review_rocking_drones'
date: '2019-04-01'
title: 'Paper Review: Rocking Drones with Intentional Sound Noise on Gyroscopic Sensors Yunmok'
template: 'post'
tags: ['paper review', 'drones', 'acoustics', 'security']

description: 'This is a paper review for: Son, Yunmok, et al. "Rocking drones with intentional sound noise on gyroscopic sensors." 24th {USENIX} Security Symposium ({USENIX} Security 15). 2015.'
---

## Summary

Sensors discover physical aspects in nature and convert them to quantitative values. Sensors can sense
malicious inputs from an attacker and might mix normal with abnormal physical quantities, which causes
a system to fail. Due to increased production costs, most commercial manufacturers do not equip their
sensors with any ability to detect these malicious inputs. Gyroscope is an example of a sensor that
measures changes in tilt, rotation, and orientation. It is one of the primary sensors for flight attitude
control and position balancing. Drones use Micro-Electro-Mechanical Systems (MEMS) gyroscopes to
have smaller, lighter, and cheaper flight control modules. The authors investigated how can drones with
Micro-Electro-Mechanical Systems (MEMS) gyroscopes be compromised. They experimented with
different kinds of MEMS gyroscopes against sound noise and found the resonant frequencies of seven
gyroscopes. The authors discovered that popular commercial MEMS gyroscopes resonate at audible
frequencies. The authors performed real-life experiments and simulations to show that one of two
target drones with vulnerable gyroscopes can be compromised.

## Things I liked

- Provided enough background information on sensors, drones, and flight control
- Provided examples of popular commercial drones
- Provided background information about the drown system, including rotors, attitude control.
- In their related work section, the authors talked about previous research from different angles,
  which I believe gave the readers a comprehensive view of earlier works about gyroscopes, the
  security of commercial drones, and input spoofing in general.
- Included diagrams that help explain how gyroscopes work in real life
- Described their approach of finding the resonant frequency of a MEMS gyroscope even though
  the information is not provided in datasheets.
- Provided counterarguments for the attack weakness such as having a “drone to drone attack” in
  which the attacker drone carries a speaker.
- The authors were honest in presenting very simple countermeasures to their attacks. They even
  performed an experiment on how surrounding the gyroscope with different materials affects
  the success of the attack.
- Were innovative in introducing the idea of how a sonic wall can be used to prevent small drones
  (that are undetected by radars) from flying in no-fly zones.

## Things I did not like:

- In the experiment, the speaker was so close to the drone which I think is not practical in real life
- Compromising a sound source that is close to a drone to perform the attack seems to be not
  practical
- I believe that the attack’s audible sound can be easily detected in real life
- This attack can be easily countered by surrounding the gyroscope with a foam

## Further research

Gyroscopes are used in cars too. It might be a good idea to check if the same attack can be used to
compromise cars(especially autonomous cars) and study its threat model.
