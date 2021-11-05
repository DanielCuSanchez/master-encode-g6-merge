const mongoose = require("mongoose")
const { Schema } = mongoose


const incidenteSchema = Schema({
  usuario: {
    type: mongoose.ObjectId,
    ref: "usuarios",
    required: true
  },
  lugar: {
    type: mongoose.ObjectId,
    ref: "lugares",
    required: true
  },
  tipo_incidente: {
    type: mongoose.ObjectId,
    ref: "tipos_incidentes",
    required: true
  }
}, {
  timestamps: true
})


const Incidente = mongoose.model("incidentes", incidenteSchema)

module.exports = { Incidente }