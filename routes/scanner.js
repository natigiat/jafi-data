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
	
	
	// res.send({name:"nati" , lastname: "giat"});
		var newProgect = new Progect ({
		    name: 'name' ,
			html: '<li>Offer users a way to register and pay for classes online</li><li>Establish a consistent brand for website and print materials</li>',
			css: 'ol > li:before {background: #8da97d; color: white; content: counter(li); counter-increment:li; font-family: "Bree Serif", serif; font-size: 1.2em; line-height:1em; padding: .5em 0; position: absolute; top: .4em; left: -1.6em; text-align: center; width: 2em; }',
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
