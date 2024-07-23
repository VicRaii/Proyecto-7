const { getUsers } = require("../controllers/users");

const usersRouter = require("express").Router();

usersRouter.get("/", getUsers);
