import Link from 'next/link';
import styles from '../../resume.module.css';

export default function LeadershipSAEDetail() {
    return (
        <div className={styles.container} style={{ gridTemplateColumns: '1fr', maxWidth: '800px' }}>
            <main className={styles.mainContent}>
                <Link href="/resume" style={{ color: 'var(--mauve)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                    &larr; Back to Resume
                </Link>
                <section>
                    <h1 className={styles.sectionTitle}>Vice-Chair</h1>
                    <h3 className={styles.timelineSubtitle} style={{ fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: '1.5' }}>
                        Society of Aeronautics Engineers<br />IIITDM Kurnool
                    </h3>
                    <p style={{ color: 'var(--overlay1)', marginBottom: '2rem' }}>Aug 2025 – Present</p>
                    
                    <div className={styles.timelineDescription} style={{ fontSize: '1.1rem' }}>
                        <p>
                            Serving as the Vice-Chair for the Society of Aeronautics Engineers, guiding student initiatives to design, build, and fly aerial platforms. Mentoring junior students in aerodynamics, avionics, and project management while overseeing team operations and event coordination.
                        </p>
                    </div>
                    
                    {/* Placeholder for images */}
                    <div style={{ marginTop: '3rem', background: 'var(--surface0)', padding: '3rem', borderRadius: '12px', border: '1px dashed var(--surface1)', textAlign: 'center', color: 'var(--overlay1)' }}>
                        <p>Event photos, aircraft models, and team pictures will go here.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
