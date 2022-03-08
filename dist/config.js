"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.CONFIG = {
    ENVIRONMENT: process.env.ENVIRONMENT,
    MONGODB_URI_PRODUCTION: process.env.MONGODB_URI,
    MONGODB_URI_DEVELOPMENT: process.env.LOCAL_MONGODB_URI,
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET
};
