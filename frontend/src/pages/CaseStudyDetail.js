import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const { id } = useParams();

  // Multiple case studies for the accounting firm
  const caseStudies = {
    '1': {
      title: 'Tax Optimization for Manufacturing Group',
      category: 'Tax Planning',
      client: 'Manufacturing Group',
      industry: 'Manufacturing',
      duration: '3 months',
      overview: 'A family-owned manufacturing business with ₹50 Cr annual turnover approached us struggling with high tax burden and complex compliance requirements. The client needed strategic tax planning to optimize their tax liability while ensuring full regulatory compliance.',
      challenge: [
        'High tax burden with 40% effective tax rate',
        'Complex compliance requirements across multiple business units',
        'Suboptimal corporate structure for tax efficiency',
        'Inadequate tax planning and timely compliance',
        'Limited knowledge of available tax exemptions and deductions'
      ],
      solution: [
        'Conducted comprehensive tax analysis and restructuring review',
        'Recommended optimal corporate structure for tax efficiency',
        'Identified and applied relevant tax exemptions and deductions',
        'Implemented proper documentation and record-keeping systems',
        'Developed quarterly tax planning and compliance calendar',
        'Provided ongoing advisory and compliance support'
      ],
      results: [
        'Reduced effective tax rate from 40% to 24%, saving ₹2.5 Cr annually',
        'Achieved 100% compliance with zero penalties or notices',
        'Streamlined compliance processes across all business units',
        'Improved cash flow through better tax planning',
        'Established sustainable tax optimization framework',
        'Enhanced financial reporting and documentation standards'
      ],
      impact: {
        savings: '₹2.5 Cr Saved',
        compliance: '100% Compliance',
        satisfaction: '5/5 Client Rating'
      }
    },
    '2': {
      title: 'Statutory Audit & Process Improvements',
      category: 'Audit & Assurance',
      client: 'Retail Chain',
      industry: 'Retail',
      duration: '6 months',
      overview: 'A mid-sized retail chain with 25 stores required statutory audit and was experiencing accounting discrepancies and weak internal controls. The audit revealed several areas requiring immediate attention and process improvements.',
      challenge: [
        'Significant internal control weaknesses across stores',
        'Accounting discrepancies and reconciliation issues',
        'Inadequate documentation and audit trails',
        'Poor inventory management and accounting',
        'Non-compliance with accounting standards',
        'High risk of material misstatements'
      ],
      solution: [
        'Conducted comprehensive statutory audit as per Companies Act',
        'Identified and quantified accounting discrepancies',
        'Designed and implemented robust internal control framework',
        'Established proper documentation and audit trail systems',
        'Improved inventory management and accounting processes',
        'Provided training to finance team on compliance requirements'
      ],
      results: [
        'Completed statutory audit with zero material discrepancies',
        'Identified and recovered ₹50 Lakh in outstanding receivables',
        'Implemented comprehensive internal control system',
        'Achieved 100% compliance with accounting standards',
        'Improved financial reporting accuracy and timeliness',
        'Reduced audit time by 40% in subsequent years'
      ],
      impact: {
        recovery: '₹50 Lakh Recovered',
        compliance: '100% Compliance',
        improvement: '40% Faster Audits'
      }
    },
    '3': {
      title: 'GST Transition & Compliance Setup',
      category: 'Business Setup',
      client: 'Service Provider',
      industry: 'Professional Services',
      duration: '2 months',
      overview: 'An established service provider with ₹20 Cr turnover needed GST registration and ongoing compliance management. The client lacked proper documentation and compliance framework required for GST.',
      challenge: [
        'No GST registration despite mandatory requirement',
        'Inadequate documentation and record-keeping',
        'Lack of GST compliance knowledge and systems',
        'Complex multi-state service provisioning',
        'Risk of penalties and compliance issues',
        'Need for ongoing compliance support'
      ],
      solution: [
        'Completed GST registration across all applicable states',
        'Implemented comprehensive GST compliance framework',
        'Set up proper documentation and record-keeping systems',
        'Developed standard operating procedures for GST compliance',
        'Provided training to finance team on GST requirements',
        'Established ongoing compliance and advisory support'
      ],
      results: [
        'Seamless GST registration completed within 15 days',
        'Established complete compliance framework',
        'Zero penalties or notices in 3 years of operation',
        'Improved documentation and record-keeping standards',
        'Streamlined billing and invoicing processes',
        'Ongoing compliance support and advisory provided'
      ],
      impact: {
        timeframe: '15 Days Setup',
        compliance: 'Zero Penalties',
        duration: '3 Years Support'
      }
    },
    '4': {
      title: 'Financial Restructuring & Advisory',
      category: 'Financial Advisory',
      client: 'SME Business',
      industry: 'SME',
      duration: '4 months',
      overview: 'A growing SME facing severe cash flow challenges approached us for financial restructuring and advisory services. The business needed working capital support and financial planning for expansion.',
      challenge: [
        'Severe cash flow shortages affecting operations',
        'Inability to secure bank funding due to financial weakness',
        'Poor financial planning and budgeting',
        'Inadequate working capital management',
        'Need for financial discipline and controls',
        'Limited visibility into financial performance'
      ],
      solution: [
        'Conducted comprehensive financial assessment and restructuring',
        'Improved working capital management and cash flow',
        'Developed realistic budgets and financial projections',
        'Implemented proper financial controls and reporting',
        'Assisted in preparing bank loan proposals',
        'Provided ongoing financial advisory and monitoring'
      ],
      results: [
        'Improved cash flow by 60% through better management',
        'Secured ₹5 Cr bank funding for expansion',
        'Established financial discipline and control framework',
        'Improved profitability and operational efficiency',
        'Enhanced financial reporting and performance tracking',
        'Enabled sustainable growth and expansion'
      ],
      impact: {
        cashflow: '60% Improvement',
        funding: '₹5 Cr Secured',
        growth: 'Growth Enabled'
      }
    },
    '5': {
      title: 'Company Incorporation & Compliance',
      category: 'Business Setup',
      client: 'Startup',
      industry: 'Technology',
      duration: '1 month',
      overview: 'A tech startup needed complete incorporation services including company registration, ROC compliance, and ongoing secretarial support. The founders lacked experience with regulatory requirements.',
      challenge: [
        'No prior experience with company incorporation',
        'Complex regulatory requirements and documentation',
        'Need for quick turnaround to start operations',
        'Requirement for ongoing secretarial and compliance support',
        'Multiple licenses and registrations needed',
        'Need for proper corporate governance framework'
      ],
      solution: [
        'Completed private limited company incorporation in 7 days',
        'Obtained all necessary licenses and registrations',
        'Established proper corporate governance framework',
        'Set up board meeting and compliance calendar',
        'Provided ongoing secretarial and compliance support',
        'Assisted with shareholder agreements and documentation'
      ],
      results: [
        'Company registered within 7 days of application',
        'Complete compliance framework established',
        'All required licenses and registrations obtained',
        'Ongoing secretarial and compliance support provided',
        'Zero compliance defaults or penalties',
        'Professional corporate governance standards maintained'
      ],
      impact: {
        setup: '7 Days Setup',
        compliance: '100% Compliance',
        support: 'Ongoing Support'
      }
    },
    '6': {
      title: 'Internal Audit & Fraud Investigation',
      category: 'Audit & Assurance',
      client: 'Trading Company',
      industry: 'Trading',
      duration: '3 months',
      overview: 'A trading company suspected financial irregularities and requested detailed investigation and fraud risk assessment. The management needed to identify issues and implement preventive controls.',
      challenge: [
        'Suspected financial irregularities and fraud',
        'Weak internal controls and oversight',
        'Lack of proper audit trail and documentation',
        'High employee turnover in finance department',
        'Need for comprehensive fraud investigation',
        'Requirement for preventive controls and monitoring'
      ],
      solution: [
        'Conducted comprehensive internal audit and investigation',
        'Identified and quantified financial irregularities',
        'Performed forensic analysis of transactions',
        'Designed and implemented fraud prevention framework',
        'Established proper controls and monitoring systems',
        'Provided training on fraud prevention and detection'
      ],
      results: [
        'Identified ₹30 Lakh in financial irregularities',
        'Implemented comprehensive fraud prevention controls',
        'Established proper audit trail and documentation',
        'Improved internal controls and oversight mechanisms',
        'Enhanced financial monitoring and reporting',
        'Reduced fraud risk significantly through preventive measures'
      ],
      impact: {
        identified: '₹30 Lakh Identified',
        controls: 'Prevention Framework',
        risk: 'Risk Reduced'
      }
    }
  };

  const caseStudy = caseStudies[id] || caseStudies['1'];

  return (
    <div className="case-detail-page">
      <section className="case-detail-hero">
        <div className="case-detail-hero-content">
          <Link to="/case-studies" className="back-link">
            <FaArrowLeft /> Back to Case Studies
          </Link>
          <span className="detail-category">{caseStudy.category}</span>
          <h1>{caseStudy.title}</h1>
          <div className="case-meta">
            <span><strong>Client:</strong> {caseStudy.client}</span>
            <span><strong>Industry:</strong> {caseStudy.industry}</span>
            <span><strong>Duration:</strong> {caseStudy.duration}</span>
          </div>
        </div>
      </section>

      <section className="case-detail-content">
        <div className="detail-section">
          <h2>Overview</h2>
          <p>{caseStudy.overview}</p>
        </div>

        <div className="detail-section">
          <h2>The Challenge</h2>
          <ul className="detail-list">
            {caseStudy.challenge.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="list-icon" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2>Our Solution</h2>
          <ul className="detail-list">
            {caseStudy.solution.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="list-icon" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2>Results & Impact</h2>
          <div className="impact-metrics">
            <div className="impact-card">
              <h3>{caseStudy.impact.savings || caseStudy.impact.recovery || caseStudy.impact.cashflow || caseStudy.impact.identified}</h3>
              <p>{id === '1' ? 'Annual Savings' : id === '2' ? 'Amount Recovered' : id === '4' ? 'Cash Flow Improvement' : id === '6' ? 'Irregularities Found' : 'Improvement'}</p>
            </div>
            <div className="impact-card">
              <h3>{caseStudy.impact.compliance || caseStudy.impact.improvement || caseStudy.impact.support}</h3>
              <p>Compliance & Support</p>
            </div>
            <div className="impact-card">
              <h3>{caseStudy.impact.satisfaction || caseStudy.impact.funding || caseStudy.impact.growth || caseStudy.impact.risk}</h3>
              <p>{id === '1' ? 'Client Rating' : id === '4' ? 'Funding Secured' : id === '4' ? 'Business Growth' : 'Risk Management'}</p>
            </div>
          </div>
          <ul className="detail-list">
            {caseStudy.results.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="list-icon" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="case-detail-cta">
        <h2>Need Similar Results for Your Business?</h2>
        <p>Let's discuss how we can help you achieve your financial and compliance objectives</p>
        <Link to="/contact" className="btn btn-white">Contact Us</Link>
      </section>
    </div>
  );
};

export default CaseStudyDetail;

