import styles from './ComingSoonCat.module.css';

export default function ComingSoonCat() {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>More Loading...</h2>
            <p className={styles.text}>"Feeding the cats rn, be back in a meowment!"</p>

            {/* Playful Cat SVG */}
            <div className={styles.catWrapper}>
                <svg viewBox="0 0 100 100" className={styles.catSvg}>
                    {/* Body - Resting blob shape */}
                    <path
                        d="M20 80 Q 50 40 80 80 L 100 100 L 0 100 Z"
                        fill="var(--text)"
                    />
                    {/* Ears */}
                    <path d="M25 75 L 20 50 L 40 70 Z" fill="var(--text)" />
                    <path d="M75 75 L 80 50 L 60 70 Z" fill="var(--text)" />

                    {/* Tail - Wiggling */}
                    <path
                        className={styles.tail}
                        d="M80 80 Q 90 40 80 10"
                        fill="none"
                        stroke="var(--text)"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    );
}
