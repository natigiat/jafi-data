var mongoose =require('mongoose');
var bcrypt  = require('bcrypt-nodejs');
var uniqueValidator = require('mongoose-unique-validator');





var ElementSchema = mongoose.Schema({
	userId: { type: String , required: true},
	name  : { type: String , required: true},
	html: { type: String , required: true},
	css: { type: String , required: true},
	js: { type: String},
	watch: { type: Number},
	paid: { type: Boolean},
	privateP: { type: Boolean},
	uploadTime :  { type : Date, default: Date.now },
});

// ProgectSchema.plugin(uniqueValidator);


var Element = module.exports = mongoose.model('Element' , ElementSchema);

//check if Element exsist
module.exports.checkElementExsist = function(progetcName , callback){
	var query = {name : progetcName};
	Element.findOne(query , callback);
}


//select Element for view in account and templates page
module.exports.SelectElement = function(Id , Element , callback){

	var query = {"_id" : Id , "name" : Element};
	Element.find(query , callback);
}





