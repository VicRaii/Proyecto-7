const { getKhGames } = require("../controllers/khGames");

const khGamesRouter = require("express").Router();

khGamesRouter.get("/", getKhGames);

module.exports = khGamesRouter;
