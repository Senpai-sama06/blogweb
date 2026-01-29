import styles from './AudioComparison.module.css';

export default function AudioComparison({
    src1,
    title1,
    img1,
    src2,
    title2,
    img2
}) {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                {title1 && <h3 className={styles.title}>{title1}</h3>}
                <audio controls className={styles.audio}>
                    <source src={src1} />
                    Your browser does not support the audio element.
                </audio>
                {img1 && (
                    <div className={styles.imageContainer}>
                        <img src={img1} alt={`FFT of ${title1}`} className={styles.image} />
                    </div>
                )}
            </div>

            <div className={styles.column}>
                {title2 && <h3 className={styles.title}>{title2}</h3>}
                <audio controls className={styles.audio}>
                    <source src={src2} />
                    Your browser does not support the audio element.
                </audio>
                {img2 && (
                    <div className={styles.imageContainer}>
                        <img src={img2} alt={`FFT of ${title2}`} className={styles.image} />
                    </div>
                )}
            </div>
        </div>
    );
}
