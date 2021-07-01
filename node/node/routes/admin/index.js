const express = require('express');
const { route } = require('../login');
const router = express.Router();

const showIndex = (req,res)=>{
    res.render('adminIndex');
}


router.get('/',showIndex);
module.exports = router;