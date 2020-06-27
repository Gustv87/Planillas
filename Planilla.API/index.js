// dependecias de node
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const empresas = require('./app/models/empresas');
const empleados = require('./app/models/empleados');

// fin de dependencias de node


// inicio de middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
// fin de middlewares

// rutas

app.use('/api/empleados', require('./routes/em'));
app.use('/api/empresas', require('./routes/empresas.routes'));
app.use('/api/users', require('./routes/users.routes'))
//fin de las rutas

// Rutas privadas que solo pueden ser consumidas con un token generado
app.use('/api/empresas', validateUser, empresas);
app.use('/api/empleados', validateUser, empleados);
app.get('/favicon.ico', function (req, res) {
    res.sendStatus(204);

});

// Para acceder a las rutas de empresas hemos definido middleware para validar al usuario.
function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.json({ status: "error", message: err.message, data: null });
        } else {
            // add user id to request
            req.body.userId = decoded.id;
            next();
        }

    });

}

    // Manejando errores HTTP 404 para solicitudes de contenido inexistente
    app.use(function (req, res, next) {
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    // Manejo de errores, respuestas con codigo HTTP 500, HTTP 404
    app.use(function (err, req, res, next) {
        console.log(err);

        if (err.status === 404)
            res.status(404).json({ message: "Not found" });
        else
            res.status(500).json({ message: "Error interno en el servidor!!" });
    });


//servidor
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en http://localhost:' + app.get('port'));
});
//fin del Servidor