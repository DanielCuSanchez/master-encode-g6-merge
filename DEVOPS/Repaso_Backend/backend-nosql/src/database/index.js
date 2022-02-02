const mongoose = require('mongoose');
require('dotenv').config()


const initDatabase = () => {
  main().catch(err => console.log(err));
  async function main() {
    await mongoose.connect(process.env.URL_MONGO);
    console.log("Database connected")
  }
}

module.exports = { initDatabase }






