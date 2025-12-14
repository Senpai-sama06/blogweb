'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './InteractiveCat.module.css';

export default function InteractiveCat() {
    const containerRef = useRef(null);
    const catRef = useRef(null);

    // Physics State
    const [catX, setCatX] = useState(50); // Percentage 0-100
    const [facingRight, setFacingRight] = useState(true);
    const [isMoving, setIsMoving] = useState(false);
    const [bonks, setBonks] = useState([]);

    // Mouse State
    const mouseRef = useRef({ x: 0, y: 0, inside: false });

    // Eye Tracking Logic
    const [leftEyePos, setLeftEyePos] = useState({ x: 0, y: 0 });
    const [rightEyePos, setRightEyePos] = useState({ x: 0, y: 0 });

    // Better Tracking: Update eyes in the animation loop to stay in sync
    // We need global mouse position for "Watching" mode
    const globalMouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const updateGlobalMouse = (e) => {
            globalMouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', updateGlobalMouse);
        return () => window.removeEventListener('mousemove', updateGlobalMouse);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                inside: true
            };
        };

        const handleMouseEnter = () => { mouseRef.current.inside = true; };
        const handleMouseLeave = () => { mouseRef.current.inside = false; };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Animation Loop
    useEffect(() => {
        let animationFrameId;
        let currentX = 50; // Use local var for smooth loop reading
        let targetX = 50;
        const speed = 0.08; // Chase speed factor
        const stopDistance = 2; // % distance to stop chasing

        const loop = () => {
            const container = containerRef.current;
            if (!container) return;
            const containerWidth = container.clientWidth;

            // Logic:
            // If mouse inside -> Target is mouse X (converted to %)
            // If mouse outside -> Target is center or random wandering (simple: stay/slowly return)

            if (mouseRef.current.inside) {
                // Calculate target %
                const mousePercent = (mouseRef.current.x / containerWidth) * 100;
                targetX = Math.max(5, Math.min(95, mousePercent)); // Clamp padding

                // Move towards target
                const diff = targetX - currentX;

                if (Math.abs(diff) > 0.5) {
                    const step = diff * speed;
                    currentX += step;

                    // State updates
                    setIsMoving(true);
                    setFacingRight(diff > 0);
                } else {
                    setIsMoving(false);
                }

                // Check for BONK
                // If close enough AND mouse Y is low enough (near cat level)
                // Cat is roughly bottom 80px.
                const catYThreshold = container.clientHeight - 80;
                if (Math.abs(diff) < 5 && mouseRef.current.y > catYThreshold && mouseRef.current.inside) {
                    // Add Bonk
                    addBonk(mouseRef.current.x, mouseRef.current.y);
                }

            } else {
                // Idle / Watching mode
                // TODO: Implement wandering? For now, just stand still and watch.
                setIsMoving(false);
            }

            setCatX(currentX);

            // --- EYE TRACKING ---
            if (catRef.current) {
                const catRect = catRef.current.getBoundingClientRect();
                // Head centers (relative to catWrapper, then converted to global)
                // The head is centered at (50, 35) in the SVG's 100x100 viewBox.
                // catRect gives the wrapper's position.
                // The catWrapper is 60px wide.
                // So, head center is at catRect.left + (catRect.width * 0.5) for X
                // and catRect.top + (catRect.height * 0.35) for Y (approx, based on SVG design)
                const headX = catRect.left + (catRect.width * 0.5);
                const headY = catRect.top + (catRect.height * 0.35);

                const dx = globalMouseRef.current.x - headX;
                const dy = globalMouseRef.current.y - headY;
                const angle = Math.atan2(dy, dx);

                // Limit pupil movement radius
                const radius = 3.5;
                const pupilX = Math.cos(angle) * radius;
                const pupilY = Math.sin(angle) * radius;

                setLeftEyePos({ x: pupilX, y: pupilY });
                setRightEyePos({ x: pupilX, y: pupilY });
            }

            animationFrameId = requestAnimationFrame(loop);
        };

        loop();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const addBonk = (x, y) => {
        // Limit bonk rate
        if (Math.random() > 0.1) return;

        const id = Date.now();
        setBonks(prev => [...prev, { id, x, y }]);
        setTimeout(() => {
            setBonks(prev => prev.filter(b => b.id !== id));
        }, 1000);
    };

    // Calculate eye angle
    // We want the eyes to look at mouseRef.current
    // This needs to be calculated in render or effect based on cat position vs mouse position
    // Simple version: CSS transform based on relative X

    return (
        <div className={styles.container} ref={containerRef}>
            <div className={styles.text}>
                <h2 className={styles.title}>More Loading...</h2>
                <p className={styles.subtitle}>"Feeding the cats rn, be back in a meowment!"</p>
            </div>

            {bonks.map(bonk => (
                <div
                    key={bonk.id}
                    className={styles.bonkEffect}
                    style={{ left: bonk.x, top: bonk.y }}
                >
                    BONK!
                </div>
            ))}

            <div
                className={styles.catWrapper}
                ref={catRef}
                data-moving={isMoving}
                style={{
                    left: `calc(${catX}% - 30px)`, // Center the 60px cat
                    transform: `scaleX(${facingRight ? 1 : -1})`
                }}
            >
                {/* Minimal Realistic Cat SVG */}
                {/* 
                   Design:
                   - Upright sitting/standing posture 
                   - Clean geometric shapes for legs implies "Realism" in anatomy 
                */}
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    {/* Tail */}
                    <path className={styles.tail} d="M 15 85 Q -10 50 15 20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" color="var(--text)" />

                    {/* Back Legs */}
                    <path d="M 20 90 L 20 75" stroke="currentColor" strokeWidth="5" strokeLinecap="round" color="var(--overlay2)" className={styles.legs} />
                    <path d="M 80 90 L 80 75" stroke="currentColor" strokeWidth="5" strokeLinecap="round" color="var(--overlay2)" className={styles.legs} />

                    {/* Body */}
                    <rect x="20" y="45" width="60" height="35" rx="15" fill="var(--text)" className={styles.catBody} />

                    {/* Front Legs */}
                    <path d="M 35 90 L 35 80" stroke="currentColor" strokeWidth="5" strokeLinecap="round" color="var(--text)" className={styles.legs} />
                    <path d="M 65 90 L 65 80" stroke="currentColor" strokeWidth="5" strokeLinecap="round" color="var(--text)" className={styles.legs} />

                    {/* Head Group */}
                    <g transform="translate(50, 35)">
                        {/* Ears */}
                        <path d="M -15 -10 L -20 -30 L 0 -15 Z" fill="var(--text)" />
                        <path d="M 15 -10 L 20 -30 L 0 -15 Z" fill="var(--text)" />

                        {/* Head Shape */}
                        <circle cx="0" cy="0" r="22" fill="var(--text)" />

                        {/* Eyes Container */}
                        <g> {/* No scaleX here, pupils move relative to eye sclera */}
                            {/* Left Eye */}
                            <circle cx="-8" cy="-2" r="7" fill="white" />
                            <circle cx={-8 + (facingRight ? leftEyePos.x : -leftEyePos.x)} cy={-2 + leftEyePos.y} r="3.5" fill="black" />

                            {/* Right Eye */}
                            <circle cx="8" cy="-2" r="7" fill="white" />
                            <circle cx={8 + (facingRight ? rightEyePos.x : -rightEyePos.x)} cy={-2 + rightEyePos.y} r="3.5" fill="black" />
                        </g>

                        {/* Snout */}
                        <path d="M -2 5 L 2 5 L 0 7 Z" fill="var(--surface0)" />
                    </g>
                </svg>
            </div>
        </div>
    );
}
