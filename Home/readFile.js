var fs = require("fs");

var cnt=0;
var filedata;
fs.readFile('input.txt', (err, data)=> {
   if(err) throw err;
    filedata=data.toString().split("\n");
   //console.log(filedata[3]);
});

function Show(){


    console.log(filedata[cnt]);
    cnt++;
}

console.log("Program Ended");


setInterval(Show, 2000);

