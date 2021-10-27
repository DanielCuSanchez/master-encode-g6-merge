const express = require('express')

const { mainController } = require('../controllers')

const router = express.Router()

// Autorización
router.post('/login', mainController.login)
// Usuarios
router.get('/usuarios', mainController.getAllUsuarios)
router.get('/usuarios/:id', mainController.getOneUsuario)
router.put('/usuarios/:id', mainController.updateOneUsuarioPassword)

module.exports = { router }
