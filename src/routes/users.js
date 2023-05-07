const { Router } = require('express')

const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require ('jsonwebtoken')

const router = Router()

////////POST SIGNUP////////

router.post('/signup', async (req, res) => {
  const { password: passwordPlainText, ...rest } = req.body

  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(passwordPlainText, salt)

  const newUser = await User.create({ password, ...rest })

  res.json(newUser)

  const token = newUser.generateJWT()

  res.setHeader('x-auth-token', token).json(newUser)
})

////////POST SIGNIN////////

router.post('/signin', async (req, res) => {
  const { name, password: passwordPlainText} = req.body

  const user = await User.findOne({ name })

  const isUser = await bcrypt.compare(passwordPlainText, user.password)

  const token = user.generateJWT()

  res.setHeader('x-auth-token', token).send('Success')
})

////////POST ////////

router.post('/add-favorite-song', async (req, res) => {
  const { userId, favoriteSongId} = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { favoriteSongUser: favoriteSongId } },
      { new: true }
    );
    
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al agregar la canción favorita' });
  }
});

module.exports = router;

module.exports = router
