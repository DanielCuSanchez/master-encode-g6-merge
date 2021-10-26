
const mainController = {
  login: (req, res) => {
    res.status(200).json({
      msg: 'login 😄'
    })
  },
  getAllUsuarios: (req, res) => {
    res.status(200).json({
      msg: 'usuarios 😄'
    })
  },
  updateOneUsuario: (req, res) => {
    res.status(200).json({
      msg: 'usuarios/:id 😄'
    })
  }
}

module.exports = { mainController }
