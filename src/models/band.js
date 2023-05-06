const mongoose = require ('mongoose')

const grupoSchema = new mongoose.Schema({
  nombre: String,
  cancion: String,
  duracion: String
})

const Band = mongoose.model('Band', grupoSchema)

module.exports = Band