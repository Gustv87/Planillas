const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empresaSchema = new Schema({

    nombre: {
        type: String,
        trim: true,
        required: true
    },
    direccion: {
        type: String,
        trim: true
    },

    rtn: {
        type: String,
        trim: true,
        required: true
    }
})

module.exports = mongoose.model('Empresas', empresaSchema);