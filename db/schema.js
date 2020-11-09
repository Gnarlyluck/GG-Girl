const { model } = require ('mongoose')

const GG_UserSchema = require('./models/GG-user')
const GG_BlogSchema = require('./models/GG-blogPost')
const GossipSchema = require('./models/gossip')

const GG_user = model('userMain', GG_UserSchema) 
const Gossip = model('gossip', GossipSchema)
const GG_blog = model('GG_blog', GG_BlogSchema)

module.exports = {
    GG_user,
    Gossip,
    GG_blog
}