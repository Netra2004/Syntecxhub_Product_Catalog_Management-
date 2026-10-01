# 🛍️ Product Catalog Management API

### 🚀 Secure • Structured • RESTful • Cloud-Connected Backend

> **Node.js • Express.js • MongoDB • Mongoose • JWT • bcrypt • Postman**

A modern **RESTful Product Catalog Management API** designed to manage products efficiently through a secure, structured, and maintainable backend architecture.

This project goes beyond basic CRUD operations by implementing **JWT authentication, secure password hashing, input validation, product search, category filtering, pagination, MongoDB aggregation, protected endpoints, and MongoDB Atlas integration**.

The project demonstrates how a practical backend application can be designed, secured, tested, and connected to a cloud database.

---

## 🌟 Why This Project?

Product management is a core requirement in applications such as:

- 🛒 E-commerce Platforms
- 📦 Inventory Management Systems
- 🏪 Retail Applications
- 🏢 Business Management Systems
- 📱 Web & Mobile Applications

This project demonstrates how a backend can be used to **store, manage, secure, search, filter, and analyze product data through RESTful APIs**.

---

# ✨ Key Features

| Feature | Description |
|---|---|
| 🔐 **JWT Authentication** | Secure authentication using JSON Web Tokens |
| 🔒 **Password Hashing** | Passwords securely hashed using bcrypt |
| 📦 **CRUD Operations** | Create, Read, Update, and Delete products |
| 🔎 **Product Search** | Search products by name |
| 🏷️ **Category Filtering** | Filter products by category |
| 📄 **Pagination** | Control the number of products returned per request |
| 📊 **MongoDB Aggregation** | Generate product statistics |
| ✅ **Input Validation** | Validate product data before database operations |
| 🛡️ **Protected APIs** | Secure create, update, and delete operations |
| ☁️ **MongoDB Atlas** | Cloud-based database integration |
| 🧪 **Postman Testing** | API endpoints tested using Postman |
| 🧩 **Modular Architecture** | Organized routes, controllers, models, and middleware |

---

# 🎯 Project Objectives

The project was developed with the following objectives:

- Build a practical RESTful backend application.
- Implement complete product CRUD functionality.
- Secure sensitive operations using JWT authentication.
- Store user passwords securely using bcrypt hashing.
- Implement product search and category filtering.
- Add pagination for efficient product retrieval.
- Use MongoDB aggregation for product statistics.
- Validate incoming product information.
- Connect the application to MongoDB Atlas.
- Follow a clean and maintainable backend architecture.
- Test and verify API functionality using Postman.

---

# 🏗️ System Architecture

The application follows a layered backend architecture:

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
                  │   Business Logic │
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

The API follows a simple request-response workflow:
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


FOR PROTECTED OPERATIONS:

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
  ↓
JSON Response

🛠️ TECHNOLOGY STACK

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

🔐 AUTHENTICATION & SECURITY:

The API uses JWT-based authentication to protect sensitive product management operations.
Passwords are never stored directly. Before being stored in MongoDB, user passwords are securely hashed using bcryptjs.
🔑 AUTHENTICATION OVERFLOW 
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

🔑 Using the JWT Token

Protected endpoints require the JWT token in the Authorization header:
  Authorization: Bearer <JWT_TOKEN>
The authentication middleware verifies the token before allowing access to protected operations.
🔒 PROTECTED OPERATIONS 
Create Product
Update Product
Delete Product

🌐 PUBLIC OPERATIONS 
Get Products
Get Product by ID
Get Product Statistics
User Registration
User Login

📦 PRODUCT MANAGEMENT 

The API supports the complete product lifecycle.
Product Information
Product
├── Name
├── Category
├── Price
├── Stock
├── Description
├── Created At
└── Updated At

CRUD OPERATIONS:
  CREATE  → Add a new product
  READ    → View products
  UPDATE  → Modify product information
  DELETE  → Remove a product

🌐 API ENDPOINTS:
🔐 Authentication
Method	  Endpoint	          Purpose
POST	    /api/auth/register	Register a new user
POST	    /api/auth/login	    Login and receive JWT

📦 PRODUCTS: 
Method	  Endpoint	          Purpose	                Authentication
POST	    /api/products	      Create product	        🔒 Required
GET	      /api/products	      Get all products	      🌐 Public
GET	      /api/products/:id	  Get product by ID	      🌐 Public
GET	      /api/products/stats	Get product statistics	🌐 Public
PUT	      /api/products/:id	  Update product	        🔒 Required
DELETE	  /api/products/:id	  Delete product      	  🔒 Required

🔎 SEARCH & FILTERING: 
Search by PRODUCT NAME
  GET /api/products?search=Samsung
