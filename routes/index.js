var express = require('express');
var router = express.Router();
//For GridFS storage
//var multer = require('multer');
//var GridFsStorage = require('multer-gridfs-storage');
//var Grid = require('gridfs-stream');
//var methodOverride = require('method-override');

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

//Get Aggregation Starting page
router.get('/aggregationstart', function(req, res){
  res.render('aggregationstart');
});

//Get Product Confirmation page
router.get('/confirmation', function(req, res){
  res.render('confirmation');
});

//Get Loan List page
router.get('/dfslist', function(req, res){
	res.render('dfslist');
});


module.exports = router;