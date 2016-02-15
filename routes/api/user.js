'use strict';

const express = require('express');
const router = express.Router();

const User = require('../../models/user');

router.get('/', function (req, res) {
    User.find(function (err, users) {
        res.json(users);
    });
});

router.get('/by-email/:email', function (req, res) {
    User.find({ email: req.params.email }, function (err, users) {
       res.json(users); 
    });
});

module.exports = router;