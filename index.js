const express = require('express');
const app = express();

// Add routes
const routes = require('./routes/main');
app.use(routes);

app.listen(1337, function () {
    console.log('Running on port 1337');
});
