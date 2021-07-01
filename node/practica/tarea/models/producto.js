const pool = require('../utils/bd');
const T_PRODUCTOS = 'productos';
const T_CATEGORIAS = 'categorias'

const getAll = async () => {
    try {
        const query = "Select  p.*,c.nombre AS nombreCategoria from ?? AS p JOIN ?? AS c ON p.id_categoria = c.id ";
        const params = [T_PRODUCTOS,T_CATEGORIAS];
        return await pool.query(query,params);

    } catch (error) {
        console.log(error)
    }
}
const getSingle = async (id) =>{
    try {
        const query = "SELECT p.*, c.nombre AS nombreCategoria from ?? AS p JOIN ?? AS c ON p.id_categoria = c.id WHERE p.id = ?";
        const params = [T_PRODUCTOS,T_CATEGORIAS,id];
        return await pool.query(query,params);
    } catch (error) {
        console.log(error)
    }
}

const crearProducto = async (producto)=>{
    try {
        const query ="INSERT INTO ?? SET ?";
        const params = [T_PRODUCTOS, producto];
        return await pool.query(query, params);
    } catch (error) {
        
    }
}

module.exports = {getAll, getSingle, crearProducto};