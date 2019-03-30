var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
		
	},
	email: {
		type: String,
		
	},
	password: {
		type: String
	},

	mobile: {
		type: String
	},

	fullname: {
		type: String
	},

	profession: {
		type: String
	},

	workplace: {
		type: String
	},

	designation: {
		type: String
	},

	salary: {
		type: Number
	},

	jobexperience: {
		type: String
	},

	gender: {
		type: String
	},

	age: {
		type: Number
	},

	jobsituation: {
		type: String
	},

	home: {
		type: String
	},

	address: {
		type: String
	},

	nid: {
		type: String
	},

	passport: {
		type: String
	},

	loans: {
		type: String
	},

	creditcards: {
		type: String
	}



	
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
});
}

//Login model for user login by username
module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

//mongoose method to get user by id during login
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

//method to compare password during login
module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}