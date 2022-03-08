"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.abi = exports.contractAddress = exports.privateKey = exports.whitelistAddresses = exports.clientAddress = void 0;
const YourContract_json_1 = __importDefault(require("./YourContract.json"));
// TODO fetching whitelisted addresses from snapshot
exports.clientAddress = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
exports.whitelistAddresses = [exports.clientAddress];
// TODO move to env. This is very unsafe
exports.privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
// TODO fetch address from env
exports.contractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
exports.abi = YourContract_json_1.default.abi;
