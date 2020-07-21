"use strict";

const fs = require("fs");

function getIndex(req, res) {
  res.render("vault/index.ejs");
};

function getNumbers(req, res) {
  let isInteger = fs.readFileSync('resources/vault/functions/isInteger.cpp', 'utf8');

  let options = {
    isInteger: isInteger,
  }

  res.render("vault/functions/numbers.ejs", options);
}

module.exports = {
  getIndex,
  getNumbers
}