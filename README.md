# 🛍️ Product Catalog Management API

### 🚀 Secure • Scalable • RESTful • Cloud-Connected Backend

> **Node.js • Express.js • MongoDB • Mongoose • JWT • bcrypt • Postman**

A modern **RESTful Product Catalog Management API** designed to manage products efficiently through a secure, structured, and scalable backend architecture.

This project goes beyond basic CRUD by implementing **JWT authentication, secure password hashing, input validation, product search, category filtering, pagination, MongoDB aggregation, protected endpoints, and MongoDB Atlas integration**.

---

## 🌟 Why This Project?

Product management is a core requirement in applications such as:

🛒 E-commerce Platforms  
📦 Inventory Management Systems  
🏪 Retail Applications  
🏢 Business Management Systems  
📱 Web & Mobile Applications  

This project demonstrates how a real-world backend can be designed to **store, manage, secure, search, filter, and analyze product data through REST APIs**.

---

# ✨ Key Features

| Feature | Description |
|---|---|
| 🔐 **JWT Authentication** | Secure authentication using JSON Web Tokens |
| 🔒 **Password Hashing** | Passwords securely hashed using bcrypt |
| 📦 **CRUD Operations** | Create, Read, Update and Delete products |
| 🔎 **Product Search** | Search products by name |
| 🏷️ **Category Filtering** | Filter products by category |
| 📄 **Pagination** | Control the number of products returned per request |
| 📊 **MongoDB Aggregation** | Generate product statistics |
| ✅ **Input Validation** | Validate product data before database operations |
| 🛡️ **Protected APIs** | Secure create, update and delete operations |
| ☁️ **MongoDB Atlas** | Cloud-based database integration |
| 🧪 **Postman Testing** | API endpoints tested using Postman |
| 🧩 **Modular Architecture** | Organized routes, controllers, models and middleware |

---

# 🎯 Project Objectives

The project was developed with the following objectives:

- Build a practical RESTful backend application.
- Implement complete product CRUD functionality.
- Secure sensitive operations using JWT authentication.
- Store user passwords securely using bcrypt hashing.
- Implement product search and category filtering.
- Add pagination for efficient product retrieval.
- Use MongoDB aggregation for data analysis.
- Validate incoming product information.
- Connect the application to MongoDB Atlas.
- Follow a clean and maintainable backend architecture.
- Test API functionality using Postman.

---

# 🏗️ System Architecture

