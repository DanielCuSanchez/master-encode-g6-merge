const express = require('express')

const { mainController } = require('../controllers')

const router = express.Router()

// Autorización
router.post('/login', mainController.login)
// Usuarios
router.get('/usuarios', mainController.getAllUsuarios)
router.get('/usuarios/:id', mainController.getOneUsuario)
router.put('/usuarios/:id', mainController.updateOneUsuarioPassword)
// Lugares
router.get('/lugares', mainController.getAllLugares)
// Tipos de incidentes
router.get('/tipos-incidentes', mainController.getAllTiposIncidentes)
// Incidentes
router.post('/incidentes', mainController.postOneIncidente)
router.get('/incidentes', mainController.getAllIncidentes)
router.get('/incidentes/:id', mainController.getOneIncidente)

module.exports = { router }
