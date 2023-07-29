import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({

})

const User = mongoose.model("User", UserSchema);
export {User}