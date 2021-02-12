const express = require("express");
const router = express.Router();

const authController = require("../03_controllers/auth.js");

router.get("/auth/login", authController.getLoginPage);
router.get("/auth/register", authController.getRegisterPage);

router.post("/auth/login", express.urlencoded({ extended: true }), authController.postLogin);
router.post("/auth/register", express.urlencoded({ extended: true }), authController.postRegister);

router.post("/auth/logout", authController.postLogot);

module.exports = {
  routes: router,
};