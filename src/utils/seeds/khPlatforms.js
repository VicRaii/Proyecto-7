require("dotenv").config();
const mongoose = require("mongoose");
const khPlatform = require("../../api/models/khPlatforms");
const khPlatforms = require("../../api/data/khPlatforms");

const launchSeed = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");

    await khPlatform.collection.drop();
    console.log("Platforms dropped");

    await khPlatform.insertMany(khPlatforms);
    console.log("Platforms added");

    await mongoose.disconnect();
    console.log("Disconnected from Database");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

launchSeed();
