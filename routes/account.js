var express = require('express');
var router = express.Router();

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


/* GET users listing. */
router.get('/setting', ensureAuthenticated , function(req, res, next) {
   var userName =  req.user.name;
    userName = userName.replace(/\s/g, '');
   var userEmail =  req.user.email;


  res.render('accountSetting', {title: 'Account Settings' , name: userName,email:userEmail ,userInfo:req.user });
});



/* user manage app */
router.get('/manage/:id/:progect', ensureAuthenticated , function(req, res, next) {
   var userName =  req.user.name;
   var userId =  req.user.id;
    userName = userName.replace(/\s/g, '');
   var userEmail =  req.user.email;

   var id = req.params.id;
   var progectName = req.params.progect;

   console.log(progectName);


   Progect.SelectProgect(id , progectName , function(err , progect){
      if(progect){
        console.log(progect);
        res.render('manage', {title: 'Manage Pages' , name: userName,email:userEmail ,userInfo:req.user, userId:userId , id:id, progectName:progectName});
      }
   });


  
});



function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  else
   	res.redirect('/users/login');
}


module.exports = router;
