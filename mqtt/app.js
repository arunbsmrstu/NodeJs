var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://iot.eclipse.org')
 
client.on('connect', function () {
  client.subscribe('arun')
  client.publish('arun', 'Hello Arun')
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  //client.end()
})
