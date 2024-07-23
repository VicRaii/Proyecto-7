require("dotenv").config();
const mongoose = require("mongoose");
const KingdomHeartsGames = require("../../api/models/khGames");
const khGames = require("../../api/data/khGames");

const launchSeed = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");

    await KingdomHeartsGames.collection.drop();
    console.log("Champions collection dropped");

    await KingdomHeartsGames.insertMany(khGames);
    console.log("Champions inserted successfully");

    await mongoose.disconnect();
    console.log("Disconnected from database");
  } catch (error) {
    console.error("Error:", error);
  }
};

launchSeed();
