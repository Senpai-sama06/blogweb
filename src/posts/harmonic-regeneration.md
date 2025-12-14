---
title: "Harmonic Regeneration"
date: "2025-12-14"
excerpt: "Traditional noise reduction often kills the 'color' of human speech. This post explores a clever reconst technique called Harmonic Regeneration Noise Reduction (HRNR) that uses non-linear distortion to hallucinate missing harmonics."
---

**TL;DR:** Traditional noise reduction often kills the "color" of human speech by accidentally suppressing weak harmonics. This post explores a clever technique called *Harmonic Regeneration Noise Reduction* (HRNR) that uses non-linear distortion to "hallucinate" missing harmonics back into existence, creating a roadmap for cleaner, more natural audio.

---

## The Problem: The "Is it Noise or Speech?" Dilemma

If you have ever used a basic noise reduction plugin, you know the sound: the background hiss disappears, but the voice suddenly sounds "muffled," "robotic," or "underwater."

Why does this happen? The culprit is usually the **Signal-to-Noise Ratio (SNR)** estimation.

Classical algorithms (like Wiener filtering or Spectral Subtraction) work on a simple logic for every frequency bin $\omega_k$:

*   **High SNR:** Keep the signal.
*   **Low SNR:** Suppress the signal.

The problem arises with human speech. Vowels are rich in *harmonics*—energy peaks at integer multiples of a fundamental frequency (pitch). However, the higher harmonics often have very low energy.

In a noisy room, these weak high-frequency harmonics get buried. The algorithm looks at them, sees a low SNR, assumes they are random noise, and deletes them. The result? You lose the bright, human quality of the voice.

## The Intuition: How to Resurrect a Harmonic

The paper *"Speech Enhancement Using Harmonic Regeneration"* proposes a fascinating solution. Instead of trying to fish the weak harmonics out of the noise (which is impossible if they are buried deep), we simply **regenerate** them artificially.

The core intuition relies on a property of periodic signals: **Periodicity in Time $\Leftrightarrow$ Harmonics in Frequency.**

If a signal repeats every $T$ seconds, its spectrum *must* have peaks at frequencies $f, 2f, 3f \dots$ (where $f = 1/T$). Even if the shape of the wave is damaged, as long as the *periodicity* remains, the potential for harmonics exists.

The authors propose a "two-pass" system:

1.  **Denoise roughly:** Do a standard noise reduction. This removes noise but damages the speech harmonics.
2.  **Distort intentionally:** Apply a non-linear function to this damaged signal.

### The Magic of Non-Linearity

Why distortion? Imagine a sine wave (a single tone). If you chop off the bottom half (half-wave rectification), it is no longer a sine wave. It becomes a complex periodic shape.

Mathematically, applying a non-linearity in the time domain is equivalent to **convolving** the spectrum in the frequency domain. This operation spreads energy from the strong low frequencies (which survived the first pass) up into the higher frequencies.

> *Key Insight: By intentionally distorting the dominant low-frequency voice, we artificially create energy at the exact high-frequencies where the original voice used to be.*

## The Math: From Time to Frequency

Let's look at the "Harmonic Regeneration" step formally.
Let $\hat{s}(t)$ be our roughly denoised speech signal (where harmonics are missing). We create an artificial harmonic signal $s_{harmo}(t)$ using a non-linear function $NL(\cdot)$:

$$
s_{harmo}(t) = NL(\hat{s}(t))
$$

The paper suggests a simple function: the **Maximum relative to zero** (essentially keeping only positive values):

$$
s_{harmo}(t) = \max(\hat{s}(t), 0)
$$

### Why does this work?

We can model the "rectified" signal as the original signal multiplied by a pulse train $p(t)$ that is 1 when the signal is positive and 0 otherwise. Since the voice is periodic with period $T$, $p(t)$ is also periodic with period $T$.

In the frequency domain, the Fourier Transform (FT) of a periodic pulse train is a "comb" of impulses spaced by the fundamental frequency $1/T$.

$$
\text{Spectrum}(s_{harmo}) = \text{Spectrum}(\hat{s}) * \text{Comb Function}
$$

This convolution copies the spectrum of the speech and shifts it by the fundamental frequency multiples. **Result:** The gaps in the high frequencies are filled in with new energy that is perfectly aligned with the speaker's pitch.

## The Solution: The HRNR Algorithm

We don't actually output the distorted artificial signal $s_{harmo}(t)$ to the listener (that would sound buzzy and harsh). We only use it as a **guide**.

The algorithm calculates a new *Harmonic SNR* ($SNR_{harmo}$) based on this artificial signal. It essentially asks: *"Does the artificial signal have strong energy here?"*

If the answer is **yes**, the filter concludes: *"This frequency bin corresponds to a harmonic. Even if the original input looks noisy, I should preserve it."*

The final gain function $G_{harmo}$ becomes a mix of the classical estimate and this new harmonic map:

$$
SNR_{harmo}(p, \omega_k) = \frac{\rho |\hat{S}(p, \omega_k)|^2 + (1-\rho)|S_{harmo}(p, \omega_k)|^2}{\text{Noise Power}}
$$

Where $\rho$ is a mixing factor (typically 0.5).

## Conclusion

The Harmonic Regeneration Noise Reduction (HRNR) technique is a brilliant example of using **prior knowledge** about a signal (that human speech is periodic) to solve a blind estimation problem.

By temporarily destroying the signal (via non-linear distortion) to recover its structure, and then using that structure to guide the final filter, we get the best of both worlds: effective noise suppression and the preservation of the rich, natural harmonics that make us sound human.

## References
[1] C.Plapous, C.Marro, and P.Scalart, Speech enhancement using harmonic regeneration, in *IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)*, Philadelphia, PA, USA, Mar. 2005.