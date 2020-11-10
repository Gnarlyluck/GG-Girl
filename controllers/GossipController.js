const { GG_blog } = require("../db/schema")

const { GG_blog, Comment } = require('../db/schema')

const CreateCommment = async (req, res) => {
    try {
        const comment = new Comment({ ...req.body, user_id: req.params.user_id })
        comment.save()
        await GG_blog.update(
            {_id: req.params.post_id},
                {$push: {
                comments: comment
                }
            }
        )
        res.send(comment)
    }catch(error){
     throw error
    }
}

const RemoveComment = async (req, res) => {
    try {
        await Comment.deleteOne({ _id: req.params.comment_id })
        const deletePost = await GG_blog.findByIdAndDelete(
            req.params.post_id,
            { $pull : { comments: { _id: req.params.comment_id } } },
           { upsert: true, }
        )
    }catch(error){
        throw error
    }
}