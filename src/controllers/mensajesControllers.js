const mensajeSchema = require('../models/mensajes.js')

const getAllMensajes = async (req, res) => {
    mensajeSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
  }

const getMensajeById = async (req, res) => {
    const { id } = req.params
    mensajeSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => {
        res.status(404).json({message: error.message})
    })
  }

const createMensaje = async (req, res) =>{
    const mensaje = mensajeSchema(req.body)
    mensaje
      .save()
      .then((data) => res.json(data))
      .catch((error)=>{res.json({message: error})})
}

const updateMensaje = async (req, res) => {
    const { id } = req.params
    const { description, checket} = req.body
    mensajeSchema
      .updateOne({ _id: id }, { $set: {description, checket} })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error.message }))
}

const deleteMensaje = async (req, res) => {
    const { id } = req.params
    mensajeSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
}

module.exports = {
    getAllMensajes,
    getMensajeById,
    createMensaje,
    updateMensaje,
    deleteMensaje
}