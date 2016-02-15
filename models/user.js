'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: String,
    password: String,
    authToken: String
});

module.exports = mongoose.model('User', schema);