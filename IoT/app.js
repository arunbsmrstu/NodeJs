var http = require('http');
var fs = require('fs');
var url = require('url');


function renderHTML(path, response){
  fs.readFile(path,null,(error,data)=>{
    if(error){
      response.writeHead(404);
      response.write('File Not Found!!');
    }
    else{
      response.write(data);
    }
    response.end();
  })
}

module.exports={
  handleRequest: function(request,response){
    response.writeHead(200, {'Content-Type':'text/html'});

    var path = url.parse(request.url).pathname;
    switch (path) {
      case '/':
        renderHTML('./server.html',response);
        break;

      case '/temp':
        response.writeHead(404);
        response.write('<h1>Temperature : 26c</h1>');
        break;

      case '/humidity':
        response.writeHead(404);
        response.write('<h1>Humidity : 40%</h1>');
        break;

      case '/acc':
        response.writeHead(404);
        response.write('<h1>Acceleration : 55</h1>');
        break;

      case '/all':
        response.writeHead(404);
        response.write('<h1>Temperature : 26c</h1></br><h1>Humidity : 40%</h1></br><h1>Acceleration : 55</h1>');
        break;

      default:
        response.writeHead(404);
        response.write('Path Not Found!!');
        response.end();

    }
  }
}