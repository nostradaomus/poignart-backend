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
exports.uploadToPinataAndCallContract = void 0;
const form_data_1 = __importDefault(require("form-data"));
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const postToPinata = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return axios_1.default
        .post(process.env.PINATA_URL, data, {
        headers: {
            // eslint-disable-next-line no-underscore-dangle
            'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
            pinata_api_key: process.env.PINATA_API_KEY,
            pinata_secret_api_key: process.env.PINATA_SECRET_KEY
        }
    })
        .then((response) => {
        const hash = response.data.IpfsHash;
        console.log('success, ipfsh hash: ', hash);
        return 'success';
    })
        .catch((error) => {
        console.log(error);
        return null;
    });
});
const uploadToPinataAndCallContract = (address, filename) => {
    const metadata = JSON.stringify({
        name: `${address}-nft.png`
    });
    const data = new form_data_1.default();
    data.append('pinataMetadata', metadata);
    data.append('file', fs_1.default.createReadStream(`./contracts/uploads/${filename}`));
    postToPinata(data);
};
exports.uploadToPinataAndCallContract = uploadToPinataAndCallContract;
