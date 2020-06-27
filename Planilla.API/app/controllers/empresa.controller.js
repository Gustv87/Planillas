const empresa = require('../models/empresas');

module.exports = {
    // Metodo para la busqueda por ID
    getById: function (req, res, next) {
        console.log(req.body);

        empresaModel.findById(req.params.id, function (err, empresaInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Empresa found!!!", data: { empresas: empresaInfo } });
            }
        });
    },

    //Metodo para retornar todos los videojuegos registrados en la base de datos
    getAll: function (req, res, next) {
        let empresasList = [];
        empresaModel.find({}, function (err, empresas) {
            if (err) {
                next(err);
            } else {
                for (let empresa of empresas) {
                    empresasList.push({ id: empresa._id, nombre: empresa.direccion, rtn: empresa.rtn });
                }
                res.json({ status: "success", message: "Empresas list found!!!", data: { empresas: empresasList } });

            }
        });
    },
    //Metodo para actualizar algun registro de la base de datos por ID
    updateById: function (req, res, next) {
        empresaModel.findByIdAndUpdate(req.params.id, { nombre: req.body.nombre, direccion: req.body.direccion, rtn: req.body.rtn }, function (err, empresaInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Empresa updated successfully!!!", data: null });
            }
        });
    },
    //Metodo para eliminar algun registro de la base de datos por ID
    deleteById: function (req, res, next) {
        empresaModel.findByIdAndRemove(req.params.id, function (err, videogameInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Empresa deleted successfully!!!", data: null });
            }
        });
    },
    //Metodo para crear algun registro nuevo
    create: function (req, res, next) {
        empresaModel.create({ nombre: req.body.nombre, direccion: req.body.direccion, rtn: req.body.rtn }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({ status: "success", message: "Empresa added successfully!!!", data: null });

        });
    },
}


