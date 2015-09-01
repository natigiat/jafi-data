var express = require('express');
var router = express.Router();


var Progect = require('../modules/progect.js');

var Progect = require('../modules/progect.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.isAuthenticated()){
    	var userName =  req.user.name;
    }else{
    	var userName =  '';
    }

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
