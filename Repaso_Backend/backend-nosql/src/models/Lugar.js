const mongoose = require("mongoose")

const schemaLugar = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})


const Lugar = mongoose.model("lugares", schemaLugar)

module.exports = { Lugar }
