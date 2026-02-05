import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FaAward, FaUsers, FaGlobeAmericas, FaHandshake, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [whoWeAreExpanded, setWhoWeAreExpanded] = useState(false);
  const whoWeAreParagraphs = [
    'Beyond Audit was not created in a boardroom — it was built on the ground, through real audit assignments, field verifications, and compliance-driven execution.',
    'Our journey began as Southern and Co, a focused audit manpower and verification firm operating across South India. Working closely with Chartered Accountants, corporates, banks, and financial institutions, we were deeply involved in executing audits where accuracy, timelines, and accountability were non-negotiable.',
    'Very early, we identified a persistent industry challenge — the lack of reliable, scalable, and location-ready audit manpower. Audits were often delayed or compromised due to fragmented coordination, inconsistent reporting, and the unavailability of verified auditors and freelancers across multiple locations.',
    'As audit requirements expanded beyond regions and volumes increased across states, Southern and Co naturally evolved. What began as a regional service provider transformed into a pan-India audit execution ecosystem, leading to the creation of Beyond Audit — a platform designed to deliver consistency, speed, and integrity in audit execution, irrespective of geography.',
    'Today, Beyond Audit stands as India\'s leading audit intelligence and staffing platform, connecting enterprises with a verified network of 50,000+ qualified professionals, including Chartered Accountants, CMAs, and experienced audit freelancers, across 25,000+ locations nationwide.',
    'We combine human expertise with digital precision to offer end-to-end audit verification, field audits, and on-demand manpower solutions. From stock audits and NBFC audits to distributor, retail, and large-scale field verifications, we ensure seamless execution through verified auditors, structured workflows, and technology-driven reporting.',
    'What started as Southern and Co\'s commitment to audit excellence has now grown into Beyond Audit\'s mission — to redefine how audits are delivered in India, with transparency, accountability, and scale.'
  ];
  const initialParagraphs = 2;
  const values = [
    { icon: <FaAward />, title: 'Excellence', text: 'We deliver exceptional accounting services through expertise and dedication', image: '/images/excellence.webp' },
    { icon: <FaHandshake />, title: 'Integrity', text: 'Trust and transparency guide every client relationship', image: '/images/integrity.avif' },
    { icon: <FaUsers />, title: 'Collaboration', text: 'We work alongside you as partners in financial success', image: '/images/collaboration.avif' },
    { icon: <FaGlobeAmericas />, title: 'Innovation', text: 'Modern accounting solutions for complex financial challenges', image: '/images/innovation.webp' }
  ];

  const milestones = [
    {
      year: '2020',
      events: [
        'Southern and Co was established with a focus on audit manpower support and field verifications across South India.',
        'Early assignments built a reputation for disciplined execution and on-ground reliability.'
      ]
    },
    {
      year: '2021',
      events: [
        'Operations expanded across multiple states with growing audit volumes and repeat engagements.',
        'The auditor and freelancer network was strengthened to support time-bound audit requirements.'
      ]
    },
    {
      year: '2022',
      events: [
        'Southern and Co executed complex, multi-location audits, including assignments in operationally challenging regions.',
        'Standardised workflows and reporting practices were implemented to ensure consistency.'
      ]
    },
    {
      year: '2023',
      events: [
        'National and cross-border audit requirements marked a key milestone in the journey.',
        'Southern and Co supported audit execution for the PVR cinema chain in Sri Lanka, reflecting expanding geographic reach and client trust.'
      ]
    },
    {
      year: '2024',
      events: [
        'Beyond Audit was formally launched as a pan-India audit intelligence and staffing platform.',
        'Collaborations were undertaken with select Big 10 audit firms in India to support large-scale audit and verification engagements.'
      ]
    },
    {
      year: '2025',
      events: [
        'Beyond Audit enabled enterprises, NBFCs, and CA firms with multi-city audit execution across India.',
        'Technology-driven coordination enhanced transparency, speed, and operational control.'
      ]
    },
    {
      year: '2026',
      events: [
        'Beyond Audit continues to scale nationwide with a focus on execution certainty and audit integrity.',
        'The platform evolves to strengthen reach, reliability, and long-term client partnerships.'
      ]
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-background-overlay"></div>
        <div className="about-hero-container">
          <div className="hero-tagline">ABOUT US</div>
          <h1>About Beyond Audit</h1>
          <p className="hero-description">Redefining the audit and compliance ecosystem through flawless, data-driven field verification powered by precision, integrity, and intelligence. Our pan-India network of 50,000+ qualified professionals delivers unmatched accuracy, transparency, and efficiency across all audit services with complete manpower support.</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-intro-content">
          <div className="who-we-are-text">
            <h2>Who We Are</h2>
            <div className={`who-we-are-content ${whoWeAreExpanded ? 'expanded' : ''}`}>
              {whoWeAreParagraphs.slice(0, whoWeAreExpanded ? whoWeAreParagraphs.length : initialParagraphs).map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
            <button
              type="button"
              className="read-more-btn"
              onClick={() => setWhoWeAreExpanded(!whoWeAreExpanded)}
              aria-expanded={whoWeAreExpanded}
            >
              {whoWeAreExpanded ? (
                <>
                  Read less <FaChevronUp />
                </>
              ) : (
                <>
                  Read more <FaChevronDown />
                </>
              )}
            </button>
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
                {milestone.events.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;

