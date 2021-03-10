const express = require("express");
const router = express.Router();
const STATUS_CODES = require("http").STATUS_CODES;

const adminRoutes = require("./admin.js");
const userRoutes = require("./user.js");
const authRoutes = require("./auth.js");
const homeRoutes = require("./home.js");

router.use(adminRoutes);
router.use(userRoutes);
router.use(authRoutes);
router.use(homeRoutes);

// catch 404 and forward to error handler
router.use("/", (req, res) => {
  res.status(404);
  res.send(`<div>This is not the webpage you are looking for.<div>`);
})

module.exports = router;