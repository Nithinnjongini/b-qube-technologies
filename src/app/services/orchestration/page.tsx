import styles from '../services.module.css';

export default function OrchestrationPage() {
    return (
        <div className={styles.servicesPage}>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.badge}>Advanced R&D</div>
                    <h1 className="gradient-text">Multi-Agent Orchestration</h1>
                    <p>Collaborative AI systems that mirror and enhance human organizational structures.</p>
                </div>
            </header>

            <section className="section">
                <div className="container text-center">
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>The Power of Agency</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
                        Multi-agent systems consist of multiple autonomous agents that interact to solve problems
                        that are beyond the individual capabilities or knowledge of each agent. At BQube,
                        we build orchestrations that can manage everything from customer support to complex
                        software development lifecycles.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                            <h4>Specialized Agents</h4>
                            <p>Each agent is fine-tuned for a specific domain—coding, research, or design.</p>
                        </div>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                            <h4>Dynamic Routing</h4>
                            <p>Intelligent routing ensures the right agent handles the right task at the right time.</p>
                        </div>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                            <h4>Conflict Resolution</h4>
                            <p>Built-in consensus mechanisms allow agents to resolve discrepancies and ensure quality.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={`${styles.ctaBox} glass`}>
                        <h3>Ready for an agentic workforce?</h3>
                        <p>Contact us for a demo of our orchestration framework.</p>
                        <a href="/contact" className="btn-primary">Request Agent Demo</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
