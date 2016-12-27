/**
 * Created by lcunha on 26/12/16.
 */
module.exports = function(app){
    app.get('/produtos',function(req,res){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results){
            res.render('produtos/lista', {lista:results});
        });

        connection.end();
    });

    app.get('/produtos/form',function(req,res){
        res.render('produtos/form');
    });

    app.post('/produtos/salva',function(req,res){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        var produto = req.body;

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