const { Router } = require('express')

const bcrypt = require('bcrypt')
const User = require('../models/user')
// const jwt = require ('jsonwebtoken')

const router = Router()

router.post('/signup', async (req, res) => {
  const { password: passwordPlainText, ...rest } = req.body

  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(passwordPlainText, salt)

  const newUser = await User.create({ password, ...rest })

  res.json(newUser)

  // const token = newUser.generateJWT()

  // res.setHeader('x-auth-token', token).json(newUser)
})

module.exports = router
