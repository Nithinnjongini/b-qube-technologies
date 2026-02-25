import styles from './about.module.css';
import Link from 'next/link';

export default function AboutPage() {
    const coreValues = [
        {
            icon: '🚀',
            title: 'Innovation First',
            description: 'We embrace cutting-edge technologies and push the boundaries of what\'s possible in AI and software development.'
        },
        {
            icon: '🤝',
            title: 'Client Partnership',
            description: 'Your success is our success. We build lasting relationships based on trust, transparency, and shared goals.'
        },
        {
            icon: '⚡',
            title: 'Excellence Delivered',
            description: 'We don\'t just meet expectations—we exceed them. Quality and precision are non-negotiable in everything we do.'
        },
        {
            icon: '🌍',
            title: 'Global Mindset',
            description: 'With teams across continents, we bring diverse perspectives and 24/7 support to every project.'
        },
        {
            icon: '💡',
            title: 'Continuous Learning',
            description: 'The tech landscape evolves rapidly. We invest in our team\'s growth to stay ahead of the curve.'
        },
        {
            icon: '🎯',
            title: 'Results Driven',
            description: 'We measure success by tangible outcomes—ROI, efficiency gains, and business transformation.'
        }
    ];

    const milestones = [
        {
            year: '2018',
            title: 'Founded',
            description: 'B-Qube Technologies established with a vision to transform businesses through technology'
        },
        {
            year: '2020',
            title: 'Global Expansion',
            description: 'Opened offices in India and UK, establishing 24/7 development capabilities'
        },
        {
            year: '2022',
            title: 'AI Transformation',
            description: 'Pivoted to AI-first approach, becoming early adopters of LLM and agentic technologies'
        },
        {
            year: '2024',
            title: '100+ Projects',
            description: 'Delivered over 100 successful projects across healthcare, finance, retail, and manufacturing'
        },
        {
            year: '2026',
            title: 'Industry Leader',
            description: 'Recognized as a leading AI consulting firm with multi-agent orchestration expertise'
        }
    ];

    const achievements = [
        { metric: '100+', label: 'Projects Delivered', icon: '🎯' },
        { metric: '50+', label: 'Enterprise Clients', icon: '🏢' },
        { metric: '95%', label: 'Client Retention', icon: '💯' },
        { metric: '24/7', label: 'Global Support', icon: '🌐' },
        { metric: '3x', label: 'Average ROI', icon: '📈' },
        { metric: '15+', label: 'Industries Served', icon: '🔧' }
    ];

    return (
        <div className={styles.aboutPage}>
            {/* Hero Section */}
            <header className={styles.header}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem' }}>
                            Business Beyond Boundaries
                        </h1>
                        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#94a3b8', marginBottom: '2rem' }}>
                            Pioneering the future of business with AI-first solutions that transform industries and empower organizations to achieve the extraordinary.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact" className="btn-primary">Start Your Journey</Link>
                            <Link href="/services" style={{ padding: '0.75rem 1.5rem', border: '2px solid var(--primary)', borderRadius: '8px', fontWeight: '600', transition: 'all 0.3s' }}>
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Our Story */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Story</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#94a3b8' }}>
                                Founded in 2018, B-Qube Technologies emerged from a simple yet powerful vision: to help businesses transcend traditional boundaries through innovative technology solutions.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#94a3b8' }}>
                                What started as a boutique consulting firm has evolved into a global AI-first powerhouse. We recognized early that artificial intelligence wasn't just the future—it was the present. In 2022, we made a bold pivot to become AI-native, investing heavily in LLM technologies, multi-agent systems, and intelligent automation.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#94a3b8' }}>
                                Today, we're proud to serve enterprise clients across 15+ industries, delivering solutions that don't just solve problems—they create competitive advantages and unlock new possibilities.
                            </p>
                        </div>
                        <div className="glass" style={{ padding: '3rem', borderRadius: '1.5rem' }}>
                            <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Why Choose B-Qube?</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>AI-First Approach</h4>
                                    <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>We don't just use AI—we architect intelligent systems that learn, adapt, and scale.</p>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌍</div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Global Reach</h4>
                                    <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Offices in USA, India, and UK ensure round-the-clock support and diverse expertise.</p>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💎</div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Proven Track Record</h4>
                                    <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>100+ successful projects with 95% client retention rate speak for themselves.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Our Impact in Numbers</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
                        {achievements.map((achievement, index) => (
                            <div key={index} className="glass" style={{ padding: '2rem', textAlign: 'center', borderRadius: '1rem' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{achievement.icon}</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                                    {achievement.metric}
                                </div>
                                <div style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{achievement.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
                        <div className="glass" style={{ padding: '3rem', borderRadius: '1.5rem', border: '2px solid var(--primary)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>Our Mission</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#94a3b8' }}>
                                To empower businesses with AI-first solutions that drive innovation, efficiency, and growth. We exist to make advanced technology accessible, practical, and transformative for organizations of all sizes.
                            </p>
                        </div>
                        <div className="glass" style={{ padding: '3rem', borderRadius: '1.5rem', border: '2px solid var(--secondary)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--secondary)' }}>Our Vision</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#94a3b8' }}>
                                To be the world's most trusted AI consulting partner, recognized for turning ambitious ideas into reality and helping businesses operate beyond traditional boundaries through intelligent automation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core Values</h2>
                    <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', color: '#94a3b8', fontSize: '1.1rem' }}>
                        These principles guide every decision we make and every solution we deliver
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {coreValues.map((value, index) => (
                            <div key={index} className="glass" style={{ padding: '2rem', borderRadius: '1rem', transition: 'transform 0.3s' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{value.title}</h4>
                                <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Our Journey</h2>
                    <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem', color: '#94a3b8', fontSize: '1.1rem' }}>
                        From humble beginnings to industry leadership—here's how we've grown
                    </p>
                    <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
                        {milestones.map((milestone, index) => (
                            <div key={index} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '2rem', marginBottom: '3rem', position: 'relative' }}>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ 
                                        display: 'inline-block',
                                        padding: '0.5rem 1.5rem',
                                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                                        borderRadius: '20px',
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem'
                                    }}>
                                        {milestone.year}
                                    </div>
                                </div>
                                <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', borderLeft: '4px solid var(--primary)' }}>
                                    <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{milestone.title}</h4>
                                    <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Culture */}
            <section className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Built by Innovators, For Innovators</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#94a3b8', marginBottom: '3rem' }}>
                            Our team is our greatest asset. We bring together world-class engineers, AI researchers, business strategists, and creative thinkers who share a passion for solving complex problems and pushing technological boundaries.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>50+</h3>
                                <p style={{ color: '#94a3b8' }}>Expert Team Members</p>
                            </div>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>10+</h3>
                                <p style={{ color: '#94a3b8' }}>Years Avg Experience</p>
                            </div>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>3</h3>
                                <p style={{ color: '#94a3b8' }}>Global Offices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="glass" style={{ padding: '4rem', borderRadius: '1.5rem', textAlign: 'center', border: '2px solid var(--primary)' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Transform Your Business?</h2>
                        <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                            Join the 50+ enterprise clients who trust us to deliver AI-first solutions that drive real results.
                        </p>
                        <Link href="/contact" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                            Let's Build Something Amazing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
