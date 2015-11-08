var mongoose =require('mongoose');
var bcrypt  = require('bcrypt-nodejs');
var uniqueValidator = require('mongoose-unique-validator');



var FormSchema = mongoose.Schema({
	progectId: { type: String , required: true},
	submitDate  : { type : Date, default: Date.now },
	text1       : { type: String},
	text2       : { type: String},
	text3       : { type: String},
	text4       : { type: String},
	text5       : { type: String},
	text6       : { type: String},
	text7       : { type: String},
	text8       : { type: String},
	text9       : { type: String},
	text10      : { type: String},
	email1      : { type: String},
	email2      : { type: String},
	email3      : { type: String},
	email4      : { type: String},
	date1       : { type: String},
	date2       : { type: String},
	date3       : { type: String},
	date4       : { type: String},
    time1       : { type: String},
	time2       : { type: String},
	time3       : { type: String},
	time4       : { type: String},
	number1     : { type: String},
	number2     : { type: String},
	number3     : { type: String},
	number4     : { type: String},
	password1   : { type: String},
	password2   : { type: String},
	password3   : { type: String},
	password4   : { type: String},
	range1      : { type: String},
	range2      : { type: String},
	range3      : { type: String},
	range4      : { type: String},
	tel1        : { type: String},
	tel2        : { type: String},
	tel3        : { type: String},
	tel4        : { type: String},
	url1        : { type: String},
	url2        : { type: String},
	url3        : { type: String},
	url4        : { type: String},
	texterea1   : { type: String},
	texterea2   : { type: String},
	texterea3   : { type: String},
	texterea4   : { type: String},

	
});

// ProgectSchema.plugin(uniqueValidator);


var Form = module.exports = mongoose.model('Form' , FormSchema);

//check if progect exsist
module.exports.selectFormByProgectId = function(progetcId , callback){
	var query = {progectId : progetcId};
	Form.find(query , callback);
}





