const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.static('public'));
app.get('/default/CIS470-Activity-8', (req, res) => {
    //res.json({ message: 'Hello from Express!' });
    res.sendFile(__dirname + '/public/index.html');
});

module.exports.handler = serverless(app);