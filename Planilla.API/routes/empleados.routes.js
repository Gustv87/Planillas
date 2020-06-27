const express = require('express');
const router = express.Router();
const empleado = require('../app/controllers/empleados.controller');

router.get('/', empleado.getEmpleados);
router.post('/', empleado.postEmpleado);
router.get('/:id', empleado.getEmpleadoById);
router.put('/:id', empleado.updateEmpleado);
router.delete('/:id', empleado.deleteEmpleado);

module.exports = router;