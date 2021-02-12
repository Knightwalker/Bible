const express = require("express");
const router = express.Router();

const homeController = require("../03_controllers/home.js");

router.get("/", homeController.getHomePage);
router.get("/home", homeController.getHomePage);
router.get("/home/js_web", homeController.getPageJsWeb)
router.get("/home/cpp_games", homeController.getPageCppWeb)

module.exports = {
  routes: router,
};