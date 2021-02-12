const express = require("express");
const router = express.Router();

const userController = require("../03_controllers/user")

router.get("/path/js_web", userController.placeholder);

module.exports = {
  routes: router,
};