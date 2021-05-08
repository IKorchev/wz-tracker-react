require("dotenv").config()
require("./module_exports/mongo") // connect to db
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
  try {
    playerInfo.name = req.body.name
    playerInfo.platform = req.body.platform
    console.log(req.body)
    const warzoneData = await getData(req.body.name, req.body.platform)
    const player_cod = new Player(warzoneData)
    // check if player is in the database
    User.findOne({ username: player_cod.username }, (err, db_data) => {
      if (db_data) return res.json([db_data, player_cod])
      if (!db_data) {
        updateUser(playerInfo.name, playerInfo.platform)
        return res.json([player_cod, player_cod])
      }
    })
  } catch (err) {
    console.log("Couldnt find player")
    res.sendStatus(404)
  }
})

app.post("/update", async (req, res) => {
  const data = await getData(playerInfo.name, playerInfo.platform)
  const player = new Player(data)
  User.updateOne({ username: player.username }, player, { upsert: true }, (err, data) => {
    err ? res.sendStatus(500) : res.sendStatus(200)
  })
})

app.delete("/delete", async (req, res) => {
  User.deleteOne({ username: playerInfo.name }, {}, (err, data) => {
    if (data.deletedCount === 1) res.sendStatus(202)
    else res.sendStatus(204)
  })
})

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
