const { GG_blog, Comment } = require('../db/schema')

const CreateComment = async (req, res) => {
    try{
        const comment = new Comment({ ...req.body, user_id: req.params.user_id, post_id: req.params.post_id })
        await GG_blog.updateOne(
            {_id: req.params.post_id },
            { $push: { comments: comment}}
        )
        comment.save() 
        res.send(comment)
    }catch (error) {
        throw error
    }
}
const ShowComment = async (req, res) => {
    try{
        const comments = await Comment.find({ post_id: req.params.post_id})
        res.send(comments)
    }catch (error) {
        throw error
    }
}

const RemoveComment = async (req, res) => {
    try {
        await Comment.deleteOne({ _id: req.params.comment_id })
        const updatePost = await GG_blog.findByIdAndUpdate(
            req.params.post_id,
            { $pull: {comments: { _id: req.params.comment_id } } },
            { upsert: true, new: true }
        )
        res.send(updatePost)
    } catch (error) {
        throw error
    }
}

const UpdateComment = async (req, res) => {
    try {
        await Comment.findByIdAndUpdate(
            req.params.comment_id,
            { ...req.body }, 
            (err, d) => ( err ? err : res.send(d))
        )
    }catch (error) {
        throw error
    }
}

module.exports = {
    CreateComment,
    RemoveComment, 
    UpdateComment,
    ShowComment
}