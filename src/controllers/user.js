"use strict";

const getPageJsWeb = (req, res) => {
  res.render("paths/js_web.ejs")
} 

module.exports = {
  getPageJsWeb: getPageJsWeb,

};