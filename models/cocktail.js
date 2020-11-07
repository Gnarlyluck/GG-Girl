const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cocktails = new Schema(
    {
        cocktail_name: {type: String, required: true },
        whiskey:  [{ type: Schema.Types.ObjectId, ref: 'whiskey' }],
        rum:  [{ type: Schema.Types.ObjectId, ref: 'rum' }],
        vodka:  [{ type: Schema.Types.ObjectId, ref: 'vodka'  }],
        gin:  [{ type: Schema.Typetypes.ObjectId, ref: 'gin' }]
        
    },
    {timestamps: true}
)
module.exports = mongoose('cocktails', Cocktails)