"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const mongoose_1 = require("mongoose");
const TokenSchema = new mongoose_1.Schema({
    token: {
        type: String,
        required: true
    },
    eth_address: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.Token = (0, mongoose_1.model)('Token', TokenSchema);
