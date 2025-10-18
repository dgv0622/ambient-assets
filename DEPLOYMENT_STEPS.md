# Step-by-Step Deployment Guide - Option 1

## Overview
- Frontend: Cloudflare Pages
- Backend: Railway (or alternative)
- Database: MongoDB Atlas

## Part 1: Deploy Backend First (Railway)

### Step 1: Prepare Backend for Railway

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login to Railway:
```bash
railway login
```

3. Initialize and deploy:
```bash
cd /app/backend
railway init
railway up
```

4. Get your Railway backend URL (will look like: `https://your-app.railway.app`)

### Step 2: Set Backend Environment Variables in Railway

In Railway dashboard, add these environment variables:
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=smokehouse
CORS_ORIGINS=https://your-cloudflare-pages-url.pages.dev
```

---

## Part 2: Setup MongoDB Atlas

### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a FREE M0 cluster

### Step 2: Create Database User
1. In Atlas, go to Database Access
2. Add new database user
3. Save username and password

### Step 3: Get Connection String
1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy connection string
4. Replace `<password>` with your actual password
5. Add this to Railway backend environment variables

---

## Part 3: Deploy Frontend to Cloudflare Pages

### Step 1: Build Frontend (Already Done)
```bash
cd /app/frontend
yarn build
```

### Step 2: Deploy to Cloudflare Pages
```bash
# Install wrangler if needed
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
cd /app/frontend
wrangler pages deploy build --project-name=smokehouse-miami
```

### Step 3: Set Frontend Environment Variable in Cloudflare

After deployment, in Cloudflare Pages dashboard:
1. Go to Settings → Environment Variables
2. Add:
   - **Variable name**: `REACT_APP_BACKEND_URL`
   - **Value**: `https://your-railway-backend-url.railway.app`
3. Redeploy

---

## Alternative Backend Hosting Options

### Option A: Heroku
```bash
# Install Heroku CLI
brew install heroku/brew/heroku  # Mac
# or download from heroku.com

# Login and deploy
cd /app/backend
heroku login
heroku create smokehouse-api
git init
git add .
git commit -m "Initial commit"
heroku git:remote -a smokehouse-api
git push heroku main
```

### Option B: Render
1. Go to https://render.com
2. Sign up
3. New → Web Service
4. Connect GitHub repo or upload code
5. Runtime: Python 3
6. Build: `pip install -r requirements.txt`
7. Start: `uvicorn server:app --host 0.0.0.0 --port $PORT`

### Option C: DigitalOcean App Platform
1. Go to https://cloud.digitalocean.com
2. Create → Apps
3. Choose GitHub or upload
4. Select Python
5. Auto-detects requirements.txt

---

## Quick Summary

1. ✅ Backend built → Deploy to Railway/Heroku/Render
2. ✅ Database → MongoDB Atlas (free tier)
3. ✅ Frontend built → Deploy to Cloudflare Pages
4. ⚙️ Connect them via environment variables
5. 🎉 Done!

## Troubleshooting

**CORS Errors?**
- Make sure `CORS_ORIGINS` in backend includes your Cloudflare Pages URL

**API calls failing?**
- Check `REACT_APP_BACKEND_URL` in Cloudflare Pages environment variables
- Ensure backend URL ends without trailing slash

**Database connection failed?**
- Verify MongoDB Atlas IP whitelist (allow all: 0.0.0.0/0)
- Check username/password in connection string
- Ensure database user has read/write permissions

## Next Steps

Choose your preferred backend hosting and let me know if you need help with any specific step!
