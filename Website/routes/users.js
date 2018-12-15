var express = require('express');
var router = express.Router();

var User = require('../models/user');

//Register
router.get('/register', function(req, res){
	res.render('register');
});

//Login
router.get('/login', function(req, res){
	res.render('login');
});

//Register User
router.post('/register', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	
	//Validation
	req.checkBody('name','Name is required').notEmpty();
	req.checkBody('email','Email is required').notEmpty();
	req.checkBody('email','Email is not valid').isEmail();
	req.checkBody('password','Password is required').notEmpty();
	
	var errors=req.validationErrors();

	if(errors)
	{
		res.render('register',{
			errors:errors
		});
	} 
	else 
	{
		var newUser = new User({
			name: name,
			email: email,
			password: password
		});

		User.createUser(newUser, function (err, user) {
				if (err) throw err;
				console.log(user);
		});

		req.flash('success_msg', 'You are registered and can now login');
		
		res.redirect('/users/login');

	}
});

module.exports = router;