import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },

    },

    {
        timestamps: true,
    }
);


const Users = mongoose.model("UserModels", UserSchema);
export default Users;