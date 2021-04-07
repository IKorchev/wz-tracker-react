require("dotenv").config()
const { urlencoded } = require("body-parser")
const express = require("express")
const app = express()
const PORT = 5500
const API = require("call-of-duty-api")()
const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD

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
    const data = await API.MWwz(req.body.name, req.body.platform)
    console.log(data)
    res.json(data)
    console.log("something searched")
  } catch (err) {
    throw err
  }
})

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
