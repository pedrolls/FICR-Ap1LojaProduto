'use strict';

var mongoose = require('mongoose'),
Produto = mongoose.model('produto');

exports.list_all_products = function(req, res){
    Produto.find({}, function(err, produto){
        if(err)
        res.send(err);
        res.json(produto);
    });
};

exports.list_product_by_name = function(req, res){
    Produto.find(req.params.name,function(req,produto){
        if(err)
            res.send(err);
        res.json(produto);
    })
}

exports.save = function(req, res){
    var new_produto = new Produto(req.body);
    new_produto.save(function(err,produto){
        if(err)
            res.send(err)
        res.json(produto)
    });
}