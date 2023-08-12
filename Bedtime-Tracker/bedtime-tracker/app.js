const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const PORT = 4000;

app.use('/', proxy('127.0.0.1:4001'));

app.listen(PORT, (error) => {
    if(error) console.log('Error starting Server', error)
    else console.log('Server Started');
});