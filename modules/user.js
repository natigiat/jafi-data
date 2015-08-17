var mongoose =require('mongoose');
var bcrypt  = require('bcrypt-nodejs');
mongoose.connect('mongodb://localhost/nodeauth');
var uniqueValidator = require('mongoose-unique-validator');
var db = mongoose.connection;



var UserSchema = mongoose.Schema({
	password: {type : String},
	email: { type: String, bcrypt:true , unique: true, required: true },
});

UserSchema.plugin(uniqueValidator);


var User = module.exports = mongoose.model('User' , UserSchema);

module.exports.comparePassword = function(candidatePassword , hase , callback){
	bcrypt.compare(candidatePassword , hase , function(err , isMatch){ 
		if(err) return callback(err);
		callback(null , isMatch);
	});
}

module.exports.getUserByEmail = function(username , callback){
	var query = {email : username};
	User.findOne(query , callback);
}


module.exports.createUser = function(newUser, callback){
	newUser.save(callback);
}