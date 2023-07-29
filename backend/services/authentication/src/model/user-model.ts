import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please provide a valid name for the user"]
    },

    email: {

    },
    
    password: {

    }

}, {timestamps: true} )

const User = mongoose.model("User", UserSchema);
export {User}