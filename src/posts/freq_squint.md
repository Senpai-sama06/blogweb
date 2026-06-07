---
title: Issues with electronic steering AESA of phased array antenna systems
date: Jun 7, 2026
tags:
  - DSP
  - antenna
  - phasedarrays
  - SAR
  - AESA
  - wideband
excerpt: why are radar engineers single? Cuz they are easily steered away from their targets xDs
---
I was working on something pretty interesting recently with synthetic aperture radar (SAR), and I noticed the genuine dislike of engineers who work with wideband systems, and also require to regularly steer their beams towards phased array antennas. Naturally being into the processing side, I did not quite understand this until I actually over coffee started discussing it with one.  Let me try to instigate that similar hate in you.


Most often than not, in the context of SAR, we work with a signal entity called the "chirp". If you're unfamiliar with why we use them, check out this excellent video by Iain on [Why is a Chirp Signal used in Radar?](https://youtu.be/Jyno-Ba_lKs?si=kM08AyRWsKgrDDDv). Regardless, getting back to the topic, chirp is usually something which looks like this 
![Chirp signal](/blogweb/blog-assets/freq_squint/chirp.png)

A chirp is basically a signal which changes its frequency linearly with respect to time. One can infer from the phase relation that $f = \frac{1}{2\pi}\frac{d\phi}{dt}$ which automatically indicates that in case of a matched reciever, the phase must be quadratic, since $\frac{df}{dt} = \alpha$ where $\alpha$ is some constant. Now the thing being, when we introduce some steering into the phased array, we usually tune it to the center frequency and do so. Which is fine for narrowband assumptions, since $$\theta_p = sin^{-1}(\frac{f_c \sin\theta_s }{f})$$
What this tells us basically the exact frequency dependent relation between the steering observed by one frequency $f$ with respect to the center frequency $f_c$. This is a fine assumption for phasing in narrowband systems since $f_c \approx \text{BW}$. However this is simply not true for wideband systems. What happens is basically each frequency of the chirp observes some different steering, since all of them have been tuned to look with respect to their center frequencies. 
![Squint effect on frequencies](/blogweb/blog-assets/freq_squint/squint.png)


This becomes wierd, since now the systems think they are looking at a certain angle, but the raw IQ samples are actually being collected from some other place entirely! If you notice, there is really only some overlap between all the three frequencies. Additionally it is important to note that the imaging area now, would only be constricted to the overlap between the band-edge frequencies and the center frequencies. However this is not unnatural to see that this would not only reduce the imaging area, sometimes this might even corrupt the images since it is interfered with other IQ samples disturbing the RX data if a properly planned compensation algorithm is not deployed as a pre-processor.

Through some simulations and personal study, I managed to develop a compensation algorithm for such cases entirely. Stay tuned to learn more!