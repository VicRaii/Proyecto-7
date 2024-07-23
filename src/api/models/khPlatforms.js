const mongoose = require("mongoose");

const khPlatformSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    Games: [{ type: mongoose.Types.ObjectId, ref: "Games", required: false }],
  },
  {
    timestamps: true,
    collection: "khPlatform",
  }
);

const khPlatform = mongoose.model("khPlatform", khPlatformSchema, "khPlatform");

module.exports = khPlatform;
