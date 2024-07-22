const KingdomHeartsGames = require("../models/khGames");

const getKhGames = async (req, res, next) => {
  try {
    const khGames = await KingdomHeartsGames.find();
    return res.status(200).json(khGames);
  } catch (error) {
    return res.status(404).json("Error getting KhGames");
  }
};

module.exports = { getKhGames };
