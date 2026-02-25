import styles from './services.module.css';
import Link from 'next/link';

export default function ServicesPage() {
    const aiServices = [
        {
            id: 'automation',
            title: 'Workflow Automation',
            description: 'Streamline your operations with intelligent, autonomous workflows that reduce overhead and increase speed.',
            href: '/services/automation'
        },
        {
            id: 'orchestration',
            title: 'Multi-Agent Orchestration',
            description: 'Deploy advanced AI agents capable of specialized tasks, coordinated through a central intelligence hub.',
            href: '/services/orchestration'
        },
        {
            id: 'consulting',
            title: 'End-to-End AI Consulting',
            description: 'Strategic roadmap development and implementation for businesses looking to lead in the AI era.',
            href: '/services/consulting'
        }
    ];

    const legacyServices = [
        {
            icon: '🌐',
            title: 'Modern Web Application Development',
            description: 'Building scalable, high-performance web applications using cutting-edge frameworks and best practices for optimal user experience.',
            features: [
                {
                    name: 'Frontend Excellence',
                    details: 'React, Next.js, Vue.js with TypeScript for type-safe, maintainable code'
                },
                {
                    name: 'Backend Architecture',
                    details: 'Node.js, Python, .NET Core with microservices and serverless patterns'
                },
                {
                    name: 'Responsive Design',
                    details: 'Mobile-first approach with TailwindCSS, ensuring perfect display on all devices'
                },
                {
                    name: 'Performance Optimization',
                    details: 'Code splitting, lazy loading, CDN integration for lightning-fast load times'
                }
            ],
            technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'TailwindCSS', 'GraphQL'],
            benefits: ['50% faster development', '99.9% uptime', 'SEO optimized']
        },
        {
            icon: '📱',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications that deliver exceptional user experiences with robust performance and seamless functionality.',
            features: [
                {
                    name: 'Native iOS Development',
                    details: 'Swift & SwiftUI for powerful, native iOS experiences with latest Apple features'
                },
                {
                    name: 'Native Android Development',
                    details: 'Kotlin & Jetpack Compose for modern, efficient Android applications'
                },
                {
                    name: 'Cross-Platform Solutions',
                    details: 'React Native & Flutter for code reuse across iOS and Android platforms'
                },
                {
                    name: 'App Store Optimization',
                    details: 'Complete deployment pipeline with ASO strategies for maximum visibility'
                }
            ],
            technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS Mobile'],
            benefits: ['60% cost savings', 'Multi-platform reach', 'Native performance']
        },
        {
            icon: '🎯',
            title: 'Digital Branding & Marketing',
            description: 'Data-driven digital marketing strategies that amplify your brand presence, engage your audience, and drive measurable business growth.',
            features: [
                {
                    name: 'SEO & Content Strategy',
                    details: 'Comprehensive SEO audits, keyword research, and content optimization for top rankings'
                },
                {
                    name: 'Social Media Marketing',
                    details: 'Strategic SMO campaigns across platforms with engagement analytics and growth tracking'
                },
                {
                    name: 'Paid Advertising',
                    details: 'Google Ads, Facebook Ads, LinkedIn campaigns with ROI-focused optimization'
                },
                {
                    name: 'Brand Identity Design',
                    details: 'Logo design, brand guidelines, and visual identity systems that resonate'
                }
            ],
            technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Adobe Creative Suite', 'Figma'],
            benefits: ['3x organic traffic', '200% ROI on ads', 'Brand recognition']
        },
        {
            icon: '⚙️',
            title: 'Enterprise Application Services',
            description: 'End-to-end enterprise software solutions designed for scalability, reliability, and seamless integration with your existing technology ecosystem.',
            features: [
                {
                    name: 'Custom Solution Design',
                    details: 'Tailored enterprise applications built to your specific business requirements and workflows'
                },
                {
                    name: 'System Integration',
                    details: 'Seamless integration with ERP, CRM, and legacy systems using modern APIs and middleware'
                },
                {
                    name: 'Cloud Migration',
                    details: 'Strategic migration to AWS, Azure, or GCP with zero downtime and enhanced performance'
                },
                {
                    name: 'DevOps & CI/CD',
                    details: 'Automated deployment pipelines, monitoring, and infrastructure as code for reliability'
                }
            ],
            technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
            benefits: ['40% cost reduction', 'Zero downtime', 'Enterprise-grade security']
        }
    ];

    return (
        <div className={styles.servicesPage}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.mainTitle}>Our Services</h1>
                    <p className={styles.leadText}>Innovative solutions designed to propel your business beyond boundaries.</p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>AI-First Solutions</h2>
                    <div className={styles.aiGrid}>
                        {aiServices.map((service) => (
                            <div key={service.id} className={`${styles.aiCard} glass`}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.description}</p>
                                <Link href={service.href} className="btn-primary">Learn Details</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.legacySection} section`}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Digital Excellence</h2>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: '#94a3b8', fontSize: '1.1rem' }}>
                        Comprehensive digital services powered by modern technology stacks and industry best practices
                    </p>
                    <div style={{ display: 'grid', gap: '3rem' }}>
                        {legacyServices.map((service, index) => (
                            <div key={index} className="glass" style={{ padding: '2.5rem', borderRadius: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2rem', marginBottom: '2rem' }}>
                                    <div style={{ 
                                        fontSize: '3.5rem', 
                                        width: '80px', 
                                        height: '80px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                                        borderRadius: '16px'
                                    }}>
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', color: '#3b82f6' }}>{service.title}</h3>
                                        <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: '1.7' }}>{service.description}</p>
                                    </div>
                                </div>

                                {/* Features Grid */}
                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Key Features</h4>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                        {service.features.map((feature, i) => (
                                            <div key={i} style={{ 
                                                padding: '1.25rem',
                                                background: 'rgba(59, 130, 246, 0.05)',
                                                border: '1px solid rgba(59, 130, 246, 0.2)',
                                                borderRadius: '12px'
                                            }}>
                                                <h5 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#3b82f6', fontWeight: '600' }}>
                                                    {feature.name}
                                                </h5>
                                                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>
                                                    {feature.details}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies & Benefits */}
                                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Technology Stack</h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                            {service.technologies.map((tech, i) => (
                                                <span key={i} style={{ 
                                                    padding: '0.5rem 1rem',
                                                    background: 'rgba(139, 92, 246, 0.1)',
                                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                                    borderRadius: '20px',
                                                    fontSize: '0.85rem',
                                                    color: '#8b5cf6',
                                                    fontWeight: '500'
                                                }}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Key Benefits</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            {service.benefits.map((benefit, i) => (
                                                <div key={i} style={{ 
                                                    padding: '0.5rem 0.75rem',
                                                    background: 'rgba(16, 185, 129, 0.1)',
                                                    borderLeft: '3px solid #10b981',
                                                    borderRadius: '4px',
                                                    fontSize: '0.9rem',
                                                    color: '#10b981',
                                                    fontWeight: '500'
                                                }}>
                                                    ✓ {benefit}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={`${styles.ctaBox} glass`}>
                        <h2 className={styles.ctaTitle}>Not sure where to start?</h2>
                        <p className={styles.ctaDesc}>Our experts can help you identify the best AI opportunities for your business.</p>
                        <Link href="/contact" className="btn-primary">Book a Consultation</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
