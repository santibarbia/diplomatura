const pool = require('../utils/bd');

const create = async (usuario) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_USUARIOS, usuario];
    return await pool.query(query, params);
}

const verificar = async (uid) =>{
   
        const query = "UPDATE ?? SET habilitado = 1 WHERE confirmacionCorreo = ?";
        const params = [process.env.T_USUARIOS,uid];
        return await pool.query(query,params);
    
}

const auth = async(username,pass) =>{
    const query = "SELECT * FROM ?? WHERE username = ? AND pass = ? AND habilitado = 1";
    const params = [process.env.T_USUARIOS,username,pass]
    return await pool.query(query,params);

}

module.exports = {create,verificar,auth};