/*buf = new Buffer(256);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);*/


/*buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde
*/

/*var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
}*/
/*var buf = new Buffer("Simply Easy Learning", "utf-8");


console.log(buf.toString('utf8',0,5));
var j=buf.toJSON()

console.log(j) */


buf_ascii = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
    buf_ascii[i] = i + 61;
   // console.log("0x"+buf_ascii.toString('hex'));   
}

for(var i=0;i<26;i++){

    console.log(buf_ascii.charAt(i));

}

