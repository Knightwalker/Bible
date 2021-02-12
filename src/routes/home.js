const express = require("express");
const router = express.Router();

const homeController = require("../03_controllers/home.js");

router.get("/", homeController.getHomePage);

module.exports = {
  routes: router,
};