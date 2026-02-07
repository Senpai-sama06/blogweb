'use client';
import { useState } from 'react';
import styles from './HiddenContent.module.css';

export default function HiddenContent({ title, children }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className={styles.container}>
            <button
                onClick={() => setIsVisible(!isVisible)}
                className={styles.toggleButton}
            >
                {isVisible ? 'Hide' : 'Show'} {title || 'Details'}
            </button>

            {isVisible && (
                <div className={styles.content}>
                    {children}
                </div>
            )}
        </div>
    );
}
