var express = require('express');
var router = express.Router();


var Progect = require('../modules/progect.js');
var Manage = require('../modules/manage.js');
var Form = require('../modules/form.js');

/* GET home page. */
router.get('/:id/:progect', function(req, res, next) {
  // var userId = req.user.id;
  var id = req.params.id;
  var progect = req.params.progect;

  Progect.SelectProgect(id , progect , function(err , progect){
  	if(progect){
		res.render('progect', {  title: 'Account' , progect:progect ,progectName: progect.name, progectId: progect._id});
	}
  });
  
});


router.post('/', function(req, res, next) {
	
	// var userId = req.user.id;


    var progectId =req.body.progectId;
	var userIp = req.body.userIp;
	var userDate = req.body.userDate;
	var userPositionLat = req.body.userPositionLat;
    var userPositionLong = req.body.userPositionLong;
	var userCountry = req.body.userCountry;
	var userCity = req.body.userCity;
	console.log(progectId + "+" + userIp + "+" + userDate + "+" + userPositionLat + "+" + userPositionLong + "+" + userCountry + "+" + userCity);

	// console.log(progectId + "+" + userIp + "+" + userDate + "+" + userPositionLat + "+" + userPositionLong + "+" + userCount + "+" + userCity);
	
	var newManage = new Manage ({
	    progectId: progectId,
	    userIp: userIp,
	    userDate : userDate,
	    userPositionLat :userPositionLat ,
	    userPositionLong :userPositionLong ,
		userCountry: userCountry,
		userCity: userCity
	});

    // save the user
    newManage.save(function(err ,newManage) {
        if(err) {
            console.log(err);
        }

    });		

});


//leeds
router.post('/form', function(req, res, next) {
	
	var progectId = req.body.progectId;

	var leedemail     = req.body.email     ? req.body.email : '' ;
	var leedphone    =  req.body.phone    ? req.body.phone    : '';
	var leedcontry   =  req.body.contry   ? req.body.contry   : '';
	var leedname     =  req.body.name     ? req.body.name   : '';
	var leedlastName =  req.body.lastName ? req.body.lastName   : '';

	// console.log(leedemail +''+leedesob);


	// var newForm = new Progect ({
	//     progectId  : progectId,
	//     submitDate : submitDate ,
	//     email      : leedemail,
	//     phone      : leedphone,
	// 	contry     : leedcontry,
	// 	name       : leedname,
	// 	lastName   : leedlastName
	// });

 //    // save the user
 //    newForm.save(function(err ,newForm) {
 //        if(err) {
 //            console.log(err);
 //        }

 //    });


});


module.exports = router;
