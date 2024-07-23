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
    verified: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
    collection: "Games",
  }
);

const KingdomHeartsGames = mongoose.model(
  "KingdomHeartsGames",
  khGamesSchema,
  "KingdomHeartsGames"
);
module.exports = KingdomHeartsGames;
