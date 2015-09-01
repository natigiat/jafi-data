var express = require('express');
var router = express.Router();


var Progect = require('../modules/progect.js');

/* GET home page. */
router.get('/:user/:progect', function(req, res, next) {
  // var userId = req.user.id;
  var username = req.params.user;
  var progect = req.params.progect;

  Progect.SelectProgect(username , progect , function(err , progect){
  	if(progect){
		res.render('progect', {  title: 'Account' , progect:progect ,progectName: progect.name});
	}
  });
  
});



module.exports = router;