```text
                         CLIENT
                    ┌───────────────┐
                    │    Postman    │
                    │ Web / Mobile  │
                    └───────┬───────┘
                            │
                            ▼
                  ┌───────────────────┐
                  │   Express.js API  │
                  └─────────┬─────────┘
                            │
                            ▼
                     ┌─────────────┐
                     │    Routes   │
                     └──────┬──────┘
                            │
                            ▼
                  ┌───────────────────┐
                  │    Middleware     │
                  │                   │
                  │ JWT Authentication│
                  │ Input Validation  │
                  └─────────┬─────────┘
                            │
                            ▼
                  ┌───────────────────┐
                  │   Controllers     │
                  │                   │
                  │ Business Logic    │
                  └─────────┬─────────┘
                            │
                            ▼
                     ┌─────────────┐
                     │   Mongoose  │
                     └──────┬──────┘
                            │
                            ▼
                  ┌───────────────────┐
                  │   MongoDB Atlas   │
                  └───────────────────┘

🔄 How the API Works
Client Request
      ↓
Express Server
      ↓
Route Matching
      ↓
Authentication / Validation
      ↓
Controller
      ↓
Mongoose
      ↓
MongoDB Atlas
      ↓
JSON Response

For protected operations:

Login
  ↓
JWT Token Generated
  ↓
Bearer Token
  ↓
JWT Verification
  ↓
Protected Endpoint
  ↓
Database Operation
🛠️ Technology Stack
Backend
🟢 Node.js
🚀 Express.js
Database
🍃 MongoDB
☁️ MongoDB Atlas
🔗 Mongoose
Security
🔐 JSON Web Token (JWT)
🔒 bcryptjs
Validation & Utilities
✅ express-validator
🌐 CORS
⚙️ dotenv
Testing & Development
🧪 Postman
📦 npm
🐙 Git
💻 GitHub
🔐 Authentication & Security

The API uses JWT-based authentication to protect sensitive product operations.

Authentication Flow
Register
   ↓
Password Hashed using bcrypt
   ↓
User Stored in MongoDB
   ↓
Login
   ↓
Credentials Verified
   ↓
JWT Token Generated
   ↓
Token Sent with Protected Requests
   ↓
JWT Verified by Middleware
   ↓
Access Granted
Protected Operations

🔒 Create Product
🔒 Update Product
🔒 Delete Product

Public operations include retrieving products and product statistics.

📦 Product Management

The API supports complete product lifecycle management.

Product Information
Product
├── Name
├── Category
├── Price
├── Stock
├── Description
├── Created At
└── Updated At
CRUD Operations
CREATE  → Add a new product
READ    → View products
UPDATE  → Modify product information
DELETE  → Remove a product
🌐 API Endpoints
🔐 Authentication
Method	Endpoint	Purpose
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login and receive JWT
📦 Products
Method	Endpoint	Purpose	Auth
POST	/api/products	Create product	🔒
GET	/api/products	Get products	🌐
GET	/api/products/:id	Get product by ID	🌐
GET	/api/products/stats	Get product statistics	🌐
PUT	/api/products/:id	Update product	🔒
DELETE	/api/products/:id	Delete product	🔒
🔎 Search & Filtering
Search by Product Name
GET /api/products?search=Samsung

The search is case-insensitive.

Filter by Category
GET /api/products?category=Electronics

Search and filtering make it easier to retrieve specific products from the catalog.

📄 Pagination

Pagination prevents the API from returning a large number of products in a single response.

Example
GET /api/products?page=1&limit=2
Pagination Parameters
Parameter	Purpose
page	Page number
limit	Number of products per page

The API returns:

{
  "totalProducts": 10,
  "currentPage": 1,
  "totalPages": 5,
  "products": []
}
📊 MongoDB Aggregation

MongoDB aggregation is used to generate useful product statistics.

Endpoint
GET /api/products/stats
Statistics Provided

📦 Total Products
💰 Average Price
📊 Total Stock
⬆️ Highest Price
⬇️ Lowest Price

This demonstrates practical use of the MongoDB Aggregation Framework for data analysis.

✅ Input Validation

Product data is validated before database operations.

Validation Includes
Product name is required.
Category is required.
Price must be a valid positive number.
Stock must be a non-negative integer.
Description is optional.

Invalid requests return a 400 Bad Request response with validation details.

🧪 API Testing

The complete API workflow was tested using Postman.

Tested Features
✅ User Registration
✅ User Login
✅ JWT Authentication
✅ Product Creation
✅ Product Retrieval
✅ Product Search
✅ Category Filtering
✅ Pagination
✅ Product Retrieval by ID
✅ Product Update
✅ Product Deletion
✅ Input Validation
✅ MongoDB Aggregation
✅ Unauthorized Access Handling
🚨 Error Handling

The API returns appropriate HTTP status codes for different situations.

Status Code	Meaning
200	Request successful
201	Resource created
400	Validation / bad request
401	Unauthorized
404	Resource not found
500	Server error

Responses are returned in JSON format for easy integration with frontend and mobile applications.

📁 Project Structure
product-catalog-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── productController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── validateProduct.js
│
├── models/
│   ├── Product.js
│   └── User.js
│
├── routes/
│   ├── authRoutes.js
│   └── productRoutes.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Netra2004/Syntecxhub_Product_Catalog_Management-.git
cd Syntecxhub_Product_Catalog_Management-
2️⃣ Install Dependencies
npm install
3️⃣ Configure Environment Variables

Create a .env file:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

⚠️ Never upload .env to GitHub or expose database credentials and JWT secrets.

4️⃣ Start the Development Server
npm run dev

Or:

npm start

The API will run at:

http://localhost:5000
🧪 Quick Test

Open:

http://localhost:5000

Expected response:

{
  "message": "Product Catalog API is running"
}

You can then use Postman to test the API endpoints.

🔐 Environment & Security Practices

The project follows basic backend security practices:

🔒 Passwords are hashed using bcrypt.
🔐 JWT is used for authentication.
🛡️ Sensitive product operations are protected.
✅ Incoming product data is validated.
🔑 Secrets are stored in environment variables.
🚫 .env is excluded using .gitignore.
☁️ Database is hosted using MongoDB Atlas.
💡 Key Learning Outcomes

Through this project, I gained practical experience in:

Building RESTful APIs with Node.js and Express.
Designing MongoDB schemas using Mongoose.
Implementing CRUD operations.
Implementing JWT authentication.
Secure password handling with bcrypt.
API input validation.
Search and filtering.
Pagination.
MongoDB aggregation.
MongoDB Atlas integration.
Postman API testing.
Backend project organization.
Git and GitHub version control.
🚀 Future Enhancements

The API can be extended with:

👥 Role-Based Access Control
👤 Admin and Customer Roles
🖼️ Product Image Upload
⭐ Product Reviews & Ratings
🛒 Shopping Cart
📦 Order Management
📊 Admin Dashboard
🔔 Low-Stock Notifications
🔍 Advanced Product Filtering
📖 Swagger / OpenAPI Documentation
☁️ Cloud Deployment
📱 Frontend / Mobile Application Integration
🌐 Repository
🔗 GitHub

https://github.com/Netra2004/Syntecxhub_Product_Catalog_Management-

👩‍💻 Author
Nethra G S

🎓 Computer Science Engineering Graduate

💻 Interested in Backend Development, Full-Stack Development, and AI-related technologies

🔗 GitHub

https://github.com/Netra2004

⭐ Project Summary

A practical RESTful backend demonstrating secure authentication, product management, database operations, validation, search, pagination, aggregation, and cloud database integration using modern backend technologies.
