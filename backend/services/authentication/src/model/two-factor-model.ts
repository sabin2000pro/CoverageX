import mongoose from 'mongoose';
import { TwoFactorVerificationDocument } from '../interfaces/two-factor-verification-interface';

export const TwoFactorVerificationSchema = new mongoose.Schema<TwoFactorVerificationDocument>({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
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

}, {timestamps: true})


const TwoFactorVerification = mongoose.model("TwoFactorVerification", TwoFactorVerificationSchema);
export {TwoFactorVerification}