# Deployment Guide

## 🚀 Deploy to Vercel (Frontend)

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `octaleadsprivatelimited-cloud/ex`
4. Configure the project:
   - **Framework Preset:** Create React App
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`

5. Click "Deploy"

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to frontend directory
cd frontend

# Deploy
vercel

# Follow prompts:
# - Link to existing project or create new
# - Confirm settings
# - Deploy!

# For production deployment
vercel --prod
```

### Environment Variables (if needed)

Add in Vercel Dashboard → Project Settings → Environment Variables:
- `REACT_APP_API_URL` = your backend URL

## 🖥️ Deploy Backend to Railway/Render

### Railway Deployment

1. Go to [Railway](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Configure:
   - **Root Directory:** Leave empty or set to root
   - **Start Command:** `node backend/server.js`
   - **Build Command:** `npm install`

6. Add Environment Variables:
   - `PORT` = (Railway auto-provides)
   - `NODE_ENV` = production

### Render Deployment

1. Go to [Render](https://render.com)
2. Click "New Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** exigo-consulting-api
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node backend/server.js`
   - **Root Directory:** Leave empty

5. Add Environment Variables:
   - `PORT` = 5000
   - `NODE_ENV` = production

## 🔗 Update API URLs

After deploying backend, update the API URL in frontend:

**Update these files:**

1. `frontend/src/components/Footer.js` (line 14)
2. `frontend/src/pages/Contact.js` (line 26)

Change from:
```javascript
axios.post('http://localhost:5000/api/contact', ...)
```

To:
```javascript
axios.post('https://your-backend-url.com/api/contact', ...)
```

Or use environment variable:
```javascript
axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, ...)
```

## ✅ Pre-Deployment Checklist

- [x] All dependencies installed
- [x] Build tested locally (`npm run build`)
- [x] No critical errors
- [x] API endpoints working
- [x] Environment variables configured
- [x] Logo image loading from external URL
- [x] Contact details updated

## 📝 Important Notes

### For Frontend (Vercel)
- Set root directory to `frontend`
- Use Node.js 18.x or higher
- Build command: `npm run build`
- Output directory: `build`

### For Backend (Railway/Render)
- No root directory needed (or set to root)
- Start command: `node backend/server.js`
- Port is auto-assigned by platform

### CORS Configuration

When backend is deployed, update CORS in `backend/server.js`:

```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.vercel.app',
  credentials: true
}));
```

## 🌐 After Deployment

1. **Test all pages** on the deployed site
2. **Test contact forms** to ensure backend connection
3. **Test WhatsApp button**
4. **Test mobile menu** on actual mobile devices
5. **Check all images** are loading
6. **Verify responsive design**

## 🐛 Common Issues

### Issue: "react-scripts not found"
**Solution:** Make sure you're deploying from `frontend` directory in Vercel

### Issue: "Module not found"
**Solution:** Clear Vercel cache and redeploy

### Issue: "API calls failing"
**Solution:** Update CORS settings in backend and API URLs in frontend

### Issue: "Build timeout"
**Solution:** Increase timeout in Vercel settings or optimize build

## 📧 Email Configuration (Optional)

To enable contact form emails, configure Nodemailer in `backend/server.js`:

```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

Add environment variables in Railway/Render:
- `EMAIL_USER` = your-email@gmail.com
- `EMAIL_PASS` = your-app-password

---

**Your site is production-ready!** 🎉

