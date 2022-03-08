"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToPinataAndCallContract = exports.postToPinata = void 0;
const form_data_1 = __importDefault(require("form-data"));
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const postToPinata = (data) => {
    return axios_1.default
        .post(process.env.PINATA_URL, data, {
        headers: {
            'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
            pinata_api_key: process.env.PINATA_API_KEY,
            pinata_secret_api_key: process.env.PINATA_SECRET_KEY
        }
    })
        .then(function (response) {
        const hash = response.data.IpfsHash;
        console.log('success, ipfsh hash: ', hash);
        return 'success';
    })
        .catch(function (error) {
        console.log(error);
        return null;
    });
};
exports.postToPinata = postToPinata;
const uploadToPinataAndCallContract = (address, filename) => {
    const metadata = JSON.stringify({
        name: `${address}-nft.png`
    });
    const data = new form_data_1.default();
    data.append('pinataMetadata', metadata);
    data.append('file', fs_1.default.createReadStream(`./contracts/uploads/${filename}`));
    (0, exports.postToPinata)(data);
};
exports.uploadToPinataAndCallContract = uploadToPinataAndCallContract;
