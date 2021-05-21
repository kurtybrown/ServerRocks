const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/rock-bands',{
        useUnifiedTopology : true,
        useNewUrlParser : true,
        useFindAndModify : false
        //para controlar errores que se producen en cada petición en la consola
        })
        .then(function(){console.log("Conectado a Mongo")})
        .catch((err)=>console.log(err));