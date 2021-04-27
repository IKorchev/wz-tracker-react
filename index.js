require("dotenv").config()
const { urlencoded } = require("body-parser")
const express = require("express")
const { getData } = require("./module_exports/cod")
const { getLeaderboards } = require("./module_exports/cod")
const app = express()
const PORT = 5500
const db = require("./module_exports/mongo")
const API = require("call-of-duty-api")()
const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD
const { User, Player } = require("./module_exports/schema")
const updateUser = require("./module_exports/updateUser")

// Log-in to be able to use all COD API features
;(async () => {
  try {
    await API.login(EMAIL, PASSWORD)
    console.log(API.isLoggedIn())
    await getLeaderboards()
  } catch (err) {
    throw err
  }
})()
// MIDDLEWARE
app.use(express.json())
app.use(urlencoded({ extended: false }))
// HTTP

const playerInfo = {}

app.post("/search", async (req, res) => {
  playerInfo.name = req.body.name
  playerInfo.platform = req.body.platform
  console.log(req.body)
  try {
    const warzoneData = await getData(req.body.name, req.body.platform)
    const player = new Player(warzoneData)
    console.log(player)
    // check if player is in the database
    User.findOne({ username: player.username }, (err, db_data) => {
      if (db_data) {
        res.json({ db_data }) // send both data from db and cod api
      } else {
        res.json({ player }) // send only cod-api if there is no data in db
        updateUser(req.body.name, req.body.platform) // add data to db
      }
    })
  } catch (err) {
    res.sendStatus(500)
    throw err
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
