"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.claimsServer = void 0;
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const http_status_codes_1 = require("http-status-codes");
const app = (0, express_1.default)();
const CLAIMS_SERVICE_PORT = process.env.CLAIMS_SERVICE_PORT || "";
const CLAIMS_SERVICE_DEV_MODE = process.env.CLAIMS_SERVICE_DEV_MODE || "";
app.use(express_1.default.json());
if (CLAIMS_SERVICE_DEV_MODE === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
app.use((0, cors_1.default)({
    origin: "*",
    methods: ['POST', 'GET', "DELETE", "PATCH", "PUT"]
}));
app.get('/', (request, response, next) => {
    return response.status(http_status_codes_1.StatusCodes.OK).json({ success: true, message: "Claims Microservice Root Route" });
});
const claimsServer = app.listen(CLAIMS_SERVICE_PORT, (error) => {
    try {
        if (!error) {
            return console.log(`Claims server listening for requests on port ${CLAIMS_SERVICE_PORT} in mode ${CLAIMS_SERVICE_DEV_MODE}`);
        }
    }
    catch (error) {
        if (error) {
            throw new Error(error);
        }
    }
});
exports.claimsServer = claimsServer;
