import styles from '../services.module.css';
import Link from 'next/link';

export default function ConsultingPage() {
    const consultingPhases = [
        {
            phase: '01',
            title: 'Strategy & Discovery',
            duration: '2-4 weeks',
            activities: [
                'Business objectives assessment',
                'Current process analysis',
                'AI opportunity identification',
                'ROI modeling & prioritization'
            ],
            deliverables: ['AI Strategy Roadmap', 'Use Case Portfolio', 'Implementation Plan']
        },
        {
            phase: '02',
            title: 'Solution Design',
            duration: '3-6 weeks',
            activities: [
                'Architecture design',
                'Technology stack selection',
                'Data pipeline planning',
                'Integration strategy'
            ],
            deliverables: ['Technical Architecture', 'Data Strategy', 'Integration Blueprint']
        },
        {
            phase: '03',
            title: 'Implementation & Integration',
            duration: '8-16 weeks',
            activities: [
                'Model development & training',
                'System integration',
                'Testing & validation',
                'Performance optimization'
            ],
            deliverables: ['Production-Ready System', 'API Documentation', 'Performance Reports']
        },
        {
            phase: '04',
            title: 'Training & Enablement',
            duration: '2-4 weeks',
            activities: [
                'Team training programs',
                'Documentation creation',
                'Best practices workshops',
                'Change management support'
            ],
            deliverables: ['Training Materials', 'User Guides', 'Support Playbooks']
        },
        {
            phase: '05',
            title: 'Optimization & Scale',
            duration: 'Ongoing',
            activities: [
                'Performance monitoring',
                'Continuous improvement',
                'Feature enhancement',
                'Scaling support'
            ],
            deliverables: ['Analytics Dashboard', 'Optimization Reports', 'Scale Recommendations']
        }
    ];

    const industryExpertise = [
        {
            industry: 'Healthcare',
            icon: '🏥',
            solutions: ['Patient data analysis', 'Diagnostic assistance', 'Workflow automation', 'Compliance management']
        },
        {
            industry: 'Finance',
            icon: '💰',
            solutions: ['Risk assessment', 'Fraud detection', 'Portfolio optimization', 'Customer insights']
        },
        {
            industry: 'Retail',
            icon: '🛍️',
            solutions: ['Demand forecasting', 'Personalization', 'Inventory optimization', 'Customer service']
        },
        {
            industry: 'Manufacturing',
            icon: '🏭',
            solutions: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Process automation']
        }
    ];

    return (
        <div className={styles.servicesPage}>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.badge}>Strategic Partnership</div>
                    <h1 className="gradient-text">End-to-End AI Consulting</h1>
                    <p className={styles.leadText}>Navigating the complexity of AI integration with strategic precision and proven methodologies.</p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Your Strategic AI Partner</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#94a3b8' }}>
                            Adopting AI isn't just about technology; it's about business transformation.
                            We help you identify high-impact use cases, choose the right models,
                            and implement solutions that deliver measurable value from day one.
                        </p>
                    </div>

                    {/* Value Proposition */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        <div className="glass" style={{ padding: '2rem', textAlign: 'center', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📈</div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>3x ROI</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Average return on investment within first year</p>
                        </div>
                        <div className="glass" style={{ padding: '2rem', textAlign: 'center', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>60% Faster</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Time to market for AI initiatives</p>
                        </div>
                        <div className="glass" style={{ padding: '2rem', textAlign: 'center', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>95% Success</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Project completion rate</p>
                        </div>
                        <div className="glass" style={{ padding: '2rem', textAlign: 'center', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>100+ Projects</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Successfully delivered</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Process */}
            <section className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Proven Methodology</h2>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: '#94a3b8' }}>
                        A structured approach to AI transformation that ensures success at every stage
                    </p>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {consultingPhases.map((phase, index) => (
                            <div key={index} className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '2rem' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ 
                                            width: '80px', 
                                            height: '80px', 
                                            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                            borderRadius: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '2rem',
                                            fontWeight: 'bold',
                                            color: 'white',
                                            margin: '0 auto'
                                        }}>
                                            {phase.phase}
                                        </div>
                                        <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#64748b' }}>{phase.duration}</div>
                                    </div>
                                    <div>
                                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: '#3b82f6' }}>{phase.title}</h3>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                            <div>
                                                <h4 style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Key Activities</h4>
                                                <ul style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                                                    {phase.activities.map((activity, i) => (
                                                        <li key={i}>{activity}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Deliverables</h4>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                    {phase.deliverables.map((deliverable, i) => (
                                                        <div key={i} style={{ 
                                                            padding: '0.5rem 1rem',
                                                            background: 'rgba(16, 185, 129, 0.1)',
                                                            border: '1px solid rgba(16, 185, 129, 0.3)',
                                                            borderRadius: '6px',
                                                            fontSize: '0.9rem',
                                                            color: '#10b981',
                                                            fontWeight: '500'
                                                        }}>
                                                            ✓ {deliverable}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Expertise */}
            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>Industry Expertise</h2>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: '#94a3b8' }}>
                        Deep domain knowledge across multiple industries
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {industryExpertise.map((item, index) => (
                            <div key={index} className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>{item.icon}</div>
                                <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.3rem', color: '#3b82f6' }}>{item.industry}</h3>
                                <ul style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                                    {item.solutions.map((solution, i) => (
                                        <li key={i}>{solution}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Packages */}
            <section className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Consulting Packages</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: '1rem', border: '2px solid rgba(59, 130, 246, 0.3)' }}>
                            <h3 style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1.5rem' }}>AI Strategy Sprint</h3>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>2-4 weeks</p>
                            <p style={{ marginBottom: '1.5rem', color: '#94a3b8' }}>Perfect for organizations exploring AI opportunities</p>
                            <ul style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: '2', marginBottom: '2rem' }}>
                                <li>✓ Current state assessment</li>
                                <li>✓ Use case identification</li>
                                <li>✓ ROI analysis</li>
                                <li>✓ Strategic roadmap</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get Started</Link>
                        </div>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: '1rem', border: '2px solid rgba(139, 92, 246, 0.5)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-12px', right: '20px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', color: 'white' }}>POPULAR</div>
                            <h3 style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Full Implementation</h3>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>12-20 weeks</p>
                            <p style={{ marginBottom: '1.5rem', color: '#94a3b8' }}>End-to-end AI solution delivery</p>
                            <ul style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: '2', marginBottom: '2rem' }}>
                                <li>✓ Everything in Strategy Sprint</li>
                                <li>✓ Solution design & architecture</li>
                                <li>✓ Development & integration</li>
                                <li>✓ Training & documentation</li>
                                <li>✓ 3 months support</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get Started</Link>
                        </div>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: '1rem', border: '2px solid rgba(16, 185, 129, 0.3)' }}>
                            <h3 style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Enterprise Partnership</h3>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Ongoing</p>
                            <p style={{ marginBottom: '1.5rem', color: '#94a3b8' }}>Long-term strategic AI partnership</p>
                            <ul style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: '2', marginBottom: '2rem' }}>
                                <li>✓ Dedicated AI team</li>
                                <li>✓ Multiple projects</li>
                                <li>✓ Continuous optimization</li>
                                <li>✓ Priority support</li>
                                <li>✓ Quarterly strategy reviews</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Contact Sales</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className={`${styles.ctaBox} glass`}>
                        <h2 className={styles.ctaTitle}>Ready to Transform Your Business with AI?</h2>
                        <p className={styles.ctaDesc}>Schedule a free consultation to discuss your AI strategy and explore how we can help you achieve your goals.</p>
                        <Link href="/contact" className="btn-primary">Schedule Strategy Session</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
