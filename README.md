# Task Management API

A production-style REST API for managing tasks, built with Node.js, Express.js, MongoDB and Mongoose.

## Features

- Task CRUD operations
- Task status management
- Task priority management
- Filtering
- Sorting
- Pagination
- Input validation
- Clean architecture
- Global error handling
- 404 handling
- Winston logging
- Helmet security
- CORS
- Rate limiting
- Swagger/OpenAPI documentation
- Docker
- Docker Compose
- MongoDB container
- Environment-based configuration
- Graceful shutdown

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Winston
- Swagger/OpenAPI
- Docker
- Docker Compose
- Postman

## Project Structure

```text
task_management_api/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   │
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   ├── notFound.js
│   │   └── validate.js
│   │
│   ├── models/
│   │   └── Task.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── services/
│   │   └── taskService.js
│   │
│   ├── utils/
│   │   └── logger.js
│   │
│   ├── docs/
│   │   └── swagger.js
│   │
│   └── server.js
│
├── logs/
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── .gitignore
├── package.json
└── README.md