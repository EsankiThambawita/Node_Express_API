# 👥 Express Users API

A simple RESTful API built with **Node.js** and **Express.js** that allows you to **create**, **read**, **update**, and **delete (CRUD)** user data. This project uses a modular structure with separate route and controller layers and stores users in an in-memory array.

---

## 🚀 Features

- View all users
- View a specific user by ID
- Add a new user
- Update an existing user
- Delete a user
- Uses `uuid` for unique user IDs
- Structured using Express Router and Controller pattern

---

## 📁 Project Structure

Node_Express_API/
│
├── index.js # Main server file
├── routes/
│ └── users.js # Route definitions for /users
├── Controllers/
│ └── users.js # Route handler logic (controllers)
├── package.json # Project metadata and scripts
└── README.md # You're here!

## **How It Works**

- Users are stored in a `users` array (mock database) located in the controller file.  
- When a new user is added, a **UUID** is assigned as their unique `id` using the `uuid` package.  
- The app uses **Express Router** to define endpoints and a **Controller layer** to handle request logic separately from routing.

---

## **Dependencies**

- **express**: Web framework for building the server and defining routes  
- **uuid**: Generates unique IDs for users  
- **body-parser**: Middleware to parse JSON request bodies  
- **nodemon** *(dev dependency)*: Automatically restarts the server on file changes for easier development
