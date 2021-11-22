const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    profileName: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date
    },
    displayPicURL: {
        type: Array,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    hideGender: {
        type: String,
        required: true
    },
    numberOfPenalty: {
        type: Number,
        required: true
    },
    bio: {
        type: String,
    },
    phoneNo: {
        type: String,
    },
    friends: {
        type: Array
    },
    personalities: {
        type: Array
    }
});

// export model user with UserSchema
const User = mongoose.model("user", userSchema);
module.exports = User;