---
slug: "TTS Methods"
date: "2018-10-14"
title: "TTS Methods"
tags: ["tts"]
description: ""
---

Text to speech synthesis is the process of converting a text string into a waveform. A conventional TTS system is usually made up of several
components connected through a pipeline that includes a front-end-text-analyzer and a backend speech synthesizer. Each of the front end and
backend is composed of several parts each performing one or more tasks. The front end is responsible for text analysis while the backend is responsible for converting features into audio.

The front end consists of text normalizers and a text-to-phoneme converter.
Text normalizers tokenize phrases and convert numbers and texts in the raw text into written words.
Text to phoneme converters takes the normalized text as an input and outputs phonemes which are symbolic representations of how the text is pronounced.

The output from the front end acts as an input for the backend which then converts the input into audio features then into sound.
For example, for the statistical parametric speech synthesis, the backend uses statistical acoustic models to map linguistic features from the analyzer into compact acoustic features.
These acoustic features are then inputted into a vocoder that converts these features to a waveform.

## What are the primary methods in TTS?

The main methods of speech synthesis are formant, concatenation, HTS, and neural networks.
Two main measurements are used to represent the quality of a speech synthesizer. The first is intelligibility which is the ease of understanding by the listener. The second is naturalness which is the degree of similarity between the synthesized speech to normal human speech.

### Formant

Formant synthesis is a technique where the system emulates how the human throat works to filter a signal into certain vowels resulting in different sounds. Formant synthesis could produce an infinite number of sounds since it does not need human speech samples and does not require a database which adds to its flexibility.
The problem with this method is poor speech quality compared to other methods.

### Concatenation

Concatenation synthesis depends on prerecorded sounds to synthesize speech. The size for these recorded units varies from being a single phoneme, a diphone, a syllabus, or word. Words are not usually used because we would need all words in a specific language to be recorded with different prosodies to cover the whole language. Also, the model would not be able to generalize and synthesize new words. The longer the unit, the larger the size of the database is required to cover the domain but also the larger the size, the less the degree of breaks in synthesized sentences.

#### Diphones

A diphone consists of two connected half phones that start in the middle of the first phone and ends in the middle of the second phone.
Diphone based speech synthesis has a diphone as a single unit.

Since only a single instance is recorded for each pair of phones in the database, the model needs to learn to generalize for these diphones to make sense in various prosodies. Various signal processing methods are applied to modify the recorded instances based on the required prosody. This approach is known to have artifacts caused by the prosodic modification which affects the naturalness of the speech negatively.

#### Unit Selection

Unit selection is a type of concatenative synthesis that is known to produce a more natural speech than conventional diphone-based speech synthesis.

Unit selection is similar to diphones regarding the fact that speech units are stored in the database, but the unit
selection model generalizes to different prosodies by recording several instances of each diphone in the database
instead of modifying the instances. The quality of this synthesizer is dependent upon the quantity and variety of phonetic and prosodic features in the database.
Unit selection is advantageous to conventional diphone-based speech synthesis since it usually produces speech with much better naturalness than the
conventional diphone-based speech synthesizer and also does not need signal processing.

The main drawback of unit selection is that it
requires a large database to cover a wide prosodic spectrum for each phonetic utterance. Recording large databases with variations is an expensive and challenging task.

As other concatenation approaches, even with massive databases, the speech produced by a unit selection system sounds unsmooth since the prosody changes
from one selected speech unit to the other. Take for example the word "might" that have a phonetic pronunciation
of "M A I Y T." In our database, we would have the following units stored:- "MA," "AI," "IY," and "YT." We could have 50 different prosodies
for each unit, but still, there will be differences between the prosody of a selected instance of "MA" and the prosody of a selected instance
of "AI."

One of the significant drawbacks of unit selection is that its huge database requirement makes it just impossible to work on embedded devices where multiple languages are usually required.

Since speech units recorded are represented as it is, noises captured while recording the units would degrade the quality of the synthesizer. Therefore, recording conditions are an essential factor for the quality of a concatenative speech synthesizer. This makes the concatenative approach less robust.

### Hidden Markov Model-based Speech Synthesis (HTS)

A statistical parametric speech synthesis system generates the average of a group of similarly sounding
speech segments. This contrasts directly with the speech produced in
unit-selection synthesis in which unmodified natural speech is retained.

The sequence of subwords from a corpus are trained to get the optimal sequence.
Speech parameters are generated from the probability density. HMM models are used to represent probability densities of speech parameters of a distinct text. A speech waveform is reconstructed from the generated parameters.
The quality of this framework relies on whether the description of the phone set is accurate or not.

##### Advantages

Advantages of this system compared to the unit selection concatenation approach is that prosodic variation could
be represented in the speech by modifying HMM parameters without the need to have a variety of prosodies for each phoneme set in the database.

This would lead to a much smaller database.
This method also has a smaller footprint regarding memory consumption that allows it to be used for hand-held devices.
This method also allows for flexibility to change voice characteristics.

In 2 previous experiments, where a common speech corpus was provided to build a unit selection speech synthesizer and a statistical parametric speech synthesizer, the statistical parametric speech synthesizer proved to have fewer word error rates which lead to better understandability and a higher mean opinion score among the listeners.

In comparison to unit selection, statistical parametric speech synthesis showed an increase in the adoption rate and popularity.

Feature-normalization techniques make HTS systems more robust than concatenative systems. This is because pre-recorded units in unit selection could be recorded in different environments adhering to different noise profiles. Adaptive training makes parametric speech synthesis more robust to noise.

##### Drawbacks of HTS

With its great benefits, the speech produced is often muffled and have more artifacts than speech generated by unit-selection speech synthesis systems which lead to degraded quality concerning perceived naturalness.
The degraded quality is attributed to three factors; the accuracy of generative models (acoustic model), quality of vocoders, and effect of over-smoothing.
Over-smoothing tends to make synthesized speech lack liveliness.

There have been several efforts to address these problems individually, such as improving the accuracy
of generative models, usage of autoregressive (AR) neural networks, compensating the over-smoothing effect,
and developing high-quality vocoders.
