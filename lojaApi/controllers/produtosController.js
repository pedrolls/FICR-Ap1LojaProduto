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
    Produto.findOne(req.params.name,function(err,produto){
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

exports.list_last = function(req, res){
    Produto.findOne(function(err,produto){
        if(err)
            res.send(err);
        res.json(produto);
    })
}