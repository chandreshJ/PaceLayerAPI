var express = require('express');
var router = express.Router();
const dbContext = require('../Database/dbContext');
var response = require('../shared/response');
//var response = require('../../shared/response');
var TYPES = require('tedious').TYPES;
 

// router.get('/', function(req, res) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
//   res.setHeader('Access-Control-Allow-Credentials', true); // If needed

//   res.send('cors problem fixed:)');
// });


/* GET portfolios listing. */
router.get('/portfolios/', function(req, res, next) {
  dbContext.get("getportfolio", function (error, data) {

//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
//   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
return res.json(response(data, error));
 });
 });
/* GET applications listing. */
router.get('/applications/:ID', function(req, res, next) {
  dbContext.getQuery("getapplications", function (error, data) {
   return res.json(response(data, error));
 });
 });
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
