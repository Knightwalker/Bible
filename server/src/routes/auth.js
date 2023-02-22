const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.js");
const authAPI = require("../modules/auth/authController");

router.get("/auth/login", authController.getLoginPage);
router.get("/auth/register", authController.getRegisterPage);

router.post("/auth/login", express.urlencoded({ extended: true }), authController.postLogin);
router.post("/auth/register", express.urlencoded({ extended: true }), authController.postRegister);

router.post("/auth/logout", authController.postLogot);

router.post("/api/v1/auth/register", authAPI.postRegister);

module.exports = router;