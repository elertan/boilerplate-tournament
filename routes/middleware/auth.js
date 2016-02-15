'use strict';
const User = require('../../models/user');

module.exports = function (req, res, next) {
    if (req.query.auth) {
        // User logic
        User.find({ authToken: req.query.auth }, function (err, users) {
            if (users.length != 1) {
                res.status(401); // Unauthorized
                res.json({ err: 'Unauthorized' });        
            } else {
                //const user = users[0];
                next();
            }
        });
    } else {
        res.status(401); // Unauthorized
        res.json({ err: 'Unauthorized' });
    }
};