"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artist = void 0;
const mongoose_1 = require("mongoose");
const ArtistSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email_address: {
        type: String,
        required: true
    },
    discord_handle: {
        type: String,
        required: true
    },
    telegram_handle: {
        type: String,
        required: false
    },
    twitter_handle: {
        type: String,
        required: false
    },
    github_handle: {
        type: String,
        required: false
    },
    eth_address: {
        type: String,
        required: true
    },
    ens_name: {
        type: String,
        required: false
    },
    created_nfts: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'Token',
        required: true
    }
}, { timestamps: true });
exports.Artist = (0, mongoose_1.model)('Artist', ArtistSchema);
