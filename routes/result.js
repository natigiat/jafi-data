var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('result', { title: 'Result' });
});

router.get('/element', function(req, res, next) {
  res.render('element', { title: 'Element Result' });
});

module.exports = router;
