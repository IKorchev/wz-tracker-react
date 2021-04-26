const { getData } = require("./cod")
const {User, Player} = require("./schema")

const updateUser = async (name, platform) => {
  const {warzone, coldwar} = await getData(name, platform)
  if (warzone != undefined) {
    
    const player = new Player(warzone, coldwar)
    //prettier-ignore
    return User.updateOne(
      { username: player.username },  player, { upsert: true }, (err, res) => {
        if (err) {
          console.log("Couldn't update player")
        } else {
          console.log("Player updated")
        }
      }
    )
  }
  return "no data found"
}

module.exports = updateUser
