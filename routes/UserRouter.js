const Router = require('express').Router()
const UserController = require('../controllers/UserController')
const {
    createToken,
    verifyToken,
    getToken,
} = require('../middleware/JwtHandler')

Router.get('/:user_id', UserController.getUser)
Router.post('/register', UserController.CreateUser)
Router.post('/login', UserController.SignInGGUser, createToken)
Router.get(
    '/refresh/session',
    getToken,
    verifyToken,
    UserController.RefreshSession
)
module.exports = Router