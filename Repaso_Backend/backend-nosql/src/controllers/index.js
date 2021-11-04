
const { Usuario } = require("../models/Usuario")


const controller = {
  postOneUser: async (req, res) => {
    console.log(req.body)
    const response = await Usuario.create(req.body)

    console.log(response)

    res.json({
      msg: "Post user"
    })
  }
}

module.exports = { controller }