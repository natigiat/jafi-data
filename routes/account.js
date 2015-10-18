var express = require('express');
var router = express.Router();
// var $ = require('jQuery');
var S = require('string');
var moment = require('moment');

var Progect = require('../modules/progect.js');
var Manage = require('../modules/manage.js');

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

  


   Manage.checkProjectExsistById(id , function(err , progectManage){
      if(progectManage){
        
        console.log(progectManage);
        
        var count = 0;
        for(var i=0 in progectManage) {
          var today = moment().format('YYYY-MM-DD');;

          // console.log(progectManage[i].userDate);
          var dates = S(progectManage[i].userDate).left(10).s;
          if (dates == today){
            // progectManage[i]
            count++
          }

          
        }
      
        
        //find the totla numbers of viewrs
        Manage.count({progectId: id}, function(err, c)
        {
          // console.log('Count is ' + c);

          Progect.SelectProgect(id , progectName , function(err , progect){
            if(progect){
              res.render('manage', {title: 'Manage Pages' , name: userName,email:userEmail ,userInfo:req.user, userId:userId , id:id, progectName:progectName, total:c ,today:count , progectManage:progectManage});
            }
          });

        });

        

        

      }else{
        Progect.SelectProgect(id , progectName , function(err , progect){
          if(progect){
            res.render('manage', {title: 'Manage Pages' , name: userName,email:userEmail ,userInfo:req.user, userId:userId , id:id, progectName:progectName});
          }
        });
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
