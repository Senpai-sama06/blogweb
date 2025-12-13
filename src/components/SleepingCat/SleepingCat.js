'use client';
import { useState } from 'react';
import styles from './SleepingCat.module.css';

export default function SleepingCat() {
    const [isSleeping, setIsSleeping] = useState(true);

    return (
        <div
            className={styles.cat}
            style={{
                transform: isSleeping ? 'scale(1)' : 'scale(1.2) rotate(10deg)',
            }}
            onClick={() => setIsSleeping(!isSleeping)}
            title={isSleeping ? "Wake up the cat!" : "Let the cat sleep"}
        >
            {isSleeping ? '💤🐈' : '😺✨'}
        </div>
    );
}
