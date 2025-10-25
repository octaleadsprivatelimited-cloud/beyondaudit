import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import './News.css';

const News = () => {
  const newsItems = [
    {
      date: 'October 10, 2025',
      title: 'Corporate Consulting Solutions Expands to Asia-Pacific',
      excerpt: 'New office in Tokyo marks our 12th global location as we continue strategic expansion.'
    },
    {
      date: 'September 25, 2025',
      title: 'Record-Breaking Quarter: $2B in Closed Transactions',
      excerpt: 'Q3 2025 sees unprecedented growth in M&A advisory services across technology sector.'
    },
    {
      date: 'September 10, 2025',
      title: 'Partnership Announced with Leading Tech Accelerator',
      excerpt: 'Strategic partnership to provide consulting services to high-growth startups.'
    },
    {
      date: 'August 28, 2025',
      title: 'Named Top Consulting Firm by Industry Publication',
      excerpt: 'Recognized for excellence in M&A advisory and client satisfaction.'
    }
  ];

  return (
    <div className="news-page">
      <section className="news-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="news-hero-content">
          <h1>News & Updates</h1>
          <p>Latest news and announcements from Corporate Consulting</p>
        </div>
      </section>

      <section className="news-content">
        <div className="news-list">
          {newsItems.map((item, index) => (
            <article key={index} className="news-item">
              <span className="news-date"><FaCalendar /> {item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;

