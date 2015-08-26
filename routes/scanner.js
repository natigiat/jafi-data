var express = require('express');
var router = express.Router();


var Progect = require('../modules/progect.js');
var User = require('../modules/user.js');



/* GET home page. */
router.get('/', ensureAuthenticated,  function(req, res, next) {
  var userName =  req.user.name;
  userName = userName.replace(/\s/g, '');

  res.render('scanner', { title: 'Scanner' , user: req.user , name: userName }); //, name: req.user.name
});


router.post('/', function(req, res, next) {
	
	var html = req.body.html;
	var css = req.body.css;
	var js = req.body.js;
	
	// res.send({name:"nati" , lastname: "giat"});
		var newProgect = new Progect ({
		    name: 'name' ,
			html: html,
			css: css,
		});

	    // save the user
	    newProgect.save(function(err ,newProgect) {
	        if(!err) {
	            res.redirect('/scanner');
	        }
	        else {
	            console.log(err);
	        }
	    });
});



//check if user is auth
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  else
   	res.redirect('/users/login');
}


module.exports = router;
