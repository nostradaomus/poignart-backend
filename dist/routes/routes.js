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
const multer_1 = __importDefault(require("multer"));
const artist_1 = require("../controllers/artist");
const token_1 = require("../controllers/token");
const pinata_1 = require("../utils/pinata");
const upload = (0, multer_1.default)({ dest: 'contracts/uploads/' });
const ROUTES = express_1.default.Router();
ROUTES.get('creator/mint', upload.single('image'), (req, res) => {
    (0, pinata_1.uploadToPinataAndCallContract)(req.body.address, req.file.filename);
    res.send('success');
});
ROUTES.post('creator/verify', (req, res) => {
    res.send('verify');
});
ROUTES.post('/artist', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, artist_1.createArtist)(req.body);
        res.status(201).json(response);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
ROUTES.post('/token', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, token_1.createToken)(req.body);
        res.status(201).json(response);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
exports.default = ROUTES;
