import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUser, FaClock, FaCalendar } from 'react-icons/fa';
import './BlogPost.css';

const BlogPost = () => {
  return (
    <div className="blog-post-page">
      <section className="blog-post-hero">
        <div className="blog-post-hero-content">
          <Link to="/blog" className="back-link">
            <FaArrowLeft /> Back to Blog
          </Link>
          <span className="post-category">M&A</span>
          <h1>The Future of M&A in 2025: Trends and Predictions</h1>
          <div className="post-meta">
            <span><FaUser /> Robert Anderson</span>
            <span><FaCalendar /> October 15, 2025</span>
            <span><FaClock /> 5 min read</span>
          </div>
        </div>
      </section>

      <article className="blog-post-content">
        <p className="lead-paragraph">
          The mergers and acquisitions landscape is evolving rapidly, driven by technological 
          innovation, changing market dynamics, and shifting investor priorities. As we navigate 
          through 2025, several key trends are reshaping how companies approach M&A transactions.
        </p>

        <h2>Digital-First Due Diligence</h2>
        <p>
          Traditional due diligence processes are being transformed by advanced analytics, AI, 
          and automated data rooms. Companies are now able to conduct more thorough investigations 
          in shorter timeframes, reducing costs and accelerating deal closure.
        </p>

        <h2>ESG Integration</h2>
        <p>
          Environmental, Social, and Governance factors are no longer just nice-to-haves – 
          they're critical components of deal evaluation. Acquirers are increasingly scrutinizing 
          targets' ESG performance and integration plans as part of their decision-making process.
        </p>

        <h2>Cross-Border Complexity</h2>
        <p>
          While globalization continues, cross-border M&A transactions face new challenges from 
          regulatory scrutiny, geopolitical tensions, and economic nationalism. Successful 
          dealmakers must navigate these complexities with sophisticated strategies.
        </p>

        <h2>Technology Integration</h2>
        <p>
          Post-merger integration has always been challenging, but technology integration has 
          become the most critical factor in deal success. Companies must have clear plans for 
          combining systems, data, and digital capabilities.
        </p>

        <h2>Conclusion</h2>
        <p>
          The M&A landscape in 2025 demands a new playbook. Success requires not just financial 
          acumen, but also technological sophistication, cultural sensitivity, and strategic 
          vision. Companies that adapt to these trends will be best positioned to create value 
          through acquisitions.
        </p>
      </article>

      <section className="blog-post-cta">
        <h3>Need M&A Advisory?</h3>
        <p>Our team can help you navigate complex transactions</p>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </section>
    </div>
  );
};

export default BlogPost;

