import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

export const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please provide a valid name for the user"]
    },

    email: {
        type: String,
        required: [true, "Please provide a valid e-mail address for the user"],
        unique: true,
        
        validate: {

            validator: function(val) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(val);
            },

            message: "Please provide a valid e-mail address"

        }
    },
    
    password: {
        type: String,
        unique: true,
        select: false,
        required: [true, "Please provide a valid password for the user"]
    },

    gender: {
        type: String,
        required: [true, "Please specify the users gender"],
        enum: ['male', 'female', 'non-binary']
    },

    role: {
        type: String,
        enum: ['regular-user', 'admin', 'agent', 'policyholder', 'claims-adjuster']
    },

    address: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
    },

    phone: String,
    dateOfBirth: String,
    
    profilePicture: {
        default: 'no-photo.jpg'
    },

    isLocked: {
        type: Boolean,
        default: false
    },

    accountActive: { // True or false if the user's account is active
        type: Boolean,
        default: false
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    drivingLicense: { // User's driving license data
        number: String,
        expiryDate: Date,
        issuedCity: String
    },

    drivingHistory: { // Data that stores the driving history about a user

        accidents: Number,
        violations: Number,

        claims: [

            {
                claimNumber: String,
                amount: Number,
                date: Date,
                status: String,
            }

        ]
    },

    policies: [ // An array of policies that the user currently has, with its unique number, type, start and end date

        {
            policyNumber: String,
            coverageType: String,
            startDate: Date,
            endDate: Date,
            premiumAmount: Number,
        }
    ],

    policyPreferences: {
        deductible: Number,

   coverageLimits: {
      propertyDamage: Number,
      bodilyInjury: Number,
    },

    notifications: [
    
        {
            message: String,

            sentAt: {
                type: Date,
                default: Date.now
            },

            notificationType: {
                type: String,
                enum: ['policy-renewal', 'claims-status', 'account-activation']
            },

            isRead: {
                type: Boolean,
                default: false
            }

        }
    ],

    emergencyContact: {
        name: String,
        relationship: String,
        phoneNumber: String,
        emailAddress: String
      }

}

}, {timestamps: true} )

UserSchema.pre('save', async function(next) {

    if(!this.isModified("password")) {
        return next();
    }

    const SALT_ROUNDS = 10
    
    // Hash the password using bcrypt
    const currSalt = await bcrypt.genSalt(SALT_ROUNDS);
    this.password = await bcrypt.hash(this.password, currSalt);

    return next();

})

UserSchema.methods.compareLoginPasswords = async function(enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(this.password, enteredPassword);
}

UserSchema.methods.generateAuthToken = function() {
    
}

const User = mongoose.model("User", UserSchema);
export {User}