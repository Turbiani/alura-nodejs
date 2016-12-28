/**
 * Created by lcunha on 26/12/16.
 */
module.exports = function(app){
    var listaProdutos = function(req, res){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results){
            //TRATANDO OS TIPOS DE RETORNO ATRAVES DO VALOR DO ACCEPT DO HEADER DA REQUEST
            //A FUNCAO FORMAT ME AJUDA COM ESSE TRATAMENTO DIFERENCIADO
            res.format({
                html: function () {
                    res.render('produtos/lista', {lista:results});
                },
                json: function () {
                    res.json(results);
                }
            });

        });

        connection.end();
    }

    app.get('/produtos', listaProdutos);

    app.get('/produtos/form',function(req,res){
        res.render('produtos/form', {errosValidacao:{}});
    });

    app.post('/produtos',function(req,res){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        var produto = req.body;

        req.assert('titulo','Titulo é obrigatório').notEmpty();
        req.assert('preco','Formato inválido').isFloat();

        var erros = req.validationErrors();
        if(erros){
            res.render('produtos/form', {errosValidacao:erros});
            return;
        }

        produtosDAO.salva(produto,function(erros,resultados){
            res.redirect('/produtos');
        });
    });

    app.get('/produtos/detalhe', function () {
        produtosBanco.carrega(connection, id, callback);
    })

    app.get('/produtos/remove', function(){
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco(connection);
        var produto = produtosBanco.carrega(id, callback);
        if(produto){
            produtosBanco.remove(produto, callback);
        }
    })
}