var express = require('express');
var router = express.Router();
var path = require('path');
var multer  = require('multer');
var bcrypt  = require('bcrypt-nodejs');
var mkdirp = require('mkdirp');

var upload = multer({ dest: '../uploads/' });

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


//define root dir
global.appRoot =  path.dirname(module.parent.filename); 

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
 	var email = req.body.email;
 	var password = req.body.password;
 	var password2 = req.body.password2;

    req.checkBody('email', 'Email field is required').notEmpty();
    req.checkBody('email', 'Please enter valid email').isEmail();
    req.checkBody('password', 'password field is required').notEmpty();
    req.checkBody('password2', 'Password do not match').equals(req.body.password);

    //check for errors
    var errors = req.validationErrors();
    if (errors){
    	res.render('register' , {
    		errors: errors,
    		email: email,
    		password:password,
    		password2:password2
    	});
    }
    // newUser.save(function (err) {
    //     console.log(err);
    // });
    else{
    	var newUser = new User ({
    		email: email,
    		password:bcrypt.hashSync(password)
    	});
      
    	//create user
    	User.createUser(newUser , function(err , user){
    		if(err) throw err;
        
        //** option to make dir
        // mkdirp(appRoot + '/progects/' + user.email , function (err) { //appDir + '/progects/' + user.name
        //     if (err) console.error(err)
        //     else console.log('pow!')
        // });

    	});

    	req.flash('success' , 'You are now registerd - Start your first progect');
    	res.redirect('/account');

    }

}); 


//config serialize and deserialze
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
    console.log('wwwwwwwwwwwwwwww' + user);
  });
});


passport.use(new LocalStrategy(
  function(username , password , done) {
		User.getUserByEmail(username , function(err , user){
			if (err) { return done(err); }
			if(!user){
				console.log('unknoen user ' + user);
				return done(null , user);
			}else{
        console.log('loged in with ' + user);
      }

			User.comparePassword(password , user.password  , function (err , isMatch){
				if(err) throw err;
				if(isMatch){
					return done(null , user);
          console.log(user);
				}else{
					console.log('invalid password');
					return done(null , false , {message: "invalid password"});
				}
			})
		});
	}
));

// router.post('/login' , passport.authenticate('local', function(err, user, info){
//   res.locals.user = req.user;
//   req.flash('success' , 'You are loged in' );
//   res.redirect('/account');
// });


router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      console.log(req.user);

      return res.redirect('/account');
    });
  })(req, res, next);
});


router.get('/logout' ,  function(req, res ) {
  req.logout();
  req.flash('success' , 'You Have Logged Out' );
  res.redirect('/');
});

module.exports = router;
