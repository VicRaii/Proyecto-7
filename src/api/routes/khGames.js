const {
  getKhGames,
  getKhGamesById,
  getKhGamesByCategory,
  getKhGamesByScore,
  postkhGames,
  updateKhGames,
  deleteKhGames,
} = require("../controllers/khGames");

const khGamesRouter = require("express").Router();

khGamesRouter.get("/", getKhGames);
khGamesRouter.get("/:id", getKhGamesById);
khGamesRouter.get("/category/:category", getKhGamesByCategory);
khGamesRouter.get("/score/:score", getKhGamesByScore);
khGamesRouter.post("/", postkhGames);
khGamesRouter.put("/:id", updateKhGames);
khGamesRouter.delete("/:id", deleteKhGames);

module.exports = khGamesRouter;
