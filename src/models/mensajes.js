const mongoose = require('mongoose')
const { Schema } = mongoose

const mensajeSchema = new Schema({
    description: {
        type: String,
    },
    checked: {
        type: Boolean,
        default: false
    },
}
)

const Mensajes = mongoose.model('Mensajes', mensajeSchema)
module.exports = Mensajes