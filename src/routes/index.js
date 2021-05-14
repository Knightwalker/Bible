const express = require("express");
const router = express.Router();
const STATUS_CODES = require("http").STATUS_CODES;

const generalRoutes = require("./general.js");
const adminRoutes = require("./admin.js");
const authRoutes = require("./auth.js");
const errorRoutes = require("./error.js");

router.use(adminRoutes);
router.use(authRoutes);
router.use(generalRoutes);
router.use(errorRoutes);

// catch 404 and forward to error handler
router.use("/", (req, res) => {
  res.status(404);
  res.send(`<div>This is not the webpage you are looking for.<div>`);
})

module.exports = router;