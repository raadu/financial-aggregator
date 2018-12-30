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

module.exports = router;