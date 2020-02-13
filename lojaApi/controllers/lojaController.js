'use strict';

var mongoose = require('mongoose'),
Loja = mongoose.model('lojaApi');

exports.list_all = function(req, res){
    Loja.find({}, function(err, loja){
        if(err)
        res.send(err);
        res.json(loja);
    });
};

exports.list_by_name = function(req, res){
    Loja.findOne(req.params.name,function(req,loja){
        if(err)
            res.send(err);
        res.json(loja);
    })
}

exports.save_loja = function(req, res){
    var new_loja = new Loja(req.body)
    new_loja.save(function(err, loja){
        if(err)
        res.send(err);
        res.json(loja);
    });
};