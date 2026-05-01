# 🎬 VideoTube Backend API

A production-grade backend project inspired by YouTube + Twitter, built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.

This project allows users to upload videos, like/comment on content, subscribe to channels, create tweets, manage playlists, and much more.

It is designed with scalable backend architecture, authentication, aggregation pipelines, and cloud-based media storage — making it an industry-level backend project for portfolio and learning.

---

## 🚀 Features

### 👤 User Management

* User Registration & Login
* JWT Authentication (Access + Refresh Tokens)
* Secure Logout System
* Profile Management
* Change Password
* Avatar & Cover Image Upload
* Watch History

### 🎥 Video Management

* Upload Videos
* Update/Delete Videos
* Publish / Unpublish Videos
* Like / Unlike Videos
* View Videos
* Search & Pagination
* Video Dashboard Stats

### 💬 Comments System

* Add Comments
* Edit/Delete Comments
* Nested Comment Support (Optional)

### 🐦 Tweet System

* Create Tweets
* Update/Delete Tweets
* Like Tweets
* View User Tweets

### ❤️ Social Features

* Like / Unlike
* Subscribe / Unsubscribe Channels
* Playlists Management
* Channel Profile Stats

### ☁️ File Uploads

* Cloudinary Integration
* Avatar Upload
* Cover Image Upload
* Video Upload
* Thumbnail Upload

### 🛠 Advanced Backend Features

* MongoDB Aggregation Pipelines
* Custom Error Handling
* Async Handler Wrapper
* Professional Folder Structure
* Reusable API Response System
* Middleware-based Security

---

## 🧰 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Tokens)
* Refresh Token Strategy
* bcrypt for Password Hashing

### File Upload

* Multer
* Cloudinary

### Utilities

* Cookie Parser
* CORS
* dotenv
* mongoose-aggregate-paginate-v2

---

## 📁 Project Structure

```bash
src/
│
├── controllers/        # Business logic
├── models/             # MongoDB models
├── routes/             # API routes
├── middlewares/        # Auth, multer, error handlers
├── utils/              # ApiError, ApiResponse, asyncHandler
├── db/                 # Database connection
├── constants/          # Static values
├── app.js              # Express app setup
└── index.js            # Entry point
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=*

ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Start the server

```bash
npm run dev
```

---

## 🔐 Authentication Flow

This project uses:

* Access Token → Short-lived authentication
* Refresh Token → Long-lived secure login

Flow:

```text
Login → Access Token + Refresh Token
Access Token Expired → Refresh Token Generates New Access Token
Logout → Refresh Token Removed
```

---

## 📌 API Highlights

### User Routes

* Register User
* Login User
* Logout User
* Refresh Access Token
* Change Password
* Get Current User
* Update Profile

### Video Routes

* Upload Video
* Get All Videos
* Get Single Video
* Delete Video
* Toggle Publish Status

### Tweet Routes

* Create Tweet
* Update Tweet
* Delete Tweet
* Get User Tweets

### Subscription Routes

* Subscribe to Channel
* Unsubscribe Channel
* Get Subscriber Count

---

## 🧠 Learning Outcomes

This project helped in understanding:

* Production-level backend architecture
* Clean code practices
* Authentication systems
* Aggregation pipelines in MongoDB
* File handling in Node.js
* Scalable API design
* Real-world backend development

---

## 📈 Future Improvements

* Notification System
* Real-time Chat
* Live Streaming
* Video Recommendations
* Admin Dashboard
* Analytics System
* Payment Integration
* Microservices Architecture

---

## 🤝 Contributing

Contributions are always welcome.

If you'd like to improve this project:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📜 License

This project is built for learning and portfolio purposes.

Feel free to use, improve, and customize it.

---

# ⭐ If you like this project, don't forget to star the repository!
