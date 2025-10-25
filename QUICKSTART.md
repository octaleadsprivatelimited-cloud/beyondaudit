# Quick Start Guide

Get your consulting website running in 3 simple steps!

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
cd frontend && npm install
cd ..
```

## Step 2: Start the Servers

Run both backend and frontend:

```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend (in a new terminal)
cd frontend
npm start
```

OR use the concurrent command (if concurrently is installed):

```bash
npm run dev
```

## Step 3: View Your Website

Open your browser and go to:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

## 🎉 That's It!

Your consulting website is now running with:

### ✅ 26 Professional Pages
- Home, About, Services, Team, Contact
- 5 Detailed Service Pages (M&A, Fund Raise, Business Consulting, Talent Acquisition, Other Services)
- Case Studies, Blog, Resources, FAQ
- Careers, Industries, Testimonials
- Legal Pages (Privacy, Terms)
- And more!

### ✅ Modern Features
- Responsive design for all devices
- Corporate color scheme (blues, grays)
- Smooth animations and transitions
- Working contact forms
- Newsletter subscription
- Interactive navigation

### ✅ Technologies
- **Backend:** Node.js + Express.js
- **Frontend:** React 18 + React Router
- **Styling:** Custom CSS with CSS Variables
- **Icons:** React Icons

## 📱 Test Responsiveness

Try resizing your browser or use DevTools (F12) to test mobile views:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🎨 Customize Colors

Edit `frontend/src/index.css` to change the color scheme:

```css
:root {
  --primary-blue: #1e3a8a;    /* Change to your brand color */
  --secondary-blue: #3b82f6;
  --accent-gold: #f59e0b;
}
```

## 🚀 Next Steps

1. **Customize Content:** Update text, images, and data in each page component
2. **Add Images:** Replace placeholder content with your actual team photos and logos
3. **Connect Email:** Configure Nodemailer in `backend/server.js` for working contact forms
4. **Deploy:** Deploy to Vercel (frontend) and Heroku/Railway (backend)

## 💡 Tips

- All pages are in `frontend/src/pages/`
- Reusable components (Navbar, Footer) are in `frontend/src/components/`
- API endpoints are defined in `backend/server.js`
- Global styles are in `frontend/src/index.css`
- Each page has its own CSS file for easy customization

## 🆘 Need Help?

Check out the full README.md for detailed documentation, or contact support.

---

**Enjoy your new consulting website! 🎊**

