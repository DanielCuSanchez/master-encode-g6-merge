const express = require("express")
const morgan = require("morgan")

const { initDatabase } = require("./database")

const app = express()

const PORT = 4001 || process.env.PORT
//Configuramos middleware
app.use(morgan("dev"))
app.use(express.json())

//Conectamos la base de datos
initDatabase()
//Importamos todas las rutas
app.use(require("./routes"))


module.exports = { app, PORT }
