import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>
                    Hello, I'm <span className={styles.highlight}>Ramakrishna</span>
                </h1>
                <p className={styles.subtitle}>
                    EE Student & Signal Processing Enthusiast
                </p>
                <p className={styles.description}>
                    Exploring the world of Radar, Audio Systems, and Advanced Mathematics.
                </p>
                <div className={styles.cta}>
                    <Link href="/blog" className={styles.primaryBtn}>
                        Read My Blog
                    </Link>
                    <Link href="/resume" className={styles.secondaryBtn}>
                        View Resume
                    </Link>
                </div>
            </section>
        </div>
    );
}
