const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const User = require('../../models/user');

router.post('/login', function (req, res) {
    const form = req.body;
    
    const params = ['email', 'password'];
    for (var i = 0; i < params.length; i++) {
        if (!form[params[i]]) {
            res.json({ err: 'Missing parameter: ' + params[i] });
            break;
        }
    }
    
    User.find({ email: form.email }, function (err, users) {
        if (users.length != 1) {
            res.json({ err: 'User not found' });
        } else {
            const user = users[0];
            
            bcrypt.compare(form.password, user.password, function (err, same) {
                if (same) {
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(user.email + user.password, salt, function (err, hash) {
                            user.authToken = hash;
                            user.save();
                            res.json({ token: hash });
                        });
                    });    
                } else {
                    res.json({ err: 'Incorrect password' });
                }
            });
        }
    });
    
});

router.post('/register', function (req, res) {
    const form = req.body;
    
    const params = ['email', 'password'];
    for (var i = 0; i < params.length; i++) {
        if (!form[params[i]]) {
            res.json({ err: 'Missing parameter: ' + params[i] });
            break;
        }
    }
    
    // Does the email already exists
    User.find({ email: form.email }, function (err, users) {
        // Are there no users found?
        if (users.length == 0) {
            // Create hash
            bcrypt.genSalt(10, function (err, salt) {
                 bcrypt.hash(form.password, salt, function (err, hash) {
                     const user = new User({
                         email: form.email,
                         password: hash
                     });
                     user.save();
                     res.json({ msg: 'Success' });
                 });
             }); 
        } else {
            res.json({ err: 'An user with that email already exists' });
        }
    });
});

module.exports = router;