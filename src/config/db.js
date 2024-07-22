const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error connecting to Database");
  }
};

module.exports = { connectDB };
