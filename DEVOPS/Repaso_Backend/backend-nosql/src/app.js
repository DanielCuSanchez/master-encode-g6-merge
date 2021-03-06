const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const { initDatabase } = require("./database")

const app = express()

const PORT = 4001 || process.env.PORT

app.disable('etag')
//Configuramos middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

//Conectamos la base de datos
initDatabase()
//Importamos todas las rutas
app.use(require("./routes"))


module.exports = { app, PORT }
