"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Raid = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../utils/constants");
const RaidSchema = new mongoose_1.Schema({
    raid_name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        emum: constants_1.RAID_STATUS,
        required: true
    },
    category: {
        type: String,
        enum: constants_1.RAID_CATEGORY,
        required: true
    },
    cleric: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    },
    roles_required: {
        type: [String],
        enum: constants_1.GUILD_CLASS,
        required: false
    },
    raid_party: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'RaidParty',
        required: false
    },
    invoice_address: {
        type: String,
        required: false
    },
    start_date: {
        type: Date,
        required: false
    },
    end_date: {
        type: Date,
        required: false
    },
    comments: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'Comment',
        required: false
    },
    consultation: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Consultation',
        required: false
    },
    related_raids: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'Raid',
        required: false
    },
    portfolio: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: false
    },
    legacy: {
        airtable_id: {
            type: String,
            required: false
        },
        escrow_index: {
            type: Number,
            required: false
        },
        locker_hash: {
            type: String,
            required: false
        }
    }
}, { timestamps: true });
exports.Raid = (0, mongoose_1.model)('Raid', RaidSchema);
