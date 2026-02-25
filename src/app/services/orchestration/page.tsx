import styles from '../services.module.css';
import Link from 'next/link';

export default function OrchestrationPage() {
    const agentTypes = [
        {
            name: 'Research Agent',
            role: 'Information Gathering',
            capabilities: ['Web Scraping', 'Data Analysis', 'Trend Identification', 'Report Generation'],
            color: '#3b82f6'
        },
        {
            name: 'Developer Agent',
            role: 'Code Generation',
            capabilities: ['Code Writing', 'Testing', 'Debugging', 'Documentation'],
            color: '#8b5cf6'
        },
        {
            name: 'QA Agent',
            role: 'Quality Assurance',
            capabilities: ['Code Review', 'Test Creation', 'Bug Detection', 'Performance Analysis'],
            color: '#10b981'
        },
        {
            name: 'Coordinator Agent',
            role: 'Task Management',
            capabilities: ['Task Distribution', 'Progress Tracking', 'Conflict Resolution', 'Resource Allocation'],
            color: '#f59e0b'
        }
    ];

    const orchestrationExample = {
        scenario: 'Software Development Pipeline',
        steps: [
            { agent: 'Coordinator', action: 'Receives project requirements', output: 'Task breakdown' },
            { agent: 'Research', action: 'Analyzes tech stack & best practices', output: 'Technical recommendations' },
            { agent: 'Developer', action: 'Writes code based on specs', output: 'Initial codebase' },
            { agent: 'QA', action: 'Reviews & tests code', output: 'Bug reports & suggestions' },
            { agent: 'Developer', action: 'Fixes issues & optimizes', output: 'Production-ready code' },
            { agent: 'Coordinator', action: 'Validates completion', output: 'Deployment approval' }
        ]
    };

    return (
        <div className={styles.servicesPage}>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.badge}>Advanced R&D</div>
                    <h1 className="gradient-text">Multi-Agent Orchestration</h1>
                    <p className={styles.leadText}>Collaborative AI systems that mirror and enhance human organizational structures with specialized autonomous agents.</p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The Power of Agency</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#94a3b8' }}>
                            Multi-agent systems consist of multiple autonomous agents that interact to solve problems
                            that are beyond the individual capabilities or knowledge of each agent. At B-Qube,
                            we build orchestrations that can manage everything from customer support to complex
                            software development lifecycles.
                        </p>
                    </div>

                    {/* Architecture Diagram */}
                    <div className="glass" style={{ padding: '3rem', borderRadius: '1.5rem', marginBottom: '3rem' }}>
                        <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>Multi-Agent Architecture</h3>
                        <div className={styles.agentGrid}>
                            {agentTypes.map((agent, index) => (
                                <div key={index} style={{ 
                                    padding: '1.5rem', 
                                    background: `linear-gradient(135deg, ${agent.color}20 0%, ${agent.color}10 100%)`,
                                    border: `2px solid ${agent.color}40`,
                                    borderRadius: '12px',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ 
                                        width: '60px', 
                                        height: '60px', 
                                        margin: '0 auto 1rem',
                                        background: `linear-gradient(135deg, ${agent.color} 0%, ${agent.color}dd 100%)`,
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.5rem',
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }}>
                                        {agent.name.charAt(0)}
                                    </div>
                                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{agent.name}</h4>
                                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>{agent.role}</p>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                                        {agent.capabilities.map((cap, i) => (
                                            <div key={i} style={{ padding: '0.25rem 0' }}>• {cap}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>🔄 Central Orchestration Hub</div>
                            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Coordinates communication, manages workflows, and ensures optimal task distribution</p>
                        </div>
                    </div>

                    {/* Core Capabilities */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
                            <h4 style={{ marginBottom: '0.75rem' }}>Specialized Agents</h4>
                            <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>Each agent is fine-tuned for a specific domain—coding, research, design, or analysis—ensuring expert-level performance.</p>
                        </div>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
                            <h4 style={{ marginBottom: '0.75rem' }}>Dynamic Routing</h4>
                            <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>Intelligent routing ensures the right agent handles the right task at the right time, maximizing efficiency.</p>
                        </div>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤝</div>
                            <h4 style={{ marginBottom: '0.75rem' }}>Conflict Resolution</h4>
                            <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>Built-in consensus mechanisms allow agents to resolve discrepancies and ensure quality through collaborative validation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Example Workflow */}
            <section className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Example: {orchestrationExample.scenario}</h2>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: '#94a3b8' }}>
                        See how multiple specialized agents collaborate to complete a complex software development project
                    </p>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        {orchestrationExample.steps.map((step, index) => (
                            <div key={index} style={{ marginBottom: '1.5rem' }}>
                                <div className={`glass ${styles.orchestrationStepRow}`} style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                                    <div style={{ 
                                        padding: '0.75rem 1rem',
                                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                        borderRadius: '8px',
                                        color: 'white',
                                        fontWeight: '600',
                                        textAlign: 'center',
                                        fontSize: '0.9rem'
                                    }}>
                                        {step.agent} Agent
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>ACTION</div>
                                        <div style={{ fontSize: '1rem', color: '#e2e8f0' }}>{step.action}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>OUTPUT</div>
                                        <div style={{ fontSize: '1rem', color: '#10b981', fontWeight: '500' }}>{step.output}</div>
                                    </div>
                                </div>
                                {index < orchestrationExample.steps.length - 1 && (
                                    <div style={{ textAlign: 'center', padding: '0.5rem', color: '#3b82f6', fontSize: '1.5rem' }}>↓</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>Real-World Applications</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                            <h3 style={{ color: '#3b82f6', marginBottom: '1rem' }}>🏢 Enterprise Automation</h3>
                            <p style={{ marginBottom: '1rem', color: '#94a3b8' }}>Deploy agent teams to handle complex business processes across departments.</p>
                            <ul style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.8' }}>
                                <li>Cross-functional workflow automation</li>
                                <li>Intelligent document processing</li>
                                <li>Automated compliance monitoring</li>
                            </ul>
                        </div>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                            <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>💻 Software Development</h3>
                            <p style={{ marginBottom: '1rem', color: '#94a3b8' }}>Accelerate development with AI agents handling coding, testing, and deployment.</p>
                            <ul style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.8' }}>
                                <li>Automated code generation & review</li>
                                <li>Continuous testing & QA</li>
                                <li>Documentation generation</li>
                            </ul>
                        </div>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                            <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>📊 Data Analysis</h3>
                            <p style={{ marginBottom: '1rem', color: '#94a3b8' }}>Coordinate multiple agents to analyze, visualize, and report on complex datasets.</p>
                            <ul style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.8' }}>
                                <li>Multi-source data integration</li>
                                <li>Automated insight generation</li>
                                <li>Real-time reporting dashboards</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className={`${styles.ctaBox} glass`}>
                        <h2 className={styles.ctaTitle}>Ready for an Agentic Workforce?</h2>
                        <p className={styles.ctaDesc}>Contact us for a demo of our multi-agent orchestration framework and see how AI agents can transform your operations.</p>
                        <Link href="/contact" className="btn-primary">Request Agent Demo</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
