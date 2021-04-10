require("dotenv").config()
const { urlencoded } = require("body-parser")
const express = require("express")
const { getData } = require("./module_exports/cod")
const app = express()
const PORT = 5500
const API = require("call-of-duty-api")()
const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD
const db = require("./module_exports/mongo")
const Player = require("./module_exports/Player")
const User = require("./module_exports/schema")

;(async () => {
  try {
    await API.login(EMAIL, PASSWORD)
    console.log(API.isLoggedIn())
  } catch (err) {
    throw err
  }
})()

app.use(express.json())
app.use(urlencoded({ extended: false }))

app.post("/search", async (req, res) => {
  console.log(req.body)
  try {
    const data = await getData(req.body.name, req.body.platform)
    const player = new Player(data)
    // check if player is in the database
    User.findOne({ username: player.username }, (err, db_data) => {
      if (db_data) {
        res.json({ callOfDutyData: data, databaseData: db_data }) // send both data from db and cod api
      } else {
        res.json({ callOfDutyData: data, databaseData: null }) // send only cod-api if there is no data in db
        updateUser(req.body.name, req.body.platform) // add data to db
      }
    })
  } catch (err) {
    res.send(undefined)
    throw err
  }
})

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
