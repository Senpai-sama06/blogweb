import styles from './resume.module.css';

export default function Resume() {
    return (
        <div className={styles.container}>
            {/* Left Sidebar: Profile & Skills */}
            <aside className={styles.sidebar}>
                <div className={styles.profileSection}>
                    <h1 className={styles.name}>Ramakrishna Sen</h1>
                    <p className={styles.role}>Signal Processing Engineer</p>

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

                    <a href="/resume.pdf" download className={styles.downloadBtn}>
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download PDF
                    </a>
                </div>

                <div className={styles.skillsSection}>
                    <h3 className={styles.sectionTitleSmall}>Technical Skills</h3>
                    <div className={styles.skillsGrid}>
                        <span className={styles.skillTag}>DSP Algorithms</span>
                        <span className={styles.skillTag}>SAR Processing</span>
                        <span className={styles.skillTag}>Adaptive Beamforming</span>
                        <span className={styles.skillTag}>Python</span>
                        <span className={styles.skillTag}>C/C++</span>
                        <span className={styles.skillTag}>MATLAB</span>
                        <span className={styles.skillTag}>CUDA</span>
                        <span className={styles.skillTag}>Verilog</span>
                        <span className={styles.skillTag}>PyTorch</span>
                        <span className={styles.skillTag}>NumPy/SciPy</span>
                        <span className={styles.skillTag}>Simulink</span>
                        <span className={styles.skillTag}>Vivado</span>
                        <span className={styles.skillTag}>FPGA (Xilinx Zynq)</span>
                    </div>
                </div>
            </aside>

            {/* Right Content: Experience & Projects */}
            <main className={styles.mainContent}>

                {/* Experience Section */}
                <section>
                    <h2 className={styles.sectionTitle}>
                        <span>🦁</span> Experience
                    </h2>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineHeader}>
                                <div className={styles.timelineTitle}>Signal Processing Intern</div>
                                <div className={styles.timelineSubtitle}>GalaxEye Space | Bangalore, India</div>
                            </div>
                            <span className={styles.timelineDate}>July 2024 – September 2024</span>
                            <ul className={styles.timelineList}>
                                <li>Developed and implemented a SAR autofocus algorithm that improved overall image clarity by 50%, boosting PSLR from 9dB to 14dB.</li>
                                <li>Accelerated SAR backprojection pipeline by leveraging CUDA parallelization, resulting in 20% faster processing.</li>
                                <li>Validated algorithm performance on 100+ droneSAR datasets under varying noise conditions and platform motion.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section>
                    <h2 className={styles.sectionTitle}>
                        <span>🐱</span> Education
                    </h2>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineHeader}>
                                <div className={styles.timelineTitle}>Integrated B.Tech + M.Tech in ECE</div>
                                <div className={styles.timelineSubtitle}>IIITDM Kurnool</div>
                            </div>
                            <span className={styles.timelineDate}>Present</span>
                            <p className={styles.timelineDescription}>
                                <strong>CGPA:</strong> 8.0/10<br />
                                <strong>Relevant Coursework:</strong> Digital Signal Processing, Statistical Signal Analysis, Control Systems, Wireless Communications, Machine Learning, Computer Architecture.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section>
                    <h2 className={styles.sectionTitle}>
                        <span>🐯</span> Projects
                    </h2>
                    <div className={styles.projectsGrid}>
                        {/* Project 1 */}
                        <div className={styles.projectCard}>
                            <div className={styles.projectHeader}>
                                <div>
                                    <h3 className={styles.projectTitle}>Real-Time Audio-Visual Zoom System</h3>
                                    <span className={styles.projectStatus}>Ongoing</span>
                                </div>
                                <div className={styles.projectTech}>Python, Neural Beamforming</div>
                            </div>
                            <ul className={styles.projectList}>
                                <li>End-to-end real-time speech enhancement system using Neural MVDR beamformer.</li>
                                <li>Novel microphone-array method for broadside sound localization with only 2 microphones.</li>
                                <li>Achieved 20dB SINR improvement and 2.5+ PESQ score in noisy environments.</li>
                            </ul>
                            <a href="https://github.com/Senpai-sama06" target="_blank" rel="noopener noreferrer" className={styles.codeBtn}>
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                                View Code
                            </a>
                        </div>

                        {/* Project 2 */}
                        <div className={styles.projectCard}>
                            <div className={styles.projectHeader}>
                                <div>
                                    <h3 className={styles.projectTitle}>4-Point FFT Processor</h3>
                                    <span className={styles.projectStatus}>Sept 2025</span>
                                </div>
                                <div className={styles.projectTech}>Verilog, ASIC Flow</div>
                            </div>
                            <ul className={styles.projectList}>
                                <li>Pipelined 2-stage Radix-2 DIT FFT processor for hardware acceleration.</li>
                                <li>Optimized twiddle-factor multipliers to lower computation latency by 40%.</li>
                                <li>Full ASIC implementation (RTL to GDSII) on 90nm CMOS, achieving 100 MHz closure.</li>
                            </ul>
                            <a href="https://github.com/Senpai-sama06" target="_blank" rel="noopener noreferrer" className={styles.codeBtn}>
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                                View Code
                            </a>
                        </div>
                    </div>
                </section>

                {/* Leadership Section */}
                <section>
                    <h2 className={styles.sectionTitle}>
                        <span>🐆</span> Leadership
                    </h2>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineHeader}>
                                <div className={styles.timelineTitle}>Signal Processing and Controls Research Group Head</div>
                                <div className={styles.timelineSubtitle}>Club ElectroniX, IIITDM Kurnool</div>
                            </div>
                            <span className={styles.timelineDate}>Aug 2025 – Present</span>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
