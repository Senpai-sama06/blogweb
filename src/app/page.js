import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            {/* Ambient Background Gradients for the new design */}
            <div className={styles.ambientGradient1}></div>
            <div className={styles.ambientGradient2}></div>

            <div className={styles.glassCard}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>
                        <span className={styles.nameGradient}>Ramakrishna</span>
                    </h1>
                    <div className={styles.dictionaryEntry}>
                        <span className={styles.phonetic}>[rah-mah-krish-nah]</span>
                        <span className={styles.dot}>•</span>
                        <span className={styles.pos}>noun</span>
                        <span className={styles.dot}>•</span>
                        <span className={styles.hindiName}>रामाकृष्णा</span>
                    </div>


                    <div className={styles.introContent}>
                        <p> This is the homepage of Ramakrishna Sen. I am currently a bachelors and masters student at <a href="https://iiitk.ac.in/" target="_blank" rel="noopener noreferrer">IIITDM Kurnool</a>, doing stuff related to electronics and computing. Here is <Link href="/resume">my resume</Link> and <Link href="/research">my research</Link>. 
                        <br></br><br></br>    
                        Outside of academics, I love to procrastinate and <a href="https://youtu.be/-YJSDJGyIaU?si=KUN2T1ZcnZxK3myK" target="_blank" rel="noopener noreferrer">think deeply about simple things</a>. I suck at math and chess relatively lesser than the other things I do. See my <Link href="/now">now</Link> page for what I’ve been thinking about recently and my most recent work experience at <Link href="/resume/experience">GalaxEye Space</Link> where I worked on <a href="https://en.wikipedia.org/wiki/Synthetic_aperture_radar" target="_blank" rel="noopener noreferrer">Synthetic Aperture Radar</a> and <a href="https://en.wikipedia.org/wiki/Autofocus#Phase-gradient_autofocus" target="_blank" rel="noopener noreferrer">prominent point processing</a>. 
                        <br></br><br></br>    
                        You can also find me on GitHub or Instagram. You may also waste your time by reading my <Link href="/blog">less serious blog</Link>. </p>
                    </div>


                </section>
            </div>
        </div>
    );
}
