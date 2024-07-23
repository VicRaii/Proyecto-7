const {
  getKhPlatforms,
  getKhPlatformsById,
  postPlatforms,
  updatePlatform,
  deletePlatform,
} = require("../controllers/khPlatforms");

const khPlatformRouter = require("express").Router();

khPlatformRouter.get("/", getKhPlatforms);
khPlatformRouter.get("/:id", getKhPlatformsById);
khPlatformRouter.post("/", postPlatforms);
khPlatformRouter.put("/:id", updatePlatform);
khPlatformRouter.delete("/:id", deletePlatform);

module.exports = khPlatformRouter;
