import styles from '../services.module.css';
import Link from 'next/link';

export default function AutomationPage() {
    return (
        <div className={styles.servicesPage}>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.badge}>Next-Gen AI</div>
                    <h1 className="gradient-text">Workflow Automation</h1>
                    <p>Eliminate bottlenecks and drive efficiency with intelligent process automation.</p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className={styles.detailGrid}>
                        <div className={styles.detailContent}>
                            <h2>Reimagining Productivity</h2>
                            <p>
                                Our workflow automation solutions leverage advanced LLMs and specialized AI models
                                to transform how your business operates. We don't just automate tasks; we
                                re-engineer processes for the AI age.
                            </p>
                            <ul className={styles.benefitList}>
                                <li><strong>70% Reduction</strong> in manual repetitive tasks</li>
                                <li><strong>24/7 Operation</strong> without human intervention</li>
                                <li><strong>Zero Error Rate</strong> in data processing and transfer</li>
                                <li><strong>Scalable Architecture</strong> that grows with your business</li>
                            </ul>
                        </div>
                        <div className={`${styles.visualCard} glass`}>
                            {/* Visual representation placeholder */}
                            <div className={styles.animatedBars}>
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <Link href="/contact" className="btn-primary">Get Started with Automation</Link>
                </div>
            </section>
        </div>
    );
}
