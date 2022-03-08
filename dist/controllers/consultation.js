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
exports.updateConsultationBySubmissionHash = exports.createConsultation = void 0;
const consultation_1 = require("../models/consultation");
const createConsultation = (record) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield consultation_1.Consultation.create(record);
    return response;
});
exports.createConsultation = createConsultation;
const updateConsultationBySubmissionHash = (data) => __awaiter(void 0, void 0, void 0, function* () {
    yield consultation_1.Consultation.updateOne({ submission_hash: data.submission_hash }, { $set: { consultation_hash: data.consultation_hash } });
    const updatedConsultation = yield consultation_1.Consultation.findOne({
        submission_hash: data.submission_hash
    });
    return updatedConsultation;
});
exports.updateConsultationBySubmissionHash = updateConsultationBySubmissionHash;
