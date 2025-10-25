import React from 'react';
import './OurApproach.css';

const OurApproach = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We begin by understanding your business, challenges, and objectives through comprehensive discovery sessions.'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Our team develops customized strategies and roadmaps aligned with your goals and market realities.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We work alongside your team to execute the strategy, providing hands-on support and expertise.'
    },
    {
      number: '04',
      title: 'Measurement & Optimization',
      description: 'We continuously monitor progress, measure results, and optimize approaches for maximum impact.'
    }
  ];

  return (
    <div className="approach-page">
      <section className="approach-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="approach-hero-content">
          <h1>Our Approach</h1>
          <p>A proven methodology that drives lasting results</p>
        </div>
      </section>

      <section className="approach-intro">
        <h2>How We Work</h2>
        <p>
          Our consulting approach combines strategic thinking with practical execution. We don't just 
          deliver recommendations – we partner with you to implement solutions and drive measurable results.
        </p>
      </section>

      <section className="approach-steps">
        {steps.map((step, index) => (
          <div key={index} className="approach-step">
            <div className="step-number">{step.number}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurApproach;

