const express = require("express");
const routes = express.Router();
const mainController= require("./controllers/main.controller")
const userController = require("./controllers/user.controller")

routes.get("/new/character", mainController.main);
routes.get("/profile", userController.main);

module.exports = routes;
