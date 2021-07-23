const express = require('express');
const router = express.Router();
const {auth} = require('../models/usuarios'); 
const sha1 = require('sha1');
const {validateLogin} = require('../middlewares/usuarios')


const showLogin = (req,res) =>{
    res.render('login',{message:''});
}

const login = async (req,res)=>{
    const {username,pass} = req.body;
    console.log(username,pass);
    const passCrypt =  sha1(pass);
    const logged = await auth(username,passCrypt);
    if (logged.length === 0) {
        res.render('login',{message:"Usuario y/o pass incorrecto"});
    }else{
        const [{id,admin}] = logged;
        req.session.user = id;
        req.session.admin = admin;
        res.redirect('/usuarios');
    }
    
    
}


router.post('/',validateLogin,login);
router.get('/',showLogin);
module.exports = router;