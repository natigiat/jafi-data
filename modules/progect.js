var mongoose =require('mongoose');
var bcrypt  = require('bcrypt-nodejs');
var uniqueValidator = require('mongoose-unique-validator');




var ProgectSchema = mongoose.Schema({
	userId: { type: String , required: true},
	name  : { type: String},
	html: { type: String},
	css: { type: String},
	js: { type: String},
	paid: { type: Boolean},
	privateP: { type: Boolean},
	uploadTime :  { type : Date, default: Date.now },
});

// ProgectSchema.plugin(uniqueValidator);


var Progect = module.exports = mongoose.model('Progect' , ProgectSchema);

//check if progect exsist
module.exports.checkProjectExsist = function(progetcName , callback){
	var query = {name : progetcName};
	Progect.findOne(query , callback);
}

module.exports.SelectAllProgectById = function(userId , callback){
	var query = {"userId" : userId};
	Progect.find(query , callback);
}
