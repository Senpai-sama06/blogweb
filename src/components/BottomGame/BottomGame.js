'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './BottomGame.module.css';

export default function BottomGame() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Game State Variables
        let gameSpeed = 4;
        let frame = 0;
        let groundOffset = 0;

        // Entities
        let player = {
            x: 100, // Fixed X position
            y: 0,
            width: 30,
            height: 30,
            dy: 0,
            jumpPower: -12,
            gravity: 0.6,
            grounded: false,
            color: '#cba6f7' // Mauve
        };
        let obstacles = [];
        let clouds = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            // Smaller height on mobile
            const isMobile = window.innerWidth < 768;
            canvas.height = isMobile ? 100 : 150;
            player.y = canvas.height - 30 - 10; // Ground level
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Drawing Functions
        const drawCat = (x, y, width, height, color) => {
            ctx.fillStyle = color;
            // Body
            ctx.beginPath();
            ctx.roundRect(x, y, width, height, 5);
            ctx.fill();
            // Ears
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 10, y - 10);
            ctx.lineTo(x + 20, y);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x + width, y);
            ctx.lineTo(x + width - 10, y - 10);
            ctx.lineTo(x + width - 20, y);
            ctx.fill();
            // Tail (simple line)
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x, y + height - 5);
            ctx.quadraticCurveTo(x - 15, y + height - 20, x - 5, y + height - 25);
            ctx.stroke();
        };

        const drawTree = (x, y, width, height) => {
            // Trunk
            ctx.fillStyle = '#9399b2'; // Overlay2 (Greyish trunk)
            ctx.fillRect(x + width / 3, y + height / 2, width / 3, height / 2);

            // Foliage (Triangle)
            ctx.fillStyle = '#a6e3a1'; // Green
            ctx.beginPath();
            ctx.moveTo(x + width / 2, y);
            ctx.lineTo(x + width, y + height / 2 + 5);
            ctx.lineTo(x, y + height / 2 + 5);
            ctx.fill();
        };

        const drawBird = (x, y, width, height) => {
            ctx.strokeStyle = '#89b4fa'; // Blue
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x, y + height / 2);
            ctx.quadraticCurveTo(x + width / 4, y, x + width / 2, y + height / 2);
            ctx.quadraticCurveTo(x + 3 * width / 4, y, x + width, y + height / 2);
            ctx.stroke();
        };

        const drawObstacle = (x, y, width, height, type) => {
            if (type === 'tree') {
                drawTree(x, y, width, height);
            } else if (type === 'bird') {
                drawBird(x, y, width, height);
            }
        };

        const update = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            frame++;

            // Parallax Background (Clouds)
            if (frame % 200 === 0) {
                clouds.push({
                    x: canvas.width,
                    y: Math.random() * 50 + 20,
                    size: Math.random() * 20 + 20,
                    speed: Math.random() * 0.5 + 0.5
                });
            }
            clouds.forEach(cloud => {
                cloud.x -= cloud.speed;
                ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
                ctx.beginPath();
                ctx.arc(cloud.x, cloud.y, cloud.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(cloud.x + cloud.size * 0.8, cloud.y + cloud.size * 0.2, cloud.size * 0.8, 0, Math.PI * 2);
                ctx.fill();
            });
            clouds = clouds.filter(cloud => cloud.x > -100);

            // Moving Ground Effect
            groundOffset = (groundOffset - gameSpeed) % 40;
            ctx.beginPath();
            ctx.moveTo(0, canvas.height - 10);
            ctx.lineTo(canvas.width, canvas.height - 10);
            ctx.strokeStyle = '#585b70'; // Surface2
            ctx.lineWidth = 2;
            ctx.stroke();

            // Ground details (lines)
            ctx.strokeStyle = '#45475a'; // Surface1
            ctx.lineWidth = 2;
            for (let i = groundOffset; i < canvas.width; i += 40) {
                ctx.beginPath();
                ctx.moveTo(i, canvas.height - 10);
                ctx.lineTo(i - 10, canvas.height);
                ctx.stroke();
            }

            // Player Physics
            player.dy += player.gravity;
            player.y += player.dy;

            if (player.y > canvas.height - 30 - 10) {
                player.y = canvas.height - 30 - 10;
                player.dy = 0;
                player.grounded = true;
            } else {
                player.grounded = false;
            }

            // AI Logic: Auto Jump
            const nearestObstacle = obstacles.find(obs => obs.x > player.x && obs.x < player.x + 200);
            if (nearestObstacle && player.grounded) {
                const distance = nearestObstacle.x - player.x;
                if (distance < 120) {
                    player.dy = player.jumpPower;
                    player.grounded = false;
                }
            }

            // Draw Player
            drawCat(player.x, player.y, player.width, player.height, player.color);

            // Obstacles Spawning
            if (frame % Math.floor(Math.random() * 50 + 100) === 0) {
                const types = ['tree', 'bird'];
                const type = types[Math.floor(Math.random() * types.length)];
                let width = 30;
                let height = 40; // Taller trees
                let y = canvas.height - height - 10;

                if (type === 'bird') {
                    width = 30;
                    height = 20;
                    y -= 50; // Fly higher
                }

                obstacles.push({
                    x: canvas.width,
                    y: y,
                    width,
                    height,
                    type
                });
            }

            obstacles.forEach(obs => {
                obs.x -= gameSpeed;
                drawObstacle(obs.x, obs.y, obs.width, obs.height, obs.type);
            });

            // Remove off-screen
            obstacles = obstacles.filter(obs => obs.x > -50);

            animationFrameId = requestAnimationFrame(update);
        };

        update();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className={styles.container}>
            <canvas ref={canvasRef} className={styles.canvas} />
        </div>
    );
}
