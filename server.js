const express = require('express');
const bodyParser = require('body-parser')
const knex = require('knex');

const app = express();

const db = knex({
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'root',
		database: 'abc_carmanagement',
		port: '3306',
		password: ''
	}
});

app.use(bodyParser.json());
app.get('/api/users', (req, res, next) => {
	db('users').then((users) => {
		res.send(users);
	}).catch(err => {
		res.send(err);
	});
});
app.listen(3000);