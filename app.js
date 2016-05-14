var express = require('express');
var app = express();

var routes = require('./routes/saveme');

//app.use(routes.requestTime);

app.get('/Time', function (req, res) {
  
  console.log('Time is = ' + routes.formatDate());
  var responseText = 'Requested at: ' + routes.formatDate() + '';
  res.send(responseText);
});

app.get('/Sum', function(req,res) {

	console.log('Sum of = ' + routes.calculateSum(1,3));
	var sumtext = 'Sum Value = ' + routes.calculateSum(3,4) + '';
	res.send(sumtext);
});



app.listen(3000);