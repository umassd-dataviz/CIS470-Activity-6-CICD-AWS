const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');
const bodyParser = require('body-parser'); // Required for the middleware

const app = require('./index.js');

// Apply body-parser middleware before wrapping with aws-serverless-express
app.use(bodyParser.json());

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  server(event, context, (err, result) => {
    if (err) {
      console.error(err);
    }
  });
};