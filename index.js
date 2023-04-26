'use strict'

var mongoose = require('moongose');
var app = require('./app');
var port = 3900;

moongose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
moongose.connect('mongodb://localhost:27017/api_rest_blog', {
    useNreUrlParser: true
}).then(() => {
    console.log('La conexión a la base de datos se ha realizado');
    // Crear servidor y ponerme a escuchar peticiones HTTP
    app.listen(port, () => {
        console.log('Servidor corriendo en http://localhost:' + port);
    })
});