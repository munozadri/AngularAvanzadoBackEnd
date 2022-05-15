require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { dbConnection } = require('./database/config');

//CREAR EL SERVIDOR EXPRESS 
const app = express();

//Configurar CORS
app.use(cors());

//Base de datos Conexión
dbConnection();

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT)
});

// USER y PASS adripruebas/federer123

//CREAR RUTAS GET; POST; DELETE, PUT
app.get('/', (request, response) => {
    response.json({
        ok: true,
        msg: 'Hola mundo'
    });
});