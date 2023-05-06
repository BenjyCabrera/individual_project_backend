const express = require('express')
require('dotenv').config()
const morgan = require ('morgan')
const cors = require ('cors')
const mongoose = require ('mongoose')

const users = require ('./routes/users')
const bands = require ('./routes/bands')

mongoose.connect('mongodb://127.0.0.1:27017/musicfy')

const app = express()
const port = 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/users', users)
app.use('/api/bands', bands)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})