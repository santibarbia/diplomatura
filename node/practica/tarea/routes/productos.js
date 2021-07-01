const express = require('express');
const router = express.Router();
const {getAll, getSingle, crearProducto} = require('../models/producto')


const all = async (req, res) => {
    const productos = await getAll();
    console.log(productos);
    res.render('productos',{productos});

}
const single = async (req, res) =>{
    const {id} = req.params;
    const [producto] = await getSingle(id);
    console.log(producto);
    res.render('producto',{producto});
}
const create = async (req,res)=>{
    const {body:producto} = req;
    await crearProducto( producto );
    res.redirect('/');
}
const getCreate = (req, res) =>{
    res.render('crearProducto');
}

router.get('/', all);
router.get('/single/:id',single);
router.get('/create',getCreate);
router.post('/create', create)


module.exports = router;