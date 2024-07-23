const KingdomHeartsGames = require("../models/khGames");

const getKhGames = async (req, res, next) => {
  try {
    const khGames = await KingdomHeartsGames.find();
    return res.status(200).json(khGames);
  } catch (error) {
    return res.status(404).json("Error getting KhGames");
  }
};

const getKhGamesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const khgame = await KingdomHeartsGames.findById(id);
    return res.status(200).json(khgame);
  } catch (error) {
    return res.status(404).json("Error getting KhGames by ID");
  }
};

const getKhGamesByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const khgames = await KingdomHeartsGames.find({ category });
    return res.status(200).json(khgames);
  } catch (error) {
    return res.status(404).json("Error getting KhGames by category");
  }
};

const getKhGamesByScore = async (req, res, next) => {
  try {
    const { score } = req.params;
    const khgames = await KingdomHeartsGames.find({ score: { $gte: score } });
    return res.status(200).json(khgames);
  } catch (error) {
    return res.status(404).json("Error getting KhGames by score");
  }
};

const postkhGames = async (req, res, next) => {
  try {
    const newkhGame = new KingdomHeartsGames(req.body);

    const khGameSaved = await newkhGame.save();
    return res.status(201).json(khGameSaved);
  } catch (error) {
    return res.status(404).json("Error posting KhGames");
  }
};

const updateKhGames = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newkhGame = new KingdomHeartsGames(req.body);
    newkhGame._id = id;
    const khGameUpdated = await KingdomHeartsGames.findByIdAndUpdate(
      id,
      newkhGame,
      {
        new: true,
      }
    );
    return res.status(200).json(khGameUpdated);
  } catch (error) {
    return res.status(404).json("Error updating KhGames");
  }
};

const deleteKhGames = async (req, res, next) => {
  try {
    const { id } = req.params;
    const khGameDeleted = await KingdomHeartsGames.findByIdAndDelete(id);
    return res.status(200).json(khGameDeleted);
  } catch (error) {
    return res.status(404).json("Error deleting KhGame");
  }
};

module.exports = {
  getKhGames,
  getKhGamesById,
  getKhGamesByCategory,
  getKhGamesByScore,
  postkhGames,
  updateKhGames,
  deleteKhGames,
};
