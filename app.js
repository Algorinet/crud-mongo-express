const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');

// Configuramos app express
const app = express();

// Configuramos vista ejs
app.set('view engine', 'ejs');

// Conexión a mongodb
mongoose.connect('mongodb://localhost/apidb');
mongoose.Promise = global.Promise;


//  Middleware para parsear la request
app.use(bodyParser.json());

// initialize routes
app.use('/', require('./routes/users'));

// Middleware para  manejar los errores (handling)
app.use(function(err,req,res,next) {
    //console.log(err);
    res.status(422).send({error: err.message});
})

// listen for requests
app.listen(process.env.port || 3000, function(){
    console.log('now listening for requests');
});
