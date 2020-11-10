const { GG_admin, GG_blog } = require('../db/schema')

const GoToGG_admin = async (req, res) => {
    const admin = await (await GG_admin.findById(req.params.admin_id)).select('_id name')
    const blogPosts = await GG_blog.find({ user_id: req.params.admin_id})
    res.send({ user, blogPosts })
}

const SignInGG = async ( req, res) => {
    const admin = await GG_admin.findOne({ email: req.body.email })
    if (admin && admin.password_digest === req.body.password) {
        const payload = {
            _id: admin._id,
            name: admin.name
        }
        return res.send(payload)
    }
    res.status(401).send({ msg: "You're not Gossip Girl!" })
}

const CreateAdmin = async (req, res) => {
    const body = req.body
    const admin = new GG_user({
        name: body.name,
        email: body.email,
        password_digest:req.body.password
    })
    admin.save()
    res.send(user)
}

module.exports = {
    CreateAdmin,
    SignInGG,
    GoToGG_admin
}
