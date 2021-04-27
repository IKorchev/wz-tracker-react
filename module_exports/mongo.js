require("dotenv").config()
const mongoose = require("mongoose")
const mongoURI = `mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASSWORD}@cluster0.wf0u5.mongodb.net/userDatabase?retryWrites=true&w=majority`
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function () {
  console.log("connected")
})

module.exports = db
