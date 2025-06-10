# 🛒 eCommerce Backend API

A robust, scalable, and secure backend API for a modern eCommerce platform. Built with Node.js, Express, and MongoDB, this backend supports user authentication, product management, cart and order processing, and payment integration.

## 🔧 Features

- ✅ **User Authentication & Authorization (JWT)**
- 🛍️ **Product CRUD Operations**
- 🛒 **Cart & Wishlist Functionality**
- 📦 **Order Management**
- 💳 **Payment Gateway Integration (e.g., Stripe/MoMo)**
- 📩 **Email Notifications**
- 🧾 **Invoice/Receipt Generation (PDF)**
- 🛡️ **Input Validation & Security Middleware**
- 📊 **Admin Dashboard API for Analytics**
- 📦 **Modular & Scalable Folder Structure**

---

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JSON Web Tokens (JWT), Bcrypt
- **Payments**: Stripe or MoMo API
- **Mailing**: Nodemailer
- **Documentation**: Swagger (optional)
- **Environment Variables**: `dotenv`

---

## 🗂️ Folder Structure (Planned)

ecommerce-backend/
├── config/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── services/
├── uploads/
├── .env.example
├── server.js
├── README.md

## 🧪 API Endpoints Overview

> Full documentation will be available via Swagger or Postman Collection

### Auth
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login user & receive token

### Products
- `GET /api/products/` – Get all products
- `POST /api/products/` – Create product (admin)
- `PUT /api/products/:id` – Update product
- `DELETE /api/products/:id` – Delete product

### Cart
- `POST /api/cart/add` – Add item to cart
- `GET /api/cart/` – View cart

### Orders
- `POST /api/orders/` – Place new order
- `GET /api/orders/user/:userId` – Get user orders

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- Stripe/MoMo API Key (if using payments)

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

🔐 Environment Variables
The project uses the following variables (see .env.example):

PORT

MONGO_URI

JWT_SECRET

STRIPE_SECRET_KEY (or MoMo credentials)

EMAIL_USER, EMAIL_PASS

🔐 Environment Variables
The project uses the following variables (see .env.example):

PORT

MONGO_URI

JWT_SECRET

STRIPE_SECRET_KEY (or MoMo credentials)

EMAIL_USER, EMAIL_PASS


