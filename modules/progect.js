var mongoose =require('mongoose');
var bcrypt  = require('bcrypt-nodejs');
var uniqueValidator = require('mongoose-unique-validator');




var ProgectSchema = mongoose.Schema({
	userId: { type: String},
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

// module.exports.comparePassword = function(candidatePassword , hase , callback){
// 	bcrypt.compare(candidatePassword , hase , function(err , isMatch){ 
// 		if(err) return callback(err);
// 		callback(null , isMatch);
// 	});
// }

