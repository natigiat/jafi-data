var express = require('express');
var router = express.Router();


var Progect = require('../modules/progect.js');
var User = require('../modules/user.js');



/* GET scanner page. */
router.get('/', ensureAuthenticated,  function(req, res, next) {
  var userName =  req.user.name;
  userName = userName.replace(/\s/g, '');

  res.render('scanner', { title: 'Scanner' , user: req.user , name: userName }); //, name: req.user.name
});


/* GET scanner edit. */
router.get('/:user/:progect', ensureAuthenticated,  function(req, res, next) {
  var userId = req.user.id;
  var username = req.params.user;
  var progect = req.params.progect;

  Progect.SelectProgect(userId , progect , function(err , progect){
  	if(progect){
	    console.log(typeof(progect));
		res.render('scanner', {  title: 'Account' , progect:progect });
	}
  });
});


router.post('/', function(req, res, next) {
	
	var userId = req.user.id;
	var progectName = req.body.progectName;
	var css = req.body.css;
	var html = req.body.html;
	var js = req.body.js;



	//check if pogect exsist
	Progect.checkProjectExsist(progectName , function(err , progect){
		if(progect){
			var satusProgect = "progect exsist";
			return satusProgect;
		}else{
			var newProgect = new Progect ({
			    userId: userId,
			    name: progectName ,
				html: html,
				css: css,
				js: js
			});

		    // save the user
		    newProgect.save(function(err ,newProgect) {
		        if(err) {
		            console.log(err);
		        }

		    });
		}
	})
	
		
});



//check if user is auth
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  else
   	res.redirect('/users/login');
}


module.exports = router;
