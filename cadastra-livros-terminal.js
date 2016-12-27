/**
 * Created by lcunha on 27/12/16.
 */
var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port:3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
    }
};

var client = http.request(configuracoes,function(res){
    console.log(res.statusCode);
    res.on('data',function(body){
        console.log('Corpo' + body);
    });
});

var produto = {
    titulo : 'mais sobre node',
    descricao: 'node, javascript e um pouco sobre http',
    preco: '100'
};

client.end(JSON.stringify(produto));
