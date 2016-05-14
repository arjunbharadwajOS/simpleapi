var express = require('express');
var child_process = require('child_process');
var router = express.Router();

module.exports = {

 formatDate : function() { // This is to display 12 hour format like you asked
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
},

calculateSum : function(a,b) {
return (a+b);
},

execImage : function() {
   var Image = '/Users/vincentkoh/Desktop/APIs/IMG_0267.PNG';
   child_process.exec('open -a /Applications/Preview.app ' + Image, function (err, stdout, stderr){
    if (err) {
        console.log("child processes failed with error code: " +
            err.code);
    }
    console.log(stdout);
    });
    
    return Image;

}

};


