import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaUserTie, FaChartLine, FaHandshake, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const StaffAugmentation = () => {
  const features = [
    {
      icon: <FaUsers />,
      title: 'Finance Professionals',
      description: 'Access to a network of 50,000+ qualified Chartered Accountants, CMAs, and finance specialists across India.'
    },
    {
      icon: <FaUserTie />,
      title: 'Expert Talent Pool',
      description: 'Pre-screened professionals with verified credentials, experience, and expertise in various finance domains.'
    },
    {
      icon: <FaChartLine />,
      title: 'Flexible Engagement',
      description: 'Hire finance professionals on a project basis, part-time, or full-time based on your business needs.'
    },
    {
      icon: <FaHandshake />,
      title: 'Quick Deployment',
      description: 'Rapid onboarding and deployment of qualified professionals to meet your urgent staffing requirements.'
    }
  ];

  const services = [
    {
      title: 'Audit Staff Augmentation',
      description: 'Deploy qualified auditors and audit assistants for stock audits, quality audits, compliance audits, and other field verification services.',
      benefits: [
        'Chartered Accountants and CMAs',
        'Field audit professionals',
        'Compliance specialists',
        'Quality assurance experts'
      ]
    },
    {
      title: 'Finance & Accounting Staff',
      description: 'Access experienced finance professionals for bookkeeping, financial reporting, tax planning, and accounting operations.',
      benefits: [
        'Financial analysts',
        'Accountants and bookkeepers',
        'Tax consultants',
        'Financial reporting specialists'
      ]
    },
    {
      title: 'Compliance & Regulatory Staff',
      description: 'Hire compliance professionals well-versed in statutory requirements, regulatory frameworks, and industry-specific mandates.',
      benefits: [
        'Compliance officers',
        'Regulatory affairs specialists',
        'Internal audit professionals',
        'Risk management experts'
      ]
    },
    {
      title: 'Project-Based Finance Teams',
      description: 'Assemble dedicated finance teams for specific projects, mergers, acquisitions, or special financial initiatives.',
      benefits: [
        'M&A specialists',
        'Due diligence teams',
        'Financial modeling experts',
        'Project finance consultants'
      ]
    }
  ];

  const benefits = [
    'Access to 50,000+ qualified finance professionals across India',
    'Pre-verified credentials and background checks',
    'Flexible engagement models (project-based, part-time, full-time)',
    'Rapid deployment within 48-72 hours',
    'Cost-effective staffing solutions',
    'Pan-India coverage with local expertise',
    'Scalable teams based on project requirements',
    'Complete manpower support for all audit services'
  ];

  const process = [
    {
      step: '1',
      title: 'Requirement Analysis',
      description: 'We understand your staffing needs, project scope, and skill requirements.'
    },
    {
      step: '2',
      title: 'Talent Matching',
      description: 'Our team matches qualified professionals from our network based on your specific requirements.'
    },
    {
      step: '3',
      title: 'Screening & Selection',
      description: 'We provide pre-screened candidates with verified credentials for your review and selection.'
    },
    {
      step: '4',
      title: 'Deployment',
      description: 'Selected professionals are onboarded and deployed to your project within 48-72 hours.'
    },
    {
      step: '5',
      title: 'Ongoing Support',
      description: 'We provide continuous support and can scale teams up or down based on project needs.'
    }
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">STAFF AUGMENTATION SERVICES</div>
          <h1>Staff Augmentation Services</h1>
          <p className="hero-description">
            Access India's largest network of 50,000+ qualified finance professionals. Hire Chartered Accountants, CMAs, 
            and finance specialists on demand for your audit, compliance, and financial operations needs.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="service-description">
          <h2>Expert Finance Professionals on Demand</h2>
          <p>
            Beyond Audit's Staff Augmentation Services connects you with India's most extensive network of qualified 
            finance professionals. Whether you need auditors for field verification, accountants for financial operations, 
            or compliance specialists for regulatory requirements, we provide the right talent when you need it.
          </p>
          <p>
            Our pan-India network of 50,000+ Chartered Accountants, CMAs, and finance specialists ensures you have access 
            to experienced professionals across all major cities and regions. We offer flexible engagement models - from 
            project-based assignments to long-term staffing solutions - tailored to your business requirements.
          </p>
          <p>
            With our rapid deployment process, you can have qualified professionals working on your projects within 48-72 hours. 
            All our professionals undergo rigorous screening and credential verification, ensuring you get the best talent 
            for your specific needs.
          </p>
        </div>
      </section>

      <section className="service-features">
        <h2>Why Choose Our Staff Augmentation Services</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-overview" style={{ marginTop: '4rem' }}>
        <div className="service-description">
          <h2>Our Staff Augmentation Solutions</h2>
          <p>We provide specialized finance professionals across various domains:</p>
        </div>
      </section>

      <section className="service-features">
        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => (
            <div key={index} className="feature-card" style={{ textAlign: 'left' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>{service.title}</h3>
              <p style={{ marginBottom: '1.5rem', color: '#666' }}>{service.description}</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                    <FaCheckCircle style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0 }} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="service-benefits">
        <div className="benefits-content">
          <h2>Key Benefits</h2>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-overview" style={{ marginTop: '4rem', backgroundColor: '#f8f9fa', padding: '3rem', borderRadius: '8px' }}>
        <div className="service-description">
          <h2>Our Staff Augmentation Process</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {process.map((item, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--primary-blue)', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold',
                  margin: '0 auto 1rem'
                }}>
                  {item.step}
                </div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <h2>Need Finance Professionals?</h2>
        <p>Let's discuss your staffing requirements and connect you with the right finance professionals</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">
            Get Started <FaArrowRight />
          </Link>
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StaffAugmentation;

