var express = require('express');
var router = express.Router();
const dbContext = require('../Database/dbContext');
var response = require('../shared/response');
//var response = require('../../shared/response');
var TYPES = require('tedious').TYPES;
var bodyParser = require('body-parser')
var customParser = bodyParser.json({type: function(req) {
  //req.headers['content-type'] === "text/html"
}})
router.post('/AddPort', customParser, function(req, res){ 
  var parameters = [];
  for (var key in req.body) {
    console.log('key'+key);
    parameters.push({ name: key, type: TYPES.Int, val: req.body[key] });
      console.log(req.body[key]);
  }
	//queryHandler.queryRecordsWithParam('insert into Tasks set ?', newTask, function(err, rows){
    //console.log('parameters '+parameters.keys.length);
    //if(parameters.length>2){
    dbContext.post("CRUD_AppSupportOption",parameters, function (error, data) {
		if(error) {
      console.log('info: ', '-------------------- ERROR: ' + error);
      return res.status(424).json({       
        status: 'error',
        error: error.message,
      });
    }
    else
    console.log('info: ', '-------------------- saved. '+data );
    return	 res.status(200).json({
      status: 'succes',
      data: 'Record added successfully.',
    });
      // console.log('info: ', '-------------------- ERROR: ' + error);
      // else
      // console.log('DOne');
      // return res;
    //  return res.status(424).json({       
    //     status: 'error',
    //     error: error.message,
    //   });
    // }
    // else
    // return	 res.status(200).json({
    //   status: 'succes',
    //   data: 'Record added successfully.',
    // });
  });
//}//else res.sendStatus(300).json('No param');
});

//  var _appBrpocess = {
//   portfolioID : 0,
//   applicationID : 0,
//   BprocessID :0,
//   SupportOptionID : 0,
//   };
// function AppBrpocess () {/*from  ww  w  .j a v  a 2  s. co  m*/

// }
/* GET portfolios listing. */
router.get('/portfolios/', function(req, res, next) {
  dbContext.get("getportfolio", function (error, data) {
    //console.log(error);
    if(error)
{
  //console.log('err:'+error);

    return res.status(424).json({
      status: 'error',
      error: error.message,
    });}
    else
    return res.json(response(data, error));
    //// return	 res.status(200).json({
    //   status: 'succes',
    //   data: (response(data, error))
    // });
  });
  
});
 /* GET ApplLayerState listing. */
 router.get('/ApplLayerState/', function(req, res, next) {
   dbContext.get("getApplLayerState", function (error, data) {
    if( error)
    return res.status(424).json({
      status: 'error',
      error: error.message,
    });
    else
    return res.json(response(data, error));
    // return	 res.status(200).json({
    //   status: 'succes',
    //   data: (response(data, error))
    // });
  }); 
  });
  /* GET applications listing. */
  router.get('/applications/:ID', function(req, res, next) {
    if (req.params.ID) {
      var parameters = [];

      parameters.push({ name: 'PortfolioId', type: TYPES.Int, val: req.params.ID });

      dbContext.getQuery("getapplications",parameters,true, function (error, data) {
       // console.log(data);
     return res.json(response(data, error));
   });
  }});
  /* GET ApplLayer State listing. */
  router.get('/ApplLayerStateID/:ID', function(req, res, next) {
    if (req.params.ID) {
      var parameters = [];

      parameters.push({ name: 'ID', type: TYPES.Int, val: req.params.ID });

      dbContext.getQuery("getApplLayerState",parameters,true, function (error, data) {
        //console.log(data);
        if(error)
        {
          //console.log('err:'+error.message);
        
            return res.status(424).json({
              status: 'error',
              error: error.message,
            });}
        else
        return res.json(response(data, error));
    //
        // return	 res.status(200).json({
        //   status: 'succes',
        //   data: (response(data, error))
        // });
      });
  }});
/* GET Process listing. */
router.get('/BProcess/', function(req, res, next) {
  dbContext.get("getBProcess", function (error, data) {
    if( error)
   {
  //console.log('err:'+error);
  return res.status(424).json({
      status: 'error',
      error: error.message,
    });
     }  else
    return res.json(response(data, error));
    //// return	 res.status(200).json({
    //   status: 'succes',
    //   data: (response(data, error))
    // });
 });
 });
 
 router.get('/GetSupports/', function(req, res, next) {
  dbContext.get("GetSupportOptions", function (error, data) {
   if( error)
 {
 //console.log('err:'+error);
 return res.status(424).json({
     status: 'error',
     error: error.message,
   });
   }  else
   return res.json(response(data, error));
   //// return	 res.status(200).json({
   //   status: 'succes',
   //   data: (response(data, error))
   // });
 });
 });

  
/* GET ApplLayer State listing. */
router.get('/getApplBProcess/:Mode/:ID', function(req, res, next) {
  console.log(req.params.Mode) ;
    if (req.params.Mode) {
    var parameters = [];

    parameters.push({ name: 'mode', type: TYPES.VarChar, val: req.params.Mode });
    parameters.push({ name: 'PID', type: TYPES.Int, val: req.params.ID });

    dbContext.getQuery("getApplBProcess",parameters,true, function (error, data) {
      //console.log(data);
      if(error)
      {
        //console.log('err:'+error.message);
      
          return res.status(424).json({
            status: 'error',
            error: error.message,
          });}
      else
      return res.json(response(data, error));
  //
      // return	 res.status(200).json({
      //   status: 'succes',
      //   data: (response(data, error))
      // });
    });
}});


module.exports = router;
