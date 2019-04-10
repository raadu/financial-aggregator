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
// this router.get('location') leads to url: loans/[location]
router.get('/loanlist', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('loans').find(); //inside mongoDB, collection name in 'loans'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'loanlist.handlebars' view
    });
  });
});

//LOANS AGGREGATION STARTED FROM HERE
router.get('/result', function(req, res){
  
  var profession = req.query.profession;
  var loanamount = req.query.loanamount;
  var age = req.query.age;
  var loantenure = req.query.loantenure;
  //var lol = 1;
  //res.send(loantenure);


  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    
    var query = {minLoanAmount: {$lte: parseInt(loanamount)}, maxLoanAmount: {$gte: parseInt(loanamount)}, 
    minEligibleAge: {$lte: parseInt(age)}, maxEligibleAge: {$gte: parseInt(age)},
    minLoanTenure: {$lte: parseInt(loantenure)}, maxLoanTenure: {$gte: parseInt(loantenure)} };

    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('suggestedloans', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});

//LOAN AGGREGATION FORM DISPLAY
router.get('/loanform', function(req, res){
  res.render('loanform');
});


//LOANS SORTING STARTED FROM HERE

//sort loans by Interest Rates
router.get('/loanbyInterestRate', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var sort = {interestRate: 1};
    var cursor = db.collection('loans').find().sort(sort); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});

//LOANS SORTING BY LOAN TYPE STARTED FROM HERE

//sort by Home Loan
router.get('/homeloan', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {loanType: "Home Loan"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});

//sort by Auto Loan
router.get('/autoloan', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {loanType: "Auto Loan"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});

/* COMMENTING OUT

//sort by Auto Loan + personal loan
router.get('/autoloanplus', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = { loanType: "Personal Loan", bankName: "AB Bank"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});

*/



//sort by Personal Loan
router.get('/personalloan', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {loanType: "Personal Loan"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Holiday Loan
router.get('/holidayloan', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {loanType: "Holiday Loan"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Student Loan
router.get('/studentloan', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {loanType: "Student Loan"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Women's Loan
router.get('/womensloan', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {loanType: "Women's Loan"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Executive Loan
router.get('/executiveloan', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {loanType: "Executive Loan"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Doctor's Loan
router.get('/doctorsloan', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {loanType: "Doctor's Loan"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Retail Secured EMI Loan
router.get('/retailloan', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {loanType: "Retail Secured EMI"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
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
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Standard Chartered
router.get('/standardchartered', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "Standard Chartered"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Brac Bank
router.get('/bracbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "Brac Bank"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by AB Bank
router.get('/abbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "AB Bank"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});



//sort by Dutch Bangla Bank
router.get('/dbbl', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "DBBL"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by One Bank
router.get('/onebank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "One Bank"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Prime Bank
router.get('/primebank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "Prime Bank"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by Eastern Bank
router.get('/easternbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "Eastern Bank"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by South East Bank
router.get('/southeastbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "SouthEast Bank"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});


//sort by National Bank
router.get('/nationalbank', function(req, res, next) {
  var resultArray = [];
  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    var query = {bankName: "National Bank"};
    var cursor = db.collection('loans').find(query); //inside mongoDB, collection name in 'creditcards'
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('loanlist', {items: resultArray}); //rendered in 'cardlist.handlebars' view
    });
  });
});






module.exports = router;