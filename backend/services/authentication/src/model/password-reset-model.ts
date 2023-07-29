import mongoose from "mongoose"
import { PasswordResetDocument } from "../interfaces/password-reset-interface"

const PasswordResetSchema = new mongoose.Schema<PasswordResetDocument>({

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    token: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    expiresAt: {
        type: Date,
        default: Date.now()
    }

}, {
    timestamps: true
})

const PasswordReset = mongoose.model("PasswordReset", PasswordResetSchema);
export {PasswordReset}