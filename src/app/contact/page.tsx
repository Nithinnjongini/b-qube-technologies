'use client';

import { useState } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            service: formData.get('service') as string,
            message: formData.get('message') as string,
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send email');
            }

            setSubmitted(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to send email');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.contactPage}>
            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.content}>
                            <h1 className="gradient-text">Ready to Automate Your Future?</h1>
                            <p>
                                Whether you're looking for a personalized demo of our multi-agent systems
                                or need expert consulting on your next AI project, we're here to help.
                            </p>

                            <div className={styles.contactInfo}>
                                <div className={styles.infoCard}>
                                    <h4>Global Headquarters</h4>
                                    <p>Minnesota, USA</p>
                                </div>
                                <div className={styles.infoCard}>
                                    <h4>Texas Office</h4>
                                    <p>Texas, USA</p>
                                </div>
                                <div className={styles.infoCard}>
                                    <h4>Oklahoma Office</h4>
                                    <p>Oklahoma, USA</p>
                                </div>
                                <div className={styles.infoCard}>
                                    <h4>Mississippi Office</h4>
                                    <p>Mississippi, USA</p>
                                </div>
                                <div className={styles.infoCard}>
                                    <h4>India Office</h4>
                                    <p>Kochi, Kerala, India</p>
                                </div>
                                <div className={styles.infoCard}>
                                    <h4>UK Office</h4>
                                    <p>Havant, UK</p>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.formContainer} glass`}>
                            {!submitted ? (
                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <h3>Request a Demo</h3>
                                    {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
                                    <div className={styles.inputGroup}>
                                        <label>Full Name</label>
                                        <input type="text" name="name" placeholder="John Doe" required disabled={loading} />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Work Email</label>
                                        <input type="email" name="email" placeholder="john@company.com" required disabled={loading} />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Service Interested In</label>
                                        <select name="service" required disabled={loading}>
                                            <option value="">Select a service</option>
                                            <option value="Workflow Automation">Workflow Automation</option>
                                            <option value="Multi-Agent Orchestration">Multi-Agent Orchestration</option>
                                            <option value="End-to-End AI Consulting">End-to-End AI Consulting</option>
                                            <option value="Other Software Development">Other Software Development</option>
                                        </select>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Message</label>
                                        <textarea name="message" rows={4} placeholder="Tell us about your project..." required disabled={loading}></textarea>
                                    </div>
                                    <button type="submit" className="btn-primary" disabled={loading}>
                                        {loading ? 'Sending...' : 'Send Request'}
                                    </button>
                                </form>
                            ) : (
                                <div className={styles.success}>
                                    <div className={styles.successIcon}>✓</div>
                                    <h3>Request Received!</h3>
                                    <p>Thank you for reaching out. Our team will contact you shortly to schedule a demo.</p>
                                    <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>Send another message</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
