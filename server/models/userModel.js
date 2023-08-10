const mongoose = require('mongoose')
const { Schema } = require('mongoose');

//Creating the user Schema


const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String
});

// defining Model

exports.User = mongoose.model('User', userSchema);
