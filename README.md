# 🌟 Solo Sparks - Backend

Solo Sparks is a self-discovery and emotional growth feature designed to intelligently assign personalized quests, collect reflections, and offer rewards that enhance user well-being — all before they find someone else.

This backend is built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **JWT Authentication**, and **Cloudinary** for media storage.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer + Cloudinary (for media upload)
- Dotenv for environment variable management

---

## 📁 Folder Structure

backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── uploads/ (optional)
├── .env
├── server.js
└── package.json


---

## ⚙️ Installation & Setup

1. **Clone the repository**:

```bash
git clone https://github.com/Priyam280399/solo-sparks.git
cd solo-sparks/backend

Install dependencies:

npm install

Run the server:

npm run dev

The server will run at http://localhost:5000

 API Endpoints
🔐 Authentication
POST /api/auth/register – Register a new user

POST /api/auth/login – Login existing user

GET /api/auth/me – Get current user profile (protected)

🧠 Onboarding
POST /api/profile – Save onboarding data

GET /api/profile – Get user profile data

🎯 Quests
GET /api/quests – Get all quests

POST /api/quests – Add new quest (admin use)

📥 Reflections
POST /api/reflections – Submit a reflection (text/photo/audio)

GET /api/reflections/:userId – Get user reflections

💎 Rewards
GET /api/rewards – Get available rewards

POST /api/rewards – Create a new reward (admin use)

POST /api/rewards/redeem – Redeem a reward (protected)

File Upload
Media files (images/audio) are uploaded to Cloudinary using Multer with memory storage.

Ensure your Cloudinary credentials are correct in .env.

Auth
JWT-based authentication is used. For all protected routes:
Include this in your request headers:
Authorization: Bearer <your_token>

You must whitelist your IP in MongoDB Atlas for local development.
Ensure your Cloudinary account is set to "unsigned uploads" or has a valid API key.



# ✨ Solo Sparks – Frontend

**Solo Sparks** is a self-growth and reflection web application designed to guide users through personalized emotional wellness journeys via quests, reflections, and rewards.

This is the **React.js frontend** that connects to the Solo Sparks backend built with Node.js, Express, MongoDB, and JWT authentication.

---


## ⚙️ Tech Stack

- React.js
- React Router
- Context API (for Auth state)
- Axios (for API calls)
- Tailwind CSS (for styling)

---

## 📁 Folder Structure

src/
├── api/
│ └── axios.js # Axios instance with baseURL and token setup
├── components/
│ ├── Onboarding.js # Form to submit profile data
│ ├── QuestDisplay.js # Displays list of quests
│ ├── ReflectionForm.js # Form to submit a reflection
│ └── RewardsDashboard.js # Shows and redeems rewards
├── pages/
│ ├── Login.js # Login page
│ ├── Register.js # Registration page
│ └── Dashboard.js # Main dashboard (protected)
├── context/
│ └── AuthContext.js # Global auth provider
├── App.js # Routing and layout
└── index.js # React entry point



---

## 🔧 Setup Instructions

1. **Clone the repository**:

```bash
git clone https://github.com/Priyam280399/solo-sparks.git
cd solo-sparks/frontend

Install dependencies:
npm install

Run the app:
npm start

App runs at http://localhost:3000


Auth Flow
User registers or logs in.

JWT token is stored in localStorage.

AuthContext uses token to fetch user details and maintain login state.

Protected routes redirect unauthenticated users to /login.

Login ID && Password
"email": "priyam1@example.com",
"password": "123456"



Features
✅ Register/Login
✅ Save onboarding (user profile)
✅ Fetch personalized quests
✅ Submit reflections (text/media)
✅ View and redeem rewards
✅ Secure routes using JWT
✅ Responsive, minimal UI

 API Connection
Make sure your backend server is running on http://localhost:5000.

All API calls are made through a centralized axios instance (src/api/axios.js) with token auto-injection.



