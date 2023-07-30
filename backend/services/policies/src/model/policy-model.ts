import mongoose from 'mongoose'

export const PolicySchema = new mongoose.Schema({

    policyNumber: {
        type: String,
        required: true,
        unique: true
    },

    policyHolder: { // The ID of the policy holder is the user's ID
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    coverage: { // The type of insurance coverage

        type: {
            type: String,
            amount: Number, // The maximum amount in £ that the insurance company is likely to pay out in the event of an accident
            deductible: Number,
            enum: ['comprehensive', 'third-party']
        }

    },

    startDate: { // Start date of the insurance policy
        type: Date,
        default: Date.now
    },

    endDate: { // The date at which the policy ends at
        type: Date,
        default: Date.now
    },

    premiumAmount: {
        type: Number,
        required: true,
    },

    vehicle: { // The vehicle data which belongs to this insurance policy
        make: String,
        model: String,
        year: String,
        registrationNumber: String,
        vin: String
    }

}, {timestamps: true})

const Policy = mongoose.model("Policy", PolicySchema);
export {Policy}