var express = require('express');
var router = express.Router();
var assert = require('assert');
var mongoose = require('mongoose');

var url = 'mongodb://localhost/fintech';

//Show data without any conditions inside
/* router.get('/getdata', function(req, res){
	res.render('getdata');
}); */

//get data from mongodb
// this router.get('location') leads to url: fds/[location]
router.get('/fdslist', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('fds').find(); //inside mongoDB, collection name in 'fds'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('fdslist', {items: resultArray}); //rendered in 'fdslist.handlebars' view
    });
  });
});

module.exports = router;