var mongoose =require('mongoose');
var bcrypt  = require('bcrypt-nodejs');
var uniqueValidator = require('mongoose-unique-validator');



var FormSchema = mongoose.Schema({
	progectId: { type: String , required: true},
	submitDate  : { type : Date, default: Date.now },
	email : { type: String},
    phone : { type: String},
	contry: { type: String},
	name: { type: String},
	lastName: { type: String},
	
});

// ProgectSchema.plugin(uniqueValidator);


var Form = module.exports = mongoose.model('Form' , FormSchema);

//check if progect exsist
module.exports.checkProjectExsist = function(progetcName , callback){
	var query = {name : progetcName};
	Form.findOne(query , callback);
}





