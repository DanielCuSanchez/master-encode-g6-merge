const mongoose = require("mongoose")

const schemaTipoIncidente = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})


const TipoIncidente = mongoose.model("tipos_incidentes", schemaTipoIncidente)

module.exports = { TipoIncidente }
