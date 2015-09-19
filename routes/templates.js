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

router.post('/', function(req, res, next) {
	
	var progectId = req.body.progectId;
	var eyesValue = req.body.eyesValue;
	//check if pogect exsist
	Progect.checkProjectExsist(progectId , function(err , progect){
		if(progect){
			
			var conditions = { id: progectId }
			  , update = { $inc: { visits: eyesValue }}

			Progect.update(conditions, update);

			console.log('yes');
		}else{
			console.log('no');
		}
	})

});


module.exports = router;
