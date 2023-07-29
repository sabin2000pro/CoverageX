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
exports.connectAuthSchema = void 0;
require('dotenv').config();
const mongoose_1 = __importDefault(require("mongoose"));
const AUTH_DB_URI = process.env.AUTH_DB_URI;
const connectAuthSchema = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbConnection = yield mongoose_1.default.connect(AUTH_DB_URI);
        if (dbConnection.connection) {
            console.log(`Connected successfully to auth database...`);
        }
        else {
            console.log(`Could not connect to auth database`);
        }
    }
    catch (error) {
        if (error) {
            throw new Error(error);
        }
    }
});
exports.connectAuthSchema = connectAuthSchema;
