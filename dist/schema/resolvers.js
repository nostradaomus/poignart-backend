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
exports.resolvers = void 0;
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const artist_1 = require("../models/artist");
const token_1 = require("../models/token");
exports.resolvers = {
    Query: {
        artists() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield artist_1.Artist.find().populate('created_nfts');
                return response;
            });
        },
        tokens() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield token_1.Token.find().populate('created_by');
                return response;
            });
        },
        // individual record resolvers
        token(parent, { filters }) {
            return __awaiter(this, void 0, void 0, function* () {
                const shouldApplyIdFilter = !!filters._id;
                const shouldApplyTokenIdFilter = !!filters.token_id;
                let response;
                if (shouldApplyIdFilter) {
                    response = yield artist_1.Artist.findById(filters._id).populate('created_by');
                }
                else if (shouldApplyTokenIdFilter) {
                    response = yield artist_1.Artist
                        .findOne({
                        token_id: filters.token_id
                    })
                        .populate('created_by');
                }
                return response;
            });
        },
        artist(parent, { filters }) {
            return __awaiter(this, void 0, void 0, function* () {
                const shouldApplyIdFilter = !!filters._id;
                const shouldApplyEthFilter = !!filters.eth_address;
                let response;
                if (shouldApplyIdFilter) {
                    response = yield artist_1.Artist.findById(filters._id).populate('created_nfts');
                }
                else if (shouldApplyEthFilter) {
                    response = yield artist_1.Artist
                        .findOne({
                        eth_address: { $regex: filters.eth_address, $options: 'i' }
                    })
                        .populate('created_nfts');
                }
                return response;
            });
        }
    }
};
