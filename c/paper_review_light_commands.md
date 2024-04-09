---
slug: 'paper_review_light_commands'
date: '2020-03-25'
title: 'Paper Review: Light Commands: Laser-Based Audio Injection Attacks on Voice-Controllable Systems'
template: 'post'
tags: ['paper review', 'photoacoustics', 'security']

description: 'This is a paper review for: Sugawara, Takeshi, et al. "Light commands: laser-based audio injection attacks on voice-controllable systems." 29th {USENIX} Security Symposium ({USENIX} Security 20). 2020.'
---

## Summary

The photoacoustic effect is converting light to sound using a microphone. The authors of this paper
presented a new class of signal injection attacks that exploits the photoacoustic effect to inject audio
signals to a target microphone. The state-of-the-art injection technique has an injection range of limited
to 25ft in open space. The authors looked up for a way to remotely and stealthily inject commands into
a voice-controllable(VC) system that is not limited by this small distance. They presented
LightCommands, which is an attack that consists of secretly injecting commands into voice-controllable
systems at long distances. The authors were able to inject sounds to microphones by modulating the
amplitude of laser light. They tested their audio injection attacks on voice controllable (VC) systems like
Siri and Google Assistant to explore their susceptibility to this attack. They were also able to have longrange attacks on those systems with distances up to 110 meters. They also found that VC systems either
lack user authentication mechanisms or implement them incorrectly. Using light injected voice
commands, they were able to unlock the target’s smartlock-protected front door, use the target’s
money to buy online, and open garage doors.

## Things I liked

- Compared to previous solutions, this attack has no limited range
- They adhered to safety protocols by mentioning a safety disclosure about laser hazards
- Provided background information about voice controllable systems and explained the taxonomy
  of VC components.
- Although not related to the main contribution of the paper, the authors exposed laser sellers
  that state laser output on their products that are different from real output to bypass safety
  regulations
- Their attack works without the need of physical access or owner’s interaction. The attacker does
  not need to physically touch the phone or ask the owner to perform any interaction
- The authors thoroughly discussed countermeasures to the attack

## Things I did not like:

- The attacker needs to be able to see the target device, which is a big limitation.
- The attacker needs to know some of the target device characteristics like the model, location of
  the microphone ports, and physical structure of the device’s sound path.

## Further research

Explore how the degree of opaqueness can affect the applicability of LightCommands. We can
experiment on materials with different opacity and determine if there is an upper limit to the opacity
that makes the attack ineffective.
