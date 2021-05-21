const express = require ('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev')); //para que el servidor se ejecute cada vez que realizo cambios
app.use(express.json()); //entender los json que envío por postman
app.use(express.urlencoded({extended:false}));

app.use(require("./routes/bands.routes"));

module.exports = app;