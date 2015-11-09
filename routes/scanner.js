var express = require('express');
var router = express.Router();
var fs = require('fs');
var screenshotPromise = require('screenshot-promise');
var imagecolors = require('imagecolors');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/drowrow/' });
var url = require('url');


var Progect = require('../modules/progect.js');
var Element = require('../modules/element.js');
var User = require('../modules/user.js');



/* GET scanner page. */
// router.get('/', ensureAuthenticated,  function(req, res, next) {
//   var userName =  req.user.name;
//   userName = userName.replace(/\s/g, '');

//   res.render('scanner', { title: 'Scanner' , user: req.user , name: userName }); //, name: req.user.name
// });

/* GET scanner page. */
router.get('/',  function(req, res, next) {

    res.render('scanner', { title: 'Scanner' }); //, name: req.user.name
});


/* GET scanner edit from account page. */
router.get('/:user/:progect', ensureAuthenticated,  function(req, res, next) {
  var userId = req.user.id;
  var username = req.params.user;
  var progect = req.params.progect;

  Progect.SelectProgectId(userId , progect , function(err , progect){
  	if(progect){
	    console.log(typeof(progect));
		res.render('scanner', {  title: 'Scanner - new progect' , progect:progect ,userId:userId});
	}
  });
});


/* GET scanner edit from templates page. */
router.get('/edit/:progect/:userId', ensureAuthenticated,  function(req, res, next) {
  var userId = req.user.id;
  var username = req.params.user;
  var progect = req.params.progect;

  

  Progect.checkProjectById(progect , function(err , progect){
  	if(progect){
	    console.log(progect);
		res.render('scanner', {  title: 'Scanner - edit progect' , progect:progect ,userId:userId});
	}
  });
});



router.post('/', function(req, res, next) {
	
	var userId = req.user.id;
	var progectName = req.body.progectName;
	var progectId = req.body.progectId;
	var filter = req.body.filter;
	var filter_child = req.body.filter_child;
	var css = req.body.css;
	var html = req.body.html;
	var js = req.body.js;


    if(filter){
    	//check if pogect exsist
		Progect.checkProjectExsist(progectName , function(err , progect){
			if(progect){
				var satusProgect = "progect exsist";
				return satusProgect;
			}else{
				
				var newProgect = new Progect ({
				    userId: userId,
				    name: progectName ,
				    filter : filter,
				    filter_child: filter_child,
					html: html,
					css: css,
					js: js
				});

			    // save the user
			    newProgect.save(function(err ,newProgect) {
			        if(err) {
			            console.log(err);
			        }

			    });
                

			    screenshotPromise('http://localhost:3000/progect/'+newProgect.id+'/'+progectName, '1024x768', {crop: true , delay:5})
			    .then(function (buf) {
			        fs.writeFileSync('public/images/screenshots/'+userId+progectName+'.png' , buf);
			        console.log('public/images/screenshots/'+userId+progectName+'.png created' );
			    });


			    
			}
		})

    }
    else{

         // console.log(userId)
	     console.log('the progect is' + progectName);
	     Progect.update({ name: progectName}, {
			    html: html, 
			    css:css,
			    js:js
		 }, function(err, numberAffected, rawResponse) {
		   console.log(err);
		   	    screenshotPromise('http://localhost:3000/progect/'+progectId+'/'+progectName, '1024x768', {crop: true})
			    .then(function (buf) {
			        fs.writeFileSync('public/images/screenshots/'+userId+progectName+'.png' , buf);
			        console.log('public/images/screenshots/'+userId+progectName+'.png created' );
			    });

		 })

    }
	
	
		
});


// save element
router.post('/element', function(req, res, next) {
	
	var userId = req.user.id;
	// var userId = '234234';  //for dev
	var elmentName = req.body.elmentName;
	var elementHtml = req.body.elementHtml;
	var elementCss = req.body.elementCss;
	var elementJs = req.body.elementJs;

	console.log(elmentName+ elementHtml +elementCss +elementJs);
				
		
		var newElement = new Element ({
		    userId: userId,
		    name: elmentName ,
		    html : elementHtml,
			css: elementCss,
			js: elementJs
		});

	    // save the user
	    newElement.save(function(err ,newProgect) {
	        if(err) {
	            console.log(err);
	        }

	    });
                

	    // screenshotPromise('http://localhost:3000/progect/'+newProgect.id+'/'+progectName, '1024x768', {crop: true , delay:5})
	    // .then(function (buf) {
	    //     fs.writeFileSync('public/images/elements/'+userId+progectName+'.png' , buf);
	    //     console.log('public/images/screenshots/'+userId+progectName+'.png created' );
	    // });



});


router.post('/upload', upload.single('onixfile'), function(req, res, next) {
  // if(done==true){
    console.dir(req.file);
    res.redirect("/upload");
  // }
    
});

//get element ajax info
router.post('/elements/:kind', function(req, res, next) {  	
  	
  	var kind = req.params.kind;
  	console.log(kind);

  	if (kind === 'element' || kind === 'all') {
  		Element.SelectAllElements(function(err , elements){
    		res.contentType('json');
			res.send(elements);		
		});  	
  	}
  	else if(kind != 'element') {
        Element.SelectElementByKind(kind , function(err , elements){
    		console.log(elements);
    		res.contentType('json');
			res.send(elements);	

		});  
  	}

    
})






//check if user is auth
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  else
   	res.redirect('/users/login');
}


module.exports = router;
