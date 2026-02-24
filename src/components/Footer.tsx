import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <div className={styles.logo}>
                            <span className="gradient-text">BQube Technologies</span>
                        </div>
                        <p className={styles.description}>Business Beyond Boundaries. AI-First Software Development & Consulting.</p>
                        <div className={styles.social}>
                            {/* Social icons Placeholder */}
                        </div>
                    </div>
                    <div className={styles.column}>
                        <h4 className={styles.heading}>Services</h4>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><Link href="/services#automation">Workflow Automation</Link></li>
                            <li className={styles.listItem}><Link href="/services#orchestration">Multi-Agent Systems</Link></li>
                            <li className={styles.listItem}><Link href="/services#consulting">AI Consulting</Link></li>
                            <li className={styles.listItem}><Link href="/services#mobile">Mobile App Dev</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4 className={styles.heading}>Company</h4>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><Link href="/about">About Us</Link></li>
                            <li className={styles.listItem}><Link href="/works">Our Works</Link></li>
                            <li className={styles.listItem}><Link href="/contact">Contact</Link></li>
                            <li className={styles.listItem}><Link href="/careers">Careers</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4 className={styles.heading}>Locations</h4>
                        <p className={styles.location}>USA | India | UK</p>
                        <p className={styles.email}>info@bqubetech.com</p>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} BQube Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
