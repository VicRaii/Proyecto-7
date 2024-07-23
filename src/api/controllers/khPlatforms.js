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

const mongoose = require("mongoose");

const updatePlatform = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Verificar si el ID proporcionado es válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    // Intentar encontrar la plataforma antigua
    const oldPlatform = await khPlatform.findById(id);
    if (!oldPlatform) {
      return res.status(404).json({ message: "Platform not found" });
    }

    // Verificar que req.body.games sea un array
    if (!Array.isArray(req.body)) {
      return res
        .status(400)
        .json({ message: "'games' field must be an array" });
    }

    // Combinar juegos antiguos y nuevos, eliminando duplicados
    const allGames = [...new Set([...oldPlatform.games, ...req.body.games])];

    // Crear un objeto con los datos actualizados
    const updateData = { ...req.body, games: allGames };

    // Actualizar la plataforma en la base de datos
    const platformUpdated = await khPlatform.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!platformUpdated) {
      return res.status(404).json({ message: "Failed to update platform" });
    }

    return res.status(200).json(platformUpdated);
  } catch (error) {
    // Log del error para depuración
    console.error("Error updating platform:", error);

    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation Error", details: error.errors });
    }

    if (error.name === "MongoError" && error.code === 11000) {
      return res
        .status(409)
        .json({ message: "Duplicate key error", details: error.keyValue });
    }

    return res.status(500).json({ message: "Internal Server Error", error });
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
