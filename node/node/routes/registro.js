const express = require('express');
const router = express.Router();
const {create, verificar} = require('../models/usuarios');
const sha1 = require('sha1');
const {v4 : uuid} = require('uuid');
const {send} = require('../services/mail')

const showRegistro = (req,res)=>{
    res.render('registro')
}

const registrate = async (req,res)=>{
    const usuario = req.body;
    console.log(usuario);

    const uid= uuid();
    console.log(uid);

    const usuarioFinal ={
        username:usuario.username,
        pass: sha1(usuario.pass),
        mail:usuario.email,
        confirmacionCorreo:uid,
        telefono: usuario.telefono
    } 
    console.log(usuarioFinal);

    const agregado = await create(usuarioFinal);
    send({ mail:usuarioFinal.mail,
        cuerpo:
             `<h1> Confirmacion de Correo Electronico de ${usuarioFinal.username}</h1>
             <a href=${process.env.URL}:${process.env.PORT}/registro/verify/${uid}>Link magico para ${usuarioFinal.username}</a>`
    
        });
    res.redirect('/productos');
}

const verify = async (req,res) => {
    const {uid} = req.params;
    console.log(uid);
    const messageId = await verificar(uid);
    console.log(messageId);
    res.redirect('/productos');
}

router.get('/',showRegistro);
router.post('/create',registrate);
router.get('/verify/:uid',verify);

module.exports = router;