
const express = require('express');
const cors = require('cors');
const app = express();

//settiings
app.set('port', process.env.PORT || 8000);

//middlewares
app.use(cors());
app.use(express.json());

//rutas
app.use('/api/torresdigitales', require('./Rutas/Torre'));
app.use('/api/apartamentosdigitales', require('./Rutas/Apartamento'));
app.use('/api/cuartosdigitales', require('./Rutas/Cuarto'));
app.use('/api/personasdigitales', require('./Rutas/Persona'));
app.use('/api/mensajes', require('./Rutas/Mensaje'));

module.exports = app;

