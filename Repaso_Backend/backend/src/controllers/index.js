const { MainModel } = require('../models')

const mainController = {
  login: (req, res) => {
    res.status(200).json({
      msg: 'login 😄'
    })
  },
  getAllUsuarios: (req, res) => {
    MainModel.getAllUsuarios()
      .then((response) => {
        console.log(response)
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
  updateOneUsuario: (req, res) => {
    res.status(200).json({
      msg: 'usuarios/:id 😄'
    })
  }
}

module.exports = { mainController }
