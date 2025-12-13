import styles from './resume.module.css';

export default function Resume() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Resume</h1>
                <p className={styles.subtitle}>Ramakrishna Sen</p>
                <div className={styles.contactInfo}>
                    <p>+91 9819910999 | senrk2005@gmail.com</p>
                    <p>IIITDM Kurnool, India</p>
                </div>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>🐱 Education</h2>
                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <h3 className={styles.itemTitle}>Integrated B.Tech + M.Tech in ECE</h3>
                        <span className={styles.date}>Present</span>
                    </div>
                    <p className={styles.itemSubtitle}>Indian Institute of Information Technology, Design and Manufacturing, Kurnool</p>
                    <p className={styles.description}>
                        CGPA: 8.0/10<br />
                        Relevant Coursework: Digital Signal Processing, Statistical Signal Analysis, Control Systems, Wireless Communications, Machine Learning, Computer Architecture, Probability and Random Processes.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>🦁 Experience</h2>
                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <h3 className={styles.itemTitle}>Signal Processing Intern</h3>
                        <span className={styles.date}>July 2024 – September 2024</span>
                    </div>
                    <p className={styles.itemSubtitle}>GalaxEye Space | Bangalore, India</p>
                    <ul className={styles.list}>
                        <li>Developed and implemented a SAR autofocus algorithm that improved overall image clarity by 50%, boosting PSLR from 9dB to 14dB across diverse terrain and motion profiles.</li>
                        <li>Accelerated SAR backprojection pipeline by leveraging CUDA parallelization, resulting in 20% faster processing through optimized GPU memory and thread scheduling.</li>
                        <li>Validated algorithm performance on 100+ droneSAR datasets, confirming reliability under varying noise conditions, terrain complexity, and platform motion.</li>
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>🐯 Projects</h2>
                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <h3 className={styles.itemTitle}>Real-Time Audio-Visual Zoom System</h3>
                        <span className={styles.date}>Ongoing</span>
                    </div>
                    <p className={styles.itemSubtitle}>Python, Neural Beamforming, DSP</p>
                    <ul className={styles.list}>
                        <li>Developing an end-to-end real-time audio-visual speech enhancement system using a Neural MVDR beamformer for accurate source localization and target amplification.</li>
                        <li>Designed a novel microphone-array processing method enabling reliable broadside sound localization with only 2 microphones, overcoming array geometry limitations.</li>
                        <li>Achieved robust interference suppression in environments with 10+ competing speakers through adaptive beamforming and spectral masking techniques.</li>
                        <li>Validated system effectiveness with 20dB SINR improvement and 2.5+ PESQ score, demonstrating strong perceptual and quantitative gains.</li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <h3 className={styles.itemTitle}>4-Point FFT Processor</h3>
                        <span className={styles.date}>September 2025</span>
                    </div>
                    <p className={styles.itemSubtitle}>Verilog, ASIC Flow, VLSI, Hardware Acceleration</p>
                    <ul className={styles.list}>
                        <li>Designed a pipelined 2-stage Radix-2 DIT FFT processor capable of real-time frequency-domain computation for hardware acceleration.</li>
                        <li>Lowered total computation latency by 40% by optimizing twiddle-factor multipliers and restructuring arithmetic datapaths.</li>
                        <li>Completed end-to-end ASIC implementation including RTL design, synthesis (Genus), Place & Route (Innovus), timing analysis, and GDSII export on 90nm CMOS.</li>
                        <li>Achieved 100 MHz timing closure while minimizing area and power, enabling suitability for edge compute accelerators.</li>
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>🐆 Leadership & Activities</h2>
                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <h3 className={styles.itemTitle}>Signal Processing and Controls Research Group Head</h3>
                        <span className={styles.date}>Aug 2025 – Present</span>
                    </div>
                    <p className={styles.itemSubtitle}>Club ElectroniX — Society of Electronics Engineers, IIITDM Kurnool</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>🐈 Technical Skills</h2>
                <div className={styles.skillsGrid}>
                    <span className={styles.skill}>Signal Processing: DSP Algorithms, SAR Processing, Adaptive Beamforming</span>
                    <span className={styles.skill}>Python</span>
                    <span className={styles.skill}>C/C++</span>
                    <span className={styles.skill}>MATLAB</span>
                    <span className={styles.skill}>CUDA</span>
                    <span className={styles.skill}>Verilog</span>
                    <span className={styles.skill}>PyTorch</span>
                    <span className={styles.skill}>NumPy/SciPy</span>
                    <span className={styles.skill}>Simulink</span>
                    <span className={styles.skill}>Vivado</span>
                    <span className={styles.skill}>Cadence Tools</span>
                    <span className={styles.skill}>STM32</span>
                    <span className={styles.skill}>FPGA (Xilinx Zynq)</span>
                </div>
            </section>
        </div>
    );
}
