"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFactorVerification = exports.TwoFactorVerificationSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.TwoFactorVerificationSchema = new mongoose_1.default.Schema({
    owner: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide the Owner ID of this TVID"]
    },
    mfaToken: {
        type: String,
        required: [true, "Please provide a valid MFA token"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    sentAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });
const TwoFactorVerification = mongoose_1.default.model("TwoFactorVerification", exports.TwoFactorVerificationSchema);
exports.TwoFactorVerification = TwoFactorVerification;
