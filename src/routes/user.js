const express = require("express");
const router = express.Router();

const userController = require("../controllers/user")

router.get("/path/js_web", userController.getPageJsWeb)

module.exports = {
  routes: router,
};