'use client';

import { useState } from 'react';
import styles from './works.module.css';

export default function WorksPage() {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const projects = [
        {
            id: 1,
            title: 'Autonomous Logistics Agent',
            category: 'AI / Orchestration',
            description: 'A multi-agent system that automated fleet routing and driver communication.',
            useCase: 'A global logistics provider faced delays due to manual dispatching and inefficient route optimization. They needed a system that could handle real-time traffic data and driver availability.',
            implementation: 'We deployed a swarm of autonomous agents. One agent monitors real-time traffic, another manages driver shifts, and a coordinator agent optimizes routes using a multi-objective genetic algorithm. Built with Next.js, Python/FastAPI, and integrated with Google Maps Fleet Engine.',
            image: '/assets/images/image-1.jpg'
        },
        {
            id: 2,
            title: 'Retail Demand Forecaster',
            category: 'AI / Data Science',
            description: 'Predictive analytics for a major retail chain, reducing overstock by 25%.',
            useCase: 'A major retail chain was losing revenue due to overstocking seasonal items and stockouts of fast-moving goods. Existing manual forecasting was only 60% accurate.',
            implementation: 'Implementation involved a custom LSTM (Long Short-Term Memory) neural network trained on 5 years of historical sales data, local weather patterns, and economic indicators. The system provides daily stock level recommendations via a React dashboard.',
            image: '/assets/images/image-2.jpg'
        },
        {
            id: 3,
            title: 'Global Travel Portal',
            category: 'Web Development',
            description: 'High-traffic booking engine with seamless payment integrations.',
            useCase: 'Modernizing a legacy travel booking platform to handle 10k+ concurrent users while providing a mobile-first user experience.',
            implementation: 'Built with Next.js 15 for server-side rendering and edge caching. We implemented a microservices architecture using Node.js, ensuring high availability. Features a custom booking engine with integrated Stripe and PayPal global gateways.',
            image: '/assets/images/image-3.jpg'
        },
        {
            id: 4,
            title: 'FinTech Mobile Suite',
            category: 'Mobile App',
            description: 'Secure, user-friendly banking applications for Android and iOS.',
            useCase: 'A regional bank needed to transition from traditional banking to a comprehensive digital experience for its younger demographic.',
            implementation: 'Developed using React Native for cross-platform efficiency. We implemented biometric authentication (FaceID/TouchID), real-time transaction notifications via Firebase, and a custom data visualization engine for user spending habits.',
            image: '/assets/images/image-4.jpg'
        }
    ];

    return (
        <div className={styles.worksPage}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className="gradient-text">Our Works</h1>
                    <p>Delivering excellence through innovation and technical mastery.</p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={`${styles.projectCard} glass`}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div
                                    className={styles.visualPlaceholder}
                                >
                                    <img src={project.image} alt={project.title} className={styles.projectImage} />
                                </div>
                                <div className={styles.meta}>
                                    <span className={styles.category}>{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <button className={styles.viewDetails}>View Details →</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedProject && (
                <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
                    <div className={`${styles.modalContent} glass`} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setSelectedProject(null)}>×</button>

                        <div className={styles.modalHeader}>
                            <img src={selectedProject.image} alt={selectedProject.title} className={styles.modalImage} />
                            <div className={styles.modalHeaderOverlay}>
                                <span className={styles.category}>{selectedProject.category}</span>
                                <h2>{selectedProject.title}</h2>
                            </div>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.detailSection}>
                                <h4>Business Use Case</h4>
                                <p>{selectedProject.useCase}</p>
                            </div>
                            <div className={styles.detailSection}>
                                <h4>Implementation</h4>
                                <p>{selectedProject.implementation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
