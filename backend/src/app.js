const express = require('express');
const { route } = require('./routes/tasks');

const app = express();

app.use(route);

module.exports = { app };