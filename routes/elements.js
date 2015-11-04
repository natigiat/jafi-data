var express = require('express');
var router = express.Router();



var Progect = require('../modules/progect.js');
var Element = require('../modules/element.js');


/* GET home page. */
router.get('/', function(req, res, next) {

 //    if (req.isAuthenticated()){
 //    	var userName =  req.user.name;
 //    	var userId =  req.user._id;
 //    }else{
 //    	var userName =  '';
 //    }

 //    console.log(userName);  
	// var query = {};

	Element.SelectAllElements(function(err , elements){
    		
		if(elements){
			res.render('elements', {  title: 'Lando - Elements' , elements:elements});
		}else{
			res.render('elements', {  title: 'Lando - Elements'});
		}
	});  		
});

// //templates filtering
// router.post('/', function(req, res, next) {
	
// 	if (req.isAuthenticated()){
//     	var userName =  req.user.name;
//     }else{
//     	var userName =  '';
//     }


// 	var filter = req.body.filter;
// 	var filterChild = req.body.filterChild;

// 	//check if pogect exsist
//     Progect.SelectAllProgectFilter(filter , filterChild, function(err , progects){
    		
		
// 		if(progects){
// 			res.render('templatesFilte', {  title: 'Lando - Templates' , progects:progects, name:userName });
// 		}else{
// 			res.render('templatesFilte', {  title: 'Lando - Templates'});
// 		}
// 	});  
    
// });


module.exports = router;
