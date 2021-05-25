const {Schema, model} = require('mongoose');

const bandSchema = new Schema({

    // required : true

    name:{type: String, },
    foundation:{type: Number, },
    members:{type: String, },
    styles:{type: String, },
    song:{type: String, },
    photo: {type: String,}
},
{
    timestamps: true, //muestra última vez que se actualizó
    versionKey: false
})

module.exports = model("Band",bandSchema);