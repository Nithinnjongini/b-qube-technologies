import styles from '../services.module.css';

export default function ConsultingPage() {
    return (
        <div className={styles.servicesPage}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className="gradient-text">End-to-End AI Consulting</h1>
                    <p>Navigating the complexity of AI integration with strategic precision.</p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2>Your Strategic AI partner</h2>
                            <p>
                                Adopting AI isn't just about technology; it's about business transformation.
                                We help you identify high-impact use cases, choose the right models,
                                and implement solutions that deliver measurable value.
                            </p>
                            <div style={{ marginTop: '2rem' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>01. Strategy & Discovery</strong>
                                    <p>Identifying the biggest levers for AI in your organization.</p>
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>02. Implementation & Integration</strong>
                                    <p>Seamless execution with your existing tech stack.</p>
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>03. Training & Support</strong>
                                    <p>Empowering your team to work alongside AI.</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass" style={{ height: '400px', borderRadius: '2rem' }}></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <a href="/contact" className="btn-primary">Schedule Strategy Session</a>
                </div>
            </section>
        </div>
    );
}
