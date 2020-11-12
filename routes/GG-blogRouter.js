const Router = require('express').Router()
const PostController = require('../controllers/PostController')

Router.post('/:post_id', PostController.CreatePost)
Router.put('/:post_id', PostController.UpdatePost)
Router.delete('/:post_id', PostController.DeletePost)

module.exports = Router