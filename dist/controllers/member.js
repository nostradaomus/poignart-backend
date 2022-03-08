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
exports.updateMemberById = exports.createMember = void 0;
const member_1 = require("../models/member");
const createMember = (record) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield member_1.Member.create(record);
    return response;
});
exports.createMember = createMember;
const updateMemberById = (id, record) => __awaiter(void 0, void 0, void 0, function* () {
    yield member_1.Member.updateOne({ _id: id }, { $set: record });
    const updatedMember = yield member_1.Member.findById(id);
    return updatedMember;
});
exports.updateMemberById = updateMemberById;
