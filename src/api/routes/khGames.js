const { isAdmin, isAuth } = require("../../middlewares/auth");
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

khGamesRouter.get("/", [isAdmin], getKhGames);
khGamesRouter.get("/:id", getKhGamesById);
khGamesRouter.get("/category/:category", getKhGamesByCategory);
khGamesRouter.get("/score/:score", getKhGamesByScore);
khGamesRouter.post("/", [isAuth], postkhGames);
khGamesRouter.put("/:id", [isAdmin], updateKhGames);
khGamesRouter.delete("/:id", [isAdmin], deleteKhGames);

module.exports = khGamesRouter;
