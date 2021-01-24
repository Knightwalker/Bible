const express = require("express");
const router = express.Router();

const userController = require("../03_controllers/user")

router.get("/", userController.getHomePage);
router.get("/path/js_web", userController.getPageJsWeb)
router.get("/path/cpp_games", userController.getPageCppWeb)

module.exports = {
  routes: router,
};