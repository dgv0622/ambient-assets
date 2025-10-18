# Cloudflare Deployment Guide for Smokehouse Miami BBQ

## Current Application Stack
- **Frontend**: React (Vite) - Static files
- **Backend**: FastAPI (Python) - Server-side API
- **Database**: MongoDB - Database

## Recommended Deployment Strategy

### ✅ Option 1: Hybrid Deployment (EASIEST)

**Frontend on Cloudflare Pages + Backend Elsewhere**

1. **Deploy Frontend to Cloudflare Pages:**
   ```bash
   cd /app/frontend
   npm run build
   npx wrangler pages deploy --project-name=smokehouse-miami
   ```

2. **Deploy Backend to a Python-compatible host:**
   - **Heroku**: Easy Python deployment
   - **Railway**: Modern platform, great for FastAPI
   - **DigitalOcean App Platform**: Simple and affordable
   - **Render**: Free tier available
   - **Fly.io**: Edge deployment for APIs

3. **Update Frontend Environment Variable:**
   - In Cloudflare Pages dashboard, set:
   ```
   VITE_BACKEND_URL=https://your-backend-url.com
   ```

4. **Deploy MongoDB:**
   - Use MongoDB Atlas (free tier)
   - Update backend MONGO_URL environment variable

### ⚠️ Option 2: Full Cloudflare Workers (COMPLEX)

This requires **complete rewrite** of the backend:

**What needs to change:**
- ❌ FastAPI (Python) → ✅ JavaScript/TypeScript Workers
- ❌ MongoDB → ✅ Cloudflare D1 or KV storage
- ❌ Traditional server → ✅ Serverless edge functions
- ❌ Long-running processes → ✅ Request-response only

**Estimated effort:** 40-80 hours of development

## Quick Start for Option 1 (Cloudflare Pages)

### Step 1: Build Frontend
```bash
cd /app/frontend
npm run build
```

### Step 2: Deploy to Cloudflare Pages
```bash
# Install Wrangler if not installed
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy --project-name=smokehouse-miami
```

### Step 3: Deploy Backend Separately

**Example using Railway:**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
cd /app/backend
railway init
railway up
```

**Example using Heroku:**
```bash
# Create Procfile in backend directory
echo "web: uvicorn server:app --host=0.0.0.0 --port=\$PORT" > Procfile

# Deploy
heroku create smokehouse-miami-api
git push heroku main
```

### Step 4: Connect Frontend to Backend
1. Get your backend URL (e.g., `https://smokehouse-api.railway.app`)
2. In Cloudflare Pages settings, add environment variable:
   - Key: `VITE_BACKEND_URL`
   - Value: Your backend URL
3. Redeploy frontend

## Database Setup

**MongoDB Atlas (Free):**
1. Create account at mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Add to backend environment variables:
   ```
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/smokehouse
   DB_NAME=smokehouse
   ```

## Why Not Full Workers?

**Your app requires:**
- ✅ Python runtime (FastAPI)
- ✅ Persistent WebSocket connections
- ✅ MongoDB integration
- ✅ File uploads
- ✅ Long-running processes

**Cloudflare Workers provides:**
- ❌ JavaScript/TypeScript only
- ❌ Stateless, short-lived functions
- ❌ KV/D1 storage (not MongoDB)
- ❌ Limited to 50ms CPU time

## Recommended: Use Emergent's Built-in Deployment

Since this app was built on Emergent platform, the easiest option is:

1. **Use Emergent's native deployment** - It handles everything:
   - Frontend build and hosting
   - Backend deployment
   - MongoDB connection
   - Environment variables
   - Domain mapping

2. **Then optionally use Cloudflare for:**
   - Custom domain with Cloudflare DNS
   - CDN and caching (in front of Emergent)
   - DDoS protection

## Need Help?

If you want to proceed with Cloudflare Pages + separate backend hosting, let me know and I can:
1. Help you build the frontend
2. Create deployment scripts
3. Guide you through backend deployment to Railway/Heroku
4. Update environment variables

The hybrid approach is **much simpler** and maintains all functionality!
