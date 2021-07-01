const express = require('express');
const router = express.Router();
const multer = require('multer');
const config = {dest:'./public/tmp'};
const upload = multer(config);
const {createEmpleado} = require('../../services/empleados')
const {get} = require("../../models/empleados");


const create = async (req, res) => {
    console.log(req.body,req.file);
    const idImg = await createEmpleado(req.body,req.file);
    console.log(idImg);
    res.redirect('/admin/empleados')
    
}

const getAll = async (req, res) => {
    const empleados = await get();
    console.log(empleados);
    res.render('adminEmpleados',{empleados});
}


router.get('/create',(req, res) => res.render('createEmpleados'))
router.post('/create',upload.single("imagen"), create);
router.get('/',getAll);
module.exports = router