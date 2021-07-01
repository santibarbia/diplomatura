const pool = require('../utils/bd');
const T_USUARIOS = 'usuarios';


const getAllUser = async ()=>{
try {
    const query = 'Select username,habilitado from ??';
    const params = T_USUARIOS;
    return await pool.query(query,params);
} catch (error) {
    console.log(error);
}
};

const getUser = async (id)=>{
    try {
        const query = 'SELECT username,habilitado FROM ?? AS u WHERE u.id = ?';
        const params = [T_USUARIOS,id];
        return await pool.query(query,params);
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (usuario)=>{
    try {
        const query = 'INSERT INTO ?? SET ?';
        const params = [T_USUARIOS,usuario];
        return await pool.query(query,params);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {getAllUser, getUser, createUser};