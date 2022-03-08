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
exports.updateApplicationById = exports.createApplication = void 0;
const application_1 = require("../models/application");
const createApplication = (record) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield application_1.Application.create(record);
    return response;
});
exports.createApplication = createApplication;
const updateApplicationById = (id, record) => __awaiter(void 0, void 0, void 0, function* () {
    yield application_1.Application.updateOne({ _id: id }, { $set: record });
    const updatedApplication = yield application_1.Application.findById(id);
    return updatedApplication;
});
exports.updateApplicationById = updateApplicationById;
