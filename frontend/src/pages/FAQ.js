import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer comprehensive consulting services including M&A advisory, fundraising support, business consulting, talent acquisition, and specialized services like digital transformation and market research.'
    },
    {
      question: 'How do you charge for your services?',
      answer: 'Our fee structure varies by engagement type. We offer project-based fees, retainer arrangements, and success-based compensation for certain services like M&A and fundraising.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve clients across 30+ industries including technology, healthcare, financial services, manufacturing, retail, and more. Our consultants bring deep domain expertise to each engagement.'
    },
    {
      question: 'How long does a typical engagement last?',
      answer: 'Engagement duration varies based on project scope. Short-term projects may last 2-3 months, while complex initiatives like M&A transactions or transformations can span 6-18 months.'
    },
    {
      question: 'Do you work with startups?',
      answer: 'Yes, we work with companies at all stages from early-stage startups to large enterprises. Our fundraising and business consulting services are particularly popular with high-growth startups.'
    },
    {
      question: 'Where are you located?',
      answer: 'We have offices in New York, London, Singapore, and San Francisco. However, we serve clients globally and can work remotely when needed.'
    },
    {
      question: 'What makes your firm different?',
      answer: 'Our combination of deep industry expertise, proven methodologies, and hands-on execution support sets us apart. We don\'t just provide recommendations – we work alongside you to drive results.'
    },
    {
      question: 'How can I get started?',
      answer: 'Contact us through our website or call us directly. We\'ll schedule an initial consultation to understand your needs and determine how we can help.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="faq-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="faq-hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our services</p>
        </div>
      </section>

      <section className="faq-content">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="faq-cta">
        <h2>Still Have Questions?</h2>
        <p>Contact us and we'll be happy to help</p>
        <a href="/contact" className="btn btn-white">Contact Us</a>
      </section>
    </div>
  );
};

export default FAQ;

