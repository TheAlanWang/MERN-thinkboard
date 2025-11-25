# MERN ThinkBoard 📝

<img src="./docs/demo.gif" alt="Demo" width="500" />

A full-stack note-taking application built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
Designed for a split architecture so the frontend and backend can be hosted independently.  
Includes guidance for local development and self-managed deployment.

---

## ✨ Features
- 📌 **Notes Management**: Create, view, and manage notes  
- 🔗 **Frontend–Backend Separation**: React + Vite on frontend, Express + Node.js on backend  
- ☁️ **Cloud Database**: MongoDB Atlas  
- 🔒 **Rate Limiting**: Prevents abuse using Upstash Redis and `express-rate-limit`  
- 🌍 **CORS Support**: Configurable for separate frontend/backend origins  
- 🚀 **CI/CD Ready**: Workflow files and scripts are set up for automation  

---

## 🛠 Tech Stack
**Frontend**  
- React 19  
- Vite 7  
- TailwindCSS + DaisyUI  
- React Router v7  
- Axios  
- React Hot Toast  

**Backend**  
- Node.js 20  
- Express.js  
- MongoDB + Mongoose  
- Upstash Redis (Rate Limiting)  
- dotenv  

**Deployment**  
- Frontend → Static build (host on any static site/CDN)  
- Backend → Node.js host of your choice  
- Database → MongoDB Atlas or compatible MongoDB service  

---

## 📂 Project Structure
```
MERN-thinkboard/
├── backend/              # Backend service (Express + MongoDB)
│   ├── src/
│   │   ├── config/       # Database connection
│   │   ├── routes/       # API routes (notes)
│   │   ├── middleware/   # Rate limiter, middlewares
│   │   └── server.js     # Express entrypoint
│   └── package.json
│
├── frontend/             # Frontend app (React + Vite)
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Pages (Home, Create, Detail)
│   │   ├── lib/          # Axios wrapper
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── .github/workflows/    # CI/CD workflow files
│   └── gh-pages.yml
└── README.md
```

## 📚 Documentation
For step-by-step development notes, see the [docs](docs/README.md) directory.

---

## ⚙️ Local Development

### 1. Clone Repository
```bash
git clone https://github.com/TheAlanWang/MERN-thinkboard.git
cd MERN-thinkboard
```

### 2. Backend Setup
Create `backend/.env`:
```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/notes_db
PORT=5001
UPSTASH_REDIS_REST_URL=your-upstash-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-token
NODE_ENV=development
```

Install and run:
```bash
cd backend
npm install
npm run dev
```

Endpoints:
- Health check → http://localhost:5001/api/health  
- Notes API → http://localhost:5001/api/notes

---

### 3. Frontend Setup
Create `frontend/.env`:
```env
VITE_API_BASE=http://localhost:5001/api
```

Install and run:
```bash
cd frontend
npm install
npm run dev
```

Frontend runs at → http://localhost:5173

---

## 🚀 Deployment

### Backend (self-managed host)
1. Ensure production env vars are set (`MONGO_URI`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `NODE_ENV=production`, and any port override).  
2. From `backend/`, install dependencies:  
   ```bash
   npm ci
   ```  
3. Start the server with your process manager of choice:  
   ```bash
   node src/server.js
   ```  
4. Expose the chosen port publicly and attach your custom domain or load balancer as needed.

### Frontend (static hosting)
1. Set `VITE_API_BASE` to the public URL of your backend API.  
2. From `frontend/`, build the static bundle:  
   ```bash
   npm ci
   npm run build
   ```  
3. Deploy the `frontend/dist` output to any static host or CDN. Update DNS to point your site domain to that host.  
4. Verify requests from the deployed frontend succeed against the deployed API; adjust CORS settings in the backend if necessary.

---

## 📸 Screenshots (to add later)
- [ ] Home page (list of notes)  
- [ ] Note detail page  
- [ ] Create note page  

---

## 🔮 Roadmap
- ✅ CRUD functionality  
- ⚡ Improved rate-limit UX (RateLimitedUI component)  
- 🔑 Authentication (JWT)  
- 🎨 UI/UX improvements  

---

## 🙌 Author
**Alan Wang**  
- Northeastern University — CS
- GitHub: [@TheAlanWang](https://github.com/TheAlanWang)
