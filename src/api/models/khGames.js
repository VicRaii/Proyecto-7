const mongoose = require("mongoose");

const khGamesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    score: { type: Number, type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String },
    category: {
      type: [String],
      required: true,
      enum: ["Action-RPG", "JRPG", "Rol", "Musical", "Virtual-Reality"],
    },
  },
  {
    timestamps: true,
    collection: "KingdomHeartsGames",
  }
);

const KingdomHeartsGames = mongoose.model(
  "KingdomHeartsGames",
  khGamesSchema,
  "KingdomHeartsGames"
);
module.exports = KingdomHeartsGames;
