var express = require('express');
var router = express.Router();

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

module.exports = router;
