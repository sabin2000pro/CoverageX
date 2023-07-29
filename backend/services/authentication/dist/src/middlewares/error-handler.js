"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const errorHandler = (err, request, response, next) => {
    let error = Object.assign({}, err);
    error.message = err.message;
    error.stack = err.stack;
    console.log(error.message);
    console.log(error.stack);
    return response.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message || '', stack: error.stack });
};
exports.errorHandler = errorHandler;
