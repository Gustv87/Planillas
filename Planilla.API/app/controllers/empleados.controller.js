const empleado = require('../models/empleados')
const empleadoController = {}

empleadoController.getEmpleados = async (req, res) => {
    const empleados = await empleado.find();
    res.json(empleados);

}

empleadoController.postEmpleado = async (req, res) => {
    const empleados = new empleado(req.body);
    
    await empleados.save();
    res.json({
        'status':'Empleado guardado'
    });
}

empleadoController.getEmpleadoById = async (req, res)=> {
const empleados = await empleado.findById(req.params.id);
res.json(empleados)
};

empleadoController.updateEmpleado = async (req, res)=> {
 const {id} = req.params;
 const empleados = {
    nombre: req.params.nombre,
    cedula: req.params.cedula,
    rtn: req.params.rtn,
    telefono: req.params.telefono,
    email: req.params.email,
    salarioBase: req.params.salarioBase
 };
 await empleado.findByIdAndUpdate(id, {$set: empleados}, {new: true});
 res.json({status: 'Empleado Actualizado'});
}

empleadoController.deleteEmpleado = async (req,res) => {
 await empleado.findByIdAndRemove (req.params.id);
 res.json({status: 'Empleado Eliminado'});
}

module.exports = empleadoController; 