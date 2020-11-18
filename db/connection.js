const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/XOXOGG',
process.env.NODE_ENV === 'production'
? process.env.DATABASE_URL
: '<Your local db connection>',
{
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

mongoose.set('debug', true)

module.exports = connection
