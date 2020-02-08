'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtoSchema = new Schema({
    name: {
        type: String,
        required: 'type the name of the store'
    },
    preco: {
        type: Number,
        required: 'Insira o valor do produto'
    },
    quantidade: {
        type: Number,
        required: 'Insira a quantidade do produto'
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('produto',produtoSchema);