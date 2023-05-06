const { Router } = require ('express')

const Band = require ('./../models/band.js')

const router = Router()

router.get('/', async (req, res) => {
  const Bands = await Band.find({}).limit(30).exec()
  console.log(Bands);
  res.json(Bands)
})

module.exports = router