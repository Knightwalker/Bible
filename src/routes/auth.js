const express = require("express");
const router = express.Router();

const authController = require("../03_controllers/auth.js");

router.get("/auth/login", authController.getLoginPage);
router.get("/auth/register", authController.getRegisterPage);

router.post("/auth/login", authController.postLogin);
router.post("/auth/register", authController.postRegister);

router.post("/auth/logout", authController.postLogot);

module.exports = {
  routes: router,
};