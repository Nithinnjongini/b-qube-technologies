'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`${styles.navbar} glass`}>
            <div className={`${styles.container} container`}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
                        <path d="M8 8H24V12H12V14H22V18H12V20H24V24H8V8Z" fill="white" />
                        <defs>
                            <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3b82f6" />
                                <stop offset="1" stopColor="#8b5cf6" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className="gradient-text">BQube</span>
                </Link>

                <div className={styles.links}>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/works">Works</Link>
                    <Link href="/careers">Careers</Link>
                    <Link href="/contact" className="btn-primary">Get Started</Link>
                </div>

                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
                    <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
                    <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
                </button>
            </div>

            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/about" onClick={closeMenu}>About</Link>
                    <Link href="/services" onClick={closeMenu}>Services</Link>
                    <Link href="/works" onClick={closeMenu}>Works</Link>
                    <Link href="/careers" onClick={closeMenu}>Careers</Link>
                    <Link href="/contact" className="btn-primary" onClick={closeMenu}>Get Started</Link>
                </div>
            )}
        </nav>
    );
}
