import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './CaseStudies.css';

const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      title: 'Tax Optimization for Manufacturing Group',
      category: 'Tax Planning',
      client: 'Manufacturing Group',
      challenge: 'Family-owned manufacturing business with ₹50 Cr turnover struggling with high tax burden and compliance complexities.',
      result: 'Reduced tax liability by 40% through strategic tax planning and restructuring, saving ₹2.5 Cr annually',
      metrics: ['40% Tax Reduction', '₹2.5 Cr Savings', '100% Compliance']
    },
    {
      id: 2,
      title: 'Statutory Audit & Process Improvements',
      category: 'Audit & Assurance',
      client: 'Retail Chain',
      challenge: 'Mid-sized retail chain required statutory audit and discovered significant internal control weaknesses and accounting discrepancies.',
      result: 'Completed audit, identified ₹50 Lakh in recoverables, implemented robust accounting controls',
      metrics: ['0 Material Discrepancies', '₹50 Lakh Recovered', '100% Compliance']
    },
    {
      id: 3,
      title: 'GST Transition & Compliance Setup',
      category: 'Business Setup',
      client: 'Service Provider',
      challenge: 'Established service provider needed GST registration and ongoing compliance management with proper documentation.',
      result: 'Seamless GST registration, established compliance framework, no penalties in 3 years of operation',
      metrics: ['100% Compliance', 'Zero Penalties', '3 Years Support']
    },
    {
      id: 4,
      title: 'Financial Restructuring & Advisory',
      category: 'Financial Advisory',
      client: 'SME Business',
      challenge: 'Growing SME facing cash flow challenges and needing financial planning for expansion.',
      result: 'Improved cash flow by 60%, secured bank funding, established financial discipline for sustainable growth',
      metrics: ['60% Cash Flow Improvement', '₹5 Cr Funding', 'Growth Enabled']
    },
    {
      id: 5,
      title: 'Company Incorporation & Compliance',
      category: 'Business Setup',
      client: 'Startup',
      challenge: 'Tech startup needing complete incorporation services, ROC compliance, and ongoing secretarial support.',
      result: 'Company registered in 7 days, complete compliance framework established, ongoing support provided',
      metrics: ['7 Days Setup', '100% Compliance', 'Ongoing Support']
    },
    {
      id: 6,
      title: 'Internal Audit & Fraud Investigation',
      category: 'Audit & Assurance',
      client: 'Trading Company',
      challenge: 'Suspected irregularities in accounts required detailed investigation and fraud risk assessment.',
      result: 'Identified ₹30 Lakh irregularities, implemented preventive controls, established audit trail system',
      metrics: ['₹30 Lakh Identified', 'Preventive Controls', 'Fraud Prevention']
    }
  ];

  return (
    <div className="case-studies-page">
      <section className="case-studies-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="case-studies-hero-content">
          <h1>Case Studies</h1>
          <p>Real results from real clients across industries</p>
        </div>
      </section>

      <section className="case-studies-intro">
        <h2>Proven Track Record of Success</h2>
        <p>
          Our work speaks for itself. Explore how we've helped clients achieve 
          remarkable results through expert tax planning, comprehensive audit services, financial advisory, and business compliance solutions.
        </p>
      </section>

      <section className="case-studies-grid-section">
        <div className="case-studies-grid">
          {cases.map((caseStudy) => (
            <div key={caseStudy.id} className="case-study-card">
              <span className="case-category">{caseStudy.category}</span>
              <h3>{caseStudy.title}</h3>
              <p className="case-client"><strong>Client:</strong> {caseStudy.client}</p>
              <p className="case-challenge"><strong>Challenge:</strong> {caseStudy.challenge}</p>
              <p className="case-result"><strong>Result:</strong> {caseStudy.result}</p>
              <div className="case-metrics">
                {caseStudy.metrics.map((metric, idx) => (
                  <span key={idx} className="metric-badge">{metric}</span>
                ))}
              </div>
              <Link to={`/case-studies/${caseStudy.id}`} className="case-link">
                Read Full Story <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="case-studies-cta">
        <h2>Ready to Write Your Success Story?</h2>
        <p>Let's discuss how we can help you achieve similar results</p>
        <Link to="/contact" className="btn btn-white">Get Started</Link>
      </section>
    </div>
  );
};

export default CaseStudies;

