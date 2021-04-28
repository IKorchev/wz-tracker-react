const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userData = new Schema(
  {
    username: { type: String },
    battleRoyale: {
      title: { type: String },
      wins: { type: Number },
      kills: { type: Number },
      deaths: { type: Number },
      downs: { type: Number },
      kdRatio: { type: Number },
      matchesPlayed: { type: Number },
      timePlayed: { type: Number },
    },
    plunder: {
      title: { type: String },
      wins: { type: Number },
      kills: { type: Number },
      deaths: { type: Number },
      downs: { type: Number },
      kdRatio: { type: Number },
      matchesPlayed: { type: Number },
      timePlayed: { type: Number },
    },
  },
  { timestamps: true }
)

class Player {
  constructor(warzone) {
    const br = warzone.lifetime.mode.br.properties
    const pl = warzone.lifetime.mode.br_dmz.properties

    this.username = warzone.username
    this.battleRoyale = {
      title: "Battle Royale",
      wins: br.wins || 0,
      kills: br.kills,
      deaths: br.deaths,
      downs: br.downs,
      kdRatio: br.kdRatio,
      matchesPlayed: br.gamesPlayed,
      timePlayed: br.timePlayed / 3600,
    }
    this.plunder = {
      title: "Plunder",
      wins: pl.wins || 0,
      kills: pl.kills,
      deaths: pl.deaths,
      downs: pl.downs,
      kdRatio: pl.kdRatio,
      matchesPlayed: pl.gamesPlayed,
      timePlayed: pl.timePlayed / 3600,
    }
  }
}
const User = mongoose.model("user", userData)
module.exports = { User, Player }
