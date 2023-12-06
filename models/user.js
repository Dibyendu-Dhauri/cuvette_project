const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    age: {
        type: String,
        require: true,
    },
    gender:{
        type: String,
        require: true,
    },
    mobile: {
        type: String,
        require: true,

    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
})

const User = mongoose.model("User",userSchema)

module.exports = User;