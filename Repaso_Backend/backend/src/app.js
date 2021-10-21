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
app.get("/usuarios/:id", (req, res) => {
  const QUERY = `
  SELECT * FROM usuarios
  WHERE
  id = ${req.params.id}
  `
  DB.query(QUERY)
    .then((response) => {
      res.status(200).json({
        usuarios: response.rows
      })
    })
    .catch(e => {
      console.log(e)
      res.status(500).json({
        err: "err"
      })
    })
})

module.exports = { app, PORT }