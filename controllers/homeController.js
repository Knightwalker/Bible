"use strict";

function getIndex(req, res) {
  res.render("index.ejs");
};

module.exports = {
  getIndex
}