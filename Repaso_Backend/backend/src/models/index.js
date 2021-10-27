const { DB } = require('../database')

const MainModel = {
  login: () => {

  },
  getAllUsuarios: () => {
    return DB.query('SELECT * FROM usuarios')
  },
  getOneUsuarioByEmail: (email) => {
    return DB.query('SELECT * FROM usuarios WHERE email = $1', [email])
  },
  getOneUsuario: (id) => {
    return DB.query('SELECT * FROM usuarios WHERE id = $1', [id])
  },
  updateOneUsuarioPassword: (id, hash) => {
    const UPDATE = `
    UPDATE usuarios
    SET password = $2
    WHERE
    id = $1
    `
    return DB.query(UPDATE, [id, hash])
  }
}

module.exports = { MainModel }
