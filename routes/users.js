const express = require ('express');
const User = require('../models/user');
const router = express.Router();
const axios = require('axios');

// Listar todos los usuarios
router.get('/users', (req, res) => {
    User.find({},function(err,user){
        res.render('index', {
            userList: user
        })
    })
}); 


// Añadir un usuario
router.post('/users', function(req, res, next){
    console.log('El usuario añadido es: ', req.body.Nombre);
    User.create(req.body).then(function(user) {
        res.send(user);
    }).catch(next);
});

// Actualizar un usuario
router.put('/users/:id', function(req, res, next){
    User.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(user){
        User.findOne({_id:req.params.id}).then(function(user){
            res.send("Actualizado usuario como: " + user.Nombre)
        })
    });
});

// Borrar un usuario
router.delete('/users/:id', function(req, res, next){
    User.findByIdAndRemove({_id:req.params.id}).then(function(user){
        res.send("Borrado usuario: " + user.Nombre)
    });
});

module.exports = router;
