const mongoose = require('mongoose')
const { Schema } = mongoose

const mensajeSchema = new Schema({
    description: {
        type: String,
    },
    checket: {
        type: Boolean,
    },
}
)

const Mensajes = mongoose.model('Mensajes', mensajeSchema)
module.exports = Mensajes