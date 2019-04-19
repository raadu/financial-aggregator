var express = require('express');
var router = express.Router();
var assert = require('assert');
var mongoose = require('mongoose');

var url = 'mongodb://localhost/fintech';


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

//LOANS SORTING BY BANK NAME STARTED FROM HERE

//sort by City Bank
router.get('/citybank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "City Bank"};
    var cursor = db.collection('fds').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('fdslist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Standard Chartered
router.get('/standardchartered', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "Standard Chartered"};
    var cursor = db.collection('fds').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('fdslist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Brac Bank
router.get('/bracbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "Brac Bank"};
    var cursor = db.collection('fds').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('fdslist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by AB Bank
router.get('/abbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "AB Bank"};
    var cursor = db.collection('fds').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('fdslist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});



//sort by Dutch Bangla Bank
router.get('/dbbl', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "Dutch Bangla Bank Limited"};
    var cursor = db.collection('fds').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('fdslist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by One Bank
router.get('/onebank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "One Bank"};
    var cursor = db.collection('fds').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('fdslist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Prime Bank
router.get('/primebank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "Prime Bank"};
    var cursor = db.collection('fds').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('fdslist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Eastern Bank
router.get('/easternbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "Eastern Bank"};
    var cursor = db.collection('fds').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('fdslist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by South East Bank
router.get('/southeastbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "South East Bank"};
    var cursor = db.collection('fds').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('fdslist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by National Bank
router.get('/nationalbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "National Bank"};
    var cursor = db.collection('fds').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('fdslist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});

module.exports = router;