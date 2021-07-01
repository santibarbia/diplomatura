const express = require('express');
const routes = express.Router();
const {getAll,getSingle} = require('../models/productos');

const get = async (req,res) =>{
    const productos = await getAll();
    console.log(productos)
    res.render('productos', {productos});
}

const single = async(req,res)=>{
    const {id} = req.params;
    console.log(id);
    const [producto] = await getSingle(id);
    res.render('producto', {producto});
}

routes.get('/', get);
routes.get('/single/:id',single);
module.exports = routes;