const express = require('express');
const routes = express.Router();

const alumnos = [
    {id:1,nombre:"Santiago",apellido:"Ibarbia"},
    {id:2,nombre:"Leo",apellido:"Messi"}
];

routes.get('/',(req,res)=>{
    console.log("Principal");
    res.render('alumnos',{alumnos});
})


module.exports = routes;