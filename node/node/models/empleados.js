const pool = require('../utils/bd');


const create = (obj) => pool.query("INSERT INTO ?? SET ?", [process.env.T_EMPLEADOS, obj])
    .then(response => response)
    .catch(err => console.log(err));


const createEmpImg = (obj) => pool.query("INSERT INTO ?? SET ?", [process.env.T_EMPLEADOSIMG, obj])
    .then(response => response)
    .catch(err => console.log(err));

const get = () => pool.query("SELECT e.id, e.nombre, e.apellido, e.direccion, e.telefono, ei.uid FROM ?? as e JOIN  ?? as ei ON e.id = ei.id_empleado WHERE e.eliminado = 0", [process.env.T_EMPLEADOS,process.env.T_EMPLEADOSIMG])
    .then(response => response)
    .catch(err => console.log(err));

module.exports = {
    create,
    createEmpImg,
    get
};