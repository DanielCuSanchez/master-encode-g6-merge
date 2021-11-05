
const { Incidente } = require("../models/Incidente")
const { Lugar } = require("../models/Lugar")
const { TipoIncidente } = require("../models/TipoIncidente")
const { Usuario } = require("../models/Usuario")


const controller = {

  //Incidentes

  postOneIncidente: async (req, res) => {
    try {
      const response = await Incidente.create(req.body)
      res.json({
        msg: "POST Incidente",
        data: response
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        msg: "ERROR",
        data: null
      })
    }
  },
  getAllIncidentes: async (req, res) => {
    try {
      const incidentes = await Incidente.find()
      res.json({
        msg: "GET ALL Incidentes",
        data: incidentes
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        msg: "ERROR",
        data: null
      })
    }
  },
  getOneIncidente: async (req, res) => {
    try {
      const incidente = await Incidente.findById(req.params.id)
      res.json({
        msg: "GET ONE Incidente",
        data: incidente
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        msg: "ERROR",
        data: null
      })
    }
  },


  //Lugares
  postOneLugar: async (req, res) => {
    try {
      const response = await Lugar.create(req.body)
      res.json({
        msg: "POST Lugar",
        data: response
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        msg: "ERROR",
        data: null
      })
    }
  },
  getAllLugares: async (req, res) => {
    try {
      const lugares = await Lugar.find()
      res.json({
        msg: "GET ALL Lugares",
        data: lugares
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        msg: "ERROR",
        data: null
      })
    }
  },
  //Tipos de Incidentes
  postOneTipoIncidente: async (req, res) => {
    try {
      const response = await TipoIncidente.create(req.body)
      res.json({
        msg: "POST TipoIncidente",
        data: response
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        msg: "ERROR",
        data: null
      })
    }
  },


  getAllTiposIncidentes: async (req, res) => {
    try {
      const tiposDeIncidentes = await TipoIncidente.find()
      res.json({
        msg: "GET ALL Lugares",
        data: tiposDeIncidentes
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        msg: "ERROR",
        data: null
      })
    }
  },

  //Usuarios
  postOneUser: async (req, res) => {
    try {
      const response = await Usuario.create(req.body)
      res.json({
        msg: "Post user",
        data: response
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        msg: "ERROR",
        data: null
      })
    }
  },
  getAllUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.find()
      res.json({
        msg: "GET ALL Usuarios",
        data: usuarios
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        msg: "ERROR",
        data: null
      })
    }
  },
  getOneUsuario: async (req, res) => {
    try {
      const usuario = await Usuario.findById(req.params.id)
      res.json({
        msg: "GET ONE Usuario",
        data: usuario
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        msg: "ERROR",
        data: null
      })
    }
  },
  putOneUsuario: async (req, res) => {
    try {
      const response = await Usuario.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true
        }
      )
      res.json({
        msg: "PUT ONE Usuario",
        data: response
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        msg: "ERROR",
        data: null
      })
    }
  }
}

module.exports = { controller }