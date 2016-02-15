const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({ err: 'Not implemented!' });
});

module.exports = router;