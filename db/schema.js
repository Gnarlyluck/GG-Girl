const { model } = require ('mongoose')

const GG_AdminSchema = require('./models/GG-admin')
const GG_UserSchema = require('./models/GG-user')
const GG_BlogSchema = require('./models/GG-blogPost')
const GossipSchema = require('./models/gossip')
const CommentSchema = require('./models/Comments')

const GG_admin = model('admin', GG_AdminSchema)
const GG_user = model('user', GG_UserSchema) 
const Gossip = model('gossip', GossipSchema)
const GG_blog = model('GG_blog', GG_BlogSchema)
const Comment = model('comments', CommentSchema)

module.exports = {  
    GG_admin,
    GG_user,
    Gossip,
    GG_blog,
    Comment
}