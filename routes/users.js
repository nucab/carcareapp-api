var express = require('express');
var router = express.Router();

const db = require('../db');

/* GET All Users */
router.get('/', function(req, res, next) {
  db('users').then((users) => {
    res.send(users);
  }).catch(err => {
    res.send(err);
  });
});

module.exports = router;
