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
// this router.get('location') leads to url: creditCards/[location]
router.get('/cardlist', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('creditcards').find(); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});

//sort cards by Interest Rates
router.get('/sortByInterestRate', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var sort = {interestRateMonthly: 1};
    var cursor = db.collection('creditcards').find().sort(sort); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});

//sort cards by Annual Fees
router.get('/sortByAnnualFee', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var sort = {annualFee: 1};
    var cursor = db.collection('creditcards').find().sort(sort); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});



module.exports = router;