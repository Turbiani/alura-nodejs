/**
 * Created by lcunha on 06/01/17.
 */
var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function(){
    it('#listagem json',function(done){
        request.get('/produtos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(302, done);
    });

});