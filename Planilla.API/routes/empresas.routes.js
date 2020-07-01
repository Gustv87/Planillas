const express = require('express');
const router = express.Router();
const empresa = require('../app/controllers/empresa.controller');

router.get('/', empresa.getEmpresa);
router.post('/', empresa.create);
router.get('/:id', empresa.getById);
router.put('/:id', empresa.updateById);
router.delete('/:id',empresa.deleteById);

module.exports = router;