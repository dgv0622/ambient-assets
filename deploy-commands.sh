#!/bin/bash
# Quick deployment commands - Run these in order

echo "=== Smokehouse Miami BBQ - Deployment Commands ==="
echo ""

# ============================================
# PART 1: BACKEND DEPLOYMENT (Choose One)
# ============================================

echo "OPTION A: Deploy to Railway"
echo "----------------------------"
echo "1. Install Railway CLI:"
echo "   npm install -g @railway/cli"
echo ""
echo "2. Login and deploy:"
echo "   railway login"
echo "   cd /app/backend"
echo "   railway init"
echo "   railway up"
echo ""
echo "3. Set environment variables in Railway dashboard:"
echo "   MONGO_URL=your-mongodb-atlas-url"
echo "   DB_NAME=smokehouse"
echo "   CORS_ORIGINS=*"
echo ""
echo ""

echo "OPTION B: Deploy to Heroku"
echo "----------------------------"
echo "1. Install Heroku CLI (if not installed)"
echo ""
echo "2. Deploy:"
echo "   cd /app/backend"
echo "   heroku login"
echo "   heroku create smokehouse-miami-api"
echo "   heroku config:set MONGO_URL='your-mongodb-url'"
echo "   heroku config:set DB_NAME='smokehouse'"
echo "   heroku config:set CORS_ORIGINS='*'"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Deploy backend'"
echo "   heroku git:remote -a smokehouse-miami-api"
echo "   git push heroku main"
echo ""
echo ""

echo "OPTION C: Deploy to Render"
echo "----------------------------"
echo "1. Go to https://render.com"
echo "2. Create New → Web Service"
echo "3. Upload /app/backend folder"
echo "4. Settings:"
echo "   - Runtime: Python 3"
echo "   - Build: pip install -r requirements.txt"
echo "   - Start: uvicorn server:app --host 0.0.0.0 --port \$PORT"
echo "5. Add environment variables in dashboard"
echo ""
echo ""

# ============================================
# PART 2: MONGODB ATLAS SETUP
# ============================================

echo "MongoDB Atlas Setup"
echo "----------------------------"
echo "1. Go to: https://www.mongodb.com/cloud/atlas"
echo "2. Create account and free cluster"
echo "3. Create database user"
echo "4. Get connection string"
echo "5. Whitelist all IPs: 0.0.0.0/0"
echo ""
echo ""

# ============================================
# PART 3: FRONTEND DEPLOYMENT
# ============================================

echo "Frontend Deployment to Cloudflare Pages"
echo "----------------------------"
echo "1. Install Wrangler:"
echo "   npm install -g wrangler"
echo ""
echo "2. Login to Cloudflare:"
echo "   wrangler login"
echo ""
echo "3. Build frontend (already done):"
echo "   cd /app/frontend"
echo "   yarn build"
echo ""
echo "4. Deploy:"
echo "   wrangler pages deploy --project-name=smokehouse-miami"
echo ""
echo "5. Set environment variable in Cloudflare Pages dashboard:"
echo "   Variable: VITE_BACKEND_URL"
echo "   Value: https://your-backend-url (no trailing slash)"
echo ""
echo ""

# ============================================
# PART 4: FINAL CONFIGURATION
# ============================================

echo "Final Configuration"
echo "----------------------------"
echo "1. Update backend CORS_ORIGINS with your Cloudflare Pages URL"
echo "2. Test the website"
echo "3. Check browser console for errors"
echo "4. Test all features (navigation, forms, chatbot)"
echo ""
echo ""

echo "=== Deployment Complete! ==="
echo ""
echo "Your URLs:"
echo "Frontend: https://smokehouse-miami.pages.dev"
echo "Backend: https://your-backend-url"
echo ""
echo "Read full guide: /app/DEPLOYMENT_CHECKLIST.md"
