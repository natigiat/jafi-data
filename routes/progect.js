var express = require('express');
var router = express.Router();
// var $ = require('jquery');



var Progect = require('../modules/progect.js');
var Element = require('../modules/element.js');
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


/* GET element dinamickly */
router.get('element/:id/:name', function(req, res, next) {
  // var userId = req.user.id;
  
  res.render('progect', {  title: 'Account' });
  var id = req.params.id;
  console.log(id);
 //  var name = req.params.name;

 //  Element.SelectElement(id , name , function(err , element){
 //  	if(element){
	// 	res.render('progectElement', {  title: 'Account' , element:element});
	// }
 //  });
  
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
	
	progectId = req.body.progectId;
	console.log(req.body);

	// obj = req.body;
    

	// for (var k in obj){
	    
	//     if (typeof obj[k] !== 'function') {
	//          console.log("Key is " + k + ", value is" + obj[k]);
	//          var k = obj[k];
	//          console.log(tel1);

	//     }

	// }

	
	
	text1       = req.body.text1         ? req.body.text1      : '' ;
	text2       = req.body.text2         ? req.body.text2      : '' ;
	text3       = req.body.text3         ? req.body.text3      : '' ;
	text4       = req.body.text4         ? req.body.text4      : '' ;
	text5       = req.body.text5         ? req.body.text5      : '' ;
	text6       = req.body.text6         ? req.body.text6      : '' ;
	text7       = req.body.text7         ? req.body.text7      : '' ;
	text8       = req.body.text8         ? req.body.text8      : '' ;
	text9       = req.body.text9         ? req.body.text9      : '' ;
	text10      = req.body.text10        ? req.body.text10     : '' ;
	email1      = req.body.email1        ? req.body.email1     : '' ;
	email2      = req.body.email2        ? req.body.email2     : '' ;
	email3      = req.body.email3        ? req.body.email3     : '' ;
	email4      = req.body.email4        ? req.body.email4     : '' ;
	date1       = req.body.date1         ? req.body.date1      : '' ;
	date2       = req.body.date2         ? req.body.date2      : '' ;
	date3       = req.body.date3         ? req.body.date3      : '' ;
	date4       = req.body.date4         ? req.body.date4      : '' ;
    time1       = req.body.time1         ? req.body.time1      : '' ;
	time2       = req.body.time2         ? req.body.time2      : '' ;
	time3       = req.body.time3         ? req.body.time3      : '' ;
	time4       = req.body.time4         ? req.body.time4      : '' ;
	number1     = req.body.num1          ? req.body.num1       : '' ;
	number2     = req.body.num2          ? req.body.num2       : '' ;
	number3     = req.body.num3          ? req.body.num3       : '' ;
	number4     = req.body.num4          ? req.body.num4       : '' ;
	password1   = req.body.password1     ? req.body.password1  : '' ;
	password2   = req.body.password2     ? req.body.password2  : '' ;
	password3   = req.body.password3     ? req.body.password3  : '' ;
	password4   = req.body.password4     ? req.body.password4  : '' ;
	range1      = req.body.rangel        ? req.body.rangel     : '' ;
	range2      = req.body.range2        ? req.body.range2     : '' ;
	range3      = req.body.range3        ? req.body.range3     : '' ;
	range4      = req.body.range4        ? req.body.range4     : '' ;
	tel1        = req.body.tel1          ? req.body.tel1       : '' ;
	tel2        = req.body.tel2          ? req.body.tel2       : '' ;
	tel3        = req.body.tel3          ? req.body.tel3       : '' ;
	tel4        = req.body.tel4          ? req.body.tel4       : '' ;
	url1        = req.body.url1          ? req.body.url1       : '' ;
	url2        = req.body.url2          ? req.body.url2       : '' ;
	url3        = req.body.url3          ? req.body.url3       : '' ;
	url4        = req.body.url4          ? req.body.url4       : '' ;
	texterea1        = req.body.texterea1          ? req.body.texterea1       : '' ;
	texterea2        = req.body.texterea2          ? req.body.texterea2       : '' ;
	texterea3        = req.body.texterea3          ? req.body.texterea3       : '' ;
	texterea4        = req.body.texterea4          ? req.body.texterea4       : '' ;
	




	var newForm = new Form ({
		progectId   :    progectId,
		text1       :    text1,
		text2       :    text2,
		text3       :    text3,
		text4       :    text4,
		text5       :    text5,
		text6       :    text6,
		text7       :    text7,
		text8       :    text8,
		text9       :    text9,
		text10      :    text10,
		email1      :    email1,
		email2      :    email2,
		email3      :    email3,
		email4      :    email4,
		date1       :    date1,
		date2       :    date2,
		date3       :    date3,
		date4       :    date4,
		time1       :    time1,
		time2       :    time2,
		time3       :    time3,
		time4       :    time4,
		number1     :    number1,
		number2     :    number2,
		number3     :    number3,
		number4     :    number4,
		password1   :    password1,
		password2   :    password2,
		password3   :    password3,
		password4   :    password4,
		range1      :    range1,
		range2      :    range2,
		range3      :    range3,
		range4      :    range4,
		tel1        :    tel1,

	});

    // save the user
    newForm.save(function(err ,newForm) {
        if(err) {
            console.log(err);
        }

    });



});


module.exports = router;
