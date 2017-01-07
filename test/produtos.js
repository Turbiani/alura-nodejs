/**
 * Created by lcunha on 06/01/17.
 */
var http = require('http');
var assert = require('assert');
describe('#ProdutosController', function(){
    it('#listagem json',function(done){
        var configuracoes = {
            hostname: 'localhost',
            port:3000,
            path:'/produtos',
            headers: {
                'Accept' : 'application/json'
            }
        };

        http.get(configuracoes,function(res){
            assert.equal(res.statusCode, 302);
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');

            done();
        });
    });

});