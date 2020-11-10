const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    comment: {
      type: String,
      required: true
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'gg-users'
    }
  },
  { timestamps: true }
)
