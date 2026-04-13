import styles from '../coming-soon.module.css';

export default function NowPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src="https://cataas.com/cat/gif" alt="Cute Cat" className={styles.catGif} />
                <h1 className={styles.title}>Now Page</h1>
                <p className={styles.text}>Coming soon. Sorting out the content for this page...</p>
            </div>
        </div>
    );
}
