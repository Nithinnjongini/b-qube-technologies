import styles from '../services.module.css';
import Link from 'next/link';

export default function AutomationPage() {
    const useCases = [
        {
            title: 'Customer Support Automation',
            description: 'AI-powered ticket routing, response generation, and sentiment analysis',
            workflow: ['Ticket Received', 'AI Classification', 'Smart Routing', 'Auto-Response', 'Human Escalation (if needed)']
        },
        {
            title: 'Document Processing',
            description: 'Intelligent extraction, validation, and data entry from any document format',
            workflow: ['Document Upload', 'OCR & Extraction', 'Data Validation', 'System Integration', 'Archive & Audit']
        },
        {
            title: 'Sales Pipeline Automation',
            description: 'Lead qualification, follow-up scheduling, and CRM updates',
            workflow: ['Lead Capture', 'AI Scoring', 'Auto-Nurture', 'Meeting Scheduling', 'CRM Sync']
        }
    ];

    return (
        <div className={styles.servicesPage}>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.badge}>Next-Gen AI</div>
                    <h1 className="gradient-text">Workflow Automation</h1>
                    <p className={styles.leadText}>Eliminate bottlenecks and drive efficiency with intelligent process automation powered by advanced AI.</p>
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
                            <p>
                                From document processing to customer support, our intelligent automation systems
                                learn from your operations, adapt to changes, and continuously optimize for
                                maximum efficiency.
                            </p>
                            <ul className={styles.benefitList}>
                                <li><strong>70% Reduction</strong> in manual repetitive tasks</li>
                                <li><strong>24/7 Operation</strong> without human intervention</li>
                                <li><strong>Zero Error Rate</strong> in data processing and transfer</li>
                                <li><strong>Scalable Architecture</strong> that grows with your business</li>
                            </ul>
                        </div>
                        <div className={`${styles.visualCard} glass`}>
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Automation Architecture</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ padding: '1rem', background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', borderRadius: '8px', color: 'white', textAlign: 'center', fontWeight: '600' }}>
                                    Input Sources
                                </div>
                                <div style={{ textAlign: 'center', fontSize: '1.5rem', color: '#3b82f6' }}>↓</div>
                                <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', border: '2px solid #3b82f6', borderRadius: '8px', textAlign: 'center', fontWeight: '600' }}>
                                    AI Processing Layer
                                </div>
                                <div style={{ textAlign: 'center', fontSize: '1.5rem', color: '#8b5cf6' }}>↓</div>
                                <div style={{ padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', border: '2px solid #8b5cf6', borderRadius: '8px', textAlign: 'center', fontWeight: '600' }}>
                                    Smart Decision Engine
                                </div>
                                <div style={{ textAlign: 'center', fontSize: '1.5rem', color: '#10b981' }}>↓</div>
                                <div style={{ padding: '1rem', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', borderRadius: '8px', color: 'white', textAlign: 'center', fontWeight: '600' }}>
                                    Automated Actions
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Real-World Use Cases</h2>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: '#94a3b8' }}>
                        See how our automation solutions transform business operations across different industries
                    </p>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {useCases.map((useCase, index) => (
                            <div key={index} className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'center' }}>
                                    <div>
                                        <h3 style={{ marginBottom: '0.5rem', color: '#3b82f6' }}>{useCase.title}</h3>
                                        <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{useCase.description}</p>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                        {useCase.workflow.map((step, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <div style={{ 
                                                    padding: '0.5rem 1rem', 
                                                    background: i === 0 ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' : 'rgba(59, 130, 246, 0.1)',
                                                    border: i === 0 ? 'none' : '1px solid rgba(59, 130, 246, 0.3)',
                                                    borderRadius: '6px',
                                                    color: i === 0 ? 'white' : '#e2e8f0',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '500',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    {step}
                                                </div>
                                                {i < useCase.workflow.length - 1 && (
                                                    <span style={{ color: '#3b82f6', fontSize: '1.2rem' }}>→</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Technology Stack</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                        <div className="glass" style={{ padding: '1.5rem', textAlign: 'center', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤖</div>
                            <h4 style={{ marginBottom: '0.5rem' }}>LLM Integration</h4>
                            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>GPT-4, Claude, Custom Models</p>
                        </div>
                        <div className="glass" style={{ padding: '1.5rem', textAlign: 'center', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Workflow Engines</h4>
                            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>n8n, Zapier, Custom Orchestration</p>
                        </div>
                        <div className="glass" style={{ padding: '1.5rem', textAlign: 'center', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔗</div>
                            <h4 style={{ marginBottom: '0.5rem' }}>API Integration</h4>
                            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>REST, GraphQL, Webhooks</p>
                        </div>
                        <div className="glass" style={{ padding: '1.5rem', textAlign: 'center', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Analytics & Monitoring</h4>
                            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Real-time Dashboards, Alerts</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className={`${styles.ctaBox} glass`}>
                        <h2 className={styles.ctaTitle}>Ready to Automate Your Workflows?</h2>
                        <p className={styles.ctaDesc}>Let's discuss how we can transform your operations with intelligent automation.</p>
                        <Link href="/contact" className="btn-primary">Get Started with Automation</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
