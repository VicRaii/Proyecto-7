const { isAdmin } = require("../../middlewares/auth");
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
khPlatformRouter.post("/", [isAdmin], postPlatforms);
khPlatformRouter.put("/:id", [isAdmin], updatePlatform);
khPlatformRouter.delete("/:id", [isAdmin], deletePlatform);

module.exports = khPlatformRouter;
