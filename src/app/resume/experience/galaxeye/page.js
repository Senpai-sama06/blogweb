import Link from 'next/link';
import Image from 'next/image';
import styles from '../../resume.module.css';

export default function ExperienceDetail() {
    return (
        <div className={styles.container} style={{ gridTemplateColumns: '1fr', maxWidth: '900px' }}>
            <main className={styles.mainContent}>
                <Link href="/resume" style={{ color: 'var(--mauve)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                    &larr; Back to Resume
                </Link>
                <section>
                    <h1 className={styles.sectionTitle}>Signal Processing Intern</h1>
                    <h3 className={styles.timelineSubtitle} style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>GalaxEye Space | Bangalore, India</h3>
                    <p style={{ color: 'var(--overlay1)', marginBottom: '2rem', fontSize: '1.1rem' }}>July 2024 – September 2024</p>
                    
                    <div className={styles.timelineDescription} style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <p>
                            During my internship at <a href="https://galaxeye.space/" target="_blank" rel="noopener noreferrer">GalaxEye Space</a>, I was tasked to develop an autofocus algorithm for drone-borne <a href="https://en.wikipedia.org/wiki/Synthetic_aperture_radar" target="_blank" rel="noopener noreferrer">Synthetic Aperture Radar</a> (SAR) systems. Drone platforms, while cost-effective, introduce significant positional instability compared to satellites. These minute motion errors accumulate during flight, leading to phase errors and significant image defocusing.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                                I designed and implemented a novel data-driven autofocus technique called the <strong>Prominent Point Phase Curvature Autofocus (PP-PCA)</strong>. For the target tracking requirement of the <a href="https://en.wikipedia.org/wiki/Autofocus#Phase-gradient_autofocus" target="_blank" rel="noopener noreferrer">prominent point processing</a> idea, we used an adaptive window tuned <a href="https://en.wikipedia.org/wiki/Constant_false_alarm_rate" target="_blank" rel="noopener noreferrer">Constant False Alarm Rate (CFAR)</a> algorithm along with the <a href="https://en.wikipedia.org/wiki/Synthetic_aperture_radar#Autofocus" target="_blank" rel="noopener noreferrer">Phase Curvature Autofocus (PCA)</a> algorithm to automatically estimate and correct higher-order phase errors directly from the radar data, bypassing the limitations of external inertial sensors, which could only correct for motion errors upto 2cm at best. This algorithm was iterated and every iteration compensated for even finer motion errors, leading to significant improvements in image quality.
                        </p>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <h2 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Proof of Work & Results</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            <div style={{ background: 'var(--surface0)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--surface1)' }}>
                                <h4 style={{ marginBottom: '1.5rem', color: 'var(--subtext1)', fontSize: '1.2rem' }}>Visual Quality Metrics</h4>
                                <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '8px', background: 'white' }}>
                                    <img 
                                        src="/blogweb/resume/galaxeye/quantitative_metrics.png" 
                                        alt="Entropy and Sharpness Metrics" 
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>
                                <p style={{ fontSize: '1rem', color: 'var(--overlay1)', marginTop: '1.5rem', lineHeight: '1.5' }}>
                                    Tracking image entropy and sharpness across processing iterations. The convergence of these metrics serves as an objective proof of the algorithm's ability to restore focus by minimizing phase errors.
                                </p>
                                <p style={{ fontSize: '0.85rem', color: 'var(--overlay2)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                                    p.s. its supposed to be 50 not 5*
                                </p>
                            </div>

                            <div style={{ background: 'var(--surface0)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--surface1)' }}>
                                <h4 style={{ marginBottom: '1.5rem', color: 'var(--subtext1)', fontSize: '1.2rem' }}>Qualitative Analysis</h4>
                                <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '8px', background: 'white' }}>
                                    <img 
                                        src="/blogweb/resume/galaxeye/qualitative_comparison.png" 
                                        alt="SAR Image Qualitative Comparison" 
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>
                                <p style={{ fontSize: '1rem', color: 'var(--overlay1)', marginTop: '1.5rem', lineHeight: '1.5' }}>
                                    A side-by-side qualitative comparison of the initial defocused radar acquisition (Iteration 0) versus the final processed output. This abstract visual demonstrates the significant restoration of point-source stability and spatial resolution.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
