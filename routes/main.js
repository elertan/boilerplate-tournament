const express = require('express');
const router = express.Router();

const apiRoutes = require('./api.js');
router.use('/api', apiRoutes);

module.exports = router;