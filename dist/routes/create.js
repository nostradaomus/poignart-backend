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
const consultation_1 = require("../controllers/consultation");
const application_1 = require("../controllers/application");
const member_1 = require("../controllers/member");
const raid_1 = require("../controllers/raid");
const portfolio_1 = require("../controllers/portfolio");
const raidparty_1 = require("../controllers/raidparty");
const comment_1 = require("../controllers/comment");
const CREATE_ROUTER = express_1.default.Router();
CREATE_ROUTER.post('/consultation', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, consultation_1.createConsultation)(req.body);
        res.status(201).json(response);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
CREATE_ROUTER.post('/application', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, application_1.createApplication)(req.body);
        res.status(201).json(response);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
CREATE_ROUTER.post('/member', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, member_1.createMember)(req.body);
        res.status(201).json(response);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
CREATE_ROUTER.post('/raid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, raid_1.createRaid)(req.body);
        res.status(201).json(response);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
CREATE_ROUTER.post('/portfolio', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, portfolio_1.createPortfolio)(req.body);
        res.status(201).json(response);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
CREATE_ROUTER.post('/raidparty', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, raidparty_1.createRaidParty)(req.body);
        res.status(201).json(response);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
CREATE_ROUTER.post('/comment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, comment_1.createComment)(req.body);
        res.status(201).json(response);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
exports.default = CREATE_ROUTER;
