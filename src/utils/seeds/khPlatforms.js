require("dotenv").config();
const mongoose = require("mongoose");
const khPlatforms = require("../../api/data/khPlatforms");
const KingdomHeartsPlatforms = require("../../api/models/khPlatforms");

const launchSeed = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");

    await KingdomHeartsPlatforms.collection.drop();
    console.log("Platforms dropped");

    await KingdomHeartsPlatforms.insertMany(khPlatforms);
    console.log("Platforms added");

    await mongoose.disconnect();
    console.log("Disconnected from Database");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

launchSeed();
