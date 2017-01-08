/**
 * Created by lcunha on 06/01/17.
 */
var express = require('../config/express')();
var request = require('supertest')(express);
var DatabaseCleaner = require('database-cleaner');

describe('#ProdutosController', function(){

    beforeEach(function(done){
        var conn = express.infra.connectionFactory();
        var databaseCleaner = new DatabaseCleaner('mysql');

        databaseCleaner.clean(conn, function(erro, result){
            if(!erro){
                done();
            }
        });
    });

    it('#listagem json',function(done){
        request.get('/produtos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('#cadastro de novo produto com dados invalidos',function(done){
        request.post('/produtos')
            .send({titulo:"",descricao:"novo livro"})
            .expect(400,done);
    });

    it('#cadastro de novo produto com dados validos',function(done){
        request.post('/produtos')
            .send({titulo:"titulo",descricao:"novo livro",preco:20.50})
            .expect(302,done);

    });
});