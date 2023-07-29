"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please provide a valid name for the user"]
    },
    email: {},
    password: {}
}, { timestamps: true });
const User = mongoose_1.default.model("User", exports.UserSchema);
exports.User = User;
