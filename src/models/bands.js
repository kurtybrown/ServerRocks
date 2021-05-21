const {Schema, model} = require('mongoose');

const bandSchema = new Schema({

    name:{type: String, required : true},
    foundation:{type: Number, required : true},
    members:{type: Array, required : true},
    styles:{type: Array, required : true},
    song:{type: String, required : true},
},
{
    timestamps: true, //muestra última vez que se actualizó
    versionKey: false
})

module.exports = model("Band",bandSchema);