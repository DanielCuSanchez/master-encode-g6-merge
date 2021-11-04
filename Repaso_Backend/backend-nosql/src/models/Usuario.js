const mongoose = require("mongoose")

const usuarioSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
})
//Creamos el modelo con el schema
const Usuario = mongoose.model("Usuario", usuarioSchema)
//Exportamos el modelo
module.exports = { Usuario }