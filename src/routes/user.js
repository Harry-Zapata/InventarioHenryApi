const express = require('express')
const validateToken = require('../middlewares/validateToken')
const { createUser, showUser, updateUser, showAllUser, deleteUser } = require('../controllers/userControllers')

const userRouter = express.Router()

//create user
userRouter.post('/users', validateToken, createUser)

//show
userRouter.get('/profile/:id', validateToken, showUser)

//update user
userRouter.put('/profile/:id', validateToken, updateUser)

//delete user
userRouter.delete('/profile/:id', validateToken, deleteUser)

//Show all users
userRouter.get('/users', validateToken, showAllUser)
module.exports = userRouter