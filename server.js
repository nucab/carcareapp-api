const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');

var users = require('./routes/users');

const config = require('./knexfile')[process.env.NODE_ENV || 'development'];

const app = express();

const db = knex(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Routes
 */
app.use('/api/users', users);

/**
 * Listen to port
 */
app.listen(3000);
