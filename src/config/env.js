const dotenv = require("dotenv");

dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || "development",
    mongoUri: process.env.MONGO_URI,
    corsOrigin: process.env.CORS_ORIGIN || "*"
};

if (!config.mongoUri) {
    throw new Error("MONGO_URI is not defined");
}

module.exports = config;