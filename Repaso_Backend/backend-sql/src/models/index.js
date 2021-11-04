
const { DB } = require('../database')

const MainModel = {
  getAllUsuarios: () => {
    return DB.query('SELECT * FROM usuarios', [])
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
  },
  getAllLugares: () => {
    const QUERY = `
    SELECT * FROM lugares;
    `
    return DB.query(QUERY, [])
  },
  getAllTiposIncidentes: () => {
    const QUERY = `
    SELECT * FROM tipos_incidentes;
    `
    return DB.query(QUERY, [])
  },
  postOneIncidente: (incidente) => {
    const INSERTION = `
    INSERT INTO incidentes (id_usuario,id_lugar,id_tipo_incidente)
    VALUES
    ($1, $2, $3)
    `
    return DB.query(INSERTION,
      [incidente.id_usuario, incidente.id_lugar, incidente.id_tipo_incidente]
    )
  },
  getAllIncidentes: () => {
    const QUERY = `
    SELECT
    I.id,
    U.role as usuario,
    L.nombre as lugar,
    TI.nombre as tipo_incidente
    FROM incidentes I, usuarios U, lugares L, tipos_incidentes TI
    WHERE
    I.id_usuario = U.id
    AND
    I.id_lugar = L.id
    AND
    I.id_tipo_incidente = TI.id
    `
    return DB.query(QUERY, [])
  },
  getOneIncidente: (id) => {
    const QUERY = `
    SELECT
    I.id,
    U.role as usuario,
    L.nombre as lugar,
    TI.nombre as tipo_incidente
    from incidentes I, usuarios U, lugares L, tipos_incidentes TI
    WHERE
    I.id = $1
    AND
    I.id_usuario = U.id
    AND
    I.id_lugar = L.id
    AND
    I.id_tipo_incidente = TI.id
    `
    return DB.query(QUERY, [id])
  }
}

module.exports = { MainModel }
