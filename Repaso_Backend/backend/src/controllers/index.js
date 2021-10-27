const { MainModel } = require('../models')
const bcrypt = require('bcrypt')

const mainController = {
  login: (req, res) => {
    res.status(200).json({
      msg: 'login 😄'
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
    // Texto plano
    const { password } = req.body
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)

    res.status(200).json({
      msg: hash
    })
  }
}

module.exports = { mainController }
