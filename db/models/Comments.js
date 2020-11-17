const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    comment: {
      type: String,
      required: true
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users'
      //changed gg-user to user
    },
    post_id: {
      type: Schema.Types.ObjectId,
      ref: 'gg_blogPosts'
    }
  
  },
  { timestamps: true }
)
