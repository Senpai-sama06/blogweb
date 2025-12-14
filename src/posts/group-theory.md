---
title: "Group Theory"
date: "2021-02-01"
tags: ["Math", "Algebra", "Group Theory"]
excerpt: "An introduction to group theory, from basic axioms and definitions to Abelian groups and residue classes."
---

## Introduction

Group theory is the study of groups. Groups are sets equipped with an operation (like multiplication, addition, or composition) that satisfies certain basic properties. As the building blocks of abstract algebra, groups are so general and fundamental that they arise in nearly every branch of mathematics and the sciences.

For example, The molecule $CCl_4$ has tetrahedral shape; its symmetry group has 24 elements. Chemists use symmetry groups to classify molecules and predict many of their chemical properties.

### Definition
A group is a set $G$ together with an operation that takes two elements of $G$ and combines them to produce a third element of $G$. The operation must also satisfy certain properties.

More formally, the group operation is a function $G \times G \rightarrow G$, which is denoted by $(x,y) \mapsto x*y$, satisfying the following properties (also known as the group axioms).

A lot of times we define a group to have a binary operation and it must be closed, then here 'closed' means we can bound it in some particular set and by 'binary operation', we mean that it is a two quantity operation. A non-empty group with a binary operation is called a **groupoid**.

## Group axioms

We discuss certain group axioms here, as the global announcement, $x,y,z \in G$. $e$ is the identity element of the group $G$.

**Remark (Associativity):**
$x*(y*z)=(x*y)*z$

**Remark (Identity):**
There exists some $e$ then, $x*e=e*x=x$ (The second equality is because of associativity.)

A semi-group is called a monoid if there exists an identity element $e \in G$.

**Remark (Existence of inverses of a group):**
For the identity group action $e$, if $x*y=e$ then we call $y$ to be the inverse of $x$.

**Remark (Closure):**
$x*y \in G$

## Abelian and non-Abelian

An Abelian group is a commutative group, in which it does not matter in what way the group operation takes place. For example, $x*y=y*x$. It does not matter in what order the two operations take place.

So basically in order for a group to be Abelian, it must be commutative. If not it is non-Abelian.

![Conclusion Diagram](/images/blog/Conclusion.jpg)
*(Diagram placeholder)*

## Some exercises

the key to nailing the prove so and so is a group if it follows the following properties is going to be to prove the three important properties of a group. **Invertibility, closure and associativity**. There are more, but this is a comfortable journey through.

### Residue classes
Residue classes or the residues modulo $n$ also form a group under addition or multiplication modulo a number $n$. the group under modular addition is called **cyclic groups of order $n$**. The identity is 0, and there also exists modular inverses (number theoretic terms). It is also commutative, so it is also Abelian.

### Uniqueness of identity
In this example we prove that the identity is unique.

### Theorem (Identify)
The identity element of a group $(G,*)$ is unique.

*Proof:*
Suppose that the identity is not unique, and hence consider $e$ and $e^*$ to be the two independent identities $\in G$, then $$e*e^*=e'$$ and also $$e'*e=e$$ this suggests that $e'=e$.

### Uniqueness of inverse
In this section we would see how inverses are unique. All of this results are used in number theory as well, so never hesitate to convert your group theoretic examples into a number theoretic one.

### Theorem (Inversion)
For a group $(G,*)$ let there exist two inverses of an element $a \in G$. Call them $b$ and $c$. Then $b=c$.

*Proof:*
For some $b$ and $c$ to be the inverses of $a$, group operation of $a$ with $b,c$ should result out the identity element. That is, $$a*b=e$$ as well as, $$a*c=e$$
