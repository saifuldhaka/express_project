const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        userName: {type: String, required: true, unique:true},
        email: {type: String, required: true, require: true},
        password: {type: String, required: true},
        isAdmin:{ type: Boolean , default: false },
        createdAt: Date.now()
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("User", UserSchema);