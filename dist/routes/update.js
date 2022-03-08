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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const member_1 = require("../controllers/member");
const raid_1 = require("../controllers/raid");
const portfolio_1 = require("../controllers/portfolio");
const raidparty_1 = require("../controllers/raidparty");
const consultation_1 = require("../controllers/consultation");
const UPDATE_ROUTER = express_1.default.Router();
UPDATE_ROUTER.patch('/member/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, member_1.updateMemberById)(req.params.id, req.body);
        res.status(200).json(req.body);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
UPDATE_ROUTER.patch('/consultation', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, consultation_1.updateConsultationBySubmissionHash)(req.body);
        res.status(200).json(req.body);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
UPDATE_ROUTER.patch('/raid/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, raid_1.updateRaidById)(req.params.id, req.body);
        res.status(200).json(req.body);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
UPDATE_ROUTER.patch('/portfolio/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, portfolio_1.updatePortfolioById)(req.params.id, req.body);
        res.status(200).json(req.body);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
UPDATE_ROUTER.patch('/raidparty/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, raidparty_1.updateRaidPartyById)(req.params.id, req.body);
        res.status(200).json(req.body);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
exports.default = UPDATE_ROUTER;
