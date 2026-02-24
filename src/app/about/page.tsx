import styles from './about.module.css';

export default function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className="gradient-text">Business Beyond Boundaries</h1>
                    <p>The story of BQube Technologies and our mission to redefine industry standards.</p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className={styles.contentGrid}>
                        <div className={styles.mainContent}>
                            <h2>Who We Are</h2>
                            <p>
                                BQube Technologies is a leading IT consulting and software development firm
                                with global exposure and diverse expertise. We pride ourselves on building
                                long-term relationships and delivering innovative solutions that drive business growth.
                            </p>
                            <p>
                                In the rapidly evolving digital landscape, we have pivoted to an AI-first approach,
                                ensuring our clients stay ahead of the curve with the latest in automation
                                and agentic workflows.
                            </p>
                        </div>
                        <div className={styles.statsGrid}>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
                                <h3>Global</h3>
                                <p>Headquartered in USA with offices in India and UK</p>
                            </div>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
                                <h3>Expertise</h3>
                                <p>Deep field experience across industries</p>
                            </div>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
                                <h3>Reliable</h3>
                                <p>Proper hierarchy & escalation paths</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.visionSection} section`}>
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '3rem', marginBottom: '4rem' }}>Our Vision</h2>
                    <div className={styles.visionGrid}>
                        <div className={styles.visionCard}>
                            <h4>Innovative Delivery</h4>
                            <p>We manage and execute strategic initiatives, creating innovative delivery models that scale.</p>
                        </div>
                        <div className={styles.visionCard}>
                            <h4>Diverse Expertise</h4>
                            <p>From Manufacturing to Retail, Travel to Logistics—we understand your industry's unique challenges.</p>
                        </div>
                        <div className={styles.visionCard}>
                            <h4>Quality First</h4>
                            <p>Our offshore development and outsourcing processes are built on a foundation of uncompromising quality.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
