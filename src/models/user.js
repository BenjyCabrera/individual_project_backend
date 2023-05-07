const mongoose = require ('mongoose')

const { pick } = require('lodash')

const jwt = require('jsonwebtoken')

const usuarioSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: String,
  password: { type: String, required: true },
  isAdmin: Boolean,
  favoriteSongUser: [{type: mongoose.Schema.Types.ObjectId, ref: 'Song'}]
})

usuarioSchema.methods.generateJWT = function () {
  return jwt.sign(
    pick(this, ['name', 'email', 'isAdmin']),
    process.env['jwt_privateKey']
  )
}

const User = mongoose.model('User', usuarioSchema)

module.exports = User