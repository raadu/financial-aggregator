var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var assert = require('assert');
var mongoose = require('mongoose');

var url = 'mongodb://localhost/fintech';

var User = require('../models/user');

//Register
router.get('/register', function(req, res){
	res.render('register');
});

//Login
router.get('/login', function(req, res){
	res.render('login');
});

//User Profile
router.get('/profile', function(req, res){
	res.render('profile');
});

//get data from mongodb
// this router.get('location') leads to url: users/userlist
router.get('/userlist', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('users').find(); //inside mongoDB, collection name is 'users'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('userlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});





//Register User
router.post('/register', function(req, res){
	var username = req.body.username;
	var email = req.body.email;
	var password = req.body.password;
	var mobile = req.body.mobile;
	
//Validation
	req.checkBody('username','Username is required').notEmpty();
	req.checkBody('email','Email is required').notEmpty();
	req.checkBody('email','Email is not valid').isEmail();
	req.checkBody('password','Password is required').notEmpty();
	req.checkBody('mobile','Mobile number is required').notEmpty();
	
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
			username: username,
			email: email,
			password: password,
			mobile: mobile
		});

		User.createUser(newUser, function (err, user) {
				if (err) throw err;
				console.log(user);
		});

		req.flash('success_msg', 'You are registered and can now login');
		
		res.redirect('/users/login');

	}
});

//Passport Local strategy
passport.use(new LocalStrategy(
	function (username, password, done) {
		User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown username' });
			}

		User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});

}));

//Serialize user using passport
passport.serializeUser(function (user, done) {
	done(null, user.id);
});

//Deserialize user using passport
passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

//Passport authenticate login redirect
router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
	function (req, res) {
		res.redirect('/');
});

router.get('/logout', function (req, res) {
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});

module.exports = router;