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
    { year: '2008', event: 'Founded as a chartered accounting firm' },
    { year: '2012', event: 'Expanded to multiple cities' },
    { year: '2015', event: 'Reached 100+ clients milestone' },
    { year: '2018', event: 'Launched digital accounting services' },
    { year: '2020', event: 'Celebrated 12 years of excellence' },
    { year: '2025', event: 'Leading digital accounting transformation' }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-background-overlay"></div>
        <div className="about-hero-container">
          <div className="hero-tagline">ABOUT US</div>
          <h1>About Beyond Audit</h1>
          <p className="hero-description">Providing expert accounting services and financial excellence for over 15 years</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-intro-content">
          <div className="who-we-are-image">
            <img src="/images/who-we-are-beyond-audit.webp" alt="Who We Are - Beyond Audit Team" />
          </div>
          <div className="who-we-are-text">
            <h2>Who We Are</h2>
            <p>
              Founded in 2008, Beyond Audit has grown from a small practice to a 
              trusted financial services provider. With a team of qualified chartered accountants 
              and financial experts, we've helped hundreds of businesses and individuals achieve 
              their financial objectives.
            </p>
            <p>
              Our success is built on deep accounting expertise, innovative financial solutions, and an 
              unwavering commitment to client success. We don't just provide accounting services – we partner 
              with you to drive meaningful, measurable financial results.
            </p>
          </div>
        </div>
        <div className="about-stats">
          <div className="stat-box">
            <h3>15+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-box">
            <h3>10+</h3>
            <p>Chartered Accountants</p>
          </div>
          <div className="stat-box">
            <h3>500+</h3>
            <p>Businesses Served</p>
          </div>
          <div className="stat-box">
            <h3>1000+</h3>
            <p>Tax Returns Filed</p>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mv-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to redefine the audit and compliance ecosystem by delivering flawless, data-driven field verification powered by precision, integrity, and intelligence.
            Through our robust pan-India network of over 10,000 qualified professionals — including Chartered Accountants, CMAs, and finance specialists — we execute audits with unmatched accuracy, transparency, and efficiency.
            We are committed to operational excellence, technological adoption, and end-to-end service delivery, ensuring that every asset, stock, and process we verify strengthens our clients' confidence and control.
            Beyond Audit exists to empower organizations with insights they can trust and professionals who deliver measurable impact.
          </p>
        </div>
        <div className="mv-card">
          <h2>Our Vision</h2>
          <p>
            To be India's pacesetter in field verification and audit intelligence — setting new benchmarks in speed, reliability, and technological integration.
            We envision transforming Beyond Audit into a holistic data assurance and staffing platform that connects enterprises with verified audit professionals across the nation.
            Our vision is to lead the industry's evolution from manpower dependency to intelligence-driven assurance, combining human expertise with digital precision.
            Beyond Audit aspires to be synonymous with trust, innovation, and excellence in every audit we undertake.
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

