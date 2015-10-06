var express = require('express');
var router = express.Router();

require('mongoose-query-paginate');

var options = {
  perPage: 3,
  delta  : 3
};




var Progect = require('../modules/progect.js');

var Progect = require('../modules/progect.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.isAuthenticated()){
    	var userName =  req.user.name;
    }else{
    	var userName =  '';
    }

	var query = {};
  
	// Progect.find(query).paginate(options, function(err, resp) {
	// 		// console.log(res);
	// 		console.log(resp);
			
	// 		if(resp){
	// 			res.render('templates', {  title: 'Lando - Templates' , progects:resp});//, name:userName 
	// 		}else{
	// 			res.render('templates', {  title: 'Lando - Templates'});
	// 		}
		 	
	// }); 
 

	Progect.SelectAllProgect(function(err , progects){
    		
		if(progects){
			res.render('templates', {  title: 'Lando - Templates' , progects:progects , name:userName });
		}else{
			res.render('templates', {  title: 'Lando - Templates'});
		}
	});  		
});

//templates filtering
router.post('/', function(req, res, next) {
	
	if (req.isAuthenticated()){
    	var userName =  req.user.name;
    }else{
    	var userName =  '';
    }

	var filter = req.body.filter;
	var filterChild = req.body.filterChild;

	console.log(filter);
	console.log(filterChild);

	//check if pogect exsist
    Progect.SelectAllProgectFilter(filter , filterChild, function(err , progects){
    		
		
		if(progects){
			res.render('templatesFilte', {  title: 'Lando - Templates' , progects:progects, name:userName });
		}else{
			res.render('templatesFilte', {  title: 'Lando - Templates'});
		}
	});  
    



});


module.exports = router;
