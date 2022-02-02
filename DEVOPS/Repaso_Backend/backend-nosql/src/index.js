const { app, PORT } = require("./app")

function main() {
  app.listen(PORT, () => {
    console.log("SERVIDOR CORRIENDO....")
  })
}

main()