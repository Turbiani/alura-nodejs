/**
 * Created by lcunha on 23/12/16.
 */
var app = require('./config/express')();

app.listen(3000,function(){
    console.log("servidor rodando");
});
