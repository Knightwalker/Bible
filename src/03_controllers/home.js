"use strict";

const Course = require("../01_models/course.js");

const getHomePage = async (req, res) => {

  var courses = null;
  try {
    courses = await Course.getAll();
  } catch (error) {
    console.log(error);
  }

  var data = {
    bUserIsAuthenticated: req.session.bUserIsAuthenticated,
    objUser: req.session.objUser,

    courses: courses
  }

  res.render("./home/home.ejs", data);
}

const getPageJsWeb = (req, res) => {
  res.render("home/js_web.ejs")
} 

const getPageCppWeb = (req, res) => {
  res.render("home/cpp_games.ejs")
} 

module.exports = {
  getHomePage: getHomePage,
  getPageJsWeb: getPageJsWeb,
  getPageCppWeb: getPageCppWeb
}