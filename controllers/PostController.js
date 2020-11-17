const { GG_blog, GG_user, Comment } = require('../db/schema')

const GetPosts = async (req, res) => {
    try {
      
      const posts = await GG_blog.find()
        // .sort({ popularity_rating: 'desc' })
        console.log(posts, 'give it to me')
      res.send(posts)
    } catch (error) {
      console.log("get it")
      throw error
    }
  }

const CreatePost = async (req, res) => {
    try{
        const newPost = new GG_blog({ ...req.body, user_id: req.params.user_id })
        newPost.save()
        res.send(newPost)
    } catch (error) {
        throw error
    }
}

const GetPostById = async (req, res) => {
    try {
        const post = (await GG_blog.findById(req.params.post_id)).populate([
            {
                model: 'users',
                path: 'user_id',
                select: '_id name'
              },
              {
                path: 'comments',
                populate: {
                  path: 'user_id',
                  model: 'users',
                  select: '_id name'
                }
              }  
        ])
        res.send(post)
    } catch (error){
    throw error
    }
}

const DeletePost = async (req, res) => {
    try {
      const post = await GG_blog.findById(req.params.post_id)
      await Comment.deleteMany({ _id: { $in: post.comments } })
      await GG_blog.findByIdAndDelete(req.params.post_id)
      res.send({ msg: 'Post deleted' })
    } catch (error) {
      throw error
    }
  }


const UpdatePost = async (req, res) => {
    try {
       const updatedPost = await GG_blog.findByIdAndUpdate(
            req.params.post_id,
            {
                ...req.body
            },
            { new: true, useFindAndModify: false },
            //  (err, (d) => (err ? err : res.send(d)))
            )
            res.send(updatedPost)
    } catch (error) {
        throw error
    }
}
const AddPost = async (request, response) => {
  try {
      const addNew = await new GG_blog(request.body)
      addNew.save()
      return response.status(201).json({
          addNew,
      });
  } catch (error) {
      return response.status(500).json({ error: error.message })
  }
}
module.exports = {
    CreatePost,
    DeletePost,
    UpdatePost,
    GetPostById,
    GetPosts,
    AddPost
}