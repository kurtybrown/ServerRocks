const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors()); //nos permite aceptar otras peticiones que vienen de otros servidores ej: 4200 con 3000
app.use(morgan('dev')); //para que el servidor se ejecute cada vez que realizo cambios
app.use(express.json()); //entender los json que envío por postman
app.use(express.urlencoded({extended:false}));

app.use(require("./routes/bands.routes"));

module.exports = app;