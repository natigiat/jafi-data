var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Members' });
    if (req.user) {
    // logged in
    	console.log('logged');
	} else {
		console.log('not');
	}
});

module.exports = router;
