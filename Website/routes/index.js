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

//Get Loan List page
/* router.get('/loanlist', function(req, res){
	res.render('loanlist');
}); */

//Get Fixed Deposit List page
router.get('/fixeddepositlist', function(req, res){
	res.render('fixeddepositlist');
});

//Get Loan List page
router.get('/dfslist', function(req, res){
	res.render('dfslist');
});


module.exports = router;