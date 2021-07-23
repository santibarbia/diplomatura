

const verify = (req, res, next)=>{

    if (req.session.user) {
        next();
    } else {
        res.render('login',{message:"Necesitas logearte para ingresar"})
    }

}

const verifyAdmin = (req, res, next)=>{
    
    if (req.session.admin == 1) {
        next();
    }else {
        res.render('unathorize');
    }
    
}

module.exports = {verify,verifyAdmin}