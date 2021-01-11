"use strict";

const getPageJsWeb = (req, res) => {
  res.render("paths/js_web.ejs")
} 

const getPageCppWeb = (req, res) => {
  res.render("paths/cpp_games.ejs")
} 

module.exports = {
  getPageJsWeb: getPageJsWeb,
  getPageCppWeb: getPageCppWeb
};