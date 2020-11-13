// const { post } = require("../db/models/GG-user")
// const GGUser = require("../db/models/GG-user")

const { GG_blog, GG_user, Comment } = require('../db/schema')

const CreatePost = async (req, res) => {
    try{
        const newPost = new GG_blog({ ...req.body, user_id: req.params.user_id })
        newPost.save()
        res.send(newPost)
    } catch (error) {
        throw error
    }
}

const DeletePost = async (req, res) => {
    try {
        await Comment.deleteMany({ _id: { $in: post.comments } })
        await GG_blog.findByIdAndUpdate(req.params.post_id)
        res.send({ msg: 'This one is safe, for now...'})
    } catch (error){
        throw error
    }
}

const UpdatePost = async (req, res) => {
    try {
        await GG_blog.findByIdAndUpdate(
            req.params.post_id,
            {
                ...req.body
            },
            { new: true, useFindAndModify: false },
           // (err, (d) => (err ? err : res.send(d)))
        )
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreatePost,
    DeletePost,
    UpdatePost
}