const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const Vodka = new Schema(
    {
     name: { type: String, required: true },
     flavor: { type: String, require: false },
     type: { type: String, required: true },
     region: { type: String, required: true },
     brand: { type: String, required: true}   
    },
    {timestamps: true}
)

module.exports = mongoose.model('vodka', Vodka)