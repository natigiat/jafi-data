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
    	var userId =  req.user._id;
    }else{
    	var userName =  '';
    }

    console.log(userName);  
	var query = {};

	Progect.SelectAllProgect(function(err , progects){
    		
		if(progects){
			res.render('templates', {  title: 'Lando - Templates' , progects:progects , name:userName , userId: userId});
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
