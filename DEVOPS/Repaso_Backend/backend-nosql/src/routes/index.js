const express = require("express")
const { controller } = require("../controllers")

const router = express.Router()


// Rutas de usuarios
router.post("/usuarios", controller.postOneUser)
router.get("/usuarios", controller.getAllUsuarios)
router.get("/usuarios/:id", controller.getOneUsuario)
router.put("/usuarios/:id", controller.putOneUsuario)

//Rutas de lugares
router.post("/lugares", controller.postOneLugar)
router.get("/lugares", controller.getAllLugares)

//Rutas de tipos incidentes
router.post("/tipos-incidentes", controller.postOneTipoIncidente)
router.get("/tipos-incidentes", controller.getAllTiposIncidentes)

//Rutas de incidentes
router.post("/incidentes", controller.postOneIncidente)
router.get("/incidentes", controller.getAllIncidentes)
router.get("/incidentes/:id", controller.getOneIncidente)

module.exports = router