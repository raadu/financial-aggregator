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

//Show editprofile
router.get('/editprofile', function(req, res){
	res.render('editprofile');
});

//Edit User Profile
router.post('/editprofile', function(req, res, next){

    User.findById(req.user.id, function (err, user) {

        // todo: don't forget to handle err

        if (!user) {
            req.flash('error', 'No account found');
            return res.redirect('/editprofile');
        }

        // good idea to trim 
        var mobile = req.body.mobile.trim();
        var fullname = req.body.fullname.trim();
        var profession = req.body.profession.trim();
        var workplace = req.body.workplace.trim();
        var designation = req.body.designation.trim();
        var salary = req.body.salary.trim();
        var jobexperience = req.body.jobexperience.trim();
        var gender = req.body.gender.trim();
        var age = req.body.age.trim();
        var jobsituation = req.body.jobsituation.trim();
        var home = req.body.home.trim();
        var address = req.body.address.trim();
        var nid = req.body.nid.trim();
        var passport = req.body.passport.trim();
        var loans = req.body.loans.trim();
        var creditcards = req.body.creditcards.trim();


        // validate 
        if (!mobile || !fullname || !profession || !workplace || !designation || !salary || !jobexperience || !gender || !age
        || !age ||!jobsituation ||!home ||!address ||!nid ||!passport ||!loans ||!creditcards) { // simplified: '' is a falsey
            req.flash('error', 'One or more fields are empty');
            return res.redirect('/editprofile'); // modified
        }

        // no need for else since you are returning early ^
        user.mobile = mobile;
        user.fullname = fullname;
        user.profession = profession;
        user.workplace = workplace;
        user.designation = designation;
        user.salary = salary;
        user.jobexperience = jobexperience;
        user.gender = gender;
        user.age = age;
        user.jobsituation = jobsituation;
        user.home = home;
        user.address = address;
        user.nid = nid;
        user.passport = passport;
        user.loans = loans;
        user.creditcards = creditcards;
        
        // don't forget to save!
        user.save(function (err) {

            // todo: don't forget to handle err

            res.redirect('/users/editprofile');
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