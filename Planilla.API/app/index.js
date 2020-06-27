// dependecias de node
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const {mongoose} = require ('./database');
// fin de dependencias de node


// inicio de middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
// fin de middlewares

// rutas
app.use('/api/empleados',require('./routes/empleados.routes'))
//fin de las rutas


//servidor
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en http://localhost:'+ app.get('port'));
}); 