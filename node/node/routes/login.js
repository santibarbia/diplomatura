const express = require('express');
const router = express.Router();
const {auth} = require('../models/usuarios'); 
const sha1 = require('sha1');


const showLogin = (req,res) =>{
    res.render('login',{message:''});
}

const login = async (req,res)=>{
    const {username,pass} = req.body;
    console.log(username,pass);
    const passCrypt =  sha1(pass);
    const logged = await auth(username,passCrypt);
    console.log('logged', logged);
    logged.length === 0 ? res.render('login',{message: 'Username o password incorrecto'}) : res.redirect('/admin/index');
    
}


router.post('/',login);
router.get('/',showLogin);
module.exports = router;