const GG_Router = require('./routes/GG_Router')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const connection = require('./db/connection')
const helmet = require('helmet')

const PORT = process.env.PORT || 3001


const app = express()

app.use(logger('dev'))
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send({ msg: 'Server Working' }))
app.use('/api', GG_Router)

app.listen(PORT, async () => {
  try {
    await connection
    console.log('Database Connected')
    console.log(`app is listening on port: ${PORT}`)
  } catch (error) {
    throw new Error('Connection Error')
  }
})
