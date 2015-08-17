var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', {title: 'Members' , email: req.user.email });
});

module.exports = router;
