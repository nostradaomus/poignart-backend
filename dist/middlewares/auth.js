"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
const verifyToken = (req) => {
    const { authorization } = req.headers;
    const token = authorization && authorization.split(' ')[1];
    if (token == null) {
        return false;
    }
    try {
        (0, jsonwebtoken_1.verify)(token, config_1.CONFIG.JWT_SECRET);
        return true;
    }
    catch (err) {
        return false;
    }
};
exports.verifyToken = verifyToken;
const validateRequest = (req, res, next) => {
    if (config_1.CONFIG.ENVIRONMENT === 'production' ||
        config_1.CONFIG.ENVIRONMENT === 'development') {
        if (!(0, exports.verifyToken)(req)) {
            res.status(401).send('Unauthorized');
        }
        else {
            next();
        }
    }
    else if (config_1.CONFIG.ENVIRONMENT !== 'production' &&
        config_1.CONFIG.ENVIRONMENT !== 'development') {
        res.status(401).send('Invalid environment');
    }
};
exports.validateRequest = validateRequest;
