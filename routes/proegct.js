var express = require('express');
var router = express.Router();


var Progect = require('../modules/progect.js');

/* GET home page. */
router.get('/:id/:progect', function(req, res, next) {
  // var userId = req.user.id;
  var id = req.params.id;
  var progect = req.params.progect;

  Progect.SelectProgect(id , progect , function(err , progect){
  	if(progect){
		res.render('progect', {  title: 'Account' , progect:progect ,progectName: progect.name});
	}
  });
  
});


/* GET home page. */
router.get('view/:progectId/:progect', function(req, res, next) {
  // var userId = req.user.id;
  var id = req.params.id;
  var progect = req.params.progect;

  Progect.SelectProgect(id , progect , function(err , progect){
  	if(progect){
		res.render('progect', {  title: 'Account' , progect:progect ,progectName: progect.name});
	}
  });
  
});



module.exports = router;
