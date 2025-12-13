'use client';

import { useState, useEffect } from 'react';
import styles from './ComingSoonCat.module.css';

export default function ComingSoonCat() {
    const [position, setPosition] = useState({ x: 10, y: 0 }); // Percentages
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const moveCat = () => {
            // Generate random positions
            // x between 5% and 85%
            // y between 0px and 20px (staying near bottom)
            const newX = 5 + Math.random() * 80;
            const newY = Math.random() * 10; // Slight vertical variation

            // Flip if moving left
            if (newX < position.x) {
                setIsFlipped(false); // Original faces left-ish, so this might need tuning based on SVG
            } else {
                setIsFlipped(true);
            }

            setPosition({ x: newX, y: newY });
        };

        // Move every 3-6 seconds
        const intervalTime = 3000 + Math.random() * 3000;
        const interval = setInterval(moveCat, intervalTime);

        // Initial move
        moveCat();

        return () => clearInterval(interval);
    }, []); // Empty dependency array means this runs once on mount, but the closure sees initial 'position'.
    // Actually, to check 'newX < position.x', we need position in deps or use functional updates.
    // Simpler: just compare newX to oldX inside the setter or ref. Here, let's fix the logic below.

    useEffect(() => {
        let timeoutId;

        const loop = () => {
            const delay = 2000 + Math.random() * 4000; // 2-6 seconds wait

            timeoutId = setTimeout(() => {
                setPosition(prev => {
                    const newX = 5 + Math.random() * 80;
                    const newY = Math.random() * 20; // 0-20% from bottom

                    // Determine direction based on *previous* position
                    // The SVG faces Left by default (Tail is right, head is left-ish in code? Wait, path is M20 80... ears at 25, 75.. tail at 80... so Head is Left)
                    // If moving Right (newX > prev.x), we need to flip it to face Right.
                    // If moving Left (newX < prev.x), keep default.

                    setIsFlipped(newX > prev.x);

                    return { x: newX, y: newY };
                });
                loop(); // Schedule next move
            }, delay);
        };

        loop();

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>More Loading...</h2>
            <p className={styles.text}>"Feeding the cats rn, be back in a meowment!"</p>

            <div
                className={styles.catWrapper}
                style={{
                    left: `${position.x}%`,
                    bottom: `${position.y}%`,
                    transform: `scaleX(${isFlipped ? -1 : 1})`, // Flip horizontally
                }}
            >
                <svg viewBox="0 0 100 100" className={styles.catSvg}>
                    {/* Body - Resting blob shape */}
                    <path
                        d="M20 80 Q 50 40 80 80 L 100 100 L 0 100 Z"
                        fill="var(--text)"
                    />
                    {/* Ears */}
                    <path d="M25 75 L 20 50 L 40 70 Z" fill="var(--text)" />
                    <path d="M75 75 L 80 50 L 60 70 Z" fill="var(--text)" />

                    {/* Tail - Smoother curve */}
                    <path
                        className={styles.tail}
                        d="M80 80 Q 90 40 85 10"
                        fill="none"
                        stroke="var(--text)"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    );
}
