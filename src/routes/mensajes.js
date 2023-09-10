const express = require('express')
const { getAllMensajes, getMensajeById, createMensaje, updateMensaje, deleteMensaje } = require('../controllers/mensajesControllers')

const mensajeRouter = express.Router()

//get all products
mensajeRouter.get('/mensajes', getAllMensajes)

//get one product
mensajeRouter.get('/mensajes/:id', getMensajeById)

//create product
mensajeRouter.post('/mensajes', createMensaje)

//update product
mensajeRouter.patch('/mensajes/:id', updateMensaje)

//delete product
mensajeRouter.delete('/mensajes/:id', deleteMensaje)

module.exports = mensajeRouter