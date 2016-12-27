/**
 * Created by lcunha on 27/12/16.
 */
var mysql = require('mysql');

var connectMYSQL = function () {
    return mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : 'root',
        database : 'casadocodigo_nodejs'
    });
}

module.exports = function () {
    return connectMYSQL;
}