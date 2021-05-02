const { getData } = require("./cod")
const { Player, User } = require("./schema")

const updateUser = async (name, platform) => {
  const data = await getData(name, platform)
  const player = new Player(data)
  return User.updateOne(
    { username: player.username },
    player,
    { upsert: true },
    (err, data) => {
      err ? console.log("user not added") : console.log("user added")
    }
  )
}

module.exports = updateUser
