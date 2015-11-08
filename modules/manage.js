var mongoose =require('mongoose');
var bcrypt  = require('bcrypt-nodejs');
var uniqueValidator = require('mongoose-unique-validator');



var ManageSchema = mongoose.Schema({
	progectId: { type: String , required: true},
	userDate  : { type: String},
	userIp : { type: String},
	userPositionLat : { type: String},
    userPositionLong : { type: String},
	userCountry: { type: String},
	userCity: { type: String},
});

// ProgectSchema.plugin(uniqueValidator);


var Manage = module.exports = mongoose.model('Manage' , ManageSchema);

//check if progect exsist
module.exports.checkProjectExsist = function(progetcName , callback){
	var query = {name : progetcName};
	Manage.findOne(query , callback);
}

//check if progect exsist by id
module.exports.checkProjectExsistById = function(progetcId , callback){
	var query = {progectId : progetcId};
	Manage.find(query , callback);
}




