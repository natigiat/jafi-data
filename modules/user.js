var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/nodeauth');
var db = mongoose.connection;



var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true 
	},
	password: {
		type : String
	},
	email: {
		type : String
	},
	name: {
		type : String
	},
	profileimage: {
		type : String
	},


});


var User = module.exports = mongoose.model('User' , UserSchema);

module.exports.comparePassword = function(candidatePassword , hasee , callback){
	candidatePassword.compare(candidatePassword , hash , function(err , isMatch){ 
		if(err) return callback(err);
		callback(null , isMatch);
	});
}

module.exports.getUserByUsername = function(username , callback){
	var query = {username : username};
	User.findOne(query , callback);
}

module.exports.getUserById = function(id , callback){
	User.findOne(id , callback);
}

module.exports.createUser = function(newUser, callback){
	newUser.save(callback);
}