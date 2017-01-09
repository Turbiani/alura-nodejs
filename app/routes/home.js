/**
 * Created by lcunha on 09/01/17.
 */
module.exports = function(app){
    app.get('/', function(req, res, next) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (erros, results) {
            if (erros) {
                return next(erros);
            }
            //TRATANDO QQUAIS OS TIPOS DE RETORNO DEVO ENVIAR NO RESPONSE
            // ATRAVES DO VALOR DO ACCEPT DO HEADER DA REQUEST
            //A FUNCAO FORMAT ME AJUDA COM ESSE TRATAMENTO DIFERENCIADO
            res.format({
                html: function () {
                    res.render('home/index', {livros: results});
                },
                json: function () {
                    res.json(results);
                }
            });

        });

        connection.end();
    });
};
