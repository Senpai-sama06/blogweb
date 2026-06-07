import Link from 'next/link';
import styles from './resume.module.css';
import { getResumeEntries } from '@/lib/resume';

const PROJECTS = [
    {
        title: "Real-Time Audio-Visual Zoom System",
        status: "Ongoing",
        tech: "Beamforming, Deep Learning, Edge Computing, Speech Processing",
        description: "Overlapping speech recordings are usually damage speech intelligibility and quality. Through this work I attempt to separate the target speech from the background noise and interferers, using both audio and visual cues. The result was a lightweight neural guided beamformer, fast enough to be deployed on android edge devices with the help of OBOE.",
        link: "https://github.com/Senpai-sama06",
        image: "/blogweb/project-audio-zoom.png"
    },
    {
        title: "4-Point FFT Processor",
        status: "Sept 2025",
        tech: "Verilog, ASIC Flow",
        description: "A high-performance, pipelined 2-stage Radix-2 DIT FFT processor designed for hardware acceleration. By optimizing twiddle-factor multipliers, computation latency was reduced by 40%. The design was taken through a full ASIC implementation flow (RTL to GDSII) on 90nm CMOS, successfully achieving 100 MHz timing closure.",
        link: "https://github.com/Senpai-sama06",
        image: "/blogweb/project-fft-processor.png"
    }
];

export default async function Resume() {
    const experiences = await getResumeEntries('experience');
    const educations = await getResumeEntries('education');
    const leaderships = await getResumeEntries('leadership');

    return (
        <div className={styles.container}>
            {/* Left Sidebar: Profile & Skills */}
            <aside className={styles.sidebar}>
                <div className={styles.profileSection}>
                    <h1 className={styles.name}>Ramakrishna Sen</h1>
                    <p className={styles.role}>Signal Processing, Acoustics, Radar and Machine Learning</p>

                    <div className={styles.contactLinks}>
                        <a href="mailto:senrk2005@gmail.com" className={styles.link}>
                            <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            senrk2005@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/ramakrishna-sen-65aa9a289/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx="4" cy="4" r="2" stroke="none" fill="currentColor" />
                            </svg>
                            LinkedIn
                        </a>
                        <a href="https://github.com/Senpai-sama06" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            GitHub
                        </a>
                    </div>

                    <a href="/blogweb/resume.pdf" download className={styles.downloadBtn}>
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Resume
                    </a>
                </div>
            </aside>

            {/* Right Content: Experience & Projects */}
            <main className={styles.mainContent}>

                {/* Experience Section */}
                {experiences.length > 0 && (
                    <section>
                        <h2 className={styles.sectionTitle}>
                            <span>🦁</span> Experience
                        </h2>
                        <div className={styles.timeline}>
                            {experiences.map(item => (
                                <div key={item.id} className={styles.timelineItem}>
                                    <Link href={item.link} className={styles.timelineCard} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                                        <div className={styles.timelineHeader}>
                                            <div>
                                                <div className={styles.timelineTitle}>{item.title}</div>
                                                <div className={styles.timelineSubtitle}>{item.subtitle}</div>
                                            </div>
                                            <span className={styles.timelineDate}>{item.date}</span>
                                        </div>
                                        <div className={styles.timelineDescription}>
                                            <p dangerouslySetInnerHTML={{ __html: item.intro }} />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education Section */}
                {educations.length > 0 && (
                    <section>
                        <h2 className={styles.sectionTitle}>
                            <span>🐱</span> Education
                        </h2>
                        <div className={styles.timeline}>
                            {educations.map(item => (
                                <div key={item.id} className={styles.timelineItem}>
                                    <Link href={item.link} className={styles.timelineCard} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                                        <div className={styles.timelineHeader}>
                                            <div>
                                                <div className={styles.timelineTitle}>{item.title}</div>
                                                <div className={styles.timelineSubtitle}>{item.subtitle}</div>
                                            </div>
                                            <span className={styles.timelineDate}>{item.date}</span>
                                        </div>
                                        <div className={styles.timelineDescription}>
                                            <p dangerouslySetInnerHTML={{ __html: item.intro }} />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects Section */}
                <section>
                    <h2 className={styles.sectionTitle}>
                        <span>🐯</span> Projects
                    </h2>
                    <div className={styles.projectsGrid}>
                        {PROJECTS.map((project, index) => (
                            <div key={index} className={styles.projectCard}>
                                <div className={styles.projectImageContainer}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={styles.projectImage}
                                    />
                                    <div className={styles.projectOverlay}>
                                        <div className={styles.overlayContent}>
                                            <span className={project.status === "Ongoing" ? styles.projectStatusOverlay : styles.projectStatusOverlay}>
                                                {project.status}
                                            </span>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.overlayBtn}>
                                                View Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.projectContent}>
                                    <div className={styles.projectHeader}>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <div className={styles.projectTech}>{project.tech}</div>
                                    </div>
                                    <p className={styles.projectDescription}>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Leadership Section */}
                {leaderships.length > 0 && (
                    <section>
                        <h2 className={styles.sectionTitle}>
                            <span>🐆</span> Leadership
                        </h2>
                        <div className={styles.timeline}>
                            {leaderships.map(item => (
                                <div key={item.id} className={styles.timelineItem}>
                                    <Link href={item.link} className={styles.timelineCard} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                                        <div className={styles.timelineHeader}>
                                            <div>
                                                <div className={styles.timelineTitle}>{item.title}</div>
                                                <div className={styles.timelineSubtitle}>{item.subtitle}</div>
                                            </div>
                                            <span className={styles.timelineDate}>{item.date}</span>
                                        </div>
                                        <div className={styles.timelineDescription}>
                                            <p dangerouslySetInnerHTML={{ __html: item.intro }} />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </main>
        </div>
    );
}
