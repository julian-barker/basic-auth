'use strict';

// 3rd Party Resources
const express = require('express');
const authRouter = require('./auth/authRouter');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.use(authRouter);

app.get('/', (req, res) => {
  res.status(200).send('And we\'re live!');
})

function start() {
  app.listen(PORT, () => console.log('listening on port: ', PORT));
}

module.exports = { app, start }