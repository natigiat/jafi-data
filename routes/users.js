var express = require('express');
var router = express.Router();
var path = require('path');
var multer  = require('multer');
var bcrypt  = require('bcrypt-nodejs');

// var nodemailer = require('nodemailer');
// var upload = multer({ dest: '../uploads/' });


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



router.post('/register', passport.authenticate('local-signup', {
        successRedirect : '/account', // redirect to the secure profile section
        failureRedirect : '/users/register', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
}));

// router.post('/register', function(req, res, next) {
  
//   var email = req.body.email;
//   var password = req.body.password;
//   var password2 = req.body.password2;

//     req.checkBody('email', 'Email field is required').notEmpty();
//     req.checkBody('email', 'Please enter valid email').isEmail();
//     req.checkBody('password', 'password field is required').notEmpty();
//     req.checkBody('password2', 'Password do not match').equals(req.body.password);

//     //check for errors
//     var errors = req.validationErrors();
//     if (errors){
//       res.render('register' , {
//         errors: errors,
//         email: email,
//         password:password,
//         password2:password2
//       });
//     }

//     else{
//       var newUser = new User ({
//         email: email,
//         password:bcrypt.hashSync(password)
//       });
      
//       //create user
//       User.createUser(newUser , function(err , user , done){
//         if(err) throw err;

//         req.flash('success' , 'You are now registerd - Start your first progect');
//         passport.authenticate('local')(req, res, function () {
//           res.redirect('/account');
//         });

//       });
//     }

// }); 


//config serialize and deserialze
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});





 passport.use('local-signup', new LocalStrategy({
    passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username , password , done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        var name = req.body.name;
        User.getUserByName(name , function(err, user) {

            if (err)
                return done("error "  + err);

            // check to see if theres already a user with that name
            if (user) {
                return done(null, false, req.flash('error', 'That User Name is already taken.'));
            } 

        });


        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.getUserByEmail(username , function(err, user) {
            // if there are any errors, return the error
            

            if (err)
                return done("error "  + err);

            // check to see if theres already a user with that email
            if (user) {
                return done(null, false, req.flash('error', 'That email is already taken.'));
            } else {

                // if there is no user with that email
                // create the user
                var newUser = new User ({
                  name: name , 
                  email: username,
                  password:bcrypt.hashSync(password)
                });

                // save the user
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });    

        });

    }));



// Use the LocalStrategy within Passport to login/”signin” users.
passport.use(new LocalStrategy(
  function(username , password , done) {
    User.getUserByEmail(username , function(err , user){
      if (err) { return done(err); }
      if(!user){
        console.log('unknoen user ' + user);
        return done(null, false);
      }else{
        console.log('loged in with ' + user);
      }

      User.comparePassword(password , user.password  , function (err , isMatch){
        if(err) throw err;
        if(isMatch){
          return done(null , user);
        }else{
          console.log('invalid password');
          return done(null , false , {message: "invalid password"});
        }
      })
    });
  }
));




router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { 
      req.flash('error' , 'Invalid User Details' ); 
      return res.redirect('/users/login'); 
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      req.toastr.success('Successfully logged in.', "You're in!");
      // console.log('Successfully logged in with ' + req.user);
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
