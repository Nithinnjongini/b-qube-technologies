'use client';

import { useState } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setSubmitted(true);
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
                                    <p>9232 Peony Ln N, Maple Grove, MN 55311, USA</p>
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
                                    <div className={styles.inputGroup}>
                                        <label>Full Name</label>
                                        <input type="text" placeholder="John Doe" required />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Work Email</label>
                                        <input type="email" placeholder="john@company.com" required />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Service Interested In</label>
                                        <select required>
                                            <option value="">Select a service</option>
                                            <option value="automation">Workflow Automation</option>
                                            <option value="orchestration">Multi-Agent Orchestration</option>
                                            <option value="consulting">End-to-End AI Consulting</option>
                                            <option value="other">Other Software Development</option>
                                        </select>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Message</label>
                                        <textarea rows={4} placeholder="Tell us about your project..." required></textarea>
                                    </div>
                                    <button type="submit" className="btn-primary">Send Request</button>
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
