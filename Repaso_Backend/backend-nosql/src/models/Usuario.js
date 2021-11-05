const mongoose = require("mongoose")

const usuarioSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  email: {
    type: String,
    unique: true
  }
}, {
  timestamps: true
})
//Creamos el modelo con el schema
const Usuario = mongoose.model("usuarios", usuarioSchema)
//Exportamos el modelo
module.exports = { Usuario }