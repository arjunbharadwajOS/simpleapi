var express = require('express');
var app = express();

var routes = require('./routes/saveme');

//app.use(routes.requestTime);

//Get Time Function

app.get('/Time', function (req, res) {
  
  console.log('Time is = ' + routes.formatDate());
  var responseText = 'Requested at: ' + routes.formatDate() + '';
  res.send(responseText);
});

//Get Time Function

app.get('/Sum', function(req,res) {

	console.log('Sum of = ' + routes.calculateSum(1,3));
	var sumtext = 'Sum Value = ' + routes.calculateSum(3,4) + '';
	res.send(sumtext);
});

app.get('/selenium', function(req,res) {

    var selenium = 'Selenium Exec Script =  ' + routes.execSelenium() + '';
    res.send(selenium);
});


app.get('/seetest', function(req,res) {

    var seetest = 'SeeTest Exec Script =  ' + routes.execSeeTest() + '';
    res.send(seetest);
});


app.get('/accessKey', function(req,res) {

    routes.execAccessKey(req,res);
    
});


app.listen(3000);