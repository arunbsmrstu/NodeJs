var event=require('events');

var eventEmitter= new event.EventEmitter();

  function connected(){
    console.log('connection successful');

    eventEmitter.emit('data_receive');


}

//eventEmitter.on('connenction',connectHandler);

eventEmitter.on('data_receive',()=>{
    console.log('data receive succesfully');
})



console.log('Progrma Ended');

setInterval(connected,500);