import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaShieldAlt, FaGlobe, FaCheckCircle, FaChartBar, FaLaptopCode } from 'react-icons/fa';
import './ServicePage.css';

const OtherServices = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge technology solutions and digital strategies.',
      features: ['Technology roadmap', 'System integration', 'Process automation', 'Cloud migration']
    },
    {
      icon: <FaShieldAlt />,
      title: 'Risk & Compliance',
      description: 'Comprehensive risk management and regulatory compliance services.',
      features: ['Risk assessment', 'Compliance audits', 'Policy development', 'Crisis management']
    },
    {
      icon: <FaGlobe />,
      title: 'Market Research',
      description: 'In-depth market analysis and competitive intelligence to inform strategic decisions.',
      features: ['Market sizing', 'Competitor analysis', 'Customer insights', 'Trend forecasting']
    },
    {
      icon: <FaChartBar />,
      title: 'Financial Advisory',
      description: 'Expert financial planning, analysis, and advisory services.',
      features: ['Financial modeling', 'Budgeting & forecasting', 'CFO services', 'Investment advisory']
    },
    {
      icon: <FaCog />,
      title: 'Process Improvement',
      description: 'Optimize operations with lean methodologies and continuous improvement frameworks.',
      features: ['Lean Six Sigma', 'Process mapping', 'Efficiency analysis', 'Change management']
    },
    {
      icon: <FaGlobe />,
      title: 'International Expansion',
      description: 'Strategic guidance for entering new markets and global growth.',
      features: ['Market entry strategy', 'Regulatory guidance', 'Partner identification', 'Localization']
    }
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>Additional Services</h1>
          <p>Comprehensive solutions for all your business needs</p>
        </div>
      </section>

      <section className="service-content">
        <div className="service-intro">
          <h2>Beyond Traditional Consulting</h2>
          <p>
            Our expertise extends far beyond our core services. We offer a comprehensive suite of 
            specialized consulting services to address the unique challenges facing modern businesses.
          </p>
          <p>
            From digital transformation to international expansion, our team has the knowledge and 
            experience to help you navigate complex business landscapes.
          </p>
        </div>

        <div className="other-services-grid">
          {services.map((service, index) => (
            <div key={index} className="other-service-card">
              <div className="service-icon-large">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheckCircle className="feature-check" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="custom-solutions">
          <h2>Custom Solutions</h2>
          <p>
            Don't see what you're looking for? We develop customized consulting solutions tailored 
            to your specific needs. Our flexible engagement models ensure you get exactly the 
            support you need, when you need it.
          </p>
        </div>

        <div className="service-cta">
          <h2>Let's Discuss Your Unique Needs</h2>
          <p>Contact us to explore how we can help your business</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default OtherServices;

