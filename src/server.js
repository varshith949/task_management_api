const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const config = require("./config/env");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const logger = require("./utils/logger");

const taskRoutes = require("./routes/taskRoutes");

const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const app = express();


// -------------------------
// SECURITY
// -------------------------

app.use(helmet());

app.use(
    cors({
        origin: config.corsOrigin
    })
);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        error: "Too many requests, please try again later."
    }
});

app.use(limiter);


// -------------------------
// BODY PARSING
// -------------------------

app.use(express.json());

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);


// -------------------------
// ROUTES
// -------------------------

app.use("/tasks", taskRoutes);


app.get("/", (req, res) => {
    res.json({
        message: "Task Management API is running"
    });
});


app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        environment: config.nodeEnv
    });
});


// -------------------------
// ERROR HANDLING
// -------------------------

app.use(notFound);

app.use(errorHandler);


// -------------------------
// START SERVER
// -------------------------

const startServer = async () => {
    await connectDB();

    app.listen(config.port, () => {
        logger.info(
            `Server running on http://localhost:${config.port}`
        );
    }); 
};

startServer();