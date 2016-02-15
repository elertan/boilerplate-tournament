'use strict';

const express = require('express');
const router = express.Router();

const mwAuth = require('./middleware/auth'); 

router.use('/user', mwAuth, require('./api/user'));
router.use('/auth', require('./api/auth'));

module.exports = router;