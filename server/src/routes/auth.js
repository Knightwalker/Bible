const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.js");

router.get("/auth/login", authController.getLoginPage);
router.get("/auth/register", authController.getRegisterPage);

router.post("/auth/login", express.urlencoded({ extended: true }), authController.postLogin);
router.post("/auth/register", express.urlencoded({ extended: true }), authController.postRegister);

router.post("/auth/logout", authController.postLogot);

router.post("/api/v1/auth/register", authController.postRegisterV1);

module.exports = router;