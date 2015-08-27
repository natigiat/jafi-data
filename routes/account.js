var express = require('express');
var router = express.Router();
var screenshot = require('url-to-image');

var Progect = require('../modules/progect.js');

/* GET home page. */

    //load image from url
    //  	screenshot('http://google.com', 'google.png').fail(function(err) {
	//     console.error(err);
	// }).done(function() {
	//     // now google.png exists and contains screenshot of google.com 
	// });

router.get('/', ensureAuthenticated ,function(req, res, next) {
	var userName =  req.user.name;
    userName = userName.replace(/\s/g, '');


  	Progect.SelectAllProgectById(req.user.id , function(err , progects){
  		if(progects){
			console.log('this user have progects');
  			res.render('account', {  title: 'Account' , name: userName , progects:progects });
  		}
  		// }else{
  		// 	console.log('this user do not have progects');
  		// 	res.render('account', {  title: 'Account' , name: req.user.name });
  		// }


    });
  	

});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  else
   	res.redirect('/users/login');
}


module.exports = router;
