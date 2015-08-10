var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: '../uploads/' });

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var User = require('../modules/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register' , {
  	'title': 'Register'
  });
});

router.get('/login', function(req, res, next) {
  res.render('login' , {
  	'title': 'Login'
  });
});

router.post('/register', function(req, res, next) {
 	var name = req.body.name;
 	var email = req.body.email;
 	var username = req.body.username;
 	var password = req.body.password;
 	var password2 = req.body.password2;



    req.checkBody('name', 'Name field is required').notEmpty();
    req.checkBody('email', 'Email field is required').notEmpty();
    req.checkBody('email', 'Please enter valid email').isEmail();
    req.checkBody('username', 'Username field is required').notEmpty();
    req.checkBody('password', 'password field is required').notEmpty();
    req.checkBody('password2', 'Password do not match').equals(req.body.password);

    //check for errors
    var errors = req.validationErrors();
    if (errors){
    	res.render('register' , {
    		errors: errors,
    		name: name,
    		email: email,
    		username: username,
    		password:password,
    		password2:password2
    	});
    }else{
    	var newUser = new User ({
    		name: name,
    		email: email,
    		username: username,
    		password:password
    	});

    	//crwate user
    	User.createUser(newUser , function(err , user){
    		if(err) throw err;
    		console.log(user);
    	});

    	req.flash('success' , 'You are now registerd and may log in');
    	res.location('/');
    	res.redirect('/');

    }

}); 

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
	function(username , password , done) {
		User.getUserByUsername(username , function(err , user){
			if (err) { return done(err); }
			if(!user){
				console.log('unknoen user');
				return done(null , user);
			}else{
        console.log('log');
      }

			// User.comparePassword(password , user.password  , function (err , isMatch){
			// 	if(err) throw err;
			// 	if(isMatch){
			// 		return done(null , user);
			// 	}else{
			// 		console.log('invalid password');
			// 		return done(null , false , {message: "invalid password"});
			// 	}
			// })
		});
	}
));

router.post('/login' ,passport.authenticate('local', { failureRedirect: '/users/login', failureFlash: 'Invalid username or password'}) ,  function(req, res ) {
	console.log('auth succes');
	req.flash('success' , 'You are loged in' );
	res.redirect('/');
});

module.exports = router;
