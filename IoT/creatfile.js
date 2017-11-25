/*var fs = require('fs')

for(var i=0;i<5;i++){

    var timeStamp = Math.floor(Date.now() / 1000);
   // console.log(timeStamp);
  
    var dt = new Date();
    //console.log(dt);
    

    temp=Math.random()*(45-.00-30.00)+30.00;
    n=temp.toFixed(2);
fs.appendFile('log.txt',dt+"\t"+n+"\n", function (err) {
  if (err) {
    // append failed
  } else {
   // console.log(dt+"\t"+n+"\n");
  }
})

}/*

/*fs.readFile('log.txt', function (err, data) {
  if (err) {
     return console.error(err);
  }
  console.log( data.toString());
});*/


/*fs.appendFile('database.txt',dt+"\t"+n+"\n", function (err) {
  if (err) {
    // append failed
  } else {
   // console.log(dt+"\t"+n+"\n");
  }
})*/


var fs = require('fs');
var buf = new Buffer(1024);
var temp_arr = [];
var humidity_arr = [];
var acc_arr = [];


for(var i=0;i<=100;i++){
   temp = (Math.random() * (45.00 - 30.00) + 30.00).toFixed(2);
   time = Math.floor(Date.now() / 1000);

   temp = (Math.random() * (45.00 - 30.00) + 30.00).toFixed(2);

   humidity = (Math.random() * (100.00 - 40.00) + 40.00).toFixed(2);

   acc =  temp = (Math.random() * (100.00 - 1.00) + 1.00).toFixed(2);
  
fs.appendFile('temp_sensor.txt', time+'\t'+temp+'\n', (err) => {
   if (err) throw err;
  // console.log('The "data to append" was appended to file!');
 });

fs.appendFile('humidity_sensor.txt', time+'\t'+humidity+'\n', (err) => {
   if (err) throw err;
  // console.log('The "data to append" was appended to file!');
 });

fs.appendFile('acc_sensor.txt', time+'\t'+acc+'\n', (err) => {
   if (err) throw err;
  // console.log('The "data to append" was appended to file!');
 });

 }






setTimeout(function () {
  storeTemp(); 
}, 500);

setTimeout(function () {
  storeHumidity();
}, 1000);

setTimeout(function () {
  storeAcc();
}, 1500);



function storeTemp(){
   var buf_temp = fs.readFileSync('temp_sensor.txt');
   var l = -1;
    buf_temp.toString().split(/\n/).forEach(function(line){
        l++;
        var temp_arr = [];
        temp_arr[l] = line;
        console.log("Temperature :"+line);

        fs.appendFile('database.txt',temp_arr[l]+'\n', (err) => {
          if (err) throw err;
         // console.log('The "data to append" was appended to file!');
        });

       // console.log(temp_arr[l]);
     });

   /*  fs.appendFile('database.txt',temp_arr[l]+'\n', (err) => {
      if (err) throw err;
     // console.log('The "data to append" was appended to file!');
    });*/
}

function storeHumidity(){
   var buf_humidity = fs.readFileSync('humidity_sensor.txt');
   var l = -1;
    buf_humidity.toString().split(/\n/).forEach(function(line){
        l++;
        var humidity_arr = [];
        humidity_arr[l] = line;
        console.log("Humidity :"+line);

        fs.appendFile('database.txt',humidity_arr[l]+'\n', (err) => {
          if (err) throw err;
         // console.log('The "data to append" was appended to file!');
        });
       // console.log(humidity_arr[l]);
     });

   /*  fs.appendFile('database.txt',humidity_arr[l]+'\n', (err) => {
      if (err) throw err;
     // console.log('The "data to append" was appended to file!');
    });*/

}


function storeAcc(){
   var buf_acc = fs.readFileSync('acc_sensor.txt');
   var l = -1;
    buf_acc.toString().split(/\n/).forEach(function(line){
        l++;
        var acc_arr = [];
        acc_arr[l] = line;
        console.log("Acc"+line);
        fs.appendFile('database.txt',acc_arr[l]+'\n', (err) => {
          if (err) throw err;
         
         // console.log('The "data to append" was appended to file!');
        });

      //  console.log(acc_arr[l]);


     });

  /*   fs.appendFile('database.txt',acc_arr[l]+'\n', (err) => {
      if (err) throw err;
      else
         console.log(acc_arr[l]);
     // console.log('The "data to append" was appended to file!');
    });*/
}




