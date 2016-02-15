'use strict';

const express = require('express');
const router = express.Router();

const mwAuth = require('./middleware/auth'); 

const userRoutes = require('./api/user');
router.use('/user', mwAuth, userRoutes);

module.exports = router;