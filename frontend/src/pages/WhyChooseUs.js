import React from 'react';
import { FaAward, FaUsers, FaChartLine, FaGlobe } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaAward />,
      title: 'Proven Track Record',
      description: 'Over 25 years of delivering exceptional results across 500+ successful engagements.'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Team',
      description: 'Our consultants bring deep expertise from leading firms and Fortune 500 companies.'
    },
    {
      icon: <FaChartLine />,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes and long-term value creation for your business.'
    },
    {
      icon: <FaGlobe />,
      title: 'Global Reach',
      description: 'With offices worldwide, we serve clients across all major markets and regions.'
    }
  ];

  return (
    <div className="why-choose-page">
      <section className="why-choose-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="why-choose-hero-content">
          <h1>Why Choose Us</h1>
          <p>What sets us apart in the consulting industry</p>
        </div>
      </section>

      <section className="why-choose-content">
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;

