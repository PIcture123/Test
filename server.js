var app = require('express')();
var server  = require('http').Server(app);
server.listen(1212);
app.get('/',function(req,res){
    res.sendfile(__dirname+'/index.html');
});