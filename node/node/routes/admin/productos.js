const express = require('express');
const router = express.Router();
const models = require('../../models/productos');
const modelCategorias = require('../../models/categorias'); 


const get = async (req,res) =>{
    const productos = await models.getAll();
    console.log(productos);
    res.render('adminProductos',{productos})
}
const showCreate = async (req,res) => {
    const categorias = await modelCategorias.get();
    console.log(categorias)
    res.render('createProducto',{categorias})};

const create = async(req,res)=>{

    const producto = req.body;
    console.log(producto);
    const insertId = await models.crearProducto(producto);
    console.log(insertId);
    res.redirect('/admin/productos');

};

const showUpdate =async (req,res) => {
    const {id} = req.params
    console.log(id);
    const [producto] = await models.getSingle(id);
    const categorias = await modelCategorias.get();
    console.log(producto);
    res.render('updateProducto',{producto,categorias})};

const update = async(req,res) =>{
    const {id} = req.params;
    console.log(id)
    const product = req.body;
    const {insertId} = await models.update(id,product);
    console.log(insertId);
    res.redirect('/admin/productos');
};

const del = async(req,res) =>{
    const {id} = req.params;
    console.log(id);
    const {insertId} = await models.borrar(id);
    console.log(messageId);
    res.redirect('/admin/productos')
};

router.get('/',get);
router.get('/create',showCreate);
router.post('/create',create);
router.get('/update/:id',showUpdate);
router.post('/update/:id',update);
router.get('/delete/:id',del);
module.exports = router;