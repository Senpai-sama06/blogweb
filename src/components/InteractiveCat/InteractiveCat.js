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

    const [isHitting, setIsHitting] = useState(false);
    const [hitToggle, setHitToggle] = useState(false);
    const isHittingRef = useRef(false);

    // Mouse State
    const mouseRef = useRef({ x: 0, y: 0, inside: false });

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

    // Toggle hitting animation
    useEffect(() => {
        let interval;
        if (isHitting) {
            interval = setInterval(() => {
                setHitToggle(prev => !prev);
            }, 100);
        } else {
            setHitToggle(false);
        }
        return () => clearInterval(interval);
    }, [isHitting]);

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
                let currentlyHitting = false;
                
                if (Math.abs(diff) < 5 && mouseRef.current.y > catYThreshold && mouseRef.current.inside) {
                    currentlyHitting = true;
                    // Add Bonk
                    addBonk(mouseRef.current.x, mouseRef.current.y);
                }
                
                if (currentlyHitting !== isHittingRef.current) {
                    isHittingRef.current = currentlyHitting;
                    setIsHitting(currentlyHitting);
                }

            } else {
                // Idle / Watching mode
                // TODO: Implement wandering? For now, just stand still and watch.
                setIsMoving(false);
                
                if (isHittingRef.current !== false) {
                    isHittingRef.current = false;
                    setIsHitting(false);
                }
            }

            setCatX(currentX);



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
                    left: `calc(${catX}% - 60px)`, // Center the 120px cat
                    transform: `scaleX(${facingRight ? -1 : 1})`
                }}
            >
                <img 
                    src={(isHitting && hitToggle) ? "/blogweb/hit.png" : "/blogweb/arm.png"} 
                    alt="Cat"
                    style={{
                        height: (isHitting && hitToggle) ? '100%' : '80%',
                        width: 'auto',
                        objectFit: 'contain'
                    }}
                />
            </div>
        </div>
    );
}
