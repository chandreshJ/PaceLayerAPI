var express = require('express');
var router = express.Router();
const dbContext = require('../Database/dbContext');
var response = require('../shared/response');
//var response = require('../../shared/response');
var TYPES = require('tedious').TYPES;
 
/* GET portfolios listing. */
router.get('/portfolios/', function(req, res, next) {
  dbContext.get("getportfolio", function (error, data) {
   return res.json(response(data, error));
 });
 });
/* GET applications listing. */
router.get('/applications/:ID', function(req, res, next) {
 console.log('app get id')
 


 
  if (req.params.ID) {
    var parameters = [];

    parameters.push({ name: 'PortfolioId', type: TYPES.Int, val: req.params.ID });
    
    dbContext.getQuery("getapplications",parameters,true, function (error, data) {
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
