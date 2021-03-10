const express = require("express");
const router = express.Router();

const adminRoutes = require("./admin.js");
const userRoutes = require("./user.js");
const authRoutes = require("./auth.js");
const homeRoutes = require("./home.js");

router.use(adminRoutes.routes);
router.use(userRoutes.routes);
router.use(authRoutes.routes);
router.use(homeRoutes.routes);

module.exports = router;