'use strict';

var mongoose = require('mongoose');
var Schema = moongose.Schema;

var ArticleSchema = Schema({
    title: String,
    content: String,
    date: {
        type: Date,
        default: Date.now
    },
    image: String
});

module.exports = moongose.model('Article',
    ArticleSchema);
// articles --> guarda documentos de este tipo y con esta estructura dentro de la colección