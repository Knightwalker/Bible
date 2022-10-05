const express = require("express");
const router = express.Router();

router.get("/error/403", (req, res) => {
  res.render("errors/error403.ejs");
});

module.exports = router;