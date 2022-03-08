"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const mongoose_1 = require("mongoose");
const TokenSchema = new mongoose_1.Schema({
    token_id: {
        type: Number,
        required: true
    },
    token_uri: {
        type: String,
        required: true
    },
    min_price: {
        type: String,
        required: true
    },
    created_by: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    },
    signature: {
        type: String,
        required: true
    },
    minter_address: {
        type: String,
        required: false
    },
    minted_at: {
        type: Date,
        required: false
    }
}, { timestamps: true });
exports.Token = (0, mongoose_1.model)('Token', TokenSchema);
