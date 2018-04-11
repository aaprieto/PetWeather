/**
 * Created by Arnold on 2018-04-10.
 */
const express = require('express');
const router = express.Router();
var uuid = require('uuid-random');
var request = require('request');
var listArr = [];

/* GET api listing. */
router.get('/', function(req, res)  {
  res.send('API is working,  but not a valid result.');
});


router.get('/addpet/:arres', function(req, res)  {

    // Show Request
  var arrJson = req.params.arres;
  var obj  = JSON.parse(arrJson);

  // Add to Array
  var NewObj = new Object();
  // uuid - Unique ID within the Array.
  NewObj.uid =  uuid();
  NewObj.name =  obj["0"]["name"];
  NewObj.type =  obj["0"]["type"];
  NewObj.breed =  obj["0"]["breed"];
  NewObj.location =  obj["0"]["location"];
  NewObj.latitude =  obj["0"]["latitude"];
  NewObj.longitude =  obj["0"]["longitude"];

  listArr.push(NewObj);

  res.send(listArr);

});

router.get('/listpets', function(req, res) {
  res.send(listArr);
});


router.get('/viewpet/:uid', function(req, res)  {

  var arrRes = [];
  var uid = req.params.uid;
  for(var i = 0; i < listArr.length;i++){
      if (listArr[i]["uid"] == uid ){
        var newobj = new Object();

        newobj.uid =  listArr[i]["uid"]
        newobj.name =  listArr[i]["name"]
        newobj.type =  listArr[i]["type"]
        newobj.breed =  listArr[i]["breed"]
        newobj.location =  listArr[i]["location"]
        newobj.latitude =  listArr[i]["latitude"]
        newobj.longitude =  listArr[i]["longitude"]

        arrRes.push(newobj);
        res.send(arrRes);
        break;
      }
  }


});

router.get('/darksky/:lat_long', function(req, res)  {

  var strlatlong = req.params.lat_long;
  var arr = strlatlong.split(",");
  var secret_key = "ffa9a734829a032118fe121661adb432";
  var darkSkyEndpoint = "https://api.darksky.net/forecast/";
  var options = {
    uri : darkSkyEndpoint + secret_key + '/'+arr[0] +','+arr[1],
    method : 'GET'
  };
  var res1 = '';
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res1 = body;
    }
    else {
      res1 = 'Not Found';
    }
    res.send(res1);
  });
});

router.get('/lookforloc/:lat_long', function(req, res)  {

  var strlatlong = req.params.lat_long;
  var arr = strlatlong.split(",");
  var secret_key = "b7ca4f48dba24ab8926c3fd81d3881f3";
  var openCage = "https://api.opencagedata.com/geocode/v1/json?q="+ arr[0]+"," + arr[1]+"&pretty=1&key="+secret_key;

  var options = {
    uri : openCage,
    method : 'GET'
  };
  var res1 = '';
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res1 = body;
    }
    else {
      res1 = 'Not Found';
    }
    res.send(res1);
  });
});


module.exports = router;
