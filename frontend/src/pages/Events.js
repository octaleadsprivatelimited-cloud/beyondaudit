import React from 'react';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Events.css';

const Events = () => {
  const events = [
    {
      date: 'November 15, 2025',
      title: 'M&A Strategy Summit 2025',
      location: 'New York, NY',
      description: 'Join industry leaders for insights on M&A trends and strategies for 2026.'
    },
    {
      date: 'December 5, 2025',
      title: 'Fundraising Masterclass',
      location: 'Virtual Event',
      description: 'Learn proven strategies for successful fundraising from our experts.'
    },
    {
      date: 'January 20, 2026',
      title: 'Digital Transformation Forum',
      location: 'San Francisco, CA',
      description: 'Explore the future of business transformation and technology integration.'
    }
  ];

  return (
    <div className="events-page">
      <section className="events-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="events-hero-content">
          <h1>Events & Webinars</h1>
          <p>Join us at upcoming events and virtual sessions</p>
        </div>
      </section>

      <section className="events-content">
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <span className="event-date"><FaCalendar /> {event.date}</span>
              <h3>{event.title}</h3>
              <p className="event-location"><FaMapMarkerAlt /> {event.location}</p>
              <p className="event-description">{event.description}</p>
              <button className="btn btn-primary">Register Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;

