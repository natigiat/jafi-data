var mongoose =require('mongoose');
var bcrypt  = require('bcrypt-nodejs');
var uniqueValidator = require('mongoose-unique-validator');


require('mongoose-query-paginate');

var options = {
  perPage: 3,
  delta  : 3
};


var ProgectSchema = mongoose.Schema({
	userId: { type: String , required: true},
	name  : { type: String , required: true},
	filter  : { type: String , required: true},
	filter_child  : { type: String},
	html: { type: String , required: true},
	css: { type: String , required: true},
	js: { type: String},
	watch: { type: Number},
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


//check if progect exsist
module.exports.checkProjectById = function(progect , callback){
	var query = {"_id" : progect};
	Progect.findOne(query , callback);
}


//check if progect exsist by id
module.exports.checkProjectExsistById = function(progetcId , callback){
	var query = {name : progetcId};
	Progect.findOne(query , callback);
}

//select all progect for account page
module.exports.SelectAllProgectById = function(userId , callback){
	var query = {"userId" : userId};
	Progect.find(query , callback);
}


//select all progect for templates page
module.exports.SelectAllProgect = function(callback){ //
	
	var query = {};

    Progect.find(query, callback);
}

//select all progect for templates page
module.exports.SelectAllProgectFilter = function(filter , filterChild, callback){ //
	if (typeof(filter)==='undefined') filter = '';
    if (typeof(filterChild)==='undefined') filterChild = '';


	//sort by all
	if (filter == 'all'){
		var query = {};
	}else{
		var query = {'filter': filter};
	}
 
    //sort by date
	if(filter == 'new'){
		query = sort('uploadTime');
	}



	
  
	// Progect.find(query, callback).paginate(options, function(err, res) {
	// 		// console.log(res);
	// 		res.abba = res;
			
	// }); 
    Progect.find(query, callback);
}




//select progect for view in account and templates page
module.exports.SelectProgect = function(Id , progect , callback){

	var query = {"_id" : Id , "name" : progect};
	Progect.find(query , callback);
}

//select progect for edit in account  page
module.exports.SelectProgectId = function(userId , progect , callback){

	var query = {"userId" : userId , "name" : progect};
	Progect.find(query , callback);
}

//select progect for edit from tamplates page
module.exports.SelectProgectFromTemplate = function(progectid , progect , callback){
	var query = {"_Id" : progectid , "name" : progect};
	Progect.find(query , callback);
}


//select all progect for templates page
module.exports.SelectAllProgectSkip = function(progectSum ,callback){ //
	
	var query = {};

    Progect.find(query, callback).skip(elementSum).limit(6);
}



