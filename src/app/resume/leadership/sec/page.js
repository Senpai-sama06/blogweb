import Link from 'next/link';
import styles from '../../resume.module.css';

export default function LeadershipSECDetail() {
    return (
        <div className={styles.container} style={{ gridTemplateColumns: '1fr', maxWidth: '800px' }}>
            <main className={styles.mainContent}>
                <Link href="/resume" style={{ color: 'var(--mauve)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                    &larr; Back to Resume
                </Link>
                <section>
                    <h1 className={styles.sectionTitle}>Research Group Head</h1>
                    <h3 className={styles.timelineSubtitle} style={{ fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: '1.5' }}>
                        Signal Processing & Controls | Society of Electronics<br />IIITDM Kurnool
                    </h3>
                    <p style={{ color: 'var(--overlay1)', marginBottom: '2rem' }}>Aug 2024 – Aug 2025</p>
                    
                    <div className={styles.timelineDescription} style={{ fontSize: '1.1rem' }}>
                        <p>
                            Led the research group focusing on core signal processing and control systems. Organized workshops, reading groups, and collaborative projects that enhanced the practical and theoretical understanding of signal analysis among the student community. Facilitated interdisciplinary projects combining hardware systems and software intelligence.
                        </p>
                    </div>
                    
                    {/* Placeholder for images */}
                    <div style={{ marginTop: '3rem', background: 'var(--surface0)', padding: '3rem', borderRadius: '12px', border: '1px dashed var(--surface1)', textAlign: 'center', color: 'var(--overlay1)' }}>
                        <p>Workshop photos, project prototypes, and group activities will go here.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
