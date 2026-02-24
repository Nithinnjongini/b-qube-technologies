import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.badge}>Next-Gen AI Consulting</div>
            <h1 className={styles.title}>
              Building <span className="gradient-text">Business</span> Beyond Boundaries with AI
            </h1>
            <p className={styles.subtitle}>
              We empower brands with big ideas through advanced AI automation,
              multi-agent orchestration, and premium software development.
            </p>
            <div className={styles.cta}>
              <a href="/contact" className="btn-primary">Request a Demo</a>
              <a href="/services" className={styles.secondaryBtn}>Explore Services</a>
            </div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          {/* AI Visual Placeholder or animated element */}
          <div className={styles.aiCircle}></div>
        </div>
      </section>

      {/* Modernized Legacy Services Section */}
      <section className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Our AI-Driven Expertise</h2>
          <div className={styles.grid}>
            <div className={`${styles.card} glass`}>
              <h3>Multi-Agent Orchestration</h3>
              <p>Autonomous AI agents working in harmony to solve complex business requirements and automate entire departments.</p>
              <a href="/services/orchestration" className={styles.learnMore}>Learn more →</a>
            </div>
            <div className={`${styles.card} glass`}>
              <h3>Workflow Automation</h3>
              <p>Eliminate repetitive tasks with intelligent automation that learns and adapts to your business processes.</p>
              <a href="/services/automation" className={styles.learnMore}>Learn more →</a>
            </div>
            <div className={`${styles.card} glass`}>
              <h3>End-to-End Consulting</h3>
              <p>From strategy to deployment, we guide your AI journey to ensure maximum ROI and competitive advantage.</p>
              <a href="/services/consulting" className={styles.learnMore}>Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Services (Modernized) */}
      <section className={`${styles.legacySection} section`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Digital Excellence</h2>
          <div className={styles.legacyGrid}>
            <div className={styles.legacyItem}>
              <h4>Modern Web Application Development</h4>
              <p>Scalable, high-performance web apps built with React, Next.js, and TypeScript for the modern web.</p>
            </div>
            <div className={styles.legacyItem}>
              <h4>Mobile App Development</h4>
              <p>User-friendly and trending mobile apps for Android and iOS that change how you communicate.</p>
            </div>
            <div className={styles.legacyItem}>
              <h4>Digital Branding</h4>
              <p>Strategic online promotion using SEO, SMO, and Google Adwords to enhance your online presence.</p>
            </div>
            <div className={styles.legacyItem}>
              <h4>Application Services</h4>
              <p>Expertise in solution design, development, and integration using advanced technologies.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
