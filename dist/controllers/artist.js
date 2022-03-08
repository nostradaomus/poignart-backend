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
exports.updateArtistById = exports.createArtist = void 0;
const artist_1 = require("../models/artist");
const createArtist = (record) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield artist_1.Artist.create(record);
    return response;
});
exports.createArtist = createArtist;
const updateArtistById = (id, record) => __awaiter(void 0, void 0, void 0, function* () {
    yield artist_1.Artist.updateOne({ _id: id }, { $set: record });
    const updatedArtist = yield artist_1.Artist.findById(id);
    return updatedArtist;
});
exports.updateArtistById = updateArtistById;
