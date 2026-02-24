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
            title: 'Modern Web Application Development',
            description: 'Building scalable, high-performance web applications using the latest frameworks.',
            items: ['React & Next.js', 'TypeScript', 'Responsive Design']
        },
        {
            title: 'Mobile App Development',
            description: 'High-performance, user-centric apps for Android, iOS, and Windows.',
            items: ['Android Development', 'iOS Development', 'Cross-platform Solutions']
        },
        {
            title: 'Digital Branding & Marketing',
            description: 'Enhance your online presence with data-driven marketing strategies.',
            items: ['SEO/SMO', 'Google Ads', 'Content Strategy']
        },
        {
            title: 'Application Services',
            description: 'Custom software solutions designed for scale and reliability.',
            items: ['Solution Design', 'System Integration', 'Cloud Migration']
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
                    <div className={styles.legacyGrid}>
                        {legacyServices.map((service, index) => (
                            <div key={index} className={styles.legacyCard}>
                                <div className={styles.iconPlaceholder}></div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.description}</p>
                                <ul className={styles.itemList}>
                                    {service.items.map((item, i) => (
                                        <li key={i} className={styles.itemListItem}>{item}</li>
                                    ))}
                                </ul>
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
