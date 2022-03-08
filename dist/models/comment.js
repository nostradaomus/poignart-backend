"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = require("mongoose");
const CommentSchema = new mongoose_1.Schema({
    comment: {
        type: String,
        required: true
    },
    commented_by: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    },
    commented_raid: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Raid',
        required: true
    }
}, { timestamps: true });
exports.Comment = (0, mongoose_1.model)('Comment', CommentSchema);
