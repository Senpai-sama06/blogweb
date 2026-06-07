import Link from 'next/link';
import styles from '../../resume.module.css';

export default function EducationDetail() {
    return (
        <div className={styles.container} style={{ gridTemplateColumns: '1fr', maxWidth: '800px' }}>
            <main className={styles.mainContent}>
                <Link href="/resume" style={{ color: 'var(--mauve)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                    &larr; Back to Resume
                </Link>
                <section>
                    <h1 className={styles.sectionTitle}>Integrated Bachelors and Masters Programme</h1>
                    <h3 className={styles.timelineSubtitle} style={{ fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: '1.5' }}>
                        Department of Electronics and Communications Engineering, <br />
                        Indian Institute of Information Technology Design and Manufacturing Kurnool
                    </h3>
                    <p style={{ color: 'var(--overlay1)', marginBottom: '2rem' }}>Present</p>
                    
                    <div className={styles.timelineDescription} style={{ fontSize: '1.1rem' }}>
                        <p>
                            <strong>Relevant Coursework:</strong> Digital Signal Processing, Statistical Signal Analysis, Control Systems, Wireless Communications, Machine Learning, Computer Architecture.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            Currently pursuing a rigorous curriculum that balances theoretical foundations with practical engineering applications. Core focus areas include digital electronics, signals and systems, and advanced machine learning techniques. 
                        </p>
                    </div>
                    
                    {/* Placeholder for images */}
                    <div style={{ marginTop: '3rem', background: 'var(--surface0)', padding: '3rem', borderRadius: '12px', border: '1px dashed var(--surface1)', textAlign: 'center', color: 'var(--overlay1)' }}>
                        <p>Campus pictures, transcripts, or project highlights will go here.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
