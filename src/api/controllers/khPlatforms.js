const KingdomHeartsPlatforms = require("../models/khPlatforms");

const getKhPlatforms = async (req, res, next) => {
  try {
    const khPlatforms = await KingdomHeartsPlatforms.find().populate(
      "KingdomHeartsGames"
    );
    return res.status(200).json(khPlatforms);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Error getting khplatforms");
  }
};

const getKhPlatformsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const platform = await KingdomHeartsPlatforms.findById(id).populate(
      "KingdomHeartsGames"
    );
    return res.status(200).json(platform);
  } catch (error) {
    return res.status(400).json("Error getting khplatform by ID");
  }
};

const postPlatforms = async (req, res, next) => {
  try {
    const newPlatform = new KingdomHeartsPlatforms(req.body);
    const platformSaved = await newPlatform.save();
    return res.status(201).json(platformSaved);
  } catch (error) {
    return res.status(400).json("Error posting KingdomHeartsPlatforms");
  }
};

const updatePlatform = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldPlatform = await KingdomHeartsPlatforms.findById(id);

    const allKhGames = [
      ...new Set([
        ...oldPlatform.KingdomHeartsGames,
        ...req.body.KingdomHeartsGames,
      ]),
    ];

    const newPlatform = new KingdomHeartsPlatforms(req.body);

    newPlatform._id = id;
    newPlatform.KingdomHeartsGames = allKhGames;

    const platformUpdated = await KingdomHeartsPlatforms.findByIdAndUpdate(
      id,
      newPlatform,
      { new: true }
    );
    return res.status(200).json(platformUpdated);
  } catch (error) {
    return res.status(404).json("Error updating platform");
  }
};

const deletePlatform = async (req, res, next) => {
  try {
    const { id } = req.params;
    const platformDeleted = await KingdomHeartsPlatforms.findByIdAndDelete(id);
    return res.status(200).json(platformDeleted);
  } catch (error) {
    return res.status(404).json("Error deleting platform");
  }
};

module.exports = {
  getKhPlatforms,
  getKhPlatformsById,
  postPlatforms,
  updatePlatform,
  deletePlatform,
};
