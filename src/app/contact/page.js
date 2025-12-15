import styles from './contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>🐱 Get in Touch</h1>
            <p className={styles.subtitle}>
                Interested in collaborating or discussing signal processing?
            </p>

            <div className={styles.card}>
                <p className={styles.text}>
                    Feel free to reach out via email. I'm always open to interesting conversations and opportunities.
                </p>
                <a href="mailto:senrk2005@gmail.com" className={styles.button}>
                    Send Email
                </a>
            </div>

            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/ramakrishna-sen-65aa9a289/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Senpai-sama06" className={styles.socialLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    );
}
