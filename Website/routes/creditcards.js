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

//CARDS AGGREGATION STARTED FROM HERE
router.get('/suggestedcards', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('creditcards').find(); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('suggestedcards', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//CARDS SORTING STARTED FROM HERE

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

//CARDS SORTING BY BANK NAME STARTED FROM HERE

//sort by City Bank
router.get('/citybank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "City Bank"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});

//sort by Standard Chartered
router.get('/standardchartered', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "Standard Chartered"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Brac Bank
router.get('/bracbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "Brac Bank"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by AB Bank
router.get('/abbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "AB Bank"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Dutch Bangla Bank
router.get('/dbbl', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "DBBL"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by One Bank
router.get('/onebank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "One Bank"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Prime Bank
router.get('/primebank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "Prime Bank"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Eastern Bank
router.get('/easternbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "Eastern Bank"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by South East Bank
router.get('/southeastbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "SouthEast Bank"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by National Bank
router.get('/nationalbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "National Bank"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});

//CARDS SORTING BY CARD TYPE STARTED FROM HERE

//sort by Visa Card
router.get('/visa', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {cardType: "Visa"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});

//sort by Master Card
router.get('/mastercard', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {cardType: "Master Card"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by American Express Card
router.get('/americanexpress', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {cardType: "American Express"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Debit Card
router.get('/debit', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {cardType: "Debit"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Prepaid Card
router.get('/prepaid', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {cardType: "Prepaid"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('cardlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Special Card
router.get('/special', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {cardType: "Special"};
    var cursor = db.collection('creditcards').find(query); //inside mongoDB, collection name in 'creditcards'
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