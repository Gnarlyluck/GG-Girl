const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const Rum = new Schema(
    {
     name: { type: String, required: true },
     age: { type: String, required: true },
     type: { type: String, required: true },
     region: { type: String, required: true },
     brand: { type: String, required: true}   
    },
    {timestamps: true}
)

module.exports = mongoose.model('rum', Rum)