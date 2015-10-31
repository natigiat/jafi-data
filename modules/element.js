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

//select all progect for templates page
module.exports.SelectAllElements = function(callback){ //
	
	var query = {};

    Element.find(query, callback);
}

//select progect for view in account and templates page
module.exports.SelectElement = function(Id , name , callback){

	var query = {"_id" : Id , "name" : name};
	Element.find(query , callback);
}



