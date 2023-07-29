"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const xss_clean_1 = __importDefault(require("xss-clean"));
const cors_1 = __importDefault(require("cors"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const connect_db_1 = require("./database/connect-db");
(0, connect_db_1.connectAuthSchema)();
const app = (0, express_1.default)();
const AUTH_SERVICE_PORT = process.env.AUTH_SERVICE_PORT;
app.use((0, morgan_1.default)('dev'));
app.use((0, xss_clean_1.default)());
app.use((0, cors_1.default)({
    origin: '*',
    methods: ["PUT", "POST", "GET", "DELETE"]
}));
app.use((0, express_mongo_sanitize_1.default)());
app.get('/', (request, response, next) => {
    return response.status(200).json({ success: true, message: `Auth root route` });
});
const server = app.listen(AUTH_SERVICE_PORT, (error) => {
    try {
        if (!error) {
            return console.log(`Authentication service listening for requests on port ${AUTH_SERVICE_PORT}`);
        }
        else {
            return console.log(`Could not listen for requests`);
        }
    }
    catch (error) {
        if (error) {
            throw new Error(error);
        }
    }
});
exports.server = server;
