var fs = require('fs');

var temp_arr = [];
var humidity_arr = [];
var acc_arr = [];


for(var i=0;i<100;i++){
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



setInterval(() => {
    var buf_temp = fs.readFileSync('temp_sensor.txt');
    var l = -1;
     buf_temp.toString().split(/\n/).forEach(function(line){
         l++;
         
          temp_arr[l] = line;
        console.log("Temperature :"+temp_arr[l]);

        fs.appendFile('database.txt',temp_arr[l]+'\n', (err) => {
            if (err) throw err;
           // console.log('The "data to append" was appended to file!');
          });

      });
  }, 2000);
  
  setInterval(() => {
    var buf_humidity = fs.readFileSync('humidity_sensor.txt');
    var l = -1;
     buf_humidity.toString().split(/\n/).forEach(function(line){
         l++;
          
         humidity_arr[l] = line;
         console.log("Humidity :"+humidity_arr[l]);
 
         fs.appendFile('database.txt',humidity_arr[l]+'\n', (err) => {
           if (err) throw err;
          // console.log('The "data to append" was appended to file!');
         });
        // console.log(humidity_arr[l]);
      });
  },5000);
  
setInterval(() => {
    var buf_acc = fs.readFileSync('acc_sensor.txt');
    var l = -1;
     buf_acc.toString().split(/\n/).forEach(function(line){
         
          
         acc_arr[l] = line;
         console.log("Acc"+acc_arr[l]);
         fs.appendFile('database.txt',acc_arr[l]+'\n', (err) => {
           if (err) throw err;
          
          // console.log('The "data to append" was appended to file!');
         });

         l++;
 
       //  console.log(acc_arr[l]);
 
 
      });
 
  }, 10000);

