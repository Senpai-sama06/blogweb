---
title: "Number Theory 3: Integer Powers"
date: "2021-04-01"
tags: ["Math", "Number Theory", "Olympiad", "Problems"]
excerpt: "A collection of number theory problems focusing on integer powers, repunits, and perfect squares, originally for Cheenta Superstars."
---

## Problems

### Problem 1
Verify that 
$$ \underbrace{11\dots 1}_{1997}\underbrace{22\dots 2}_{1998}5 $$
is a perfect square.

### Lemma 1
The square of any number ending with the digit 5, say of the form $n5$, where $n$ is all of the preceding digits, then $n5^2=m25$, where $m=n(n+1)$.

With the lemma above it would be very clear as to where to start this problem. Let's see where the wind takes us!

So all we need to prove in this problem now, is let $X=\underbrace{11\dots1}_{1997}\underbrace{22\dots2}_{1997}$. So from there, we introduce repunits in the problem! We have $X=R_{3996}+R_{1997}$ where $R$ represents the rep-unit.

### Example 1
Prove that $R_{2n}+R_n$ can be represented as the product of two consecutive integers.

*Solution:*
We know that $R_{2n}+R_n=\dfrac{10^{2n}-1}{9}+\dfrac{10^n-1}{9}$. Now let $10^n=a$, then 
$$ \frac{a^2-1}{9}+\frac{a-1}{9}=\frac{1}{9}(a+2)(a-1)=\left(\frac{a-1}{3}+1\right)\left(\frac{a-1}{3}\right) $$

Hence Problem 1 follows similarly. So now as all is clear, I present proof of Lemma 1.

*Proof of Lemma 1:*
we can write $m5$ as $m0+5$. Squaring this would give us $(m0+5)^2=k00+2\cdot m0\cdot 5+25=k00+m00+25$ where $k=m^2$. Now our sum $k00+m00+25=(k+m)25$ where $k+m$ are the preceding digits, hence $(k+m)=m^2+m=m(m+1)$. So we're done.

### Problem 2
Find the number of five-digit perfect squares having the last two digits equal.

This is the problem dealing with ideas like working $\mod {100}$ with square integers. For starters, check $(10a+b)^2=100a20b+b^2$, we can easily discard 100a from here, because whatever might the values might come, we know this must be some $X$ lying between $\sqrt{10000}<X<\sqrt{99999}$. Using this, we now can do trials and errors, because $b$ is a single digit number. (Trial and error is a tool as per convenience, as it is not brilliance, it isn't respected much in the community, but trust me it is a lifesaver!)

### Problem 3
Let $1 < n_{1} < n_{2} < \cdots < n_{k} < \cdots$ be a sequence of integers such that no two are consecutive. Prove that for all positive integers $m$ , between $n_{1} + n_{2} + \cdots + n_{m}$ and $n_{1} + n_{2} + \cdots + n_{m+1}$ there is a perfect square.

### Notes about repunits

We just have the notion of repunits to simplify the relationships between large repeating numbers. This is a very basic concept of elementary number theory, but is slowly losing respect and momentum because of not much potential in problem solving it holds. Specially in olympiads.

### Exercise 1
Prove that $R_{2n}-2R_n$ is a perfect square.

### Exercise 2
Find the least $n$ such that $13 \mid R_n$.

## Solutions to leftover problems and exercises

*Solution to Exercise 1:*
We can start off directly by writing it in arithmetic forms.
$$ \frac{10^{2n}-1}{9}-2\cdot\frac{10^n-1}{9} $$
yet again consider $10^n=a$ and substitute...
$$ \frac{a^2-1}{9}-\frac{2a-2}{9}=\frac{(a-1)^2}{3^2} $$
So we are done.

*Solution to Exercise 2:*
Trivial by FLT.

Its quite wonderful, how many different types of problems are generalized by FLT's and how notorious it had been to be proved!
