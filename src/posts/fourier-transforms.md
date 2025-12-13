---
title: 'Understanding Fourier Transforms'
date: '2024-11-28'
excerpt: 'The only math in signal processing (Technically)'
---

# Introduction

The Fourier Transform is a fundamental tool in signal processing. It decomposes a function of time (a signal) into its constituent frequencies.

The definition of the continuous Fourier Transform is:

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} dx
$$

## Discrete Fourier Transform (DFT)

For digital signals, we use the DFT:

$$
X_k = \sum_{n=0}^{N-1} x_n e^{-\frac{2\pi i}{N} kn}
$$

This is crucial for analyzing the frequency content of discrete signals.
