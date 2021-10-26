var express = require('express');
var router = express.Router();
var a=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  a=a+1;
  res.send('User accesses are:' + a);
});

module.exports = router;
