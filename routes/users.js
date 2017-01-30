var express = require('express');
var router = express.Router();

/* GET All Users */
router.get('/', function(req, res, next) {
  db('users').then((users) => {
    res.send(users);
  }).catch(err => {
    res.send(err);
  });
});

module.exports = router;
