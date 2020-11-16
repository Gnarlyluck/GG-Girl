const { GG_user, GG_blog } = require('../db/schema')
const {
    checkPassword,
    generatePassword
} = require('../middleware/PasswordHandler')

const GetProfile = async (req, res) => {
    try {
    const user = await (await GG_user.findById(req.params.user_id)).select('_id name')
    const posts = await GG_blog.find({ user_id: req.params.user_id})
    res.send({ user, posts })
  } catch (error) {
      throw error
  }
}

const CreateUser = async (req, res) => {
    try {
    const body = req.body
    const password_digest = await generatePassword(body.password)
    const user = new GG_user({
        name: body.name,
        email: body.email,
        password_digest
    })
    user.save()
    res.send(user)
    } catch (error) {
      throw error
    }       
  }

const SignInGGUser = async ( req, res, next) => {
    try{
    const user = await GG_user.findOne({ email: req.body.email })
    if ( user && 
        (await checkPassword(req.body.password, user.password_digest)) 
    )  {
        const payload = {
            _id: user._id,
            name: user.name
        }
        res.locals.payload = payload
        return next()
    }
    res.status(401).send({ msg: "You're not Gossip Girl!" })
    }catch(error){
        throw error
    } 
}

const RefreshSession = (req, res) => {
    try {
      const token = res.locals.token
      res.send({ user: jwt.decode(token), token: res.locals.token })
    } catch (error) {
      throw error
    }
  }

module.exports = {
    CreateUser,
    SignInGGUser,
    GetProfile,
    RefreshSession
}
