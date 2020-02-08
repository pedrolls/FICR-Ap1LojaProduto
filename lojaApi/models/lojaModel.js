'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lojaSchema = new Schema({
    name: {
        type: String,
        required: 'type the name of the store'
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('lojaApi',lojaSchema);