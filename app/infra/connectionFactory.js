/**
 * Created by lcunha on 27/12/16.
 */
var mysql = require('mysql');

if(!process.env.NODE_ENV){
    var connectMYSQL = function () {
        return mysql.createConnection({
            host : '127.0.0.1',
            user : 'root',
            password : 'root',
            database : 'casadocodigo_nodejs'
        });
    }
}

if(process.env.NODE_ENV == 'test'){
    var connectMYSQL = function () {
        return mysql.createConnection({
            host : '127.0.0.1',
            user : 'root',
            password : 'root',
            database : 'casadocodigo_nodejs_test'
        });
    }
}

module.exports = function () {
    return connectMYSQL;
}