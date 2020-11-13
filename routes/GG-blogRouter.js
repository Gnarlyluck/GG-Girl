const Router = require('express').Router()
const PostController = require('../controllers/PostController')

Router.post('/:user_id', PostController.CreatePost)
Router.put('/:post_id', PostController.UpdatePost)
Router.delete('/:post_id', PostController.DeletePost)

module.exports = Router


// {
//     "_id": "5fac890800c44a91bf0717e5",
//       "title": "spotted, Chuck drowning his sorrows at the bottom of a bottle",
//       "image_url": "https://images2.fanpop.com/images/photos/3100000/Drunk-Ed-gossip-girl-3171512-604-454.jpg",
//       "popularity_rating": 98,
//       "description": "Chuck Bass has really fallen off the wagon after finding out about Dan and Blairs little love affair" ,
//       "location": "The Empire, Brooklyn, New York",
//       "comments": ["OMG I can't believe he is so upset by this, he is to good for blair anyway"], "_id": "5fac6da30b9a7e6db9c25b9c"
    // }

// "_id": "5fac6da30b9a7e6db9c25b9c"     
// "title': "spotted, lonely boy with blair"
// "image_url":"https://www.cheatsheet.com/wp-content/uploads/2020/08/Dan-and-Blair-1-..."
// "popularity_rating": 102,
// "description": "Dan humphrey and blair woldorf spotted holding hands at the met"
// "location": "The Met"
