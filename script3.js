var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://iot.eclipse.org')


var express=require('express')
var app=express()
var bodyParser =require('body-parser')

var mongojs=require('mongojs')
var db=mongojs('mongodb://datasoft:1234@ds125335.mlab.com:25335/datasoft',['datasoft'])


 
client.on('connect', function () {
  client.subscribe('arun')
  client.publish('arun', 'Hello Shuvo')
})
 
   client.on('message', function (topic, message) {
       
        console.log(message.toString())

        saveObject = {
            "msg": message.toString()
           
        }

        db.datasoft.save(saveObject)
        
       // client.end()
      })



      



