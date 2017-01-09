/**
 * Created by lcunha on 23/12/16.
 */
var app  = require('./config/express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);

app.set('io', io);

http.listen(3000,function(){
    console.log("servidor rodando");
});
