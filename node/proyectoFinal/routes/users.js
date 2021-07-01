const express = require('express');
const router = express.Router();

const {getAllUser, getUser, createUser, getAll} = require('../models/usuario')


const all = async (req, res) => {
  const usuarios = await getAllUser();
  console.log(usuarios);
  res.render('usuarios',{usuarios});

}

const single = async (req, res) =>{
  const {id} = req.params;
  const [usuario] = await getUser(id);
  console.log(usuario);
  res.render('usuario',{usuario});
}

const create = async (req,res)=>{
  const {body:usuario} = req;
  await createUser( usuario );
  res.redirect('/');
}
const getCreate = (req, res) =>{
  res.render('crearUsuario');
}

const login = async(req,res)=>{
  const {body:usuario} = req;
  const usuarios = await getAll();
  const find = usuarios.find((user)=> user.username == usuario.username && user.pass == usuario.pass);
  console.log(find);
  
}
const getLogin = (req,res) =>{
    res.render('login')
}


router.get('/', all);
router.get('/single/:id',single);
router.get('/create',getCreate);
router.post('/create', create);
module.exports = router;
