import mongoose from 'mongoose'

export const PolicySchema = new mongoose.Schema({

    policyNumber: {
        type: String,
        required: true,
        unique: true
    },

    coverageType: {
        type: String,
        required: true,
    },

    startDate: {
        type: Date,
        default: Date.now
    },

    endDate: {
        type: Date,
        default: Date.now
    },

    premiumAmount: {
        type: Number,
        required: true,
    },

    vehicle: {
        make: String,
        model: String,
        year: String,
        registrationNumber: String
    },

    policyHolder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      }

})

const Policy = mongoose.model("Policy", PolicySchema);
export {Policy}