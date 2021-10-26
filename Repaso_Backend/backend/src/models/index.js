const { DB } = require('../database')

const MainModel = {
  login: () => {

  },
  getAllUsuarios: () => {
    return DB.query('SELECT * FROM usuarios')
  },
  updateOneUsuario: () => {

  }
}

module.exports = { MainModel }
