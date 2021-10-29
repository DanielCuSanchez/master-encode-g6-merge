const { MainModel } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const mainController = {
  login: (req, res) => {
    const { password, email } = req.body
    // Realizamos la consulta a la DB por el campo email
    MainModel.getOneUsuarioByEmail(email)
      .then((response) => {
        // Comparamos el registro de la base datos si es que existe
        if (!(response.rowCount === 1)) {
          res.status(404).json({
            msg: 'email no encontrado'
          })
          return
        }
        // Esta funcion compara el texto plano y el hash
        const match = bcrypt.compareSync(
          password,
          response.rows[0].password
        )
        // Si no es un match correcto entre hash y texto plano damos retro al cliente
        if (!match) {
          res.status(500).json({
            msg: 'Credenciales invalidas'
          })
          return
        }

        // Continuamos con el resto del login

        // Crearemos token

        const token = jwt.sign(
          { MIPAYLOAD: response.rows[0].id },
          'mi_secreto',
          { expiresIn: '30s' }
        )
        res.status(200).json({
          msg: token
        })
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({
          msg: 'error'
        })
      })
  },
  getAllUsuarios: (req, res) => {
    MainModel.getAllUsuarios()
      .then((response) => {
        res.status(200).json({
          msg: response.rows,
          total: response.rowCount
        })
      })
      .catch((err) => {
        console.log(err)
        res.status(200).json({
          msg: 'ERR usuarios 😄'
        })
      })
  },
  getOneUsuario: (req, res) => {
    const { id } = req.params
    MainModel.getOneUsuario(id)
      .then((response) => {
        res.status(200).json({
          msg: response.rows[0],
          count: response.rowCount
        })
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({
          msg: 'error'
        })
      })
  },
  updateOneUsuarioPassword: (req, res) => {
    const { id } = req.params
    // Texto plano
    const { password } = req.body
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)

    MainModel.updateOneUsuarioPassword(id, hash)
      .then((response) => {
        res.status(201).json({
          msg: 'Updated',
          count: response.rowCount
        })
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({
          msg: 'error'
        })
      })
  },
  getAllLugares: (req, res) => {
    MainModel.getAllLugares()
      .then((response) => {
        res.status(201).json({
          msg: response.rows,
          count: response.rowCount
        })
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({
          msg: 'error'
        })
      })
  },
  getAllTiposIncidentes: (req, res) => {
    MainModel.getAllTiposIncidentes()
      .then((response) => {
        res.status(201).json({
          msg: response.rows,
          count: response.rowCount
        })
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({
          msg: 'error'
        })
      })
  },
  postOneIncidente: (req, res) => {
    MainModel.postOneIncidente(req.body)
      .then((response) => {
        res.status(201).json({
          msg: response.rows,
          count: response.rowCount
        })
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({
          msg: 'error'
        })
      })
  },
  getAllIncidentes: (req, res) => {
    MainModel.getAllIncidentes()
      .then((response) => {
        res.status(201).json({
          msg: response.rows,
          count: response.rowCount
        })
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({
          msg: 'error'
        })
      })
  },
  getOneIncidente: (req, res) => {
    MainModel.getOneIncidente(req.params.id)
      .then((response) => {
        res.status(201).json({
          msg: response.rows[0],
          count: response.rowCount
        })
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({
          msg: 'error'
        })
      })
  }
}

module.exports = { mainController }
