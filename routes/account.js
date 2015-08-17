var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', ensureAuthenticated ,function(req, res, next) {
  	res.render('account', { title: 'Account' , email: req.user.email });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  else
   	res.redirect('/users/login');
}


module.exports = router;