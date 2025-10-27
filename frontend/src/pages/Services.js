import React from 'react';
import { Link } from 'react-router-dom';
import { FaBoxes, FaCheckCircle, FaTruck, FaClipboardList, FaUniversity, FaStore, FaSearch, FaBuilding, FaWarehouse, FaExclamationTriangle, FaShieldAlt, FaBroom, FaUserSecret, FaHandshake, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaBoxes />,
      title: 'Stock Audit',
      description: 'Our Stock Audit delivers an exhaustive verification of physical inventory vis-à-vis book records to ensure precision, transparency, and accountability. Through systematic sampling, reconciliation, and process evaluation, we identify discrepancies and inefficiencies across the supply chain.',
      features: ['Physical Inventory Verification', 'Book Record Reconciliation', 'Supply Chain Analysis', 'Internal Control Assessment'],
      link: '/services/stock-audit',
      image: '/images/stock-audit.png'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Quality Audit',
      description: 'The Quality Audit by Beyond Audit provides a holistic assessment of process integrity and product excellence across production and service lines. We benchmark operational standards against internal protocols and international quality frameworks.',
      features: ['Process Integrity Assessment', 'Quality Framework Benchmarking', 'Performance Consistency Review', 'Improvement Area Identification'],
      link: '/services/quality-audit',
      image: '/images/quality-audit.png'
    },
    {
      icon: <FaTruck />,
      title: 'Distributor Audit',
      description: 'Our Distributor Audit delivers a comprehensive evaluation of distributor operations, sales reporting, and compliance with organizational policies. We assess inventory accuracy, order management, and sales discipline to identify performance gaps.',
      features: ['Distributor Operations Review', 'Sales Reporting Analysis', 'Policy Compliance Check', 'Performance Gap Identification'],
      link: '/services/distributor-audit',
      image: '/images/distributor-audit.png'
    },
    {
      icon: <FaClipboardList />,
      title: 'Checklist-Based Audit',
      description: 'The Checklist-Based Audit is a structured, metric-driven approach designed to measure performance against precisely defined control parameters. Our team curates customized checklists aligned with operational, statutory, and compliance objectives.',
      features: ['Customized Checklist Creation', 'Metric-Driven Evaluation', 'Standardized Process Review', 'Continuous Improvement Insights'],
      link: '/services/checklist-audit',
      image: '/images/checklist-audit.png'
    },
    {
      icon: <FaUniversity />,
      title: 'NBFC Audit',
      description: 'Our NBFC Audit provides an in-depth review of financial operations, risk management systems, and regulatory adherence specific to Non-Banking Financial Companies. We examine loan documentation, compliance procedures, and internal controls.',
      features: ['Financial Operations Review', 'Risk Management Assessment', 'RBI Guidelines Compliance', 'Loan Documentation Analysis'],
      link: '/services/nbfc-audit',
      image: '/images/nbfc-audit.png'
    },
    {
      icon: <FaStore />,
      title: 'Retail Audit',
      description: 'The Retail Audit offers a granular assessment of store operations, merchandising effectiveness, and policy compliance across retail locations. We evaluate visual display standards, customer interaction, billing accuracy, and operational efficiency.',
      features: ['Store Operations Assessment', 'Merchandising Effectiveness Review', 'Visual Display Standards Check', 'Customer Interaction Analysis'],
      link: '/services/retail-audit',
      image: '/images/retail-audit.png'
    },
    {
      icon: <FaSearch />,
      title: 'Internal Audit',
      description: 'Our Internal Audit provides an independent and systematic evaluation of internal control frameworks, governance processes, and risk mitigation strategies. By analyzing key financial and operational activities, we identify inefficiencies and opportunities.',
      features: ['Internal Control Evaluation', 'Governance Process Review', 'Risk Mitigation Assessment', 'Process Enhancement Opportunities'],
      link: '/services/internal-audit',
      image: '/images/internal-audit.png'
    },
    {
      icon: <FaBuilding />,
      title: 'Fixed Asset Audit',
      description: 'The Fixed Asset Audit ensures complete verification of asset existence, ownership, condition, and valuation. We reconcile records with physical assets to confirm accuracy in capitalization, depreciation, and disposal.',
      features: ['Asset Existence Verification', 'Ownership Confirmation', 'Condition Assessment', 'Valuation Accuracy Check'],
      link: '/services/fixed-asset-audit',
      image: '/images/fixed-asset-audit.png'
    },
    {
      icon: <FaWarehouse />,
      title: 'Warehouse Audit',
      description: 'Our Warehouse Audit delivers a thorough examination of storage practices, stock handling, and operational efficiency. We review inbound and outbound logistics, safety protocols, and process optimization to ensure seamless warehouse performance.',
      features: ['Storage Practice Review', 'Stock Handling Assessment', 'Logistics Process Analysis', 'Safety Protocol Verification'],
      link: '/services/warehouse-audit',
      image: '/images/warehouse-audit.png'
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Damage & Expiry Audit',
      description: 'The Damage & Expiry Audit focuses on identifying product deterioration, wastage, and inefficiencies in inventory management. We assess root causes, evaluate preventive controls, and propose corrective measures to minimize losses.',
      features: ['Product Deterioration Assessment', 'Wastage Analysis', 'Root Cause Identification', 'Preventive Control Evaluation'],
      link: '/services/damage-expiry-audit',
      image: '/images/damage-expiry-audit.png'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Compliance Audit',
      description: 'Our Compliance Audit is an exhaustive examination of adherence to statutory regulations, internal policies, and industry-specific mandates. We evaluate systems, procedures, and documentation to ensure full legal conformity and risk mitigation.',
      features: ['Statutory Regulation Compliance', 'Internal Policy Adherence', 'Industry Mandate Verification', 'Risk Mitigation Assessment'],
      link: '/services/compliance-audit',
      image: '/images/compliance-audit.png'
    },
    {
      icon: <FaBroom />,
      title: 'Clean and Hygiene Audit',
      description: 'The Clean and Hygiene Audit assesses workplace sanitation, safety, and environmental management standards in alignment with global best practices. We inspect facilities, maintenance routines, and waste disposal systems.',
      features: ['Workplace Sanitation Check', 'Safety Standards Assessment', 'Environmental Management Review', 'Waste Disposal System Inspection'],
      link: '/services/clean-hygiene-audit',
      image: '/images/clean-hygiene-audit.png'
    },
    {
      icon: <FaUserSecret />,
      title: 'Forensic Audit',
      description: 'Our Forensic Audit specializes in investigating financial irregularities, fraud, and corporate misconduct with precision and discretion. We analyze digital records, transactional data, and accounting evidence to uncover potential anomalies.',
      features: ['Financial Irregularity Investigation', 'Fraud Detection Analysis', 'Digital Record Examination', 'Corporate Misconduct Review'],
      link: '/services/forensic-audit',
      image: '/images/forensic-audit.png'
    },
    {
      icon: <FaHandshake />,
      title: 'Merchant Audit',
      description: 'The Merchant Audit provides a meticulous review of merchant transactions, pricing structures, and operational adherence to corporate guidelines. We assess data accuracy, settlement integrity, and promotional compliance to safeguard against revenue leakage.',
      features: ['Merchant Transaction Review', 'Pricing Structure Analysis', 'Settlement Integrity Check', 'Promotional Compliance Assessment'],
      link: '/services/merchant-audit',
      image: '/images/merchant-audit.png'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="hero-background-overlay"></div>
        <div className="services-hero-container">
        <div className="hero-tagline">OUR CORE SERVICES</div>
        <h1>Comprehensive Audit Solutions</h1>
        <p className="hero-description">14 specialized audit services delivering flawless, data-driven field verification powered by precision, integrity, and intelligence across India. We provide complete manpower support for all audit services with our pan-India network of 10,000+ qualified professionals.</p>
        </div>
      </section>

      <section className="services-overview">
        <div className="section-intro">
          <h2>Our Core Services</h2>
        <p>
          Beyond Audit delivers comprehensive audit solutions through our pan-India network of 10,000+ qualified professionals. 
          We specialize in field verification and audit intelligence, setting new benchmarks in speed, reliability, and technological integration. 
          Our 14 core audit services cover every aspect of business operations, ensuring precision, transparency, and accountability with complete manpower support.
        </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-detail-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-detail-icon">{service.icon}</div>
              <div className="service-detail-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <Link to={service.link} className="service-detail-link">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <h2>Need Professional Accounting Services?</h2>
        <p>Let's discuss your financial needs and find the right accounting solution for your business</p>
        <Link to="/contact" className="btn btn-white">Contact Us Today</Link>
      </section>
    </div>
  );
};

export default Services;

