const mongoose = require ('mongoose')

const grupoSchema = new mongoose.Schema({
  name: {type: String, required: true},
  song: {type: String, required: true},
  time: String
})

const Band = mongoose.model('Band', grupoSchema)

module.exports = Band