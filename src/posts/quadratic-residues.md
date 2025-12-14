---
title: "Quadratic Residues"
date: "2021-02-01"
tags: ["Math", "Number Theory", "Algebra"]
excerpt: "Exploring the properties of quadratic residues, the 'folding phenomena', and solvability of modular quadratic equations."
---

## Basic Outline and Definitions

We say a number $a$ to be a quadratic residue iff, $\gcd(a,n)=1$ and it satisfies the equation, 
$$ x^2 \equiv a \pmod{n} $$
If the above case does not occur, we call it a quadratic non residue.

**Fact:**
if we do a lot of tries trying to convince ourselves about the existence of the quadratic residues and their properties, always keep in mind the "folding phenomena" of the quadratic residues.

With that said, let us move forward!

### Two Propositions regarding quadratic residues

**Proposition**
Let $p$ be an odd prime (mainly because the prime 2 is kind of a loser in this case) with $p \nmid a$, then $x^2 \equiv a \pmod{p}$ has exactly two or no solutions.

*Proof:*
Suppose $x_o$ is a solution. notice that we have the following, $x_o^2 \equiv a \pmod p$. However you may notice that $-x_o$ also is a solution and it works.

Now we prove that it is the maximum numbers of solutions. Subtracting from both the equations, 
$$ (x_0-x_1)(x_0+x_1) \equiv 0 \pmod p \implies p \mid (x_0-x_1)(x_0+x_1) $$
from which we get that $x_0 \equiv \pm x_1 \pmod p$.

**Proposition**
Let $p$ be an odd prime, then there are exactly $\frac{p-1}{2}$ quadratic residues and non residues $\pmod p$.

Before we give the proof, this is one such way which motivates the "folding phenomena" I mentioned above, do you see how?

*Proof:*
Firstly we can say that there are exactly $p-1$ congruences possible and from the previous lemma, each of these have at most 2 or 0 solutions, which explains why we need to divide by 2 everytime!

### Intuitions while solving problems

This is very important section. You may find proofs of the above two propositions to be the same in some of the videos posted by Michael Penn, in his youtube channel. However the key to learning math is not to know about a ton of different stuffs. It is to know the reason why that is true. Math isn't like physics! It is harder to visualize in this case, since physics talks about real and existent bodies rather than be abstract, which math goes to another level of abstractness!

In the above case, you should recognize why the folding property is an important part of quadratic residues and why only two roots or 0 could be there. With that in mind, we can move on.
