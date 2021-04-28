require("dotenv").config()
const db = require("./module_exports/mongo") // connect to db
const API = require("call-of-duty-api")() // COD API wrapper
const { urlencoded } = require("body-parser")
const express = require("express")
const { getData } = require("./module_exports/cod")
const app = express()
const PORT = process.env.PORT || 5500
const { User, Player } = require("./module_exports/schema")
const updateUser = require("./module_exports/updateUser")
const playerInfo = {}

// Log-in to be able to use all COD API features
;(async () => {
  try {
    await API.login(process.env.EMAIL, process.env.PASSWORD)
    console.log(API.isLoggedIn())
  } catch (err) {
    throw err
  }
})()
// MIDDLEWARE
app.use(express.json())
app.use(urlencoded({ extended: false }))

// ROUTES
app.post("/search", async (req, res) => {
  playerInfo.name = req.body.name
  playerInfo.platform = req.body.platform
  console.log(req.body)
  let player_db
  let player_cod
  try {
    const warzoneData = await getData(req.body.name, req.body.platform)
    player_cod = new Player(warzoneData)
    // check if player is in the database
    User.findOne({ username: player_cod.username }, (err, db_data) => {
      if (!db_data) {
        res.json([player_cod, player_cod])
      }
      player_db = db_data
      res.json([player_db, player_cod])
    })
  } catch (err) {
    res.sendStatus(500)
    console.log("there was an error")
  }
})

app.post("/update", async (req, res) => {
  try {
    await updateUser(playerInfo.name, playerInfo.platform)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
