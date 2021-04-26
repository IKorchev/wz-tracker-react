const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userData = new Schema(
  {
    warzoneData: {
      username: { type: String },
      wins: { type: Number },
      kills: { type: Number },
      deaths: { type: Number },
      assists: { type: Number },
      kdRatio: { type: Number },
      matchesPlayed: { type: Number },
      timePlayed: { type: Number },
    },
    coldwarData: {
      username: { type: String },
      wins: { type: Number },
      kills: { type: Number },
      deaths: { type: Number },
      assists: { type: Number },
      kdRatio: { type: Number },
      matchesPlayed: { type: Number },
      timePlayed: { type: Number },
    },
    modernWarfareData: {
      username: { type: String },
      wins: { type: Number },
      kills: { type: Number },
      deaths: { type: Number },
      assists: { type: Number },
      kdRatio: { type: Number },
      matchesPlayed: { type: Number },
      timePlayed: { type: Number },
    },
  },
  { timestamps: true }
)

class Player {
  constructor(warzone, coldwar) {
    const cw = coldwar.lifetime.all.properties
    this.data = {
      battleRoyale: {
        username: warzone.br.username,
        wins: warzone.br.wins || 0,
        kills: warzone.br.kills,
        deaths: warzone.br.deaths,
        downs: warzone.br.downs,
        kdRatio: warzone.br.kdRatio,
        matchesPlayed: warzone.br.gamesPlayed,
        timePlayed: warzone.br.timePlayedTotal / 60,
      },
      plunder: {
        username: warzone.br_dmz.username,
        wins: warzone.br_dmz.wins || 0,
        kills: warzone.br_dmz.kills,
        deaths: warzone.br_dmz.deaths,
        downs: warzone.br_dmz.downs,
        kdRatio: warzone.br_dmz.kdRatio,
        matchesPlayed: warzone.br_dmz.gamesPlayed,
        timePlayed: warzone.br_dmz.timePlayedTotal / 60,
      },
      coldwarData: {
        username: coldwar.username,
        wins: cw.wins || 0,
        kills: cw.kills,
        deaths: cw.deaths,
        assists: cw.assists,
        kdRatio: cw.kdratio,
        matchesPlayed: cw.gamesPlayed,
        timePlayed: cw.timePlayedTotal / 60,
      },
    }
  }
}
const User = mongoose.model("user", userData)
module.exports = { User, Player }
