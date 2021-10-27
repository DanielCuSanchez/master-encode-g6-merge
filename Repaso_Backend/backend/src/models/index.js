const { DB } = require('../database')

const MainModel = {
  login: () => {

  },
  getAllUsuarios: () => {
    return DB.query('SELECT * FROM usuarios')
  },
  getOneUsuario: (id) => {
    return DB.query('SELECT * FROM usuarios WHERE id = $1', [id])
  },
  updateOneUsuarioPassword: () => {

  }
}

module.exports = { MainModel }
