'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email: String,
    password: String,
    authToken: String
});

module.exports = mongoose.model('User', schema);