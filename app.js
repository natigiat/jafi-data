var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var expressValidator= require('express-validator');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
var multer  = require('multer');
var flash = require('connect-flash');
var toastr = require('express-toastr');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/nodeauth');
var uniqueValidator = require('mongoose-unique-validator');
var db = mongoose.connection;






var routes = require('./routes/index');
var users = require('./routes/users');
var account = require('./routes/account');
var scanner = require('./routes/scanner');
var result = require('./routes/result');
var progect = require('./routes/progect');
var templates = require('./routes/templates');
var elements = require('./routes/elements');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Handel file upload
app.use(multer({
  dest:'./uploads/drowrow/',
  rename: function (fieldname, filename) {
    return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
  }

}).single('onixfile'));





// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



//Express sessions
app.use(session({
  secret:'secret',
  saveUninitialized: true,
  resave:true
}));

//Passport
app.use(passport.initialize());
app.use(passport.session());

//Validetor
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//config messages
app.use(flash());
app.use(toastr({
    closeButton: true
}));

app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});


app.use('*' ,function (req, res, next)
{
    
    res.locals.toasts = req.toastr.render()
    next()
});


app.use('/', routes);
app.use('/users', users);
app.use('/scanner' , scanner);
app.use('/account' , account); 
app.use('/result' , result); 
app.use('/progect' , progect); 
app.use('/templates' , templates);
app.use('/elements' , elements);
 



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
