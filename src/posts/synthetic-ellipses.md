---
title: "Synthetic Ellipses"
date: "2025-12-14"
tags: ["Math", "Geometry", "Ellipses", "Olympiad"]
excerpt: "Exploring synthetic properties of ellipses, optical properties, and isogonal conjugates with visual proofs."
---

**"How do people come up with such ingenious arguments? Its the same way as people come up with Madame Bovary or Mona Lisa. I have no idea how it happens. I only know when it happens to me, I feel very fortunate"**

*— Paul Lockhart*

---

## Spoon-fed Results

### Question
What could be the shortest path taken to cover the distance starting from $A$ touching the line $l$ and then making it to $B$?

*(Diagram omitted)*

Upon reflecting $B$ over the line $l$, we obtain $B'$. Now the shortest distance would be achieved when the path $ACB'$ becomes a straight line.

Using a similar approach we directly induce our next theorem.

### Theorem (Optical property of an ellipse)
Suppose a line $\ell$ is tangent at point $P$ to an ellipse. Then line $\ell$ is the exterior angle bisector of $\angle F_1PF_2$.

*(Diagram omitted)*

In the previous experiment, we wanted to minimize the total length by reflecting about the line so as to obtain the straight-est path possible. In this case however it is the opposite. We are given a point $C$ on the ellipse and a tangent running through the point. Since this is exactly the same situation as the aforementioned (question) we are highly motivated to reflect a center across the tangent. As it is an ellipse, we already are present with the "straightest line" condition, hence we are done.

### Exercise
Point of contact of parallel tangents to an ellipse pass through the center of the ellipse.

### Theorem (isogonal conjugates)
For any ellipse the tangents at points $X_1,X_2$ from a point has the foci $F_1, F_2$ as its isogonal conjugates.

### Theorem
Suppose $PQ$ is a chord of the ellipse containing $F_1$ and let the tangents from $P$ and $Q$ intersect at $R$. Then the excircle of triangle $F_1PQ$ has the excenter opposite to $F_1$ to be $R$.

For the reference of the above theorem, here is a brief about isogonal conjugates.

### Lemma (The director circle)
The locus of perpendicular tangents to an ellipse from a point is a circle.

### Theorem (Common chord intersections)
Let $A_{i,j}$ and $B_{i,j}$ for $1\leq i\leq j\leq 3$ be the points of intersection of ellipses then $\epsilon_i,\epsilon_j$. Then the lines $A_{1,2}B_{1,2},A_{2,3}B_{2,3},A_{3,1}B_{3,1}$ are concurrent.

*(Diagram omitted)*

Following from the above theorem, with the same configurations we have another remarkable result, dealing with the common tangents of the three ellipses.

### Theorem
Given three confocal ellipses, the intersections of the common tangents of two of the ellipses would be collinear.

Here is the diagram to the theorem:

![Ilya Bogdanov](/profile-website/ilyabogdanov.jpg)

### Lemma (Auxillary circle)
In an ellipse, with foci $F_1 \text{ and }F_2$, construct a tangent line from point $P$ on the ellipse. If the tangent meets the auxillary circle at points $C$ and $D$ then:
*   $OC\| PF_1$ and $OD\| PF_2$
*   $\overline{F_1D}\cdot \overline{F_2C}=\overline{AB}$

*(Diagram omitted)*

### Corollary
Following from the above lemma, the circle having $PF_1$ or $PF_2$ as diameter has one and only one common point with the auxillary circle, and that is $C$ or $D$ respectively.
