const mongoose = require ('mongoose')

// const { pick } = require('lodash')

// const jwt = require('jsonwebtoken')

const usuarioSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: { type: String, required: true },
  isAdmin: Boolean,
})

// usuarioSchema.methods.generateJWT = function () {
//   return jwt.sign(
//     pick(this, ['name', 'email', 'isAdmin']),
//     process.env['jwt_privateKey']
//   )
// }

const User = mongoose.model('user', usuarioSchema)

module.exports = User