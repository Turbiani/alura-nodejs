/**
 * Created by lcunha on 27/12/16.
 */
var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port:3000,
    path: '/produtos',
    headers: {
        //'Accept':'text/html'
        'Accept':'application/json'
    }
};

http.get(configuracoes,function(res){
    console.log(res.statusCode);
    res.on('data',function(body){
        console.log('Corpo' + body);
    });
});
