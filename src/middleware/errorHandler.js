const logger = require("../utils/logger");

const errorHandler = (err, req, res, next) => {
    logger.error("Request failed", {
        method: req.method,
        url: req.originalUrl,
        error: err.message,
        stack: err.stack
    });

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        error: err.message || "Internal Server Error"
    });
};

module.exports = errorHandler;