# Full Stack Real-Time Chat Application

A full stack chat app built with **MERN (MongoDB, Express, React, Node.js)** and **Socket.io** for real-time messaging.  
Features authentication, user profiles, contact management, and instant chat with online status.

---

## 🚀 Features

- Real-time messaging (Socket.io)
- User authentication (JWT, cookies)
- Profile management (avatar upload via Cloudinary)
- Contact selection
- Online/offline status
- Responsive UI (React + Tailwind CSS)
- Theme selection
- Protected routes

---

## 🏗️ Tech Stack

- **Frontend:** React, Zustand, Tailwind CSS, Axios
- **Backend:** Node.js, Express, MongoDB (Mongoose), Socket.io
- **Image Uploads:** Cloudinary
- **Deployment:** Vercel

---

## 📸 Screenshots

### Login Page
![Login Page](https://github.com/user-attachments/assets/9a9ef20e-19bf-46fd-b19c-cd5f49dd234b)


### Profile Page
![Profile Page](https://github.com/user-attachments/assets/46c461c7-fac8-4333-8ef5-52d688549c46)

### Settings & Theme Selection
![Settings Page](https://github.com/user-attachments/assets/e2799e2c-5326-4900-9cbc-2c1b5d86f580)

### Chat Page (with image sharing)
![Chat Page](https://github.com/user-attachments/assets/8f18ddab-508d-4526-af05-cd0cf4e7dee3)

### Real Time Chat between two users
![Chat Page - Two Users](https://github.com/user-attachments/assets/91fa5d3d-1781-4ff5-8653-e47a329baaea)

---

## 📦 Project Structure

```
fullstack-chat-app/
│
├── backend/      # Express, MongoDB, Socket.io API
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── lib/
│   │   └── index.js
│   └── .env
│
├── frontend/     # React SPA
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── lib/
│   │   └── main.jsx
│   └── .env
│
└── README.md
```

---

## ⚡ Getting Started (Local Development)

### 1. **Clone the Repo**
```bash
git clone https://github.com/your-username/fullstack-chat-app.git
cd fullstack-chat-app
```

### 2. **Backend Setup**
```bash
cd backend
npm install
# Create .env file with your MongoDB, JWT, and Cloudinary credentials
npm run dev
```

### 3. **Frontend Setup**
```bash
cd ../frontend
npm install
# Create .env file with VITE_API_URL pointing to your backend (e.g., http://localhost:5001)
npm run dev
```

### 4. **Open in Browser**
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:5001](http://localhost:5001)

---

## 🌐 Deployment

- **Frontend:** Deploy `/frontend` to Vercel (React preset)
- **Backend:** Deploy `/backend` to Vercel (Node preset, with `vercel.json`)
- Set all environment variables in Vercel dashboard (never commit `.env` files)

---

## 🔑 Environment Variables

**Backend (`backend/.env`):**
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

**Frontend (`frontend/.env`):**
```
VITE_API_URL=https://your-backend.vercel.app/api
```

---

## 📚 How It Works

- **Authentication:** JWT tokens stored in HTTP-only cookies.
- **Contacts:** Users select contacts to chat with; stored in MongoDB.
- **Messaging:** Messages are sent via REST API and delivered in real-time using Socket.io.
- **Online Status:** Socket.io tracks online users and updates the UI.
- **Profile:** Users can upload avatars (stored in Cloudinary).

---

## 📝 License

MIT

---

## 🙋‍♂️ Author

Made by [koushik](https://github.com/EdlaKoushik)

---

## 📧 Contact

For questions or feedback, open an issue or contact [koushikedla01@gmail.com](mailto:koushikedla01@gmail.com).

---

