const mongoose = require("mongoose");

const khPlatformSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    KingdomHeartsGames: [
      {
        type: mongoose.Types.ObjectId,
        ref: "KingdomHeartsGames",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
    collection: "KingdomHeartsPlatforms",
  }
);

const KingdomHeartsPlatforms = mongoose.model(
  "KingdomHeartsPlatforms",
  khPlatformSchema,
  "KingdomHeartsPlatforms"
);

module.exports = KingdomHeartsPlatforms;