The search is case-insensitive and searches product names.

Filter by CATEGORY
  GET /api/products?category=Electronics
Category filtering allows products to be retrieved based on their category.

📄 PAGINATION
Pagination prevents the API from returning a large number of products in a single response.
Example
  GET /api/products?page=1&limit=2

Pagination Parameters
Parameter	    Purpose
page	        Specifies the page number
limit	        Specifies the number of products per page

Example Response
  {
    "totalProducts": 10,
    "currentPage": 1,
    "totalPages": 5,
    "products": []
  }
Pagination helps make product retrieval more manageable when working with larger datasets.

📊 MongoDB AGGREGATION 
MongoDB aggregation is used to generate useful product statistics.
Endpoint
  GET /api/products/stats

Statistics Provided
📦 Total Products
💰 Average Price
📊 Total Stock
⬆️ Highest Price
⬇️ Lowest Price
The aggregation pipeline demonstrates how MongoDB can be used not only for storing data but also for performing useful calculations and analysis.

✅ INPUT VALIDATION

Product data is validated before database operations.
Validation Includes
Product name is required.
Category is required.
Price must be a valid positive number.
Stock must be a non-negative integer.
Description is optional.
Invalid requests return a 400 Bad Request response with validation details.

🧪 API TESTING

The API was tested using Postman.
Tested Functionality
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

🚨 ERROR HANDLING 

The API returns appropriate HTTP status codes for different situations.
Status Code	    Meaning
200	            Request successful
201	            Resource created successfully
400	            Validation / Bad Request
401	            Unauthorized
404	            Resource not found
500	            Server error
Responses are returned in JSON format, making the API suitable for integration with web and mobile applications.

📁 PROJECT STRUCTURE 
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

📂 FOLDER RESPONSIBILITIES 

Folder       / File	Responsibility
config       /	MongoDB connection configuration
controllers  /	Authentication and product business logic
middleware   /	JWT authentication and input validation
models       /	MongoDB schemas for users and products
routes       /	API endpoint definitions
server.js	      Express server configuration and application entry point
.gitignore	    Prevents sensitive/unnecessary files from being committed

⚙️ INSTALLATION & SETUP 

1️⃣ Clone the Repository
git clone https://github.com/Netra2004/Syntecxhub_Product_Catalog_Management-.git

Move into the project directory:
  cd Syntecxhub_Product_Catalog_Management-

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables
Create a .env file in the project root:
  PORT=5000
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_secret_key
⚠️ Never upload your .env file to GitHub or expose your database credentials and JWT secret.

4️⃣ Start the Development Server
  npm run dev
Or run the application normally:
  npm start

The API will be available at:
  http://localhost:5000

🧪 QUICK TEST 

After starting the server, open:
  http://localhost:5000
Expected response:
  {
    "message": "Product Catalog API is running"
  }
You can then use Postman to test the authentication and product endpoints.

🔐 ENVIRONMENT & SECURITY PRACTICES 

The project follows basic backend security practices:
🔒 Passwords are hashed using bcrypt.
🔐 JWT is used for authentication.
🛡️ Sensitive product operations are protected.
✅ Incoming product data is validated.
🔑 Sensitive configuration is stored using environment variables.
🚫 .env is excluded using .gitignore.
☁️ MongoDB Atlas is used as the cloud database.
Note: These practices provide application-level security for the project; production systems may require additional security controls such as rate limiting, role-based authorization, logging, monitoring and other infrastructure protections.

💡 KEY LEARNING OUTCOMES 

Through this project, I gained practical experience in:

Building RESTful APIs using Node.js and Express.js.
Designing MongoDB schemas using Mongoose.
Implementing CRUD operations.
Implementing JWT authentication.
Secure password handling using bcrypt.
Validating API input.
Implementing product search and filtering.
Implementing pagination.
Using MongoDB aggregation.
Connecting applications to MongoDB Atlas.
Testing APIs using Postman.
Organizing backend applications using a modular architecture.
Using Git and GitHub for version control.

🚀 FUTURE ENHANCEMENTS

The API can be extended with additional features such as:
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
🔗 GitHub Repository
https://github.com/Netra2004/Syntecxhub_Product_Catalog_Management-

👩‍💻 AUTHOR 
G S Netra
🎓 Computer Science Engineering Graduate
💻 Interested in Backend Development, Full-Stack Development and AI-related technologies

🔗 GitHub
https://github.com/Netra2004

⭐ Project Summary

A practical RESTful backend demonstrating secure authentication, product management, database operations, validation, search, pagination, aggregation and cloud database integration using modern backend technologies.
