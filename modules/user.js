var mongoose =require('mongoose');
var bcrypt  = require('bcrypt-nodejs');
// mongoose.connect('mongodb://localhost/nodeauth');
var uniqueValidator = require('mongoose-unique-validator');
// var db = mongoose.connection;



var UserSchema = mongoose.Schema({
	name: {type : String , unique: true , required: true},
	password: {type : String},
	email: { type: String, bcrypt:true , unique: true, required: true },
	time : { type : Date, default: Date.now },
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

module.exports.getUserByName = function(username , callback){
	var query = {email : username};
	User.findOne(query , callback);
}

module.exports.createUser = function(newUser, callback){
	newUser.save(callback);
}