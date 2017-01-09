/**
 * Created by lcunha on 09/01/17.
 */
module.exports = function(app){
    app.get('/promocoes/form', function(req, res){
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
                    res.render('promocoes/form', {lista: results});
                },
                json: function () {
                    res.json(results);
                }
            });

        });

        connection.end();
    });

    app.post('/promocoes', function(req, res){
        var promocao = req.body;
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('/promocoes/form');
    });
}