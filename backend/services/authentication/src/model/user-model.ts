import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

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
    }

}, {timestamps: true} )

UserSchema.pre('save', async function(next) {

})

UserSchema.methods.compareLoginPasswords = async function(enteredPassword: string): Promise<boolean> {
    return false;
}

const User = mongoose.model("User", UserSchema);
export {User}