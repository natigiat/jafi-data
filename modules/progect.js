var mongoose =require('mongoose');
var bcrypt  = require('bcrypt-nodejs');
var uniqueValidator = require('mongoose-unique-validator');

require('mongoose-query-paginate');

var options = {
  perPage: 10,
  delta  : 3
};


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

//select all progect for account page
module.exports.SelectAllProgectById = function(userId , callback){
	var query = {"userId" : userId};
	Progect.find(query , callback);
}

//select all progect for templates page
module.exports.SelectAllProgect = function(callback){ //
	var query = Progect.find({});
    query.paginate(options, function(err, res) {
    		console.log(res); 
	   }), callback);
	// Progect.find({} , callback);
}

//select progect for progect page
module.exports.SelectProgect = function(userId , progect , callback){
	var query = {"userId" : userId , "name" : progect};
	Progect.find(query , callback);
}
