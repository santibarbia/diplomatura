var express = require('express');
var router = express.Router();
const {send} = require('../services/mail')


const register = (req,res) =>{


    res.render('registro')
}

const create = (req,res) =>{
    const {body : usuario} = req;
    console.log(usuario);
    send({ mail:usuario.email,
    cuerpo:
         `<h1> Gracias por registrarte a mi pagina</h1>
         <a href="">Link magico para ${usuario.nombre}</a>`

    });
    res.redirect('/');
}

router.get('/',register);
router.post('/create',create);

module.exports = router;