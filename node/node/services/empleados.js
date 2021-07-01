const {create,createEmpImg} = require('../models/empleados');
const {imgFile} = require("../utils/fileHandler");
//insertar empleado --> insert
//subir imagen --> imgFile
//insertar empleado imagen --> insert

const createEmpleado = async (body, file)=>{
    try {
        
        const {insertId : id_empleado} = await create(body);
        console.log(id_empleado);
        const uid = imgFile(file);
        const obj = {id_empleado,uid};
        const {insertId : idImg} = await createEmpImg(obj);
        return idImg;
    } catch (error) {
        console.log(error)
    }

}

module.exports = {createEmpleado}

