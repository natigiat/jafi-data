var express = require('express');
var router = express.Router();



var Progect = require('../modules/progect.js');
var Element = require('../modules/element.js');


/* GET home page. */
router.get('/:id', function(req, res, next) {
        
    // var element =  req.params.element;
    var pageId =  req.params.id -1;
    var elementSum = pageId * 6;

    // console.log(element);

	Element.SelectAllElementsSkip(elementSum ,function(err , elements){
    		
		if(elements){
			res.render('elements', {  title: 'Lando - Elements' , elements:elements});
		}else{
			res.render('elements', {  title: 'Lando - Elements'});
		}
	});  		
});



/* GET home page. */
router.get('/:element/:id', function(req, res, next) {
        
    var element =  req.params.element;
    var pageId =  req.params.id -1;
    var elementSum = pageId * 6;

    console.log(element);

	Element.SelectElementsPaginat(element, elementSum ,function(err , elements){
    		
		if(elements){
			res.render('elements', {  title: 'Lando - Elements' , elements:elements});
		}else{
			res.render('elements', {  title: 'Lando - Elements'});
		}
	});  		
});




module.exports = router;
