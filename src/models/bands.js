const {Schema, model} = require('mongoose');

const bandSchema = new Schema({

    name:{type: String, required : true},
    foundation:{type: Number, required : true},
    members:{type: String, required : true},
    styles:{type: String, required : true},
    song:{type: String, },
    photo: {type: String,}
},
{
    timestamps: true, //muestra última vez que se actualizó
    versionKey: false
})

module.exports = model("Band",bandSchema);