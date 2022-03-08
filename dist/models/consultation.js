"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consultation = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../utils/constants");
const ConsultationSchema = new mongoose_1.Schema({
    contact_name: {
        type: String,
        required: true
    },
    contact_email: {
        type: String,
        required: true
    },
    contact_bio: {
        type: String,
        required: true
    },
    contact_discord: {
        type: String,
        required: true
    },
    contact_telegram: {
        type: String,
        required: false
    },
    contact_twitter: {
        type: String,
        required: false
    },
    contact_github: {
        type: String,
        required: false
    },
    project_name: {
        type: String,
        required: true
    },
    project_link: {
        type: String,
        required: false
    },
    project_type: {
        type: String,
        enum: constants_1.PROJECT_TYPE,
        required: true
    },
    project_specs: {
        type: String,
        enum: constants_1.AVAILABLE_PROJECT_SPECS,
        required: true
    },
    project_desc: {
        type: String,
        required: true
    },
    services_req: {
        type: [String],
        enum: constants_1.SERVICES,
        required: true
    },
    desired_delivery: {
        type: Date,
        required: false
    },
    budget: {
        type: String,
        enum: constants_1.BUDGET,
        required: true
    },
    delivery_priorities: {
        type: String,
        enum: constants_1.DELIVERY_PRIORITIES,
        required: true
    },
    additional_info: {
        type: String,
        required: true
    },
    submission_type: {
        type: String,
        enum: constants_1.SUBMISSION_TYPE,
        required: true
    },
    submission_hash: {
        type: String,
        required: false
    },
    consultation_hash: {
        type: String,
        required: false
    },
    raid: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Raid',
        required: false
    }
}, { timestamps: true });
exports.Consultation = (0, mongoose_1.model)('Consultation', ConsultationSchema);
