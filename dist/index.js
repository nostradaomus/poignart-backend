"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./server"));
const config_1 = require("./config");
const MONGO_URI = config_1.CONFIG.ENVIRONMENT === 'production'
    ? config_1.CONFIG.MONGODB_URI_PRODUCTION
    : config_1.CONFIG.MONGODB_URI_DEVELOPMENT;
mongoose_1.default
    .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
    const app = (0, server_1.default)();
    app.listen(config_1.CONFIG.PORT, () => console.log(`Listening on port ${config_1.CONFIG.PORT}`));
})
    .catch((err) => console.log(err));
