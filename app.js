var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://iot.eclipse.org')


var express=require('express')
var app=express()
var bodyParser =require('body-parser')

var mongojs=require('mongojs')
var db=mongojs('mongodb://shuvo:1234@ds259105.mlab.com:59105/razib',['razib'])


 
client.on('connect', function () {
  client.subscribe('arun')
  client.publish('arun', 'Hello Shuvo')
})
 
   client.on('message', function (topic, message) {
       
        console.log(message.toString())

        saveObject = {
            "msg": message.toString()
           
        }
       
        db.razib.save(saveObject)
        
       // client.end()
      })



      



