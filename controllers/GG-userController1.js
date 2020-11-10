const { GG_user, GG_blog } = require('../db/schema')

const GoToGGUser = async (req, res) => {
    const user = await (await GG_user.findById(req.params.user_id)).select('_id name')
    const blogPosts = await GG_blog.find({ user_id: req.params.user_id})
    res.send({ user, blogPosts })
}

const SignInGGUser = async ( req, res) => {
    const user = await GG_user.findOne({ email: req.body.email })
    if (user && user.password_digest === req.body.password) {
        const payload = {
            _id: user._id,
            name: user.name
        }
        return res.send(payload)
    }
    res.status(401).send({ msg: "You're not Gossip Girl!" })
}

const CreateUser = async (req, res) => {
    const body = req.body
    const user = new GG_user({
        name: body.name,
        email: body.email,
        password_digest:req.body.password
    })
    user.save()
    res.send(user)
}

module.exports = {
    CreateUser,
    SignInGGUser,
    GoToGGUser
}
