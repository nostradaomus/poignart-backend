"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portfolio = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../utils/constants");
const PortfolioSchema = new mongoose_1.Schema({
    project_name: {
        type: String,
        required: true
    },
    project_desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: constants_1.RAID_CATEGORY,
        required: true
    },
    roles: {
        type: [String],
        enum: constants_1.GUILD_CLASS,
        required: true
    },
    case_study: {
        type: String,
        required: true
    },
    repo_link: {
        type: String,
        required: true
    },
    result_link: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.Portfolio = (0, mongoose_1.model)('Portfolio', PortfolioSchema);
