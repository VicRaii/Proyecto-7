const mongoose = require("mongoose");

const khPlatformSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    games: [{ type: mongoose.Types.ObjectId, ref: "khGames", required: false }],
  },
  {
    timestamps: true,
    collection: "khPlatform",
  }
);

const khPlatform = mongoose.model("khPlatform", khPlatformSchema, "khPlatform");

module.exports = khPlatform;
