---
slug: "paper_review_pacemakers"
date: "2019-03-04"
title: "Paper Review: Pacemakers and Implantable Cardiac Defibrillators: Software Radio Attacks and Zero-Power Defenses"
tags: ["paper review", "software", "radio attacks", "defenses"]
description: 'This is a paper review for: Halperin, Daniel, et al. "Pacemakers and implantable cardiac defibrillators: Software radio attacks and zero-power defenses." 2008 IEEE Symposium on Security and Privacy (sp 2008). IEEE, 2008.'
---

## Summary

After analyzing an implantable cardioverter defibrillator (ICD), the authors proved that it is open to
privacy attacks that can expose the patient information and medical telemetry. They used a software
radio to reverse-engineer communications to and form the ICD. Besides that, they proved that the
attacks could change the settings of the device. Changing settings can affect how and when the shocks
are directed, which can put the patient’s health at very high risk. An attacker can also deplete the
device’s battery life, which can cause the device to stop completely. The authors provided a solution
that improves the patient’s safety while not depending on batteries for power. They proposed three
zero power defenses that depend on RF power harvesting. The three defenses are for performing
notifications, authentication, and key exchange. Notifications inform the patient of events that are
related to security. Authentication depends on using symmetric cryptography so that only authorized
users can access the device.

## Things I liked

- The authors clearly identified assumptions and limited the scope to the research by assuming
  the ICDs are honest and follow protocols as specified
- They excluded details that can guide an attacker on performing the attack
- Were innovative in using software radios for reverse engineering a wireless protocol
- There solution does not require major design changes for the ICDs to be built in the future
- The authors clearly described the context in real life; they mentioned that they do not know of
  any case where a security attack on an IMD has harmed a patient.

## Things I did not like:

- Did not mention how practical in real life would an attacker be close few centimeters to the
  subject for this risk to be real

## Further research

The authors proposed three zero power defenses that depend on RF power harvesting for ICDs. I think
that we can extract these defenses into a security architecture that can be used by other IoT devices.
