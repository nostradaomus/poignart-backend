"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaidParty = void 0;
const mongoose_1 = require("mongoose");
const RaidPartySchema = new mongoose_1.Schema({
    members: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'Member',
        required: true
    },
    raid: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Raid',
        required: true
    }
}, { timestamps: true });
exports.RaidParty = (0, mongoose_1.model)('RaidParty', RaidPartySchema);
