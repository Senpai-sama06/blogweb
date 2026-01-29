---
title: "Understanding music computationally"
date: "Jan 29, 2026"
tags: ["Math", "Music", "Signal Processing", "Fourier Transform", "DSP"]
excerpt: "Exploring synthetic properties of ellipses, optical properties, and isogonal conjugates with visual proofs."
---


Everyone loves to listen to music, but they hate their free spotify accounts with all their hearts. I am one of them. This is something which bugged me for a long time, how the fuck can there be a measure of quality when it comes to audio? Like sure, one might argue that some might be too noisy or unintelligable, but the answer to that is simply an encoding issue. But when we talk about encoding, we are ultimately talking about the fact that we are trying to represent a continuous signal in a discrete format, in other words, trying to make a computer understand music. And unlike a distasteful man, music simply does not have quantifiable dimensions for us to define them in computer terms. The answer to that lies in another of Fourier's bangers, the Short-Time Fourier Transform!  

But before we get there, we have to talk about why the standard Fast Fourier Transform (FFT) is kinda useless here. It simply isn't smart enough to understand music. It is instructed to blindly chase the frequencies, but it cannot tell you WHEN those frequencies did occur.

When it comes to music, order is everything. A C-major arpeggio (C, then E, then G) and a C-major chord (C, E, and G all at once) sound completely different. But the standard FFT looks at both and says, "Same ingredients. Identical."

```audio-comparison
{
  "title1": "C-Major Arpeggio (Sequential)",
  "src1": "/blogweb/blog-assets/stft/arpeggio.wav",
  "img1": "/blogweb/blog-assets/stft/arpeggio_fft.png",
  "title2": "C-Major Chord (Simultaneous)",
  "src2": "/blogweb/blog-assets/stft/chord.wav",
  "img2": "/blogweb/blog-assets/stft/chord_fft.png"
}
```


At first glance, the results might seem confusing. We generated two very different sounds: a Chord (all notes playing at once) and an Arpeggio (notes playing one after another). However, looking at their FFT plots, they are nearly identical! Both graphs show clear peaks at 440 Hz (A4), 554 Hz (C#4), and 659 Hz (E4). This is because the FFT as a whole is blind to time. It isn't wrong to conclude that the sound is just a combination of these three frequencies, but it fails to capture the essence of the music. This is exactly where we know that we have another dimension to consider entirely, when it comes to understanding music.


### Short-Time Fourier Transform (STFT)
To solve the time-blindness of the standard FFT, the intuitive solution is simple: instead of processing the entire 2-second clip at once, we chop it up into tiny overlapping segments (windows) and take the FFT of each segment individually. This method is called the Short-Time Fourier Transform (STFT).

It sounds like the perfect fix, but there is a catch. We run into a fundamental limit known as the Gabor Limit (or the Uncertainty Principle of Signal Processing). Mathematically, it states that the product of the standard deviation in time ($\sigma_t$) and the standard deviation in frequency ($\sigma_f$) has a lower bound given by 
$$
\sigma_t \cdot \sigma_f \ge \frac{1}{4\pi}
$$ 

This inequality tells us that you cannot arbitrarily minimize both spreads.

We can derive the intuition for this using the Time Scaling Property of the Fourier Transform. This is often more satisfying than a brute-force proof because it shows why the mechanism works.Let’s define a signal $x(t)$ and its Fourier Transform $ X(f) $.
$$
x(t) \stackrel{\text{FT}}{\longleftrightarrow} X(f)
$$
Now, let's create a new signal $ y(t) $ which is a sped up or compressed version of $ x(t) $. We do this by multiplying the time variable $t$ by a scaling factor $a$ (where $ a > 1 $):
$$
y(t) = x(at)
$$

Let's find the Fourier Transform of this compressed signal. By definition:
$$
Y(f) = \int_{-\infty}^{\infty} x(at) e^{-j 2\pi f t} dt
$$
We perform a u-substitution.Let $ u = at $, which implies $t = \frac{u}{a}$ and $dt = \frac{du}{a}$.Substituting these back into the integral:
$$
Y(f) = \int_{-\infty}^{\infty} x(u) e^{-j 2\pi f (\frac{u}{a})} \frac{du}{a}
$$
$$
Y(f) = \frac{1}{a} \int_{-\infty}^{\infty} x(u) e^{-j 2\pi (\frac{f}{a}) u} du
$$
Notice that the integral part is exactly the definition of the original Fourier Transform, but evaluated at $\frac{f}{a}$.
$$
Y(f) = \frac{1}{a} X\left(\frac{f}{a}\right)
$$
Look at what happened to the frequency input: $X(\frac{f}{a})$.In Time: We multiplied $t$ by $a$. If $ a = 2 $, the event happens twice as fast. The signal is compressed by half.In Frequency: We divided $f$ by $a$. To get the same value $ X(k) $, we now need a frequency of $2k$. The frequency spectrum has expanded by a factor of 2.




=== This is still being written btw, don't judge me :< ===