const mongoose = require('mongoose')

mongoose 
.connect('mongodb://127.0.0.1:27017/productsBrands',
{ useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
    console.log('Succesfully connected to MongoDb.')
})
.catch(e => {
    console.log('Connection error', e. message)
})
const db = mongoose.connection

module.exports = db
