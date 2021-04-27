const { getData } = require("./cod")
const { User, Player } = require("./schema")

const updateUser = async (name, platform) => {
  const warzoneData = await getData(name, platform)
  if (warzoneData != undefined) {
    const player = new Player(warzoneData)
    //prettier-ignore
    return User.updateOne(
      { username: player.username },  player, { upsert: true }, (err, res) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
        }
      }
    )
  }
  return "no data found"
}

module.exports = updateUser
