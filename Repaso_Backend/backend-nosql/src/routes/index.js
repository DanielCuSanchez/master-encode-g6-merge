const express = require("express")
const { controller } = require("../controllers")

const router = express.Router()

router.post("/usuarios", controller.postOneUser)



module.exports = router