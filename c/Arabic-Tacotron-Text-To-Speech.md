---
date: '2018-10-29'
title: 'Arabic Tacotron Text To Speech'
tags: ['tts']
description: ''
---

### Tacotron

The system's architecture consists of two main components in the pipeline. The first part of the pipeline gets the text as an input and outputs spectrograms. Spectrograms represent the spectrum of frequencies of sound relative to time as shown in the figure below. The second part of the pipeline converts spectrograms to audio waves.

![](images/spectrogram.png)

An open source [implementation](https://github.com/keithito/tacotron) of Tacotron was used for Faseeh's neural network architecture. This implementation was based on the
Google's first Tacotron model. Tacotron 2 proved to be better in several areas including an improved
attention model. Therefore, the attention wrapper in Faseeh's architecture was replaced by a
location sensitive attention model with the help of an open source [implementation](https://github.com/Rayhane-mamah/Tacotron-2) of Tacotron 2.

We trained our model on the corpus discussed formerly, which is Nawar Nalabi's corpus. All sentences were diacritised and normalized.

### Why Tacotron and not anything else?

There were more than one excelling neural network system that has been published in the last two years.

WaveNet proved to have great results but had two main drawbacks. The neural networks used in this system cover only a small part of the model. Therefore, it is not an end-to-end system and requires linguistic features from a front end TTS which increases the complexity of the system. The second issue is that it is very slow for synthesizing since it uses sample-level auto-regressive nature.

DeepVoice also proved to have great results, but it involves neural networks independently in each part of the system and does not train the model in an end-to-end fashion.

### Areas of Improvement

There is still room for improvement in a few main areas.

The first is the usage of an embedded diacritiser to eliminate the need to input only diacritised text.
Also, the Griffin-Lim waveform synthesizer with a better synthesizer would probably improve the quality of the speech synthesizer massively. The Griffin-Lim waveform synthesizer is known to have artifacts in its produced audio.
A proposed solution is to extract the Wavenet waveform synthesizer and use it in our system instead of the Griffin-Lim waveform synthesizer.

Another huge drawback is that the model needs relatively extensive computing power to synthesize speech and needs more time than a conventional HTS system which makes it hard for this system to exist on embedded devices. Lighter end-to-end neural network models should be further investigated.

Also, a larger corpus is expected to massively improve results since the used corpus's size is only 2.41 hours and speech corpora of sizes of more than 20 hours are usually used in such systems.

### Repo and Samples

Check the repo for Arabic Tacotron TTS [here](https://github.com/yoosif0/arabic-tacotron-tts). Check also the samples for synthesized speech with only 2.41 hours of training data [here](https://yoosif0.github.io/arabic-tacotron-tts/)
