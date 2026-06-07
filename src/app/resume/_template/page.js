import Link from 'next/link';
import styles from '../../resume.module.css';

/**
 * Detail page for a resume entry.
 * Copy this to a new folder (e.g., src/app/resume/experience/my-company/page.js)
 * and customize the content below.
 */
export default function EntryDetail() {
    return (
        <div className={styles.container} style={{ gridTemplateColumns: '1fr', maxWidth: '800px' }}>
            <main className={styles.mainContent}>
                <Link href="/resume" style={{ color: 'var(--mauve)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                    &larr; Back to Resume
                </Link>
                
                <section>
                    <h1 className={styles.sectionTitle}>Your Title</h1>
                    <h3 className={styles.timelineSubtitle} style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                        Company Name | Location
                    </h3>
                    <p style={{ color: 'var(--overlay1)', marginBottom: '2rem' }}>Date Range</p>
                    
                    <div className={styles.timelineDescription} style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <p>
                            Describe your experience in detail here. You can add as many paragraphs or sections as you need.
                        </p>
                    </div>

                    {/* Example of adding a section with results or images */}
                    <div style={{ marginTop: '3rem' }}>
                        <h2 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Key Highlights</h2>
                        <div style={{ background: 'var(--surface0)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--surface1)' }}>
                            <p style={{ color: 'var(--subtext0)' }}>
                                - Achievement 1: Quantifiable result or impact.<br />
                                - Achievement 2: Technical challenge overcome.<br />
                                - Achievement 3: Team collaboration or leadership.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
