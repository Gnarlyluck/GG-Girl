const Router = require('express').Router()
const UserController = require('../controllers/GG-userController')

Router.get('/:user_id', UserController.GoToGG_admin)
Router.post('/register', UserController.CreateUser)
Router.post('/login', UserController.SignInGG)

module.exports = Router