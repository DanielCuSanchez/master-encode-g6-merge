const mongoose = require("mongoose")
const { Schema } = mongoose

const incidenteSchema = Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuarios",
    required: true
  },
  lugar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "lugares",
    required: true
  },
  tipo_incidente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tipos_incidentes",
    required: true
  }
}, {
  timestamps: true
})

const Incidente = mongoose.model("incidentes", incidenteSchema)

module.exports = { Incidente }