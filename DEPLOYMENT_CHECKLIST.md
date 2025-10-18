# Deployment Checklist for Option 1

## Pre-Deployment
- [ ] Have Cloudflare account ready
- [ ] Choose backend hosting (Railway/Heroku/Render)
- [ ] Have GitHub account (if using Railway)
- [ ] Credit card ready (for hosting - most have free tiers)

## Step 1: MongoDB Atlas Setup (15 minutes)
- [ ] Create MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
- [ ] Create FREE M0 cluster (512 MB storage)
- [ ] Create database user with username/password
- [ ] Set IP Access List to "Allow access from anywhere" (0.0.0.0/0)
- [ ] Get connection string from "Connect" button
- [ ] Save connection string for later

## Step 2: Deploy Backend (20 minutes)

### If using Railway:
- [ ] Install Railway CLI: `npm install -g @railway/cli`
- [ ] Login: `railway login`
- [ ] Navigate to backend: `cd /app/backend`
- [ ] Initialize: `railway init`
- [ ] Deploy: `railway up`
- [ ] Get deployment URL from Railway dashboard
- [ ] Add environment variables in Railway dashboard:
  - [ ] MONGO_URL (from MongoDB Atlas)
  - [ ] DB_NAME=smokehouse
  - [ ] CORS_ORIGINS=* (update after frontend deployment)

### If using Heroku:
- [ ] Install Heroku CLI
- [ ] Login: `heroku login`
- [ ] Create app: `heroku create smokehouse-api`
- [ ] Add buildpack: `heroku buildpacks:set heroku/python`
- [ ] Set environment variables:
  ```bash
  heroku config:set MONGO_URL="your-mongodb-url"
  heroku config:set DB_NAME="smokehouse"
  heroku config:set CORS_ORIGINS="*"
  ```
- [ ] Deploy: `git push heroku main`
- [ ] Get URL: `heroku domains`

### If using Render:
- [ ] Go to https://render.com
- [ ] Create new Web Service
- [ ] Connect GitHub or upload code
- [ ] Set build command: `pip install -r requirements.txt`
- [ ] Set start command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
- [ ] Add environment variables in Render dashboard
- [ ] Deploy and get URL

**Backend URL obtained:** ___________________________________

## Step 3: Deploy Frontend to Cloudflare Pages (10 minutes)
- [ ] Install Wrangler: `npm install -g wrangler`
- [ ] Login to Cloudflare: `wrangler login`
- [ ] Navigate to frontend: `cd /app/frontend`
- [ ] Build: `yarn build` (already done)
- [ ] Deploy: `wrangler pages deploy build --project-name=smokehouse-miami`
- [ ] Get Cloudflare Pages URL (will be like: smokehouse-miami.pages.dev)

**Frontend URL obtained:** ___________________________________

## Step 4: Connect Frontend and Backend (5 minutes)
- [ ] Go to Cloudflare Pages dashboard
- [ ] Navigate to: Settings → Environment Variables
- [ ] Add variable:
  - Name: `REACT_APP_BACKEND_URL`
  - Value: Your backend URL (no trailing slash)
- [ ] For Production AND Preview environments
- [ ] Save and trigger new deployment

## Step 5: Update CORS in Backend (5 minutes)
- [ ] Go to your backend hosting dashboard (Railway/Heroku/Render)
- [ ] Update CORS_ORIGINS environment variable
- [ ] Replace `*` with your Cloudflare Pages URL:
  ```
  CORS_ORIGINS=https://smokehouse-miami.pages.dev
  ```
- [ ] Restart backend service

## Step 6: Test Deployment (10 minutes)
- [ ] Visit your Cloudflare Pages URL
- [ ] Test navigation between pages
- [ ] Test quote calculator form
- [ ] Test chatbot:
  - [ ] Open chatbot
  - [ ] Enter name and email
  - [ ] Send a message
  - [ ] Verify response (even if fallback message)
- [ ] Check browser console for errors
- [ ] Test on mobile device

## Troubleshooting
If things don't work:
- [ ] Check browser console for errors (F12)
- [ ] Verify REACT_APP_BACKEND_URL is correct (no trailing slash)
- [ ] Check backend logs in hosting dashboard
- [ ] Verify MongoDB connection string is correct
- [ ] Ensure CORS_ORIGINS includes your frontend URL
- [ ] Try clearing browser cache and hard refresh (Ctrl+Shift+R)

## Optional: Custom Domain (20 minutes)
- [ ] Purchase domain or use existing
- [ ] In Cloudflare Pages, go to Custom domains
- [ ] Add your domain
- [ ] Update DNS records as instructed
- [ ] Wait for SSL certificate (automatic, ~15 minutes)
- [ ] Update backend CORS_ORIGINS to include new domain

## Done! 🎉
- Frontend: ___________________________________
- Backend: ___________________________________
- Custom Domain: ___________________________________

## Estimated Total Time: 1-2 hours
