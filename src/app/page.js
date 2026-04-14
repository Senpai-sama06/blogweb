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
                        <p> This is the homepage of Ramakrishna Sen. I am currently a bachelors and masters student at <a href="https://iiitk.ac.in/">IIITDM Kurnool</a>, doing stuff related to electronics and computing. Here is  <a href="/resume">my resume</a> and <a href="/research">my research</a>. 
                        <br></br><br></br>    
                        Outside of academics, I love to procrastinate and <a href="https://youtu.be/-YJSDJGyIaU?si=KUN2T1ZcnZxK3myK">think deeply about simple things</a> . I suck at math and chess relatively lesser than the other things I do. See my <a href="/now">now</a> page for what I’ve been thinking about recently and my most recent work experience. 
                        <br></br><br></br>    
                        You can also find me on GitHub or Instagram. You may also waste your time by reading my <a href="/blog">less serious blog</a>. </p>
                    </div>


                </section>
            </div>
        </div>
    );
}
