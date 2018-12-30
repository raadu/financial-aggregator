var express = require('express');
var router = express.Router();

//Get Homepage
router.get('/', function(req, res){
	res.render('index');
});

//Get About Us page
router.get('/about', function(req, res){
	res.render('about');
});

//Get Contact Us page
router.get('/contact', function(req, res){
	res.render('contact');
});

module.exports = router;