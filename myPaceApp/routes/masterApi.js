var express = require('express');
var router = express.Router();
const dbContext = require('../Database/dbContext');
var response = require('../shared/response');
//var response = require('../../shared/response');
var TYPES = require('tedious').TYPES;


// router.get('/AppLayer/', function(req, res, next) {
//   var arr=[{  
//     "id": 4, 
//     "cars":[ "Ford", "BMW", "Fiat" ]
//  }];
//   dbContext.get("getApplLayerState", function (error, data) {    
//    arr.push( res.json(response(data, error)));
//  });
//  return res.json(arr);
//  });








/* POST portfolios listing. */
router.post('/AddPort/', function(req, res) {
  console.log('post v1');
    
  var obj=new _appBrpocess(req.body);
  console.log(obj);
    // dbContext.get("getportfolio", function (error, data) {
    //  return res.json(response(data, error));  });
   
 });
 var _appBrpocess = {
  portfolioID : 0,
  applicationID : 0,
  BprocessID :0,
  SupportOptionID : 0,
  };
function AppBrpocess () {/*from  ww  w  .j a v  a 2  s. co  m*/
  
  this.add = function ( appBrpocess) {
    console.log( appBrpocess)  ;
  }
  this.distance_from_origin = function () {
      return Math.sqrt(this.X*this.X + this.Y*this.Y);
  }
}
/* GET portfolios listing. */
router.get('/portfolios/', function(req, res, next) {
  dbContext.get("getportfolio", function (error, data) {
   return res.json(response(data, error));
 });
 });
 /* GET ApplLayerState listing. */
 router.get('/ApplLayerState/', function(req, res, next) {
   dbContext.get("getApplLayerState", function (error, data) {
     
    return res.json(response(data, error));
  });
  });
  /* GET applications listing. */
  router.get('/applications/:ID', function(req, res, next) {
    if (req.params.ID) {
      var parameters = [];
  
      parameters.push({ name: 'PortfolioId', type: TYPES.Int, val: req.params.ID });
      
      dbContext.getQuery("getapplications",parameters,true, function (error, data) {
        console.log(data);
     return res.json(response(data, error));
   });
  }});
  /* GET ApplLayer State listing. */
  router.get('/ApplLayerStateID/:ID', function(req, res, next) {
    if (req.params.ID) {
      var parameters = [];
  
      parameters.push({ name: 'ID', type: TYPES.Int, val: req.params.ID });
      
      dbContext.getQuery("getApplLayerState",parameters,true, function (error, data) {
        console.log(data);
     return res.json(response(data, error));
   });
  }});
/* GET Process listing. */
router.get('/BProcess/', function(req, res, next) {
  dbContext.get("getBProcess", function (error, data) {
   return res.json(response(data, error));
 });
 });
 router.get('/GetSupports/', function(req, res, next) {
   dbContext.get("GetSupportOptions", function (error, data) {
    return res.json(response(data, error));
  });
  });

  


module.exports = router;
