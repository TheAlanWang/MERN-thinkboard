# MERN ThinkBoard 📝

A full-stack note-taking application built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
The project is deployed with a split architecture:  
- **Frontend** hosted on [GitHub Pages](https://thealanwang.github.io/MERN-thinkboard)  
- **Backend API** deployed on [Render](https://mern-thinkboard-xxxx.onrender.com)  
- **Database** on MongoDB Atlas

---

## ✨ Features
- 📌 **Notes Management**: Create, view, and manage notes  
- 🔗 **Frontend–Backend Separation**: React + Vite on frontend, Express + Node.js on backend  
- ☁️ **Cloud Database**: MongoDB Atlas  
- 🔒 **Rate Limiting**: Prevents abuse using Upstash Redis and `express-rate-limit`  
- 🌍 **CORS Support**: Configured for GitHub Pages → Render API calls  
- 🚀 **CI/CD Automation**: GitHub Actions for automatic deployment to Pages  

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
- Frontend → GitHub Pages  
- Backend → Render  
- Database → MongoDB Atlas  

---

## 📂 Project Structure
