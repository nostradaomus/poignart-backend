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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const application_1 = require("../models/application");
const consultation_1 = require("../models/consultation");
const member_1 = require("../models/member");
const raid_1 = require("../models/raid");
const portfolio_1 = require("../models/portfolio");
const raidparty_1 = require("../models/raidparty");
const comment_1 = require("../models/comment");
exports.resolvers = {
    Query: {
        consultations() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield consultation_1.Consultation.find().populate('raid');
                return response;
            });
        },
        applications() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield application_1.Application.find().populate('referred_by');
                return response;
            });
        },
        members() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield member_1.Member
                    .find()
                    .populate('championed_by')
                    .populate('application');
                return response;
            });
        },
        raids() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield raid_1.Raid
                    .find()
                    .populate('cleric')
                    .populate('consultation')
                    .populate('raid_party')
                    .populate('comments')
                    .populate('related_raids')
                    .populate('portfolio');
                return response;
            });
        },
        portfolios() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield portfolio_1.Portfolio.find();
                return response;
            });
        },
        raidparties() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield raidparty_1.RaidParty
                    .find()
                    .populate('members')
                    .populate('raid');
                return response;
            });
        },
        comments() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield comment_1.Comment
                    .find()
                    .populate('commented_by')
                    .populate('commented_raid');
                return response;
            });
        },
        // individual record resolvers
        raid(parent, { _id }) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield raid_1.Raid
                    .findById(_id)
                    .populate('cleric')
                    .populate('raid_party')
                    .populate('comments')
                    .populate('consultation')
                    .populate('related_raids')
                    .populate('portfolio');
                return response;
            });
        },
        member(parent, { filters }) {
            return __awaiter(this, void 0, void 0, function* () {
                const shouldApplyIdFilter = !!filters._id;
                const shouldApplyEthFilter = !!filters.eth_address;
                const shouldApplyLegacyFilter = !!filters.legacy_id;
                let response;
                if (shouldApplyIdFilter) {
                    response = yield member_1.Member
                        .findById(filters._id)
                        .populate('championed_by')
                        .populate('application');
                }
                else if (shouldApplyEthFilter) {
                    response = yield member_1.Member
                        .findOne({
                        eth_address: { $regex: filters.eth_address, $options: 'i' }
                    })
                        .populate('championed_by')
                        .populate('application');
                }
                else if (shouldApplyLegacyFilter) {
                    response = yield member_1.Member
                        .findOne({
                        legacy_id: filters.legacy_id
                    })
                        .populate('championed_by')
                        .populate('application');
                }
                return response;
            });
        },
        consultation(parent, { _id }) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield consultation_1.Consultation.findById(_id).populate('raid');
                return response;
            });
        },
        application(parent, { _id }) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield application_1.Application.findById(_id).populate('referred_by');
                return response;
            });
        },
        portfolio(parent, { _id }) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield portfolio_1.Portfolio.findById(_id);
                return response;
            });
        },
        raidparty(parent, { _id }) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield raidparty_1.RaidParty
                    .findById(_id)
                    .populate('members')
                    .populate('raid');
                return response;
            });
        },
        comment(parent, { _id }) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield comment_1.Comment
                    .findById(_id)
                    .populate('commented_by')
                    .populate('commented_raid');
                return response;
            });
        }
    },
    // Custom resolvers
    Consultation: {
        raid: (_consultation) => __awaiter(void 0, void 0, void 0, function* () {
            const _raid = yield raid_1.Raid.findOne({
                consultation: _consultation._id
            });
            return _raid;
        })
    },
    Raid: {
        raid_party: (_raid) => __awaiter(void 0, void 0, void 0, function* () {
            const _party = yield raidparty_1.RaidParty.findOne({ raid: _raid._id });
            return _party;
        }),
        comments: (_raid) => __awaiter(void 0, void 0, void 0, function* () {
            const _comments = yield comment_1.Comment.find({ commented_raid: _raid._id });
            return _comments;
        })
    },
    RaidParty: {
        members: (_raidparty) => __awaiter(void 0, void 0, void 0, function* () {
            var e_1, _a;
            const _members = [];
            try {
                for (var _b = __asyncValues(_raidparty.members), _c; _c = yield _b.next(), !_c.done;) {
                    const _memberId = _c.value;
                    const _member = yield member_1.Member.findOne({ _id: _memberId });
                    _members.push(_member);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return _members;
        })
    },
    Comment: {
        commented_by: (_comment) => __awaiter(void 0, void 0, void 0, function* () {
            const _member = yield member_1.Member.findOne({ _id: _comment.commented_by });
            return _member;
        })
    }
};
