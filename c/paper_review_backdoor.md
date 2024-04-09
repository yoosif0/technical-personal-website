---
slug: 'paper_review_backdoor'
date: '2020-03-25'
title: 'Paper Review: BackDoor: Making Microphones Hear Inaudible Sounds'
template: 'post'
tags: ['paper review', 'microphones', 'security']

description: 'This is a paper review for: Roy, Nirupam, Haitham Hassanieh, and Romit Roy Choudhury. "Backdoor: Making microphones hear inaudible sounds." Proceedings of the 15th Annual International Conference on Mobile Systems, Applications, and Services. 2017.'
---

## Summary

The authors showed that regular microphones could record audio waves outside the human hearing
range as well as the microphone recording range. They made use of non-linearities in microphone
diaphragms and power amplifiers to achieve this. The authors played audio signals through ultra-sound
speakers, and the nonlinear amplifier creates a “shadow” that is in the microphone’s recording range
and, therefore, can be recorded. This shadow, although inaudible, but carries data that enables acoustic
communication. The authors evaluated BackDoor on three metrics, which are human audibility,
throughput, and jamming effectiveness. For audibility, the authors asked a group of 7 people sitting
around a table to report the BackDoor sound loudness. All seven people confirmed that the sound is
inaudible. BackDoor achieved double the throughput of the near-ultrasound band. For jamming
effectiveness, the authors played 2000 English words to 7 humans who were able to interpret less than
15% of them correctly. The proposed solution opens the door to new applications like jamming spy
microphones for privacy, acoustic watermarking, and inaudible data communication.

## Things I liked

- Their solution does not require specific hardware. All current microphones can make use of this
  capability
- Their solution provides more spectrum for communication without the possibility of harming
  pets and infants (which is a concern in near ultrasound range).
- Provided even higher data rate than near ultrasound range(from 20KHz to 24KHz)
- Presented an elegant idea from the high conceptual level of taking advantage of something
  viewed as a con like microphones’ non-linearity to help in implementing a neat idea.
- Provided beneficial background information on microphone systems by explaining the recording
  system and the modules it requires and the components needed. They also presented a
  graphical pipeline that helps reveal the sound recording signal flow

## Things I did not like:

- I am not sure the authors should have mentioned the vulnerability of jamming recording
  microphones with specific details; this can help robbers jam phone microphones and prevent
  their owners from calling an emergency number during an attack
- The authors tested only seven individuals to confirm that the sound is uninterpretable. I am not
  sure that this sample size is enough.

## Further research

Can we reverse engineer recordings by identifying shadows and negating these shadows via audio
editing software to interpret the record?
