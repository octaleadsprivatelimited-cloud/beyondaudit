const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Consulting API' });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, company, message, service } = req.body;
  
  // Here you would typically send an email or save to database
  console.log('Contact form submission:', { name, email, phone, company, message, service });
  console.log('Send to: rg@exigoconsulting.in');
  
  res.json({ 
    success: true, 
    message: 'Thank you for contacting us! We will get back to you soon.' 
  });
});

// Career application endpoint
app.post('/api/careers/apply', (req, res) => {
  const { name, email, phone, position, resume, coverLetter } = req.body;
  
  console.log('Career application:', { name, email, phone, position });
  
  res.json({ 
    success: true, 
    message: 'Your application has been submitted successfully!' 
  });
});

// Newsletter subscription
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  
  console.log('Newsletter subscription:', email);
  
  res.json({ 
    success: true, 
    message: 'Successfully subscribed to newsletter!' 
  });
});

// Blog posts (mock data)
app.get('/api/blog', (req, res) => {
  const posts = [
    {
      id: 1,
      title: 'The Future of M&A in 2025',
      excerpt: 'Exploring emerging trends in mergers and acquisitions...',
      date: '2025-10-15',
      author: 'John Smith',
      category: 'M&A'
    },
    {
      id: 2,
      title: 'Successful Fundraising Strategies',
      excerpt: 'Key strategies for securing funding in competitive markets...',
      date: '2025-10-10',
      author: 'Sarah Johnson',
      category: 'Fund Raise'
    }
  ];
  
  res.json(posts);
});

// Testimonials (mock data)
app.get('/api/testimonials', (req, res) => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Chen',
      company: 'Tech Innovations Inc.',
      position: 'CEO',
      text: 'Outstanding consulting services that helped us close our largest acquisition to date.',
      rating: 5
    },
    {
      id: 2,
      name: 'Emily Rodriguez',
      company: 'Global Ventures',
      position: 'CFO',
      text: 'Their expertise in fundraising was instrumental in securing our Series B funding.',
      rating: 5
    }
  ];
  
  res.json(testimonials);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

