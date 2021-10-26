const express = require('express')

const router = express.Router()

// Autorización
router.post('/login', (req, res) => {
  res.status(200).json({ msg: 'Login' })
})
// Usuarios
router.get('/usuarios', (req, res) => {
  res.status(200).json({ msg: 'usuarios' })
})
router.put('/usuarios/:id', (req, res) => {
  res.status(200).json({ msg: 'usuarios/:id' })
})

module.exports = { router }
