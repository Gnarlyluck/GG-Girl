const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Gin = new Schema(
    {
     name: { type: String, required: true },
     type: { type: String, required: true },
     region: { type: String, required: true },
     brand: { type: String, required: true}   
    },
    {timestamps: true}
)

module.exports = mongoose.model('gin', Gin)