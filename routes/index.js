var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.isAuthenticated()){
		res.render('index', {title: 'Members' , email: req.user.email });
	}else{
		req.toastr.info('start your first progect', "Welcome to Landing Chat");
    	res.locals.toasts = req.toastr.render()
		res.render('index', {title: 'Members'  });
	}
  	
});

module.exports = router;
