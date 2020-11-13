const { model } = require ('mongoose')

const GG_UserSchema = require('./models/GG-user')
const GG_BlogSchema = require('./models/GG-blogPost')
const CommentSchema = require('./models/Comments')

const GG_user = model('user', GG_UserSchema) 
const GG_blog = model('gg_blogs', GG_BlogSchema)
const Comment = model('comments', CommentSchema)

module.exports = {  
    GG_user,
    GG_blog,
    Comment
}