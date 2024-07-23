require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const khGamesRouter = require("./src/api/routes/khGames");
const khPlatformRouter = require("./src/api/routes/khPlatforms");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/v1/khPlatforms", khPlatformRouter);
app.use("/api/v1/khGames", khGamesRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
});

app.listen(3000, () => {
  console.log("Server started on: http://localhost:3000");
});
