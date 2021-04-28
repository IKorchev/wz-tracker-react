const { getData } = require("./cod")
const { User, Player } = require("./schema")

const updateUser = async (name, platform) => {
  const warzoneData = await getData(name, platform)
  if (warzoneData != undefined) {
    const player = new Player(warzoneData)
    //prettier-ignore
    return User.updateOne(
      { username: player.username },  player, { upsert: true }, (err, res) => {
       err ? console.log(err) : console.log('Player updated')
      }
    )
  }
  return "no data found"
}

module.exports = updateUser
