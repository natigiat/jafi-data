var mongoose =require('mongoose');
var bcrypt  = require('bcrypt-nodejs');
mongoose.connect('mongodb://localhost/nodeauth');
var uniqueValidator = require('mongoose-unique-validator');
var db = mongoose.connection;



var ProgectSchema = mongoose.Schema({
	progect_id : {type : String , required: true},
	user_id    : {type : String , required: true},
	html 	   : {type : String},
	css 	   : {type : String},
	js 		   : {type : String},
	unic_style : {type : Boolean},
});

ProgectSchema.plugin(uniqueValidator);


var Progect = module.exports = mongoose.model('Progect' , ProgectSchema);

// module.exports.comparePassword = function(candidatePassword , hase , callback){
// 	bcrypt.compare(candidatePassword , hase , function(err , isMatch){ 
// 		if(err) return callback(err);
// 		callback(null , isMatch);
// 	});
// }

