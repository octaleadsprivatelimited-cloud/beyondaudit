import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of M&A in 2025: Trends and Predictions',
      excerpt: 'Exploring the emerging trends shaping mergers and acquisitions in the modern business landscape.',
      author: 'Robert Anderson',
      date: 'October 15, 2025',
      category: 'M&A',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Successful Fundraising Strategies for Startups',
      excerpt: 'Key strategies and best practices for securing funding in competitive markets.',
      author: 'Sarah Williams',
      date: 'October 10, 2025',
      category: 'Fundraising',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Digital Transformation: More Than Just Technology',
      excerpt: 'Why successful digital transformation requires cultural change and strategic alignment.',
      author: 'David Chen',
      date: 'October 5, 2025',
      category: 'Strategy',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Building High-Performance Teams in Remote Era',
      excerpt: 'Strategies for recruiting, managing, and retaining top talent in a distributed workforce.',
      author: 'Jennifer Martinez',
      date: 'September 28, 2025',
      category: 'Talent',
      readTime: '4 min read'
    },
    {
      id: 5,
      title: 'Navigating Market Uncertainty: A Strategic Guide',
      excerpt: 'How to maintain growth and stability in volatile market conditions.',
      author: 'Robert Anderson',
      date: 'September 20, 2025',
      category: 'Strategy',
      readTime: '8 min read'
    },
    {
      id: 6,
      title: 'The Rise of ESG in Business Strategy',
      excerpt: 'Understanding the growing importance of environmental, social, and governance factors.',
      author: 'David Chen',
      date: 'September 15, 2025',
      category: 'Strategy',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="blog-page">
      <section className="blog-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="blog-hero-content">
          <h1>Insights & Perspectives</h1>
          <p>Expert analysis and thought leadership on business strategy, M&A, and market trends</p>
        </div>
      </section>

      <section className="blog-content">
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <span className="blog-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-meta">
                <span><FaUser /> {post.author}</span>
                <span><FaClock /> {post.readTime}</span>
              </div>
              <p className="blog-date">{post.date}</p>
              <Link to={`/blog/${post.id}`} className="blog-link">
                Read More <FaArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

