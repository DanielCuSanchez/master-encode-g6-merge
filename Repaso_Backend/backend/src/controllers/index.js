const { MainModel } = require('../models')
const bcrypt = require('bcrypt')

const mainController = {
  login: (req, res) => {
    const { password, email } = req.body
    MainModel.getOneUsuarioByEmail(email)
      .then((response) => {
        if (!(response.rowCount === 1)) {
          res.status(404).json({
            msg: 'email no encontrado'
          })
          return
        }
        const match = bcrypt.compareSync(password, response.rows[0].password)

        if (!match) {
          res.status(500).json({
            msg: 'Credenciales invalidas'
          })
          return
        }

        res.status(200).json({
          msg: 'Login Exitoso'
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
  }
}

module.exports = { mainController }
