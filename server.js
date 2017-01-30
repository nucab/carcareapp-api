const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');

/**
 * DB Config
 */
const db = require('./db');

/**
 * Routes
 */
var users = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/users', users);

/**
 * Listen to port
 */
app.listen(3000);
