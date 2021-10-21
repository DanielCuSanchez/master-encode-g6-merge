const { app, PORT } = require("./app")


function main() {
  app.listen(PORT, () => {
    console.log(`JURASSIC SERVER PORT ${PORT} 😀`)
  })
}

main()