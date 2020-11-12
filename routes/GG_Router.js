const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const GG_blogRouter = require('./GG-blogRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/users', UserRouter)
Router.use('/posts', GG_blogRouter)
Router.use('/comments', CommentRouter)

module.exports = Router