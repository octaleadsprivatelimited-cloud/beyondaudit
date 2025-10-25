import React from 'react';
import { Link } from 'react-router-dom';
import { FaAward, FaUsers, FaGlobeAmericas, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    { icon: <FaAward />, title: 'Excellence', text: 'We deliver exceptional accounting services through expertise and dedication' },
    { icon: <FaHandshake />, title: 'Integrity', text: 'Trust and transparency guide every client relationship' },
    { icon: <FaUsers />, title: 'Collaboration', text: 'We work alongside you as partners in financial success' },
    { icon: <FaGlobeAmericas />, title: 'Innovation', text: 'Modern accounting solutions for complex financial challenges' }
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
      <section className="about-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="about-hero-content">
          <h1>About Beyond Audit</h1>
          <p>Providing expert accounting services and financial excellence for over 15 years</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-intro-content">
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
            To empower businesses and individuals with expert accounting services and financial guidance, 
            enabling them to achieve sustainable growth and financial success. Beyond Audit is committed 
            to delivering excellence in every engagement.
          </p>
        </div>
        <div className="mv-card">
          <h2>Our Vision</h2>
          <p>
            To be the most trusted chartered accounting firm, known for providing exceptional 
            financial services and creating value that endures for generations. Beyond Audit 
            strives to go beyond traditional accounting to deliver comprehensive financial solutions.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
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

      <section className="about-cta">
        <h2>Want to Learn More?</h2>
        <p>Discover how we can help optimize your finances and ensure compliance</p>
        <div className="cta-buttons">
          <Link to="/team" className="btn btn-white">Meet Our Team</Link>
          <Link to="/contact" className="btn btn-outline-white">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default About;

