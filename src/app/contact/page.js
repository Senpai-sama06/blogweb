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
                <a href="#" className={styles.socialLink}>LinkedIn</a>
                <a href="#" className={styles.socialLink}>GitHub</a>
                <a href="#" className={styles.socialLink}>Twitter</a>
            </div>
        </div>
    );
}
