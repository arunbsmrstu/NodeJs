var fs = require("fs");

var cnt=0;
var filedata;
fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   var filedata=data.toString().split("\n");
   console.log(filedata[3]);
});

function show(){


    console.log(filedata);
}

console.log("Program Ended");
show();

