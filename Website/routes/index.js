var express = require('express');
var router = express.Router();
//For GridFS storage
var multer = require('multer');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
var methodOverride = require('method-override');

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

/* COMMENTING OUT CODES FOR FILE/PITURE UPLOAD

//GridFS upload route
router.post('/upload', multer().single('file'), (req, res) => {
  res.redirect('upload');
});

//Get upload page
let gfs;
router.get('/upload', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      res.render('upload', { files: false });
    } else {
      files.map(file => {
        if (
          file.contentType === 'image/jpeg' ||
          file.contentType === 'image/png'
        ) {
          file.isImage = true;
        } else {
          file.isImage = false;
        }
      });
      res.render('upload', { files: files });
    }
  });
});

*/




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