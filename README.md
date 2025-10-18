# Smokehouse Miami BBQ

A modern, full-stack web application for a Miami-based BBQ catering business featuring an interactive quote calculator, AI chatbot, and beautiful UI.

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** + **shadcn/ui** for modern, responsive design
- **React Router** for navigation
- **TanStack Query** for data fetching

### Backend
- **FastAPI** (Python) for RESTful API
- **Motor** for async MongoDB operations
- **Pydantic** for data validation
- **CORS** middleware for cross-origin requests

### Database
- **MongoDB** for flexible document storage

## Features

- 🏠 **Modern Landing Page** with hero section, gallery, and testimonials
- 📝 **Interactive Quote Calculator** for catering estimates
- 💬 **AI Chatbot** with n8n webhook integration
- 📦 **Package Showcase** for catering offerings
- 📱 **Fully Responsive** design for mobile and desktop
- 🎨 **Beautiful UI** with smooth animations and transitions

## Project Structure

```
.
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── hooks/      # Custom React hooks
│   │   └── lib/        # Utility functions
│   ├── public/         # Static assets
│   └── build/          # Production build output
│
├── backend/            # FastAPI backend server
│   ├── server.py       # Main application file
│   ├── requirements.txt # Python dependencies
│   ├── Procfile        # Heroku configuration
│   └── railway.toml    # Railway configuration
│
├── wrangler.toml       # Cloudflare Pages configuration
└── DEPLOY.md           # Deployment guide
```

## Local Development

### Prerequisites
- Node.js 18+ and npm
- Python 3.11+
- MongoDB instance (local or Atlas)

### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env and set VITE_BACKEND_URL=http://localhost:8000
npm run dev
```

Frontend will be available at http://localhost:3000

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
# Create .env file with:
# MONGO_URL=your-mongodb-connection-string
# DB_NAME=smokehouse
# CORS_ORIGINS=http://localhost:3000
uvicorn server:app --reload --port 8000
```

Backend API will be available at http://localhost:8000

### API Documentation
Once the backend is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Deployment

See [DEPLOY.md](./DEPLOY.md) for complete deployment instructions.

**Quick Summary:**
1. Deploy backend to Railway, Heroku, or Render
2. Setup MongoDB Atlas (free tier)
3. Deploy frontend to Cloudflare Pages
4. Configure environment variables

## Environment Variables

### Frontend (`frontend/.env`)
```bash
VITE_BACKEND_URL=https://your-backend-url.com
```

### Backend (`backend/.env`)
```bash
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/smokehouse
DB_NAME=smokehouse
CORS_ORIGINS=https://your-frontend-url.pages.dev
```

## API Endpoints

### Status
- `GET /api/` - Health check
- `GET /api/status` - Get status checks
- `POST /api/status` - Create status check

### Chat
- `POST /api/chat/session` - Create chat session
- `POST /api/chat/message` - Send chat message
- `GET /api/chat/messages/{session_id}` - Get chat history
- `GET /api/chat/config` - Get n8n webhook config
- `PUT /api/chat/config` - Update n8n webhook config

## Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `uvicorn server:app --reload` - Start development server
- `pytest` - Run tests

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is proprietary and confidential.

## Support

For deployment issues or questions, see [DEPLOY.md](./DEPLOY.md) or contact the development team.
