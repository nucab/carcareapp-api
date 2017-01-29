const express = require('express');
const bodyParser = require('body-parser')
const knex = require('knex');

const config = require('./knexfile')[process.env.NODE_ENV || 'development'];

const app = express();

const db = knex(config);

app.use(bodyParser.json());
app.get('/api/users', (req, res, next) => {
	db('users').then((users) => {
		res.send(users);
	}).catch(err => {
		res.send(err);
	});
});
app.listen(3000);