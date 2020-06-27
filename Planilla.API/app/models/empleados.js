const mongoose = require('mongoose');
const BigNumber       = require('bignumber.js')
const BigNumberSchema = require('mongoose-bignumber')
const { Schema } = mongoose;




const empleadoSchema = new Schema({
    nombre: { type: String, required: true },
    cedula: { type: String, required: true },
    rtn: { type: String },
    telefono: { type: Number},
    email: { type: String, required: true },
    salarioBase: { type: BigNumberSchema, scale: 2, rounding: BigNumber.ROUND_HALF_UP }
    
});


module.exports = mongoose.model('Empleados', empleadoSchema);