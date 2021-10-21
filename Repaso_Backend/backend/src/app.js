const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const { DB } = require("./database")
const app = express()
//Server port
const PORT = process.env.PORT || 4000
//Middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
//Endpoint
app.get("/usuarios", (req, res) => {
  DB.query("SELECT role FROM usuarios;")
    .then((response) => {
      res.status(200).json({
        usuarios: response.rows
      })
    })
    .catch(e => console.log(e))
})

module.exports = { app, PORT }