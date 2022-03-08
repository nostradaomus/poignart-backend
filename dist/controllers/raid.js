"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRaidById = exports.createRaid = void 0;
const raid_1 = require("../models/raid");
const createRaid = (record) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield raid_1.Raid.create(record);
    return response;
});
exports.createRaid = createRaid;
const updateRaidById = (id, record) => __awaiter(void 0, void 0, void 0, function* () {
    yield raid_1.Raid.updateOne({ _id: id }, { $set: record });
    const updatedRaid = yield raid_1.Raid.findById(id);
    return updatedRaid;
});
exports.updateRaidById = updateRaidById;
