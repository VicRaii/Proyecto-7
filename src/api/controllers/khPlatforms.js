const khPlatform = require("../models/khPlatforms");

const getKhPlatforms = async (req, res, next) => {
  try {
    const khPlatforms = await khPlatform.find();
    return res.status(200).json(khPlatforms);
  } catch (error) {
    return res.status(400).json("Error getting khplatforms");
  }
};

const getKhPlatformsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const platform = await khPlatform.findById(id);
    return res.status(200).json(platform);
  } catch (error) {
    return res.status(400).json("Error getting khplatform by ID");
  }
};

const postPlatforms = async (req, res, next) => {
  try {
    const newPlatform = new khPlatform(req.body);
    const platformSaved = await newPlatform.save();
    return res.status(201).json(platformSaved);
  } catch (error) {
    return res.status(400).json("Error posting khplatform");
  }
};

//! REVISAR ANTES DE ENTREGAR
const updatePlatform = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldPlatform = await khPlatform.findById(id);

    const newPlatform = new khPlatform(req.body);
    newPlatform._id = id;
    newPlatform.Games = [...oldPlatform.Games, ...req.body.Games];

    const platformUpdated = await khPlatform.findByIdAndUpdate(
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
    const platformDeleted = await khPlatform.findByIdAndDelete(id);
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
