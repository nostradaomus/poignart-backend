"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const create_1 = __importDefault(require("./routes/create"));
const update_1 = __importDefault(require("./routes/update"));
const typedefs_1 = require("./schema/typedefs");
const resolvers_1 = require("./schema/resolvers");
const auth_1 = require("./middlewares/auth");
const createServer = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: typedefs_1.typeDefs,
        resolvers: resolvers_1.resolvers,
        context: ({ req }) => {
            if (!(0, auth_1.verifyToken)(req))
                throw Error('Unauthorized');
        }
    });
    server.applyMiddleware({ app });
    // ---------- CREATE ROUTES ----------
    app.use('/create', auth_1.validateRequest, create_1.default);
    // ---------- UPDATE ROUTES ----------
    app.use('/update', auth_1.validateRequest, update_1.default);
    // ---------- ROOT REQUEST ----------
    app.get('/', (req, res) => res.json('Welcome to Dungeon Master!'));
    return app;
};
exports.default = createServer;
