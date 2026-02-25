import styles from './careers.module.css';

export default function CareersPage() {
    return (
        <div className={styles.careersPage}>
            <section className="section">
                <div className="container">
                    <div className={styles.heroBox}>
                        <h1 className="gradient-text">Join the AI Revolution</h1>
                        <p>We're always looking for talented engineers, designers, and thinkers to build the future of BQube.</p>
                    </div>

                    <div className={styles.openings}>
                        <h2>Open Positions</h2>
                        <div className={`${styles.jobCard} glass`}>
                            <div>
                                <h3>AI Engineer (Multi-Agent Systems)</h3>
                                <p>USA / Remote</p>
                            </div>
                            <a href="mailto:bqubetechjobs@gmail.com" className="btn-primary">Apply Now</a>
                        </div>
                        <div className={`${styles.jobCard} glass`}>
                            <div>
                                <h3>Senior Full Stack Developer (Next.js)</h3>
                                <p>USA / Remote</p>
                            </div>
                            <a href="mailto:bqubetechjobs@gmail.com" className="btn-primary">Apply Now</a>
                        </div>
                    </div>

                    <div className={styles.contactEmail}>
                        <p>Don't see a position that fits? Send us your CV at <a href="mailto:bqubetechjobs@gmail.com">bqubetechjobs@gmail.com</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
}
