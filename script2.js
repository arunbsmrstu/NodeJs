var express=require('express')
var app=express()
var bodyParser =require('body-parser')

var mongojs=require('mongojs')
var db=mongojs('mongodb://datasoft:1234@ds125335.mlab.com:25335/datasoft',['datasoft'])

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//app.use(function (req, res) {
 //res.setHeader('Content-Type', 'text/plain')
 //res.write('you posted:\n')
 //res.end(JSON.stringify(req.body, null, 2))
//})

app.get('/showdata',function(erq,res){

     db.datasoft.find(function(err,docs){
                
        res.send(docs)    
     })   
})


app.get('/pizzaguy',function(req,res){

        res.send('pizza')
})


app.post('/data',function(req,res){

        //var data=req.body
        db.datasoft.save(req.body)
        res.json(req.body)

      
})

app.listen(1337,function(){
        console.log('Example')
})