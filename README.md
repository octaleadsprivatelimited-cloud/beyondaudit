# Corporate Consulting Website

A professional, modern consulting website built with Node.js and React.js featuring 26+ pages, corporate design, and full responsiveness.

## 🎨 Features

- **26+ Pages** including Home, Services, About, Team, Case Studies, Blog, Contact, and more
- **Corporate Color Scheme** - Professional blues and grays perfect for business
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Ultra-stylish design with smooth animations
- **Node.js Backend** - Express.js API for form submissions and data
- **React Frontend** - Modern React 18 with routing

## 📋 Pages Included

1. Home
2. About Us
3. Services Overview
4. Mergers & Acquisitions
5. Fund Raise
6. Business Consulting
7. Talent Acquisition Services
8. Other Services
9. Industries We Serve
10. Case Studies
11. Case Study Details
12. Our Team
13. Careers
14. Blog
15. Blog Post Details
16. Resources
17. Testimonials
18. FAQ
19. Contact
20. Privacy Policy
21. Terms of Service
22. Our Approach
23. Why Choose Us
24. Partners
25. News & Updates
26. Events & Webinars

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

   This will install dependencies for both backend and frontend.

2. **Start the development servers:**

   **Option 1: Run both servers concurrently (Recommended)**
   ```bash
   npm run dev
   ```

   **Option 2: Run servers separately**

   Terminal 1 - Backend:
   ```bash
   npm run server
   ```

   Terminal 2 - Frontend:
   ```bash
   npm run client
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
consulting/
├── backend/
│   ├── server.js          # Express server
│   └── .env              # Environment variables
├── frontend/
│   ├── public/           # Static files
│   ├── src/
│   │   ├── components/   # Reusable components (Navbar, Footer)
│   │   ├── pages/        # All 26+ page components
│   │   ├── App.js        # Main app with routing
│   │   ├── index.js      # Entry point
│   │   └── index.css     # Global styles
│   └── package.json
├── package.json          # Root package file
└── README.md
```

## 🎨 Design Features

### Color Palette
- Primary Blue: #1e3a8a
- Secondary Blue: #3b82f6
- Accent Gold: #f59e0b
- Navy: #0f172a
- Light Gray: #f1f5f9

### Fonts
- Headings: Playfair Display (Serif)
- Body: Inter (Sans-serif)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🛠️ Technologies Used

### Backend
- Express.js - Web framework
- CORS - Cross-origin resource sharing
- Body-parser - Request body parsing
- Nodemailer - Email functionality (ready to configure)

### Frontend
- React 18 - UI library
- React Router DOM - Client-side routing
- Axios - HTTP client
- React Icons - Icon library
- Framer Motion - Animations (imported, ready to use)

## 📧 API Endpoints

- `POST /api/contact` - Contact form submissions
- `POST /api/careers/apply` - Career applications
- `POST /api/newsletter` - Newsletter subscriptions
- `GET /api/blog` - Get blog posts
- `GET /api/testimonials` - Get testimonials

## 🔧 Configuration

### Backend (.env file)
```
PORT=5000
NODE_ENV=development
```

### Email Configuration
To enable email functionality, configure Nodemailer in `backend/server.js` with your email service credentials.

## 📱 Responsive Design

All pages are fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly navigation
- Optimized images and content

## 🎭 Animations

The website includes smooth animations:
- Fade-in effects on scroll
- Hover transitions
- Smooth page transitions
- Animated hero sections

## 🚀 Deployment

### Build for Production

1. **Build the frontend:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

### Deployment Options
- **Frontend:** Vercel, Netlify, AWS S3 + CloudFront
- **Backend:** Heroku, AWS EC2, DigitalOcean, Railway

## 📝 Customization

### Changing Colors
Edit the CSS variables in `frontend/src/index.css`:
```css
:root {
  --primary-blue: #1e3a8a;
  --secondary-blue: #3b82f6;
  /* ... */
}
```

### Adding New Pages
1. Create page component in `frontend/src/pages/`
2. Create corresponding CSS file
3. Add route in `frontend/src/App.js`
4. Add navigation link in `frontend/src/components/Navbar.js`

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 or 5000 is in use:
- Change frontend port: Create `.env` in frontend with `PORT=3001`
- Change backend port: Edit `backend/.env` with `PORT=5001`

### Dependencies Issues
```bash
# Clear node modules and reinstall
rm -rf node_modules frontend/node_modules
npm run install-all
```

## 📄 License

MIT License - Feel free to use this project for your consulting business.

## 🤝 Support

For questions or issues, please contact: info@corporate-consulting.com

---

Built with ❤️ using Node.js and React

