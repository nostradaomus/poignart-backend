"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../utils/constants");
const MemberSchema = new mongoose_1.Schema({
    legacy_id: {
        type: String,
        required: true
    },
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
    guild_class: {
        type: String,
        enum: constants_1.GUILD_CLASS,
        required: true
    },
    primary_skills: {
        type: [String],
        enum: constants_1.SKILLS,
        required: true
    },
    secondary_skills: {
        type: [String],
        enum: constants_1.SKILLS,
        required: true
    },
    membership_date: {
        type: Date,
        required: false
    },
    is_raiding: {
        type: Boolean,
        default: false,
        required: true
    },
    championed_by: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Member',
        required: false
    },
    application: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Application',
        required: false
    }
}, { timestamps: true });
exports.Member = (0, mongoose_1.model)('Member', MemberSchema);
