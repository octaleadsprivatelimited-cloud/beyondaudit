import React from 'react';
// import { Link } from 'react-router-dom';
import { FaAward, FaUsers, FaGlobeAmericas, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    { icon: <FaAward />, title: 'Excellence', text: 'We deliver exceptional accounting services through expertise and dedication', image: '/images/excellence.webp' },
    { icon: <FaHandshake />, title: 'Integrity', text: 'Trust and transparency guide every client relationship', image: '/images/integrity.avif' },
    { icon: <FaUsers />, title: 'Collaboration', text: 'We work alongside you as partners in financial success', image: '/images/collaboration.avif' },
    { icon: <FaGlobeAmericas />, title: 'Innovation', text: 'Modern accounting solutions for complex financial challenges', image: '/images/innovation.webp' }
  ];

  const milestones = [
    { year: '2020', event: 'Launched collaborative audit pods to support rapid nationwide rollouts' },
    { year: '2021', event: 'Expanded manpower network to 6,000+ on-ground professionals across India' },
    { year: '2022', event: 'Introduced real-time audit dashboards for enterprise clients' },
    { year: '2023', event: 'Opened South India command centre to coordinate multi-city engagements' },
    { year: '2024', event: 'Crossed 10,000 qualified collaborators and 400+ enterprise audits' },
    { year: '2025', event: 'Pioneering data-driven assurance across India & South Asia' }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-background-overlay"></div>
        <div className="about-hero-container">
          <div className="hero-tagline">ABOUT US</div>
          <h1>About Beyond Audit</h1>
          <p className="hero-description">Redefining the audit and compliance ecosystem through flawless, data-driven field verification powered by precision, integrity, and intelligence. Our pan-India network of 10,000+ qualified professionals delivers unmatched accuracy, transparency, and efficiency across all audit services with complete manpower support.</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-intro-content">
          <div className="who-we-are-text">
            <h2>Who We Are</h2>
            <p>
              Beyond Audit is India's pacesetter in field verification and audit intelligence, setting new benchmarks in speed, reliability, and technological integration. We envision transforming into a holistic data assurance and staffing platform that connects enterprises with verified audit professionals across 25,000+ locations, providing complete manpower support for all audit services.
            </p>
            <p>
              Our robust pan-India network of over 50,000 qualified professionals — including Chartered Accountants, CMAs, and finance specialists — executes audits with unmatched accuracy, transparency, and efficiency. We provide dedicated manpower teams for all audit services, combining human expertise with digital precision to deliver comprehensive field verification solutions with 99.9% client satisfaction.
            </p>
          </div>
          <div className="who-we-are-stats-grid">
            <div className="who-stat-card">
              <h3>50,000+</h3>
              <span>Qualified Professionals</span>
            </div>
            <div className="who-stat-card">
              <h3>5+</h3>
              <span>Years of Excellence</span>
            </div>
            <div className="who-stat-card">
              <h3>25,000+</h3>
              <span>Locations Covered</span>
            </div>
            <div className="who-stat-card">
              <h3>99.9%</h3>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mv-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to redefine the audit and compliance ecosystem by delivering flawless, data-driven field verification powered by precision, integrity, and intelligence.
            Through our robust pan-India network of over 10,000 qualified professionals — including Chartered Accountants, CMAs, and finance specialists — we execute audits with unmatched accuracy, transparency, and efficiency.
            We provide complete manpower support for all audit services, ensuring that every asset, stock, and process we verify strengthens our clients' confidence and control.
            Beyond Audit exists to empower organizations with insights they can trust and dedicated professional teams who deliver measurable impact.
          </p>
        </div>
        <div className="mv-card">
          <h2>Our Vision</h2>
          <p>
            To be India's pacesetter in field verification and audit intelligence — setting new benchmarks in speed, reliability, and technological integration.
            We envision transforming Beyond Audit into a holistic data assurance and staffing platform that connects enterprises with verified audit professionals across the nation.
            Our vision is to provide comprehensive manpower solutions for all audit services, combining human expertise with digital precision to deliver intelligence-driven assurance.
            Beyond Audit aspires to be synonymous with trust, innovation, and excellence in every audit we undertake with our dedicated professional teams.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-image">
                <img src={value.image} alt={value.title} />
              </div>
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <h2>Our Journey</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{milestone.year}</div>
              <div className="timeline-content">
                <p>{milestone.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;

