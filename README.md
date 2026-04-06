# 💰 Finance Data Processing & Access Control Backend

## 📌 Overview

This project is a backend system for a finance dashboard application. It supports **financial data management, role-based access control, and dashboard analytics**.

The goal is to demonstrate how a backend system should be designed with **clear structure, maintainability, and real-world logic**.

---

## 🎯 Objective

To build a backend that:

* Manages users and roles
* Handles financial records (income & expenses)
* Provides dashboard insights
* Enforces role-based access control
* Maintains clean and scalable architecture

---
## 🏗️ Project Structure

```
finance-backend/
│
├── config/
│   └── db.js
│
├── models/
│   ├── userModel.js
│   └── financeModel.js
│
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   ├── financeController.js
│   └── dashboardController.js
│
├── services/
│   ├── authService.js
│   ├── userService.js
│   ├── financeService.js
│   └── dashboardService.js
│
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── financeRoutes.js
│   └── dashboardRoutes.js
│
├── middlewares/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   ├── errorMiddleware.js
│   └── validationMiddleware.js
│
├── app.js
├── server.js
├── .env
├── package.json
└── README.md
```

---

## 🧠 Architecture Explanation

* **Routes** → Define API endpoints
* **Controllers** → Handle request & response
* **Services** → Business logic
* **Models** → Database schema
* **Middleware** → Authentication & authorization

This separation ensures clean and maintainable code.

---

## 👥 User Roles & Permissions

| Role    | Permissions                           |
| ------- | ------------------------------------- |
| Viewer  | View financial data only              |
| Analyst | View data + dashboard insights        |
| Admin   | Full access (users + finance records) |

---

# 🔐 Authentication & Authorization

* JWT-based authentication
* Password hashing using bcrypt
* Role-based access control using middleware

---

# 👤 User Management (Admin Only)

Admin can perform full CRUD operations on users:

### 📌 Create User

POST `/api/users`

### 📌 Get All Users

GET `/api/users`

### 📌 Update User Role

PATCH `/api/users/:id/role`

```json
{
  "role": "analyst"
}
```

### 📌 Update User Status (Activate/Deactivate)

PATCH `/api/users/:id/status`

```json
{
  "isActive": false
}
```

### 📌 Delete User

DELETE `/api/users/:id`
(Soft delete or permanent based on implementation)

---

# 💰 Financial Records

Each record contains:

* Amount
* Type (income / expense)
* Category
* Date
* Notes

### Supported Operations

* Create record → POST `/api/finance`
* Get records → GET `/api/finance`
* Update record → PUT `/api/finance/:id`
* Delete record → DELETE `/api/finance/:id` (soft delete)

---

# 📊 Dashboard APIs

Provides aggregated insights:

### Summary

GET `/api/dashboard/summary`

* Total Income
* Total Expenses
* Net Balance

---

# ⚙️ Features

* JWT Authentication
* Role-Based Access Control (RBAC)
* User Management (Admin CRUD)
* Financial CRUD Operations
* Dashboard Analytics
* Pagination & Filtering
* Soft Delete
* Structured Error Handling

---

# 🛠 Tech Stack

Backend: Node.js, Express.js
Database: MongoDB Atlas
Authentication: JWT
Security: bcrypt
Token: Bearer Token

---

# ⚙️ Setup Instructions

```bash
git clone <your-repo-link>
cd finance-backend
npm install
```

### Create `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run

```bash
npm run dev
```

---

# 📡 API Endpoints

## 🔐 Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

---

## 👤 Users (Admin Only)

* POST `/api/users`
* GET `/api/users`
* GET `/api/users/:id`
* PATCH `/api/users/:id/role`
* PATCH `/api/users/:id/status`
* DELETE `/api/users/:id`

---

## 💰 Finance

* POST `/api/finance`
* GET `/api/finance`
* PUT `/api/finance/:id`
* DELETE `/api/finance/:id`

---

## 📊 Dashboard

* GET `/api/dashboard/summary`

---

# 🧪 API Testing (Postman)

### Step 1: Register

POST `/api/auth/register`

### Step 2: Login → Get Token

### Step 3: Use Token

```
Authorization: Bearer <TOKEN>
```

### Step 4: Test APIs

* Create finance record
* Fetch records
* Test dashboard endpoints
* Admin → manage users

---

# ⚠️ Error Handling

| Code | Meaning      |
| ---- | ------------ |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 403  | Forbidden    |
| 404  | Not Found    |
| 500  | Server Error |

---

# 📌 Assumptions

* Users access only their own records
* Admin has full access
* Soft delete is used for safety

---

# ⚖️ Trade-offs

* Basic validation (can be extended)
* No caching implemented
* Focused on backend only

---

# 📈 Future Improvements

* Swagger API Docs
* Unit Testing
* Deployment CI/CD
* Advanced analytics

---

# 🧠 Design Decisions

* Modular architecture for scalability
* Service layer for clean logic separation
* Aggregation used for dashboard analytics
* RBAC implemented via middleware

---

# ✅ Conclusion

This backend demonstrates:

* Clean and maintainable architecture
* Proper access control implementation
* Real-world API design
* Financial data processing with analytics

It reflects a practical and structured approach to backend development.
