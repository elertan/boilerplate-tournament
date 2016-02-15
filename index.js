'use strict';

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const config = require('./config');

mongoose.connect(config.database.url, function (err) {
    if (err) {
        console.log('Error connecting to db');
    }
});

// Set global directory
global.dir = path.dirname(require.main.filename);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add routes
const routes = require('./routes/main');
app.use(routes);

app.listen(config.port, function () {
    console.log('Running on port ' + config.port);
});
